#!/usr/bin/env node

// Read per-service OpenAPI specs from <source-dir>, fold the x-stackql-*
// breadcrumbs into components/x-stackQL-resources entries, strip the
// breadcrumbs from the output, and emit a fully-formed stackql provider
// under <output-dir>/<provider>/<version>/services/<service>.yaml +
// <output-dir>/<provider>/<version>/provider.yaml.

import fs from 'node:fs';
import path from 'node:path';
import { parseArgs } from 'node:util';
import YAML from 'yaml';

const args = parseArgs({
  options: {
    'provider-name': { type: 'string' },
    'source-dir': { type: 'string' },
    'output-dir': { type: 'string' },
    version: { type: 'string', default: 'v00.00.00000' },
    overwrite: { type: 'boolean', default: false },
  },
}).values;

if (!args['provider-name'] || !args['source-dir'] || !args['output-dir']) {
  console.error(
    'Usage: generate-provider.mjs --provider-name <name> --source-dir <dir> --output-dir <dir> [--version v00.00.00000] [--overwrite]'
  );
  process.exit(1);
}

const providerName = args['provider-name'];
const sourceDir = path.resolve(args['source-dir']);
const outputBase = path.resolve(args['output-dir']);
const version = args.version;

const providerRoot = path.join(outputBase, providerName, version);
const servicesRoot = path.join(providerRoot, 'services');

if (fs.existsSync(providerRoot) && !args.overwrite) {
  console.error(`Output dir ${providerRoot} exists; pass --overwrite to replace.`);
  process.exit(1);
}
fs.rmSync(providerRoot, { recursive: true, force: true });
fs.mkdirSync(servicesRoot, { recursive: true });

// JSON pointer fragment escaping: '~' -> '~0', '/' -> '~1'
const escapeJsonPointer = (s) => s.replace(/~/g, '~0').replace(/\//g, '~1');

// The OpenAPI path key as it appears in `paths:` may contain reserved chars
// (`{`, `}`, `?`, `&`, `=`, etc). $ref needs each segment URI-fragment-safe
// after JSON-pointer escaping. We only escape JSON-pointer chars, since
// downstream stackql tooling handles the rest unescaped.
const opRef = (pathKey, httpMethod) => `#/paths/${escapeJsonPointer(pathKey)}/${httpMethod}`;

const VERB_MAP = {
  SELECT: 'select',
  INSERT: 'insert',
  UPDATE: 'update',
  REPLACE: 'replace',
  DELETE: 'delete',
  EXEC: 'exec',
};

const HTTP_METHODS = new Set([
  'get',
  'post',
  'put',
  'patch',
  'delete',
  'head',
  'options',
  'trace',
]);

// Parameters we never count toward a required-params signature. These are
// transport artifacts (sigv4, routing) not user inputs - if we counted them
// every aws-json POST would carry an identical `[X-Amz-Target]` signature
// and the dedupe pass would collapse the whole service to one method.
const SIGNATURE_IGNORE = new Set([
  'X-Amz-Target',
  'X-Amz-Content-Sha256',
  'X-Amz-Date',
  'X-Amz-Algorithm',
  'X-Amz-Credential',
  'X-Amz-Security-Token',
  'X-Amz-Signature',
  'X-Amz-SignedHeaders',
]);

/**
 * Resolve a one-level `$ref` to its target schema within the given spec.
 * Returns null if the ref can't be followed.
 */
function derefSchema(spec, schema) {
  if (!schema || typeof schema !== 'object') return null;
  if (!schema.$ref) return schema;
  const m = /^#\/components\/schemas\/([^/]+)$/.exec(schema.$ref);
  if (!m) return null;
  return ((spec.components && spec.components.schemas) || {})[m[1]] || null;
}

/**
 * Compute the required-param signature for an operation. The signature is
 * a sorted, comma-joined list of required parameter names (path + query +
 * header + required body-properties). Stackql's router uses the same set
 * to decide which method satisfies a SQL clause, so we mirror its view.
 *
 * We DON'T prefix body fields with `data__` here. With the
 * `requestBodyTranslate: naive` config (which we set on every body-bearing
 * method below), stackql exposes body fields under their native name in
 * SHOW METHODS / SHOW EXTENDED METHODS. The signature has to match what
 * the user sees so the dedupe pass collides the right ops.
 */
function requiredParamsOf(op, spec) {
  const names = new Set();
  for (const p of op.parameters || []) {
    if (p && p.required && !SIGNATURE_IGNORE.has(p.name)) {
      names.add(p.name);
    }
  }
  const body = op.requestBody && op.requestBody.content;
  if (body) {
    for (const ct of Object.keys(body)) {
      let schema = body[ct] && body[ct].schema;
      schema = derefSchema(spec, schema);
      if (schema && Array.isArray(schema.required)) {
        for (const r of schema.required) names.add(r);
      }
    }
  }
  return [...names].sort();
}

/**
 * Build x-stackQL-resources for a single service spec, in place.
 * Returns the mutated spec.
 */
function rewriteService(spec, serviceAlias) {
  const stackqlResources = {};
  const protocol = (spec.info && spec.info['x-protocol']) || '';
  const jsonVersion = (spec.info && spec.info['x-jsonVersion']) || '1.0';

  // Side-table indexed by (resource, verb) carrying per-method metadata we
  // need to sort and dedupe sqlVerbs entries at the end of the pass.
  // Shape: candidates[resource][verbKey] = [{ method, requiredParams }]
  const candidates = {};

  const paths = spec.paths || {};
  for (const [pathKey, pathItem] of Object.entries(paths)) {
    if (!pathItem || typeof pathItem !== 'object') continue;

    for (const [httpMethod, op] of Object.entries(pathItem)) {
      if (!HTTP_METHODS.has(httpMethod)) continue;
      if (!op || typeof op !== 'object') continue;

      const resource = op['x-stackql-resource'];
      const method = op['x-stackql-method'];
      const verb = op['x-stackql-verb'];
      const objectKey = op['x-stackql-objectKey'];
      const responseEnvelope = op['x-stackql-responseEnvelope'];
      const responseObjectKey = op['x-stackql-responseObjectKey'];

      // Strip x-stackql-* tags from the operation regardless of whether
      // we register them (keeps output clean).
      delete op['x-stackql-resource'];
      delete op['x-stackql-method'];
      delete op['x-stackql-verb'];
      delete op['x-stackql-objectKey'];
      delete op['x-stackql-responseEnvelope'];
      delete op['x-stackql-responseObjectKey'];

      if (!resource || !method || !verb) continue;

      // Pick the response 2xx key + media type for the response block.
      let openAPIDocKey = '200';
      let mediaType;
      const responses = op.responses || {};
      const successKeys = Object.keys(responses).filter((k) => /^2\d\d$/.test(k));
      if (successKeys.length) {
        openAPIDocKey = successKeys[0];
        const content = (responses[openAPIDocKey] && responses[openAPIDocKey].content) || {};
        const ct = Object.keys(content)[0];
        if (ct) mediaType = ct;
      }

      const responseBlock = { openAPIDocKey };
      if (mediaType) responseBlock.mediaType = mediaType;
      if (objectKey) responseBlock.objectKey = objectKey;

      // XML response handling (query / ec2 / rest-xml).
      //
      // Python stamps two breadcrumbs on every XML op with an output shape:
      //   - x-stackql-responseEnvelope: the <OpName>OutputDisplay schema
      //     ({line_items: [<RowShape>Display]})
      //   - x-stackql-responseObjectKey: always $.line_items
      //
      // The schema-driven XML walker (any-sdk pkg/stream_transform) reads
      // the schema_override, navigates the mxj-decoded XML using the
      // spec's info.x-protocol hint, and emits {"line_items": [...]} -
      // one row per list element (or the singleton as a single row). No
      // per-op template body is needed; the schema drives the projection.
      if (responseEnvelope) {
        responseBlock.mediaType = 'application/xml';
        responseBlock.overrideMediaType = 'application/json';
        responseBlock.schema_override = {
          $ref: `#/components/schemas/${responseEnvelope}`,
        };
        responseBlock.transform = {
          type: 'schema_driven_xml_v0.1.0',
        };
        if (responseObjectKey) {
          responseBlock.objectKey = responseObjectKey;
        }
      }

      // For query/ec2 protocols both GET and POST land on the same
      // (resource, method, verb). The GET form is preferred because it
      // surfaces every input field as a typed `parameters` entry (which
      // stackql reads to populate RequiredParams in SHOW METHODS). The
      // POST variant has the inputs hidden inside a requestBody and would
      // produce method tables with no required-params.
      const bucket = (stackqlResources[resource] = stackqlResources[resource] || {
        id: `${providerName}.${serviceAlias}.${resource}`,
        name: resource,
        title: resource,
        methods: {},
        sqlVerbs: { select: [], insert: [], update: [], replace: [], delete: [] },
      });

      // Precedence: prefer GET (it surfaces every input as a typed
      // RequiredParam in SHOW METHODS; the POST variant hides inputs in a
      // requestBody and would produce method tables with no
      // required-params).
      const existing = bucket.methods[method];
      if (existing && httpMethod === 'post') {
        // GET was registered first - leave it in place.
        continue;
      }

      const methodEntry = {
        operation: { $ref: opRef(pathKey, httpMethod) },
        response: responseBlock,
      };

      // Casing engine opt-in (rule: naming and case). Every method whose
      // inputs live in query params or a request body gets
      // `request.nativeCasing: pascal` - the engine reverse-transforms a
      // snake SQL key (vpc_id) to the AWS wire casing (VpcId) when an
      // exact match fails. Path params are excluded (already snake in the
      // spec; substituted verbatim into the URI template).
      const hasQueryParams = (op.parameters || []).some(
        (p) => p && p.in === 'query' && !SIGNATURE_IGNORE.has(p.name),
      );
      if (hasQueryParams || op.requestBody) {
        methodEntry.request = { nativeCasing: 'pascal' };
      }
      // aws-json (X-Amz-Target routed) services require a JSON body on every
      // request - a no-input op must still send literal '{}'. request.base is
      // the fallback body sent verbatim when no SQL-supplied body fields
      // exist (and merged UNDER supplied fields when they do), and
      // request.mediaType carries the amz-json content type (matches the
      // canonical aws test-registry cloud_control pattern; the loader binds
      // the body schema by exact content-key match against it). NOTE:
      // request.default is NOT usable here - it diverts supplied body params
      // in any-sdk's armoury flow.
      if (protocol === 'json') {
        methodEntry.request = methodEntry.request || {};
        methodEntry.request.mediaType = `application/x-amz-json-${jsonVersion}`;
        methodEntry.request.base = '{}';
      }
      // rest-xml request bodies go to the wire as XML: request.mediaType
      // activates any-sdk's schema-driven JSON-map -> XML body marshalling
      // (matches the canonical aws test-registry s3 pattern; per-op
      // request transforms remain available as overrides).
      if (protocol === 'rest-xml' && op.requestBody) {
        methodEntry.request = methodEntry.request || {};
        methodEntry.request.mediaType = 'application/xml';
      }

      // For query/ec2 protocols, the `$ref` points at the GET form so
      // stackql can surface every query-string param as a typed
      // RequiredParam in SHOW METHODS. On the wire, AWS expects a
      // sigv4-signed POST with a form-encoded body - long parameter sets
      // (filters, tag specs, ID lists) overflow URL length limits if sent
      // as GET. The config block below tells stackql to translate the
      // GET-with-query into a POST-with-form at request time.
      // See ref/ec2.yaml `volumes_presented` for the canonical pattern.
      if (protocol === 'query' || protocol === 'ec2') {
        methodEntry.config = methodEntry.config || {};
        methodEntry.config.queryParamTranspose = { algorithm: 'AWSCanonical' };
        methodEntry.config.requestTranslate = { algorithm: 'get_query_to_post_form_utf_8' };
      }

      // Any method that carries a requestBody gets `requestBodyTranslate:
      // naive`. This tells stackql to pass the SQL clause's keys straight
      // through to the JSON body unchanged, and - crucially - drops the
      // `data__` prefix from required body-fields in SHOW METHODS output.
      // The two configs are orthogonal: aws-query POSTs get both.
      if (op.requestBody) {
        methodEntry.config = methodEntry.config || {};
        methodEntry.config.requestBodyTranslate = { algorithm: 'naive' };
      }

      bucket.methods[method] = methodEntry;

      const verbKey = VERB_MAP[verb];
      if (verbKey && verbKey !== 'exec') {
        const resourceCands = (candidates[resource] = candidates[resource] || {});
        const verbCands = (resourceCands[verbKey] = resourceCands[verbKey] || []);
        // For query/ec2 ops, the same method gets registered twice (GET
        // then POST, or vice versa - botocore yields them in path-key
        // order). Whichever is registered LAST wins the methodEntry's
        // operation.$ref. The verifier resolves that final $ref to
        // compute the method's signature, so candidates need to compute
        // from the same op to stay consistent.
        //
        // If the method already has an entry in candidates, replace its
        // requiredParams (the second iteration is the one whose $ref
        // ends up in methodEntry.operation.$ref). Otherwise add fresh.
        const finalSig = requiredParamsOf(op, spec);
        const existingIdx = verbCands.findIndex((c) => c.method === method);
        if (existingIdx >= 0) {
          verbCands[existingIdx].requiredParams = finalSig;
        } else {
          verbCands.push({ method, requiredParams: finalSig });
        }
      }
    }
  }

  // ----- sqlVerbs assembly: sort + dedupe-by-signature -----
  // For each (resource, verb) bucket:
  //   1. Group candidates by required-param signature (sorted, joined).
  //   2. Within each signature group, keep the FIRST entry (insertion
  //      order tracks botocore op-name lexical order) and demote the rest
  //      to EXEC by leaving them out of the sqlVerbs list. They stay in
  //      `methods` so they're callable via stackql's EXEC clause.
  //   3. Sort the survivors by `requiredParams.length` DESC so the most
  //      specific method wins router precedence (a Get<X> with [id,region]
  //      sits ahead of a List<X> with [region]).
  // Track every demotion so the build summary can surface them.
  const demotions = [];
  for (const [resource, byVerb] of Object.entries(candidates)) {
    const bucket = stackqlResources[resource];
    for (const [verbKey, list] of Object.entries(byVerb)) {
      const sigToWinner = new Map();
      const survivors = [];
      for (const cand of list) {
        const sig = cand.requiredParams.join(',');
        if (sigToWinner.has(sig)) {
          demotions.push({
            resource,
            verb: verbKey,
            kept: sigToWinner.get(sig),
            demoted: cand.method,
            signature: cand.requiredParams,
          });
          continue;
        }
        sigToWinner.set(sig, cand.method);
        survivors.push(cand);
      }
      survivors.sort((a, b) => b.requiredParams.length - a.requiredParams.length);
      bucket.sqlVerbs[verbKey] = survivors.map((c) => ({
        $ref: `#/components/x-stackQL-resources/${resource}/methods/${c.method}`,
      }));
    }
  }

  // Drop empty sqlVerb arrays the schema doesn't require (we still keep
  // empty arrays for the four core verbs, matching ref/ec2.yaml style).
  for (const bucket of Object.values(stackqlResources)) {
    if (!bucket.sqlVerbs.replace || bucket.sqlVerbs.replace.length === 0) {
      delete bucket.sqlVerbs.replace;
    }
  }

  // Drop resources whose every sqlVerb array is empty. A resource with no
  // SELECT/INSERT/UPDATE/REPLACE/DELETE entries has no SQL surface - stackql
  // can't address it via any SQL verb, and `SHOW EXTENDED METHODS` returns
  // empty, which fails test-meta-routes' "every resource has methods"
  // invariant. Such resources arise when a verb-prefix lands only on EXEC
  // ops (e.g. ivs.StopStream maps to the `stream` resource but Stop is
  // EXEC, leaving the resource with one method and zero CRUD verbs).
  // Their methods are still callable from other resources if reachable,
  // or could be re-mapped later by adjusting the verb-prefix table.
  const prunedEmpty = [];
  for (const [rName, bucket] of Object.entries(stackqlResources)) {
    const hasAnyVerb = Object.values(bucket.sqlVerbs || {}).some(
      (arr) => Array.isArray(arr) && arr.length > 0,
    );
    if (!hasAnyVerb) {
      prunedEmpty.push(rName);
      delete stackqlResources[rName];
    }
  }

  spec.components = spec.components || {};
  spec.components['x-stackQL-resources'] = stackqlResources;

  return { spec, demotions, prunedEmpty };
}

/**
 * Build-time uniqueness guard. Walks the final x-stackQL-resources tree
 * for a service and asserts every (resource, sqlVerb) bucket has unique
 * required-param signatures. The dedupe pass should have made this a
 * no-op, but the guard catches anything that slipped through (e.g. a new
 * verb-prefix mapping silently creating a collision the dedupe missed).
 *
 * Throws on first violation - the generator stops, the author fixes the
 * underlying mapping, then re-runs. Better than shipping a broken
 * provider and finding out via test-meta-routes minutes later.
 */
function verifySignatureUniqueness(spec, alias) {
  const resources = (spec.components && spec.components['x-stackQL-resources']) || {};
  for (const [rName, r] of Object.entries(resources)) {
    for (const [verbKey, refs] of Object.entries(r.sqlVerbs || {})) {
      const seen = new Map();
      for (const ref of refs) {
        const m = ref.$ref.split('/').pop();
        const method = (r.methods || {})[m];
        if (!method) continue;
        // Resolve the underlying operation to read its parameters.
        const opRefStr = method.operation && method.operation.$ref;
        if (!opRefStr) continue;
        // opRefStr like '#/paths/<escaped-path>/<httpVerb>'
        const parts = opRefStr.replace(/^#\/paths\//, '').split('/');
        const httpVerb = parts.pop();
        const pathKey = parts.join('/').replace(/~1/g, '/').replace(/~0/g, '~');
        const op = ((spec.paths || {})[pathKey] || {})[httpVerb];
        if (!op) continue;
        const sig = requiredParamsOf(op, spec).join(',');
        if (seen.has(sig)) {
          const err = new Error(
            `[${alias}] duplicate required-params signature in (resource=${rName}, verb=${verbKey}): ` +
            `methods [${seen.get(sig)}, ${m}] both require [${sig || '(none)'}]. ` +
            `Fix: either move one method to a separate resource, or demote one to EXEC ` +
            `by removing it from sqlVerbs.${verbKey}.`
          );
          err.code = 'DUPLICATE_SIGNATURE';
          throw err;
        }
        seen.set(sig, m);
      }
    }
  }
}

function loadYaml(p) {
  return YAML.parse(fs.readFileSync(p, 'utf8'));
}

function dumpYaml(p, obj) {
  // lineWidth 0 disables wrapping so long descriptions stay on one line.
  // Setting version to '1.1' tells the dumper to quote any string that
  // matches the wider YAML 1.1 bool keyword set.
  // aliasDuplicateObjects:false stops the dumper emitting &anchor/*ref
  // pairs when the same object value appears twice (e.g. shared
  // `responses` between a query-protocol GET and POST). Anchors add
  // visual noise without saving meaningful bytes at our spec size.
  fs.writeFileSync(
    p,
    YAML.stringify(obj, {
      lineWidth: 0,
      aliasDuplicateObjects: false,
      version: '1.1',
    }),
  );
}

const sourceFiles = fs
  .readdirSync(sourceDir)
  .filter((f) => f.endsWith('.yaml') || f.endsWith('.yml'))
  .sort();

console.log(`Processing ${sourceFiles.length} services from ${sourceDir}`);

const providerServices = {};
const skippedServices = [];

for (const file of sourceFiles) {
  const srcPath = path.join(sourceDir, file);
  let spec;
  try {
    spec = loadYaml(srcPath);
  } catch (err) {
    console.error(`  fail  ${file}: ${err.message}`);
    continue;
  }

  const alias = (spec.info && spec.info['x-serviceAlias']) || file.replace(/\.ya?ml$/, '');
  const title = (spec.info && spec.info.title) || alias;
  const description = (spec.info && spec.info.description) || `${alias} API`;

  const { demotions, prunedEmpty } = rewriteService(spec, alias);

  // Build-time guard: assert no (resource, sqlVerb) bucket has duplicate
  // required-param signatures. Fails the whole build if violated.
  try {
    verifySignatureUniqueness(spec, alias);
  } catch (err) {
    if (err.code === 'DUPLICATE_SIGNATURE') {
      console.error(`\n  FAIL  ${err.message}`);
      process.exit(1);
    }
    throw err;
  }

  const resourceCount = Object.keys(
    (spec.components && spec.components['x-stackQL-resources']) || {}
  ).length;

  // A service with zero surviving resources contributes nothing to the
  // SQL surface. Skip writing the service yaml AND don't register it in
  // `providerServices` - otherwise `SHOW RESOURCES IN aws.<svc>` returns
  // empty and test-meta-routes fails on the "service has resources" check.
  // Typically happens for ops-only services (cloudsearchdomain has just
  // Search/Suggest/UploadDocuments which all map to EXEC -> empty sqlVerbs
  // -> all resources pruned by the empty-sqlVerbs rule above).
  if (resourceCount === 0) {
    console.log(`  skip  ${alias}  (no resources after pruning)`);
    skippedServices.push(alias);
    continue;
  }

  const outPath = path.join(servicesRoot, `${alias}.yaml`);
  dumpYaml(outPath, spec);

  const notes = [];
  if (demotions.length) notes.push(`${demotions.length} demoted to EXEC`);
  if (prunedEmpty.length) notes.push(`${prunedEmpty.length} pruned (no SQL verbs)`);
  const tail = notes.length ? ` [${notes.join(', ')}]` : '';
  console.log(`  ok    ${alias}  (${resourceCount} resources)${tail}`);

  providerServices[alias] = {
    id: `${alias}:${version}`,
    name: alias,
    preferred: true,
    service: { $ref: `${providerName}/${version}/services/${alias}.yaml` },
    title: `${alias} API`,
    version,
    description,
  };
}

const providerYaml = {
  id: providerName,
  name: providerName,
  version,
  providerServices,
  config: {
    auth: {
      type: 'aws_signing_v4',
      credentialsenvvar: 'AWS_SECRET_ACCESS_KEY',
      keyIDenvvar: 'AWS_ACCESS_KEY_ID',
    },
    // Casing engine opt-in: response columns render as snake aliases and
    // snake SQL keys reverse-resolve to wire params (with each method's
    // request.nativeCasing declaring the wire convention).
    snake_case_aliases: true,
  },
};

dumpYaml(path.join(providerRoot, 'provider.yaml'), providerYaml);
const writtenCount = Object.keys(providerServices).length;
const skipNote = skippedServices.length
  ? ` (${skippedServices.length} services skipped: ${skippedServices.join(', ')})`
  : '';
console.log(`\nWrote provider.yaml + ${writtenCount} services to ${providerRoot}${skipNote}`);
