# Project rules for the native AWS stackql provider

These are the load-bearing design rules. Each derives from a stackql core source path and exists for a specific reason. Don't break them without explicit user confirmation.

## Pipeline

Two stages, both committed:

1. **`openapi-generation/botocore_to_openapi.py`** (Python) reads each `service-2.json` in the in-tree `botocore/data/` checkout and emits one OpenAPI 3.0 YAML per service into `provider-dev/source/`. Every operation is stamped with `x-stackql-*` breadcrumbs.
2. **`provider-dev/scripts/generate-provider.mjs`** (Node) folds the breadcrumbs into `components/x-stackQL-resources`, strips the tags, writes the final stackql provider tree under `provider-dev/openapi/src/aws/<version>/`.

## Naming and case (post-casing-engine)

Stackql core's casing engine (in `any-sdk/pkg/casing`) does the snake↔native conversion. This provider opts in by stamping two flags:

- **`provider.yaml` root**: `config: { snake_case_aliases: true }` — turns on the engine for every service in this provider.
- **Each method's `request` block in `x-stackQL-resources`**: `nativeCasing: pascal` — tells the engine to reverse-transform snake input to PascalCase when an exact match fails.

Concretely after this:

- Service / resource / method names: **snake_case** (filename-driven; stackql namespace alias). No change.
- Path params: **snake_case** (template substitutions; no AWS-side wire meaning). No change.
- Query / header / body parameter `name` fields: **PascalCase** (= botocore wire name). The OpenAPI spec carries the native AWS name verbatim. Stackql renders columns and accepts SQL clauses in snake via the casing engine.
- Response columns: **snake_case** (rendered by the casing engine from PascalCase property names at column-inference time).
- Struct values passed in SQL (e.g. `EnableDnsHostnames = '{"Value": true}'`): inner keys use the **wire format** (PascalCase). The engine's body-field matcher also accepts inner snake (`{"value": true}`), but PascalCase is canonical.

The user can write `WHERE vpc_id = ...` or `WHERE VpcId = ...`; both resolve to the same wire parameter `VpcId`. Response columns project as `vpc_id`.

If the user references a column / parameter that doesn't resolve under any casing, stackql returns `field 'X' not found; available: [<wire-names>]`.

## Output rules (numbered for reference)

### 1. `provider.yaml` auth + casing config

```yaml
config:
  auth:
    type: aws_signing_v4
    credentialsenvvar: AWS_SECRET_ACCESS_KEY
    keyIDenvvar: AWS_ACCESS_KEY_ID
  snake_case_aliases: true
```

`credentialsenvvar` is all-lowercase. `keyIDenvvar` has capital `ID`. Stackql parses these field names exactly; misspellings silently fall through to anonymous requests.

### 2. HTML in descriptions — strip everything

Docusaurus parses descriptions as MDX. Any HTML tag (`<p>`, `<code>`, `<a>`, `<note>`, ...) must be stripped from every description field at generation time. HTML entities decoded. Bare `<key>` placeholders wrapped in backticks. Implementation: `clean_description()` in the Python generator.

### 3. No polymorphism — `$ref` is fine, nothing else

- **No `allOf`** — emit `{$ref: ..., description: ...}` as siblings instead.
- **No `oneOf` / `anyOf`** — botocore doesn't model unions.
- **No `additionalProperties`** — for `map` shapes emit `{type: object, properties: {}}`. The explicit empty `properties` is necessary; bare `type: object` confuses stackql's introspector.

Map shapes inlined at usage sites — not `$ref`-ed to a named map shape — because AWS sometimes uses property names that overlap with OpenAPI keywords.

### 4. `x-serviceName` is the sigv4 signing name

Stackql plumbs `x-serviceName` into the sigv4 credential scope. Must be:

```python
"x-serviceName": metadata.get("signingName") or metadata.get("endpointPrefix") or service_name
```

73 of 424 botocore services have `signingName != endpointPrefix` (bedrock subservices sign as `bedrock`, sagemaker subservices as `sagemaker`, s3control as `s3`, elbv2 as `elasticloadbalancing`, dynamodbstreams as `dynamodb`). The SQL namespace `aws.<svc>.*` is driven by filename + `x-serviceAlias` + `providerServices` key in `provider.yaml` — independent of `x-serviceName`.

### 5. HTTP verb — honour botocore's declaration

Do not auto-promote POST to GET. Emit whatever `service-2.json -> operations[X].http.method` declares.

### 6. Verb-prefix → SQL verb mapping

`VERB_PREFIXES` in `botocore_to_openapi.py`. EXEC is reserved for **lifecycle / state-machine transitions** (Start, Stop, Reboot, Run, Enable, Disable, Activate, Deactivate, Accept, Reject, Reset, Restore, Import, Export, Copy, Move, Migrate, ...). UPDATE covers **field / relation changes** (Update, Modify, Patch, Set, Tag, Untag, Add, Remove, Attach, Detach, Associate, Disassociate, Assign, Unassign, Authorize, Revoke, Allocate, Release, ...). SELECT verbs: Describe, List, BatchGet, Get, Search, Lookup.

### 7. Resource grouping — pluralise, co-locate CRUD

Resource name = pluralised noun after verb-prefix strip. `DescribeVolumes` → `volumes`, `CreateVolume` → `volumes`, `AttachVolume` → `volumes`. Full CRUD-and-lifecycle co-located.

### 8. `sqlVerbs` ordering — most-specific first

Within each `sqlVerbs[verbKey]` array, sort by `requiredParams.length DESC`. Router picks first method whose required params are satisfiable from the SQL clause, so `get_function` (`[function_name, region]`) sits ahead of `list_functions` (`[region]`).

### 9. `sqlVerbs` uniqueness — no duplicate signatures

Within a `(resource, sqlVerb)` bucket, no two methods share the same required-params signature. The dedupe pass keeps the first by insertion order and demotes the rest to EXEC. Stage 2 has a build-time `verifySignatureUniqueness` guard that hard-fails the build if any collision survives the dedupe. Note: the candidates phase records `requiredParams` from the **final** registered op (the one whose `$ref` `methodEntry.operation.$ref` points at), not the first iteration — so dedupe matches what `verifySignatureUniqueness` sees.

### 10. Empty / orphan resources — prune

A resource with all-empty sqlVerb arrays gets dropped (no SQL surface). A service whose every resource was pruned is skipped (don't register in `providerServices`). Typical victims: data-plane-only services (`cloudsearchdomain`, `sagemaker_runtime`, `rds_data`, ...).

### 11. Signature computation — skip sigv4/routing headers

`requiredParamsOf` in the Node script:
- Skips `X-Amz-Target`, `X-Amz-Date`, `X-Amz-Signature`, `X-Amz-Algorithm`, `X-Amz-Credential`, `X-Amz-Security-Token`, `X-Amz-SignedHeaders`, `X-Amz-Content-Sha256`.
- Required body fields appear under their native (Pascal) names — no `data__` prefix because `requestBodyTranslate: naive` is set on body-bearing methods.
- For body schemas declared as `$ref`, follow one level to find the underlying `required` list.

### 12. YAML 1.1 boolean keywords — must be quoted

Stackql's Go YAML parser is YAML 1.1; it coerces `y/Y/yes/Yes/YES/n/N/no/No/NO/on/On/ON/off/Off/OFF` to bool. When any of these lands in a `required: [...]` list (AWS bedrock_agentcore has members literally named `x` and `y`), the parser refuses the spec. Both writers must emit YAML 1.1 quoting — Python uses a custom `_str_repr`, Node uses `YAML.stringify(..., { version: '1.1' })`.

### 13. aws-json — single `application/json` content type, body inlined

For aws-json, content type is a routing pointer to the op — stackql doesn't parse `application/x-amz-json-1.1` differently from `application/json`. Emit one `application/json` content entry. Body schemas inlined in `requestBody` (not `$ref` to a separate named shape) so stackql's required-param scan reaches them.

### 14. XML responses — schema-driven walker

For every op in `query` / `ec2` / `rest-xml` with an output shape, the response uses the new schema-driven walker:

```yaml
response:
  mediaType: application/xml
  overrideMediaType: application/json
  schema_override:
    $ref: '#/components/schemas/<OpName>OutputDisplay'
  transform:
    type: schema_driven_xml_v0.1.0
  objectKey: $.line_items
```

The walker (in `any-sdk/pkg/stream_transform`) reads the OpenAPI schema, navigates the mxj-decoded XML using the schema's `xml.locationName` / wrapping annotations, and emits `{"line_items": [...]}`. The per-row template is gone — the schema drives the projection.

**Display synthesis**: the generator still emits `<RowShape>Display` + `<OpName>OutputDisplay` schemas. They describe the per-row column set (in **PascalCase** wire names, no rename — the casing engine handles snake column rendering). The wrapping `<OpName>OutputDisplay` is just `{type: object, properties: { line_items: { type: array, items: $ref: <RowShape>Display } }}`.

**Row-shape picker** (`_pick_row_shape`):
1. **Regime (a) list**: output has a list-typed member (the typical `Describe*`/`List*` shape). Element shape becomes the row shape. Used when paginator declares `result_key` OR op-name starts with `List`/`Describe`/`BatchGet`/`Search`/`Lookup`.
2. **Regime (b) singleton-unwrap**: output has a structure-typed member that should be unwrapped. For `Get*` ops, picker tries (in order): paginator-aware list regime → noun-match on member name (`GetHostedZone` → `HostedZone` member) → single-structure-only fallback. AWS sometimes names the wrapper descriptively (`GetFunction` → `{Configuration: FunctionConfiguration}`); for those, the walker uses `nativeCasing` and the schema's wrapping annotations.
3. **Regime (c) singleton-direct**: output IS the row (`GetCallerIdentity`).

**Path-level response schema** (rule-16 column convergence): for XML ops the path-level response and the method-level `schema_override` both `$ref` `<OpName>OutputDisplay`. Stackql merges columns from both, so identical refs deduplicate cleanly.

**rest-* path-collision disambiguator**: two ops sharing `(requestUri, httpMethod)` (e.g. S3's `ListBuckets` and `ListDirectoryBuckets` both on `GET /`) would silently overwrite each other. Generator appends `?x-id=<OpName>` to the second's path key. AWS treats `x-id` as a no-op tracing hint; sigv4 still hashes correctly.

### 15. rest-json responses

No XML reshape needed — body is already JSON. For list ops, generator stamps `x-stackql-objectKey: $.<result_key>` from the paginator. For Get* singleton-unwrap ops, stackql + the casing engine handle the rest — no transform needed.

### 16. Request bodies — naive translator + native casing

Every body-bearing method gets:

```yaml
config:
  requestBodyTranslate:
    algorithm: naive
```

This tells stackql to pass SQL clause keys straight through to the JSON body unchanged. The `naive` translator drops the `data__` prefix from required body fields in SHOW METHODS, so `Code = ...` not `data__Code = ...`.

For query / ec2 protocols, every method also gets:

```yaml
config:
  queryParamTranspose:
    algorithm: AWSCanonical
  requestTranslate:
    algorithm: get_query_to_post_form_utf_8
```

The `$ref` on `operation` points at the GET form; stackql translates GET-with-query to a sigv4-signed POST-with-form-body at request time.

The casing engine takes care of accepting SQL clauses in snake form; the request body wire shape uses native (Pascal) field names verbatim.

## Things NOT to do

- Don't run `analyze` / `generate-mappings` from `@stackql/provider-utils`. We short-circuit analyze by stamping `x-stackql-*` tags at openapi-generation time.
- Don't run `split` / `normalize` from `@stackql/provider-utils`. Step 1 emits per-service specs already with no polymorphism.
- Don't hand-craft `schema_override` blocks for XML services. Rule 14 generates the envelope automatically. Per-row column projection is the walker's job, driven by the schema.
- Don't rename body / parameter / response field names from their AWS canonical (Pascal) form. The casing engine renders snake at the SQL surface; the spec keeps native names.

## Integration test harness

`bin/integration-tests.sh` exercises every protocol/regime archetype with `DESCRIBE EXTENDED` (offline) and live `SELECT` (needs `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY`). Run after every regen:

```bash
STACKQL=/tmp/stackql bash bin/integration-tests.sh            # all tests
STACKQL=/tmp/stackql bash bin/integration-tests.sh --describe-only  # offline only
STACKQL=/tmp/stackql bash bin/integration-tests.sh --auth-smoke-test-only  # one auth-only SELECT per service
AWS_RUN_DML_TESTS=1 STACKQL=/tmp/stackql bash bin/integration-tests.sh --select-only  # full DML lifecycle
```

The harness auto-detects WSL/MINGW and translates registry paths to Windows-style when stackql is a Windows binary.

## File layout

```
stackql_aws_provider/
├── CLAUDE.md                                    this file
├── README.md                                    end-to-end usage docs
├── package.json
├── .npmrc                                       wires @jsr to npm.jsr.io
├── bin/
│   ├── generate-openapi.sh                      wraps stage 1
│   ├── generate-provider.sh                     wraps stage 2
│   ├── integration-tests.sh                     test harness
│   ├── select-auth-smoke-targets.py             picker for --auth-smoke-test-only
│   ├── start-server.sh / stop-server.sh / server-status.sh
│   └── test-meta-routes.cjs                     pgwire-lite meta-route harness
├── openapi-generation/
│   └── botocore_to_openapi.py                   stage 1
├── provider-dev/
│   ├── source/                                  stage 1 output
│   ├── scripts/
│   │   └── generate-provider.mjs                stage 2
│   ├── openapi/src/aws/v00.00.00000/            stage 2 output (the provider)
│   └── docgen/provider-data/                    docusaurus header content
└── website/                                     docusaurus microsite
```
