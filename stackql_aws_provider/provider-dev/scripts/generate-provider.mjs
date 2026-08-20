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
    'mappings-csv': { type: 'string' },
    version: { type: 'string', default: 'v00.00.00000' },
    overwrite: { type: 'boolean', default: false },
    'update-benchmarks': { type: 'boolean', default: false },
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
// Durable mapping table (the @stackql/provider-utils `analyze` contract):
// checked-in CSV keyed by `filename::operationId`; existing rows are
// authoritative for resource/method/verb/objectKey, new ops are appended.
// Lives in provider-dev/config/ by cross-provider convention.
const mappingsCsvPath = args['mappings-csv']
  ? path.resolve(args['mappings-csv'])
  : path.join(path.dirname(sourceDir), 'config', 'all_services.csv');

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
 * The requestBody content key stackql's loader will actually bind, or null
 * if the body schema is invisible at runtime. The loader matches the
 * method's `request.mediaType` EXACTLY against the content map; with no
 * `request.mediaType` it falls back to `application/json` only. An unbound
 * body means its required fields never reach RequiredParams / routing -
 * so signature computation must apply the same rule or build-time
 * uniqueness diverges from what SHOW EXTENDED METHODS reports (the
 * smithy-rpc-v2-cbor fallback services shipped exactly that skew).
 */
function bindableBodyContentKey(op, requestBlock) {
  const content = (op.requestBody && op.requestBody.content) || null;
  if (!content) return null;
  const media = requestBlock && requestBlock.mediaType;
  if (media) return content[media] ? media : null;
  return content['application/json'] ? 'application/json' : null;
}

/**
 * Compute the required-param signature for an operation. The signature is
 * a sorted, comma-joined list of required parameter names (path + query +
 * header + required body-properties of the RUNTIME-BOUND body schema).
 * Stackql's router uses the same set to decide which method satisfies a
 * SQL clause, so we mirror its view - including the body-binding rule
 * above, via the method's `request` block.
 *
 * We DON'T prefix body fields with `data__` here. With the
 * `requestBodyTranslate: naive` config (which we set on every body-bearing
 * method below), stackql exposes body fields under their native name in
 * SHOW METHODS / SHOW EXTENDED METHODS. The signature has to match what
 * the user sees so the dedupe pass collides the right ops.
 */
function requiredParamsOf(op, spec, requestBlock) {
  const names = new Set();
  for (const p of op.parameters || []) {
    if (p && p.required && !SIGNATURE_IGNORE.has(p.name)) {
      names.add(p.name);
    }
  }
  const boundKey = bindableBodyContentKey(op, requestBlock);
  if (boundKey) {
    const schema = derefSchema(spec, op.requestBody.content[boundKey].schema || {});
    if (schema && Array.isArray(schema.required)) {
      for (const r of schema.required) names.add(r);
    }
  }
  return [...names].sort();
}

// Mirror of stage 1's _pluralise - used to spot a resource's PRIMARY
// method (create_vpc on `vpcs`) so signature-clash dedupe never lets a
// merged-in variant (create_default_vpc) steal its sqlVerbs slot on
// lexical accident.
function pluralise(noun) {
  if (noun.endsWith('s')) return noun;
  if (noun.endsWith('y') && noun.length > 1 && !'aeiou'.includes(noun[noun.length - 2])) {
    return noun.slice(0, -1) + 'ies';
  }
  if (/(ch|sh|x|z)$/.test(noun)) return noun + 'es';
  return noun + 's';
}

function isPrimaryMethod(method, resource) {
  const tokens = String(method).split('_');
  if (tokens.length < 2) return false;
  const noun = tokens.slice(1).join('_');
  return noun === resource || pluralise(noun) === resource;
}

// Inverse of pluralise, for identifier-param promotion below.
function singularise(noun) {
  if (noun.endsWith('ies') && noun.length > 3) return noun.slice(0, -3) + 'y';
  if (/(ches|shes|xes|zes)$/.test(noun)) return noun.slice(0, -2);
  if (noun.endsWith('s') && !noun.endsWith('ss')) return noun.slice(0, -1);
  return noun;
}

const normIdent = (s) => String(s).toLowerCase().replace(/[_-]/g, '');

// Resolve a method's operation.$ref back to the live op object in spec.
function resolveMethodOp(spec, methodEntry) {
  const ref = methodEntry && methodEntry.operation && methodEntry.operation.$ref;
  if (!ref) return null;
  const parts = ref.replace(/^#\/paths\//, '').split('/');
  const httpVerb = parts.pop();
  const pathKey = parts.join('/').replace(/~1/g, '/').replace(/~0/g, '~');
  return ((spec.paths || {})[pathKey] || {})[httpVerb] || null;
}

/**
 * Identifier-param promotion: signature-clash resolution for SELECT
 * buckets. When Get<X> (identifier optional in botocore - e.g. IAM
 * GetUser defaults UserName to the caller) collides with List<Xs>, the
 * stackql contract is that the point-read REQUIRES its identifier:
 * SELECT ... WHERE UserName = 'x' routes to get_user, a bare SELECT
 * routes to list_users. Promote the op's optional identifier param
 * (singular(resource) + name|id|arn|identifier, separator-insensitive)
 * to required - in the typed parameters, or in the runtime-bound body
 * schema for body-protocol services - and return the new signature.
 * Returns null when the method carries no promotable identifier.
 */
function promoteIdentifierParam(spec, methodEntry, resource, resourceCols) {
  const op = resolveMethodOp(spec, methodEntry);
  if (!op) return null;
  const base = normIdent(singularise(resource));
  const acceptable = new Set(
    ['', 'name', 'id', 'arn', 'identifier'].map((sfx) => base + sfx),
  );
  // A newly-required param must not NOCASE-collide with the resource's
  // response columns (mirror of verifyNoNocaseCollisions: collision when
  // the lowercased param exists as a column but its exact form does not) -
  // promotion would otherwise recreate the DDL abort the demotion pass
  // exists to prevent (cloudformation types.describe_type: param 'Type'
  // vs column 'type').
  const cols = resourceCols || new Set();
  const collides = (name) => cols.has(name.toLowerCase()) && !cols.has(name);
  for (const p of op.parameters || []) {
    if (!p || p.required || SIGNATURE_IGNORE.has(p.name)) continue;
    if (acceptable.has(normIdent(p.name)) && !collides(p.name)) {
      p.required = true;
      return { param: p.name, newSig: requiredParamsOf(op, spec, methodEntry.request) };
    }
  }
  const boundKey = bindableBodyContentKey(op, methodEntry.request);
  if (boundKey) {
    const schema = derefSchema(spec, op.requestBody.content[boundKey].schema || {});
    if (schema && schema.properties) {
      const req = new Set(schema.required || []);
      for (const name of Object.keys(schema.properties)) {
        if (req.has(name)) continue;
        if (acceptable.has(normIdent(name)) && !collides(name)) {
          schema.required = [...req, name].sort();
          return { param: name, newSig: requiredParamsOf(op, spec, methodEntry.request) };
        }
      }
    }
  }
  return null;
}

// Port of any-sdk casing.ToSnake (pkg/casing) - predicts the DDL column
// alias the engine renders for a response property under snake_case_aliases.
const SPECIAL_ACRONYM_RE = /[A-Z]{2,}s$/;
function toSnakeAlias(name) {
  if (name.includes('_')) return name;
  let s = name;
  const m = s.match(SPECIAL_ACRONYM_RE);
  if (m) s = s.slice(0, s.length - m[0].length) + '_' + m[0].toLowerCase();
  s = s.replace(/(.)([A-Z][a-z]+)/g, '$1_$2');
  s = s.replace(/([a-z])([0-9]+)/g, '$1_$2');
  s = s.replace(/([a-z0-9])([A-Z])/g, '$1_$2');
  return s.toLowerCase();
}

/**
 * The per-row response property names for an operation, BEFORE breadcrumbs
 * are stripped. XML protocols carry the synthesised Display wrapper in
 * x-stackql-responseEnvelope; rest-json / aws-json use the raw response
 * schema, descending through x-stackql-objectKey (list row carrier) or a
 * top-level array when present.
 */
function responseRowColumns(spec, op) {
  const schemas = (spec.components && spec.components.schemas) || {};
  const envelope = op['x-stackql-responseEnvelope'];
  if (envelope && schemas[envelope]) {
    const lineItems = (schemas[envelope].properties || {}).line_items || {};
    const item = derefSchema(spec, lineItems.items || {});
    return Object.keys((item && item.properties) || {});
  }
  const responses = op.responses || {};
  const key = Object.keys(responses).find((k) => /^2\d\d$/.test(k));
  if (!key) return [];
  const content = (responses[key] || {}).content || {};
  const ct = Object.keys(content)[0];
  if (!ct || !content[ct]) return [];
  let schema = derefSchema(spec, content[ct].schema || {});
  if (!schema) return [];
  const objectKey = op['x-stackql-objectKey'];
  if (objectKey && objectKey.startsWith('$.')) {
    const carrier = derefSchema(spec, (schema.properties || {})[objectKey.slice(2)] || {});
    const item = carrier && carrier.items ? derefSchema(spec, carrier.items) : null;
    if (item) schema = item;
  } else if (schema.items) {
    const item = derefSchema(spec, schema.items);
    if (item) schema = item;
  }
  return Object.keys(schema.properties || {});
}

/**
 * NOCASE collision demotion, resource-scoped, ALL protocols.
 *
 * The DDL column set for a resource's table is `snake-aliased response
 * columns + union of required parameters (wire-cased) across the
 * resource's methods`. SQLite's NOCASE collation treats `role` and `Role`
 * as duplicates, aborting CREATE TABLE (lambda: response column `role`
 * vs create_function's required body field `Role`). Demote any required
 * query/header param or inline required body field whose lowercased form
 * matches a rendered snake response column of the SAME resource but whose
 * exact form differs. Runs BEFORE signature computation so sqlVerbs
 * ordering / dedupe see the demoted view. Path params are exempt
 * (structural; rule 17). The stage-1 (python) pass keeps its service-wide
 * Display-based demotion for query/ec2/rest-xml; this pass subsumes and
 * extends it to rest-json / aws-json.
 */
function demoteNocaseCollisions(spec) {
  // Returns {resource: Set<snake column>} for the post-build verifier.
  const paths = spec.paths || {};
  const resourceCols = {};
  for (const pathItem of Object.values(paths)) {
    if (!pathItem || typeof pathItem !== 'object') continue;
    for (const [httpMethod, op] of Object.entries(pathItem)) {
      if (!HTTP_METHODS.has(httpMethod) || !op || typeof op !== 'object') continue;
      const resource = op['x-stackql-resource'];
      if (!resource) continue;
      const cols = (resourceCols[resource] = resourceCols[resource] || new Set());
      for (const prop of responseRowColumns(spec, op)) {
        cols.add(toSnakeAlias(prop));
      }
      // Path params are structural (rule 5 snake-cases them, rule 17 exempts
      // them from demotion) but they join the DDL column union like any
      // required param - so they RESERVE their name: a non-path required
      // param differing only by case (connect: body 'Origin' vs another
      // method's path 'origin') must be demoted, and that is achieved by
      // seeding them into the same collision set.
      for (const p of op.parameters || []) {
        if (p && typeof p === 'object' && p.in === 'path' && p.name) {
          cols.add(p.name.toLowerCase());
        }
      }
    }
  }
  const resourceOps = {};
  for (const pathItem of Object.values(paths)) {
    if (!pathItem || typeof pathItem !== 'object') continue;
    for (const [httpMethod, op] of Object.entries(pathItem)) {
      if (!HTTP_METHODS.has(httpMethod) || !op || typeof op !== 'object') continue;
      const resource = op['x-stackql-resource'];
      if (!resource) continue;
      (resourceOps[resource] = resourceOps[resource] || []).push(op);
    }
  }

  const demoteInOp = (op, shouldDemote) => {
    for (const p of op.parameters || []) {
      if (!p || typeof p !== 'object' || !p.name) continue;
      if (p.in === 'path' || p.name.startsWith('X-Amz-')) continue;
      if (p.required && shouldDemote(p.name)) p.required = false;
    }
    const content = (op.requestBody && op.requestBody.content) || {};
    for (const mtBlock of Object.values(content)) {
      const schema = mtBlock && mtBlock.schema;
      // Inline body schemas only: mutating a $ref'ed component would
      // bleed into unrelated usages of the shared shape.
      if (!schema || schema.$ref || !Array.isArray(schema.required)) continue;
      const kept = schema.required.filter((r) => typeof r !== 'string' || !shouldDemote(r));
      if (kept.length !== schema.required.length) {
        if (kept.length) schema.required = kept;
        else delete schema.required;
      }
    }
  };

  for (const [resource, ops] of Object.entries(resourceOps)) {
    const cols = resourceCols[resource];
    if (cols && cols.size) {
      const collides = (name) => cols.has(name.toLowerCase()) && !cols.has(name);
      for (const op of ops) demoteInOp(op, collides);
    }

    // Param-vs-param: two REQUIRED non-path params in the same resource
    // differing only by case (connect: query 'origin' vs body 'Origin')
    // also NOCASE-collide in the DDL union. Keep one canonical exact form
    // per group - the all-lowercase form when present (it matches the
    // snake surface), else the lexicographically first - demote the rest.
    const byLower = new Map();
    for (const op of ops) {
      for (const p of op.parameters || []) {
        if (!p || typeof p !== 'object' || !p.name) continue;
        if (p.in === 'path' || p.name.startsWith('X-Amz-') || !p.required) continue;
        const group = byLower.get(p.name.toLowerCase()) || new Set();
        group.add(p.name);
        byLower.set(p.name.toLowerCase(), group);
      }
      const content = (op.requestBody && op.requestBody.content) || {};
      for (const mtBlock of Object.values(content)) {
        const schema = mtBlock && mtBlock.schema;
        if (!schema || schema.$ref || !Array.isArray(schema.required)) continue;
        for (const r of schema.required) {
          if (typeof r !== 'string') continue;
          const group = byLower.get(r.toLowerCase()) || new Set();
          group.add(r);
          byLower.set(r.toLowerCase(), group);
        }
      }
    }
    const losers = new Set();
    for (const [lower, group] of byLower.entries()) {
      if (group.size < 2) continue;
      const keeper = group.has(lower) ? lower : [...group].sort()[0];
      for (const form of group) {
        if (form !== keeper) losers.add(form);
      }
    }
    if (losers.size) {
      for (const op of ops) demoteInOp(op, (name) => losers.has(name));
    }
  }
  return resourceCols;
}

/**
 * Build-time NOCASE-collision guard. After the resource tree is built,
 * asserts that for every resource no surviving required parameter
 * case-collides with a rendered snake response column (or with another
 * required parameter). Throws - failing the whole build - so a
 * "duplicate column name" DDL abort can never ship silently again.
 */
function verifyNoNocaseCollisions(spec, alias, resourceCols) {
  const resources = (spec.components && spec.components['x-stackQL-resources']) || {};
  for (const [rName, r] of Object.entries(resources)) {
    const cols = resourceCols[rName] || new Set();
    const paramsByLower = new Map();
    for (const [mName, method] of Object.entries(r.methods || {})) {
      const opRefStr = method.operation && method.operation.$ref;
      if (!opRefStr) continue;
      const parts = opRefStr.replace(/^#\/paths\//, '').split('/');
      const httpVerb = parts.pop();
      const pathKey = parts.join('/').replace(/~1/g, '/').replace(/~0/g, '~');
      const op = ((spec.paths || {})[pathKey] || {})[httpVerb];
      if (!op) continue;
      for (const p of requiredParamsOf(op, spec, method.request)) {
        const lower = p.toLowerCase();
        if (cols.has(lower) && !cols.has(p)) {
          const err = new Error(
            `[${alias}] NOCASE collision in resource=${rName}: required param '${p}' ` +
            `(method ${mName}) vs snake response column '${lower}'. ` +
            `The demotion pass should have caught this - extend demoteNocaseCollisions.`
          );
          err.code = 'NOCASE_COLLISION';
          throw err;
        }
        const prior = paramsByLower.get(lower);
        if (prior && prior !== p) {
          const err = new Error(
            `[${alias}] NOCASE collision in resource=${rName}: required params ` +
            `'${prior}' and '${p}' differ only by case.`
          );
          err.code = 'NOCASE_COLLISION';
          throw err;
        }
        paramsByLower.set(lower, p);
      }
    }
  }
}

function resolveOpFromRef(spec, opRefStr) {
  const parts = opRefStr.replace(/^#\/paths\//, '').split('/');
  const httpVerb = parts.pop();
  const pathKey = parts.join('/').replace(/~1/g, '/').replace(/~0/g, '~');
  return ((spec.paths || {})[pathKey] || {})[httpVerb];
}

/**
 * Per-row response columns for a REGISTERED method entry (post-breadcrumb
 * view, unlike responseRowColumns which reads the raw x-stackql-* tags).
 * XML methods carry the Display envelope in response.schema_override;
 * JSON methods use the op's 2xx schema, descending response.objectKey and
 * array items. Mirrors stackql's column inference closely enough to decide
 * whether DESCRIBE would return any fields at all.
 */
function methodEntryRowColumns(spec, methodEntry) {
  const resp = methodEntry.response || {};
  if (resp.schema_override && resp.schema_override.$ref) {
    const env = derefSchema(spec, resp.schema_override);
    if (!env) return [];
    const li = (env.properties || {}).line_items;
    if (li && li.items) {
      const item = derefSchema(spec, li.items);
      return Object.keys((item && item.properties) || {});
    }
    const props = { ...(env.properties || {}) };
    delete props.line_items;
    return Object.keys(props);
  }
  const opRefStr = methodEntry.operation && methodEntry.operation.$ref;
  const op = opRefStr ? resolveOpFromRef(spec, opRefStr) : null;
  if (!op) return [];
  const responses = op.responses || {};
  const key = Object.keys(responses).find((k) => /^2\d\d$/.test(k));
  if (!key) return [];
  const content = (responses[key] || {}).content || {};
  const ct = Object.keys(content)[0];
  if (!ct || !content[ct]) return [];
  let schema = derefSchema(spec, content[ct].schema || {});
  if (!schema) return [];
  const objectKey = resp.objectKey;
  if (objectKey && String(objectKey).startsWith('$.')) {
    const carrier = derefSchema(spec, (schema.properties || {})[String(objectKey).slice(2)] || {});
    if (carrier) schema = carrier;
  }
  if (schema.items) {
    const item = derefSchema(spec, schema.items);
    if (item) schema = item;
  }
  return Object.keys(schema.properties || {});
}

// ----- durable mappings CSV (provider-utils `analyze` contract) -----
// One row per operation, keyed `filename::operationId`. The header and
// escaping match @stackql/provider-utils analyze's all_services.csv so the
// artifact is interchangeable with the standard provider-dev toolchain.
// Existing rows are never rewritten (append-only): a regen maps a known
// operation to exactly the resource/method/verb the CSV says, so the SQL
// surface only changes through a conscious, reviewable CSV edit.

const CSV_HEADER =
  'filename,path,operationId,formatted_op_id,verb,response_object,tags,formatted_tags,' +
  'stackql_resource_name,stackql_method_name,stackql_verb,stackql_object_key,op_description';

function escapeCsvField(value) {
  const s = value == null ? '' : String(value);
  if (!s) return '';
  if (s.includes(',') || s.includes('"') || s.includes('\n')) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

// Minimal RFC4180 parser (quoted fields, doubled quotes, CRLF). Returns an
// array of objects keyed by the header row's column names.
function parseCsv(text) {
  const rows = [];
  let field = '';
  let row = [];
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += ch;
      }
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === ',') {
      row.push(field);
      field = '';
    } else if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && text[i + 1] === '\n') i++;
      row.push(field);
      field = '';
      rows.push(row);
      row = [];
    } else {
      field += ch;
    }
  }
  if (field.length || row.length) {
    row.push(field);
    rows.push(row);
  }
  if (!rows.length) return [];
  const header = rows[0];
  return rows
    .slice(1)
    .filter((r) => r.length > 1 || (r.length === 1 && r[0] !== ''))
    .map((r) => Object.fromEntries(header.map((h, idx) => [h, r[idx] ?? ''])));
}

function loadMappingsCsv(csvPath) {
  const mappings = new Map();
  if (!fs.existsSync(csvPath)) return mappings;
  for (const row of parseCsv(fs.readFileSync(csvPath, 'utf8'))) {
    if (!row.operationId) continue;
    mappings.set(`${row.filename}::${row.operationId}`, {
      resourceName: row.stackql_resource_name || '',
      methodName: row.stackql_method_name || '',
      sqlVerb: row.stackql_verb || '',
      objectKey: row.stackql_object_key || '',
    });
  }
  return mappings;
}

function appendMappingsCsv(csvPath, newRows) {
  const exists = fs.existsSync(csvPath);
  const lines = newRows.map((r) =>
    [
      r.filename, r.path, r.operationId, r.formattedOpId, r.verb, r.responseObject,
      r.tags, r.formattedTags, r.resourceName, r.methodName, r.sqlVerb,
      r.objectKey, r.opDescription,
    ]
      .map(escapeCsvField)
      .join(','),
  );
  const body = lines.length ? lines.join('\n') + '\n' : '';
  if (!exists) {
    fs.writeFileSync(csvPath, CSV_HEADER + '\n' + body);
  } else if (body) {
    fs.appendFileSync(csvPath, body);
  }
}

/**
 * Forced required-param promotions (provider-dev/config/param_promotions.json):
 * conscious, reviewable `required: true` overrides keyed by
 * `<filename>::<OperationName>` (the GET_/POST_ operationId prefix is
 * ignored so one entry covers both query/ec2 twins). Exists for durable
 * co-location merges where two listings would otherwise share an empty
 * required-param signature and the dedupe pass would demote one to EXEC:
 * instance_types carries DescribeInstanceTypes [] and
 * DescribeInstanceTypeOfferings [] - requiring LocationType on the
 * offerings op makes the signatures diverge so both stay selectable.
 * Must run BEFORE demoteNocaseCollisions so the NOCASE demotion pass and
 * both build-time guards see the promoted view (a promotion that
 * case-collides with a response column is demoted straight back - the
 * existing safety net applies).
 */
function applyParamPromotions(spec, fileName, paramPromotions) {
  const applied = [];
  if (!paramPromotions || !paramPromotions.size) return applied;
  for (const pathItem of Object.values(spec.paths || {})) {
    if (!pathItem || typeof pathItem !== 'object') continue;
    for (const [httpMethod, op] of Object.entries(pathItem)) {
      if (!HTTP_METHODS.has(httpMethod) || !op || typeof op !== 'object') continue;
      const baseOpId = (op.operationId || '').replace(/^(GET|POST|PUT|PATCH|DELETE|HEAD)_/, '');
      const names = paramPromotions.get(`${fileName}::${baseOpId}`);
      if (!names) continue;
      for (const p of op.parameters || []) {
        if (p && typeof p === 'object' && names.includes(p.name) && !p.required) {
          p.required = true;
          applied.push({ operationId: op.operationId, param: p.name });
        }
      }
    }
  }
  return applied;
}

/**
 * Build x-stackQL-resources for a single service spec, in place.
 * `fileName` + `mappings` implement the durable-mappings contract: an op
 * whose `filename::operationId` key exists in the CSV takes its
 * resource/method/verb/objectKey from the CSV (pinned), overriding the
 * breadcrumb-derived values; ops without a row are derived as before and
 * reported back via csvRows for appending.
 * Returns the mutated spec.
 */
function rewriteService(spec, serviceAlias, fileName, mappings, paramPromotions) {
  const stackqlResources = {};
  const protocol = (spec.info && spec.info['x-protocol']) || '';
  const jsonVersion = (spec.info && spec.info['x-jsonVersion']) || '1.0';
  // One CSV row per operationId (query/ec2 register GET+POST for the same
  // op - first wins). Also track pin-vs-derived divergences for the log.
  const rowsByKey = new Map();
  const pinDivergences = [];

  const forcedPromotions = applyParamPromotions(spec, fileName, paramPromotions);

  // Must run before the candidates walk so required-param signatures,
  // sqlVerbs ordering and the dedupe pass all see the demoted view.
  const nocaseCols = demoteNocaseCollisions(spec);

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

      let resource = op['x-stackql-resource'];
      let method = op['x-stackql-method'];
      let verb = op['x-stackql-verb'];
      let objectKey = op['x-stackql-objectKey'];
      const responseEnvelope = op['x-stackql-responseEnvelope'];
      const responseObjectKey = op['x-stackql-responseObjectKey'];
      const transformType = op['x-stackql-transform-type'];
      const transformBody = op['x-stackql-transform-body'];
      const pagReqTokenKey = op['x-stackql-pagination-request-token-key'];
      const pagReqTokenLoc = op['x-stackql-pagination-request-token-location'];
      const pagRespTokenKey = op['x-stackql-pagination-response-token-key'];
      const blobReadCol = op['x-stackql-blobPayloadRead'];
      const blobWriteCol = op['x-stackql-blobPayloadWrite'];

      // Strip x-stackql-* tags from the operation regardless of whether
      // we register them (keeps output clean).
      delete op['x-stackql-resource'];
      delete op['x-stackql-method'];
      delete op['x-stackql-verb'];
      delete op['x-stackql-objectKey'];
      delete op['x-stackql-responseEnvelope'];
      delete op['x-stackql-responseObjectKey'];
      delete op['x-stackql-transform-type'];
      delete op['x-stackql-transform-body'];
      delete op['x-stackql-pagination-request-token-key'];
      delete op['x-stackql-pagination-request-token-location'];
      delete op['x-stackql-pagination-response-token-key'];
      delete op['x-stackql-blobPayloadRead'];
      delete op['x-stackql-blobPayloadWrite'];

      if (!resource || !method || !verb) continue;

      // Durable-mapping pin: an existing CSV row is authoritative for this
      // operation's resource/method/verb/objectKey. Derived (breadcrumb)
      // values only apply to ops the CSV has never seen.
      const operationId = op.operationId || '';
      const mappingKey = `${fileName}::${operationId}`;
      const pin = operationId ? mappings.get(mappingKey) : undefined;
      const pinned = !!(pin && pin.resourceName && pin.methodName && pin.sqlVerb);
      if (pinned) {
        if (
          pin.resourceName !== resource ||
          pin.methodName !== method ||
          pin.sqlVerb.toUpperCase() !== verb ||
          (pin.objectKey || '') !== (objectKey || '')
        ) {
          pinDivergences.push(
            `${mappingKey}: csv ${pin.resourceName}.${pin.methodName}/${pin.sqlVerb} ` +
            `overrides derived ${resource}.${method}/${verb.toLowerCase()}`,
          );
        }
        resource = pin.resourceName;
        method = pin.methodName;
        verb = pin.sqlVerb.toUpperCase();
        objectKey = pin.objectKey || undefined;
      }

      if (operationId && !rowsByKey.has(mappingKey)) {
        const responses = op.responses || {};
        const respKey = Object.keys(responses).find((k) => /^2\d\d$/.test(k));
        const respContent = (respKey && responses[respKey] && responses[respKey].content) || {};
        const respCt = Object.keys(respContent)[0];
        const respSchema = respCt && respContent[respCt] && respContent[respCt].schema;
        rowsByKey.set(mappingKey, {
          filename: fileName,
          path: pathKey,
          operationId,
          formattedOpId: toSnakeAlias(operationId),
          verb: httpMethod,
          responseObject: (respSchema && respSchema.$ref) || '',
          tags: '',
          formattedTags: '',
          resourceName: resource,
          methodName: method,
          sqlVerb: verb.toLowerCase(),
          objectKey: objectKey || '',
          opDescription: (op.description || '').replace(/\s+/g, ' ').slice(0, 200),
          pinned,
        });
      }

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
      if (blobReadCol) {
        // Raw blob-payload read (rule 19, cloudflare workers-kv recipe).
        // `overrideMediaType` + a transform routes any-sdk down its
        // raw-body path: the whole body is read verbatim (no wire
        // Content-Type sniffing - an S3 object's Content-Type is whatever
        // the uploader set) and the text template wraps it as a one-row
        // array. No objectKey and no schema_override: the transform output
        // IS the row array, and columns come from the op's octet-stream
        // 200 schema ({contents: string}).
        responseBlock.overrideMediaType = 'application/json';
        responseBlock.transform = {
          type: 'golang_template_text_v0.3.0',
          body: `[{"${blobReadCol}": {{ toJson . }}}]`,
        };
        delete responseBlock.objectKey;
      } else if (transformType && transformBody && responseEnvelope) {
        // Scalar-list explode (stage 1 emitted a golang template + faux
        // envelope). mxj templates consume the XML body; json templates
        // consume the raw JSON body (mediaType stays application/json).
        if (transformType.includes('mxj')) {
          responseBlock.mediaType = 'application/xml';
        }
        responseBlock.overrideMediaType = 'application/json';
        responseBlock.schema_override = {
          $ref: `#/components/schemas/${responseEnvelope}`,
        };
        responseBlock.transform = {
          type: transformType,
          body: transformBody,
        };
        responseBlock.objectKey = responseObjectKey || '$.line_items';
      } else if (responseEnvelope) {
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
      // EXEC-verb methods with no requestBody (query/ec2 lifecycle ops -
      // the $ref is the GET form) must NOT carry a `request` block: the
      // exec analyzer treats a present `request` as "this method has a
      // body schema" and hard-fails with "no request body for operation".
      // Nothing is lost - `nativeCasing` only drives snake->Pascal WHERE
      // key reversal, and EXEC invocations pass wire-cased @params.
      const isExecVerb = VERB_MAP[verb] === 'exec';
      if (op.requestBody || (hasQueryParams && !isExecVerb)) {
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
        // Derive the mediaType from the op's ACTUAL content key rather than
        // reconstructing `application/x-amz-json-${jsonVersion}` - exact-match
        // binding then holds by construction even if stage 1's content key
        // and info.x-jsonVersion ever drift.
        const bodyContent = (op.requestBody && op.requestBody.content) || {};
        const amzKey = Object.keys(bodyContent).find((k) =>
          k.startsWith('application/x-amz-json-'),
        );
        methodEntry.request = methodEntry.request || {};
        methodEntry.request.mediaType = amzKey || `application/x-amz-json-${jsonVersion}`;
        methodEntry.request.base = '{}';
      }
      // rest-xml request bodies go to the wire as XML: request.mediaType
      // activates any-sdk's schema-driven JSON-map -> XML body marshalling
      // (matches the canonical aws test-registry s3 pattern; per-op
      // request transforms remain available as overrides).
      if (protocol === 'rest-xml' && op.requestBody && !blobWriteCol) {
        methodEntry.request = methodEntry.request || {};
        methodEntry.request.mediaType = 'application/xml';
      }
      // Raw blob-payload write (rule 19): the SQL-supplied `contents` body
      // field is rendered verbatim as the raw request body - any-sdk's
      // marshalBody routes transform-bearing requests through
      // transformRequestBodyBytes BEFORE its JSON/XML-only switch, so this
      // is the one shape a non-XML/JSON body can take without core
      // changes. mediaType must exactly match the op's octet-stream
      // content key so the loader binds the body schema and the
      // required-param scan sees `contents`.
      if (blobWriteCol) {
        methodEntry.request = methodEntry.request || {};
        methodEntry.request.mediaType = 'application/octet-stream';
        methodEntry.request.transform = {
          type: 'golang_template_json_v0.1.0',
          body: `{{ .${blobWriteCol} }}`,
        };
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

      // Multi-page traversal (rest-json / aws-json list ops; stage 1 gates
      // the XML protocols pending the any-sdk schema_driven_xml token
      // passthrough, any-sdk issue #117). stackql injects the request token into the next
      // request (query param or re-marshalled body) and extracts the
      // response token from the raw JSON body via JSONPath, terminating
      // when absent.
      if (pagReqTokenKey && pagReqTokenLoc && pagRespTokenKey) {
        methodEntry.config = methodEntry.config || {};
        methodEntry.config.pagination = {
          requestToken: { key: pagReqTokenKey, location: pagReqTokenLoc },
          responseToken: { key: pagRespTokenKey, location: 'body' },
        };
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
        const finalSig = requiredParamsOf(op, spec, methodEntry.request);
        const existingIdx = verbCands.findIndex((c) => c.method === method);
        if (existingIdx >= 0) {
          verbCands[existingIdx].requiredParams = finalSig;
          verbCands[existingIdx].pinned = pinned;
        } else {
          verbCands.push({ method, requiredParams: finalSig, pinned });
        }
        // A raw blob-payload write is create-or-overwrite (S3 PutObject):
        // the one method backs BOTH insert and replace. Register it as a
        // candidate in the twin bucket too - both sqlVerbs arrays $ref the
        // same methods entry, and each bucket's signature dedupe sees it.
        if (blobWriteCol && (verbKey === 'insert' || verbKey === 'replace')) {
          const twinKey = verbKey === 'insert' ? 'replace' : 'insert';
          const twinCands = (resourceCands[twinKey] = resourceCands[twinKey] || []);
          const twinIdx = twinCands.findIndex((c) => c.method === method);
          if (twinIdx >= 0) {
            twinCands[twinIdx].requiredParams = finalSig;
            twinCands[twinIdx].pinned = pinned;
          } else {
            twinCands.push({ method, requiredParams: finalSig, pinned });
          }
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
  // Track every demotion and promotion so the build summary can surface
  // them (and the report file can drive CSV reconciliation).
  const demotions = [];
  const promotions = [];
  for (const [resource, byVerb] of Object.entries(candidates)) {
    const bucket = stackqlResources[resource];
    for (const [verbKey, list] of Object.entries(byVerb)) {
      // Group by signature. Within a group the winner is the first
      // CSV-pinned candidate when one exists - a durable mapping must not
      // lose its sqlVerbs slot to a new botocore op that happens to sort
      // earlier - else the first by insertion order (botocore op-name
      // lexical order). Losers are demoted to EXEC (left out of sqlVerbs,
      // still callable via EXEC).
      const buildGroups = () => {
        const g = new Map();
        for (const cand of list) {
          const sig = cand.requiredParams.join(',');
          if (!g.has(sig)) g.set(sig, []);
          g.get(sig).push(cand);
        }
        return g;
      };
      let groups = buildGroups();

      // The generic anchor of a clashing SELECT group: the member whose
      // contract is the unfiltered listing. Preference: list_* form >
      // primary method (noun matches the resource, e.g. xray get_groups
      // on `groups`) > any, with CSV-pinned members winning within each
      // tier (a durable mapping must not lose its slot to a new botocore
      // op). Used both to pick which member skips identifier promotion
      // and as the winner when a clash is unresolvable - a batch_get_* or
      // point-read get_* must not steal the bare-SELECT slot on lexical
      // accident.
      // All pinned tiers outrank all unpinned tiers: a NEW (unpinned)
      // botocore list_* op must never evict a pinned incumbent.
      const pickSelectAnchor = (group) =>
        group.find((c) => c.pinned && c.method.startsWith('list_')) ||
        group.find((c) => c.pinned && isPrimaryMethod(c.method, resource)) ||
        group.find((c) => c.pinned) ||
        group.find((c) => c.method.startsWith('list_')) ||
        group.find((c) => isPrimaryMethod(c.method, resource)) ||
        group[0];

      // SELECT clashes get a rescue attempt before any demotion:
      // promote the optional identifier param on the point-read members
      // (see promoteIdentifierParam); the anchor stays generic.
      if (verbKey === 'select') {
        let promotedAny = false;
        for (const group of groups.values()) {
          if (group.length < 2) continue;
          const anchor = pickSelectAnchor(group);
          for (const cand of group) {
            if (cand === anchor) continue;
            const res = promoteIdentifierParam(
              spec, bucket.methods[cand.method], resource, nocaseCols[resource],
            );
            if (res) {
              cand.requiredParams = res.newSig;
              promotions.push({
                resource,
                method: cand.method,
                param: res.param,
                anchor: anchor.method,
              });
              promotedAny = true;
            }
          }
        }
        if (promotedAny) groups = buildGroups();
      }
      const winners = new Set();
      for (const group of groups.values()) {
        // Precedence: for SELECT buckets, the generic anchor (see
        // pickSelectAnchor). Otherwise: CSV pin > primary method (noun
        // matches the resource) > insertion order. Without the primary
        // rule, a co-location merge can hand create_vpc's INSERT slot to
        // create_default_vpc purely because it sorts earlier.
        const winner = verbKey === 'select'
          ? pickSelectAnchor(group)
          : group.find((c) => c.pinned) ||
            group.find((c) => isPrimaryMethod(c.method, resource)) ||
            group[0];
        winners.add(winner);
        for (const cand of group) {
          if (cand === winner) continue;
          if (cand.pinned) {
            // Two CSV-pinned methods clashing means the pinned surface
            // itself is inconsistent - surface loudly, keep building
            // (verifySignatureUniqueness stays green because only the
            // winner enters sqlVerbs).
            console.warn(
              `  WARN  [${serviceAlias}] csv-pinned method ${resource}.${cand.method} ` +
              `(${verbKey}) demoted to EXEC: signature clash with ${winner.method}`,
            );
          }
          demotions.push({
            resource,
            verb: verbKey,
            kept: winner.method,
            demoted: cand.method,
            signature: cand.requiredParams,
          });
        }
      }
      const survivors = list.filter((c) => winners.has(c));
      survivors.sort((a, b) => b.requiredParams.length - a.requiredParams.length);
      bucket.sqlVerbs[verbKey] = survivors.map((c) => ({
        $ref: `#/components/x-stackQL-resources/${resource}/methods/${c.method}`,
      }));
    }
  }

  // Zero-column select demotion (invariant: every SELECT-routed method
  // must project at least one field; resources without select are fine).
  // Two ways a method ends up field-less: the API returns a bare scalar
  // list (ListQueues -> [QueueUrl]), or stage 1's row-shape picker chose
  // a scalar list member and synthesised an empty Display
  // (DescribeResourceScan's ResourceTypes). DESCRIBE EXTENDED resolves
  // columns via the first select method in router order, so a single
  // empty method poisons the resource even when siblings have columns -
  // test-meta-routes hard-fails on "No columns found". Demote each
  // zero-column method to EXEC (still callable; raw response visible);
  // the resource stays selectable through its remaining methods, keeps
  // its other verbs, or is pruned by the empty-resource rule below.
  const zeroColumnDemotions = [];
  for (const [rName, bucket] of Object.entries(stackqlResources)) {
    const sel = bucket.sqlVerbs.select || [];
    if (!sel.length) continue;
    const kept = [];
    for (const ref of sel) {
      const mName = ref.$ref.split('/').pop();
      const mEntry = bucket.methods[mName];
      if (mEntry && methodEntryRowColumns(spec, mEntry).length === 0) {
        zeroColumnDemotions.push({ resource: rName, method: mName });
      } else {
        kept.push(ref);
      }
    }
    if (kept.length !== sel.length) bucket.sqlVerbs.select = kept;
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

  // New CSV rows: ops the mapping table has never seen. Record the
  // EFFECTIVE verb - a method demoted by the signature dedupe or the
  // zero-column pass goes in as `exec`, so the demotion is pinned and
  // can't silently flip when a later botocore drop changes insertion
  // order or signatures.
  const demotedSet = new Set(demotions.map((d) => `${d.resource}::${d.demoted}`));
  for (const d of zeroColumnDemotions) demotedSet.add(`${d.resource}::${d.method}`);
  const csvNewRows = [];
  for (const [key, row] of rowsByKey.entries()) {
    if (mappings.has(key)) continue;
    if (demotedSet.has(`${row.resourceName}::${row.methodName}`)) {
      row.sqlVerb = 'exec';
    }
    csvNewRows.push(row);
  }

  return {
    spec,
    demotions,
    promotions,
    forcedPromotions,
    zeroColumnDemotions,
    prunedEmpty,
    nocaseCols,
    csvNewRows,
    pinDivergences,
  };
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
        const sig = requiredParamsOf(op, spec, method.request).join(',');
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

/**
 * Build-time body-binding guard. Every registered method whose operation
 * carries a requestBody must have a runtime-bindable content key (exact
 * `request.mediaType` match, or the `application/json` default). An
 * unbindable body ships silently: required body fields vanish from
 * RequiredParams at runtime, get/list signature pairs collapse, and the
 * failure only surfaces via test-meta-routes. Methods on the query/ec2
 * GET->POST translate flow are exempt - their $ref points at the GET form
 * and the form body is synthesised at request time.
 */
function verifyBodyBinding(spec, alias) {
  const resources = (spec.components && spec.components['x-stackQL-resources']) || {};
  for (const [rName, r] of Object.entries(resources)) {
    for (const [mName, method] of Object.entries(r.methods || {})) {
      if (method.config && method.config.requestTranslate) continue;
      const opRefStr = method.operation && method.operation.$ref;
      if (!opRefStr) continue;
      const parts = opRefStr.replace(/^#\/paths\//, '').split('/');
      const httpVerb = parts.pop();
      const pathKey = parts.join('/').replace(/~1/g, '/').replace(/~0/g, '~');
      const op = ((spec.paths || {})[pathKey] || {})[httpVerb];
      if (!op || !op.requestBody || !op.requestBody.content) continue;
      if (!bindableBodyContentKey(op, method.request)) {
        const err = new Error(
          `[${alias}] unbindable request body in resource=${rName}, method=${mName}: ` +
          `content keys [${Object.keys(op.requestBody.content).join(', ')}] vs ` +
          `request.mediaType '${(method.request && method.request.mediaType) || '(unset)'}'. ` +
          `Required body fields would silently vanish from runtime routing.`
        );
        err.code = 'BODY_UNBOUND';
        throw err;
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

const mappings = loadMappingsCsv(mappingsCsvPath);
if (mappings.size) {
  console.log(`Loaded ${mappings.size} durable mappings from ${mappingsCsvPath}`);
} else {
  console.log(`No mappings CSV at ${mappingsCsvPath} - bootstrapping from derived mappings`);
}

// Forced required-param promotions (see applyParamPromotions). Lives next
// to the mappings CSV by the same conscious-edit convention.
const paramPromotionsPath = path.join(path.dirname(mappingsCsvPath), 'param_promotions.json');
const paramPromotions = fs.existsSync(paramPromotionsPath)
  ? new Map(Object.entries(JSON.parse(fs.readFileSync(paramPromotionsPath, 'utf8'))))
  : new Map();
if (paramPromotions.size) {
  console.log(`Loaded ${paramPromotions.size} forced param promotions from ${paramPromotionsPath}`);
}

const providerServices = {};
const skippedServices = [];
const allNewRows = [];
const allPinDivergences = [];
// Per-run record of every promotion/demotion, written next to the CSV -
// drives CSV verb reconciliation after intentional remapping passes.
const buildReport = { promotions: [], forcedPromotions: [], demotions: [], zeroColumnDemotions: [] };
// Regression-guard counters (compared against the committed benchmarks).
const stats = {
  services: 0,
  resources: 0,
  methods: 0,
  selectableResources: 0,
  nonSelectableResources: 0,
};

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

  const { demotions, promotions, forcedPromotions, zeroColumnDemotions, prunedEmpty, nocaseCols, csvNewRows, pinDivergences } =
    rewriteService(spec, alias, file, mappings, paramPromotions);
  allNewRows.push(...csvNewRows);
  allPinDivergences.push(...pinDivergences);
  for (const p of promotions) buildReport.promotions.push({ service: alias, file, ...p });
  for (const p of forcedPromotions) buildReport.forcedPromotions.push({ service: alias, file, ...p });
  for (const d of demotions) buildReport.demotions.push({ service: alias, file, ...d });
  for (const z of zeroColumnDemotions) buildReport.zeroColumnDemotions.push({ service: alias, file, ...z });

  // Build-time guard: assert no (resource, sqlVerb) bucket has duplicate
  // required-param signatures. Fails the whole build if violated.
  try {
    verifySignatureUniqueness(spec, alias);
    verifyNoNocaseCollisions(spec, alias, nocaseCols);
    verifyBodyBinding(spec, alias);
  } catch (err) {
    if (
      err.code === 'DUPLICATE_SIGNATURE' ||
      err.code === 'NOCASE_COLLISION' ||
      err.code === 'BODY_UNBOUND'
    ) {
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

  stats.services += 1;
  const finalResources = spec.components['x-stackQL-resources'] || {};
  for (const r of Object.values(finalResources)) {
    stats.resources += 1;
    stats.methods += Object.keys(r.methods || {}).length;
    if (((r.sqlVerbs || {}).select || []).length) {
      stats.selectableResources += 1;
    } else {
      stats.nonSelectableResources += 1;
    }
  }

  const outPath = path.join(servicesRoot, `${alias}.yaml`);
  dumpYaml(outPath, spec);

  const notes = [];
  if (forcedPromotions.length) notes.push(`${forcedPromotions.length} params force-required (config)`);
  if (promotions.length) notes.push(`${promotions.length} identifier params promoted`);
  if (demotions.length) notes.push(`${demotions.length} demoted to EXEC`);
  if (zeroColumnDemotions.length) {
    notes.push(`${zeroColumnDemotions.length} zero-column selects -> EXEC`);
  }
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

// Persist durable mappings: append-only, existing rows never rewritten.
appendMappingsCsv(mappingsCsvPath, allNewRows);

const buildReportPath = path.join(path.dirname(mappingsCsvPath), 'build-report.json');
fs.writeFileSync(buildReportPath, JSON.stringify(buildReport, null, 2) + '\n');
console.log(
  `Build report: ${buildReport.promotions.length} promotions, ` +
  `${buildReport.demotions.length} demotions, ` +
  `${buildReport.zeroColumnDemotions.length} zero-column demotions -> ${buildReportPath}`,
);
if (allNewRows.length) {
  console.log(
    `${mappings.size ? 'Appended' : 'Bootstrapped'} ${allNewRows.length} mapping rows in ${mappingsCsvPath}`,
  );
}
if (allPinDivergences.length) {
  console.log(`\n${allPinDivergences.length} CSV pins override derived mappings:`);
  for (const d of allPinDivergences.slice(0, 50)) console.log(`  pin   ${d}`);
  if (allPinDivergences.length > 50) {
    console.log(`  ... and ${allPinDivergences.length - 50} more`);
  }
}

// ----- benchmark regression guard -------------------------------------------
// Committed baseline (provider-dev/config/benchmarks.json): surface counts
// only ever creep UP as botocore grows - any decrease means ops silently
// fell off the SQL surface. The non-selectable ratio is the shape-quality
// canary: a spike means a generator change started stranding readers.
// Conscious changes update the baseline with --update-benchmarks.
const benchmarksPath = path.join(path.dirname(mappingsCsvPath), 'benchmarks.json');
const ratioPct = (100 * stats.nonSelectableResources) / (stats.resources || 1);
const current = {
  services: stats.services,
  resources: stats.resources,
  methods: stats.methods,
  selectableResources: stats.selectableResources,
  nonSelectableResources: stats.nonSelectableResources,
  nonSelectableRatioPct: Math.round(ratioPct * 100) / 100,
};

console.log(
  `\nSurface: ${current.services} services, ${current.resources} resources, ` +
  `${current.methods} methods, ${current.nonSelectableResources} non-selectable ` +
  `(${current.nonSelectableRatioPct}%)`,
);

if (fs.existsSync(benchmarksPath) && !args['update-benchmarks']) {
  const baseline = JSON.parse(fs.readFileSync(benchmarksPath, 'utf8'));
  const tolerancePct = baseline.ratioTolerancePct ?? 0.5;
  const regressions = [];
  for (const k of ['services', 'resources', 'methods', 'selectableResources']) {
    if (baseline[k] != null && current[k] < baseline[k]) {
      regressions.push(`${k} fell: ${baseline[k]} -> ${current[k]}`);
    }
  }
  if (
    baseline.nonSelectableRatioPct != null &&
    current.nonSelectableRatioPct > baseline.nonSelectableRatioPct + tolerancePct
  ) {
    regressions.push(
      `nonSelectableRatioPct spiked: ${baseline.nonSelectableRatioPct}% -> ` +
      `${current.nonSelectableRatioPct}% (tolerance +${tolerancePct}pp)`,
    );
  }
  if (regressions.length) {
    console.error(`\n  FAIL  benchmark regression vs ${benchmarksPath}:`);
    for (const r of regressions) console.error(`        ${r}`);
    console.error('        If intentional, re-baseline with --update-benchmarks.');
    process.exit(1);
  }
  console.log(`Benchmarks OK vs baseline (${benchmarksPath})`);
} else {
  const payload = {
    ...current,
    ratioTolerancePct: 0.5,
    note: 'Regression baseline - counts must not fall, ratio must not spike. Update via generate-provider.mjs --update-benchmarks only.',
  };
  fs.writeFileSync(benchmarksPath, JSON.stringify(payload, null, 2) + '\n');
  console.log(`Benchmarks ${args['update-benchmarks'] ? 'updated' : 'bootstrapped'}: ${benchmarksPath}`);
}

const writtenCount = Object.keys(providerServices).length;
const skipNote = skippedServices.length
  ? ` (${skippedServices.length} services skipped: ${skippedServices.join(', ')})`
  : '';
console.log(`\nWrote provider.yaml + ${writtenCount} services to ${providerRoot}${skipNote}`);
