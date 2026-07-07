# Project rules for the native AWS stackql provider

These are the load-bearing design rules. Each derives from a stackql core source path and exists for a specific reason. Don't break them without explicit user confirmation.

## Pipeline

Two stages, both committed:

1. **`openapi-generation/botocore_to_openapi.py`** (Python) reads each `service-2.json` in the in-tree `botocore/data/` checkout and emits one OpenAPI 3.0 YAML per service into `provider-dev/source/`. Every operation is stamped with `x-stackql-*` breadcrumbs.
2. **`provider-dev/scripts/generate-provider.mjs`** (Node) folds the breadcrumbs into `components/x-stackQL-resources`, strips the tags, writes the final stackql provider tree under `provider-dev/openapi/src/aws/<version>/`. Routing is pinned by the durable mappings CSV (see "Durable mappings").

## Durable mappings — `provider-dev/config/all_services.csv`

Checked-in CSV following the `@stackql/provider-utils` `analyze` contract (same header, same `filename::operationId` key). It guarantees a regen maps a known operation to exactly the resource / method / sqlVerb / objectKey it shipped with — the SQL surface only changes through a conscious, reviewable CSV edit.

- **Existing rows win**: stage 2 uses the row's `stackql_resource_name` / `stackql_method_name` / `stackql_verb` / `stackql_object_key` over the breadcrumb-derived values, and logs each divergence (`pin` lines).
- **Append-only**: rows are never rewritten. New `filename::operationId` keys get derived mappings and are appended; rows for removed ops persist harmlessly.
- **Demotions are pinned**: when the sqlVerbs dedupe pass demotes a clashing method to EXEC, the appended row records `exec` — so the resolution can't silently flip when a later botocore drop changes op insertion order. Within a signature clash group, CSV-pinned candidates beat unpinned (new) ones for the sqlVerbs slot.
- **Bootstrap**: deleting the CSV and regenerating re-derives everything from breadcrumbs (only do this deliberately — it forfeits all pins).

**Benchmark regression guard** — `provider-dev/config/benchmarks.json` (committed) pins the surface counts: services / resources / methods / selectableResources must never FALL between generations (they only creep up as botocore grows), and the non-selectable ratio must not spike beyond `ratioTolerancePct` (a spike means a generator change started stranding readers). Stage 2 hard-fails on any regression; conscious re-baselining is `generate-provider.mjs --update-benchmarks`.

## Naming and case (post-casing-engine)

Stackql core's casing engine (in `any-sdk/pkg/casing`) does the snake↔native conversion. This provider opts in by stamping two flags:

- **`provider.yaml` root**: `config: { snake_case_aliases: true }` — turns on the engine for every service in this provider.
- **Each method's `request` block in `x-stackQL-resources`**: `nativeCasing: pascal` — tells the engine to reverse-transform snake input to PascalCase when an exact match fails.

Concretely after this:

- Service / resource / method names: **snake_case** (filename-driven; stackql namespace alias). No change.
- Path params: **snake_case** (template substitutions; no AWS-side wire meaning). No change.
- Query / header / body parameter `name` fields: **the SERIALISED wire name** (PascalCase in practice). For query/ec2 protocols this is `locationName || memberName` (ec2 upper-firsts the locationName: `maxResults` -> `MaxResults`), NOT the bare member name — any-sdk's AWSCanonical transpose uses the param name verbatim as the fan-out base key, so `InstanceIds` (locationName `InstanceId`) must be the param `InstanceId` or EC2 returns UnknownParameter. Inner JSON keys are likewise wire names (`TagSpecification.1.Tag.1.Key` -> `JSON('[{"ResourceType":...,"Tag":[...]}]')`). Query-protocol NON-flattened lists serialise as `Name.member.N`, so the JSON carries the member level explicitly: `Tags = JSON('{"member":[...]}')`.
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

**Co-location pass** (stage 1, runs after all ops are tagged): naive noun stripping strands mutation ops in select-less orphan resources (~18% of the provider before the pass; ~3% after). Four relocation rules rewrite `x-stackql-resource`:
1. **Tag plumbing** — ops matching `Tag*/Untag*/AddTags*/RemoveTags*/ListTags*` route to the service's `tags` resource (selectable wherever a `ListTags*` lister exists). `ListTagOptions`-style entity ops don't match (regex requires plural `Tags`).
2. **Full-suffix merge** — a non-selectable resource whose name ends with a selectable sibling's name folds into it, longest match first (`application_fleets` -> `fleets`, `scaling_policies` -> `policies`).
3. **Leading-token merge** — pluralised leading tokens naming a selectable sibling fold in (`certificate_options` -> `certificates`).
4. **Identifier-based rehoming** — the required identifier params name the thing an op operates ON: `SetDesiredCapacity` requires `AutoScalingGroupName` -> `auto_scaling_groups`; `CreateRoute` requires `RouteTableId` -> `route_tables`; `DeleteCorsConfiguration` requires `ApiId` -> `apis`. Fires only when EVERY op of the orphan agrees on the same selectable target (longest name on ties). Query/ec2 GET/POST twins are grouped by base operationId first — the param-less POST form must not veto.

The residual non-selectable set (~200, 3.3%) is verified honest API shape: mutation-only ops whose required identifiers name nothing selectable (`PutAccountName`, `SetInstanceHealth`, `CreateMeetingDialOut`) — no reader exists for them in the API. Associate/disassociate pairs sharing a required-param signature still lose one side to EXEC via rule 9 dedupe - expected, callable via EXEC.

### 8. `sqlVerbs` ordering — most-specific first

Within each `sqlVerbs[verbKey]` array, sort by `requiredParams.length DESC`. Router picks first method whose required params are satisfiable from the SQL clause, so `get_function` (`[function_name, region]`) sits ahead of `list_functions` (`[region]`).

### 9. `sqlVerbs` uniqueness — no duplicate signatures

Within a `(resource, sqlVerb)` bucket, no two methods share the same required-params signature. The dedupe pass keeps the first by insertion order and demotes the rest to EXEC. Stage 2 has a build-time `verifySignatureUniqueness` guard that hard-fails the build if any collision survives the dedupe. Note: the candidates phase records `requiredParams` from the **final** registered op (the one whose `$ref` `methodEntry.operation.$ref` points at), not the first iteration — so dedupe matches what `verifySignatureUniqueness` sees.

### 10. Empty / orphan resources — prune; zero-column selects — demote

A resource with all-empty sqlVerb arrays gets dropped (no SQL surface). A service whose every resource was pruned is skipped (don't register in `providerServices`). Typical victims: data-plane-only services (`cloudsearchdomain`, `sagemaker_runtime`, `rds_data`, ...).

Invariants (test-meta-routes enforces all three): a service must have resources, a resource must have methods (not necessarily selectable), and every SELECT-routed method must project at least one field.

**Scalar-list explode (preferred over demotion)**: a select whose wire payload is a list of column-less elements — bare scalars (`ListTables` -> `[TableName]`), `document` shapes, maps, nested lists, empty structs — keeps its SELECT surface via a generated golang-template transform that explodes elements into rows under a faux singular column (`table_name`, `queue_url`, `finding`), with row/envelope schemas injected into `components/schemas` (`<OpName>RowDisplay` / `<OpName>OutputDisplay`, `objectKey: $.line_items`). `golang_template_json_v0.3.0` for rest-json/aws-json (paginator token passed through as a sibling so pagination survives), `golang_template_mxj_v0.3.0` for query/ec2 (defends against mxj single-element collapse). Explode fires when the paginator `result_key` names the list (authoritative) or the list is the sole non-metadata output member — never when useful scalar siblings would be thrown away. rest-xml is not exploded (wrapper conventions vary).

**Single-row projection (query/ec2 fallback)**: when the synthesised Display row comes out empty and explode doesn't apply (multi-member outputs mixing scalars and scalar lists — `DescribeLoggingStatus`, `DescribeAllowedNodeTypeModifications`), an mxj template projects the WHOLE output as one row, every non-metadata member toJson'd into a snake column. The row-shape picker also prefers list members with struct elements over scalar-element lists (`SolutionStackDetails` over `SolutionStacks`).

**Nested-list unwrap (query/ec2)**: `DescribeInstances` wraps the real rows one list deep (`Reservations[].Instances[]`) — the walker stops at the outer list and rows become reservation wrappers with no `instance_id` column. When the paginator's `result_key` names the outer list AND the outer element carries a noun-matched inner list of structs, a generated mxj template flattens outer x inner (single-collapse defence at both levels) and emits each inner element via `toJson` (wire-name keys; Display extraction resolves GetWireName). The paginator gate matters: elb/elbv2 `DescribeTags` match structurally but their outer element carries the join key (`LoadBalancerName`) — those stay wrapped. `RunInstances`-style singletons (`Reservation.Instances`) unwrap via the row-shape picker's noun-matched-list rule instead.

**JSON() does NOT transpose in SELECT WHERE** (verified on the wire): `WHERE Filter = JSON('[...]')` never reaches the request — only UPDATE SET and INSERT values fan out via JSON(). Server-side SELECT filtering on query/ec2 is limited to plain scalar params; row scoping should use column equality (client-side SQL) on the projected rows instead.

**No batch mutations — singleton scalars only** (verified on the wire; stackql/stackql#683): a JSON-array string in DELETE WHERE or EXEC params goes to the wire VERBATIM (`InstanceId=["i-..."]` -> InvalidInstanceID.Malformed). EC2 accepts the flat un-indexed form for a single value (`InstanceId=i-...`), so mutations/lifecycle ops take one id per statement: `DELETE ... WHERE InstanceId = 'i-...'`, `EXEC ... @InstanceId = 'i-...'`. Multiple targets = multiple singleton statements. (`SELECT ... WHERE x IN (...)` does fan out into parallel dispatches — reads only.)

**Noun-list creates get exact-wire templates**: the schema-driven walker finds row containers by naming convention (singular+Set: `volumeSet`, `reservationSet`) and misses plural containers (`RunInstances` -> `instancesSet` — RETURNING projected one all-null row). Create-ish ops returning a noun-matched list (the non-list-op branch of the row-shape picker: `RunInstances`, `CreateSnapshots`, `CopyVolumes`, ...) get a generated mxj template with exact wire names instead of the walker.

**Singleton-struct unwrap (rest-json/aws-json)**: a select whose output is a single wrapper member (`DescribeTable` -> `{Table: {...}}`) gets `objectKey: $.<Member>` so DESCRIBE projects the inner structure's fields instead of one object-typed column. Fires only for exactly-one non-metadata member that is a structure with named members (maps and multi-member outputs unchanged).

**Zero-column demotion (backstop)**: any select method still projecting no fields after the above is demoted to EXEC by the stage 2 zero-column pass (0 methods currently — the transforms cover everything; the guard remains for future botocore drops). Per-method, not per-resource: DESCRIBE resolves columns via the first select method in router order, so one empty method poisons an otherwise healthy resource. The residual non-selectable set (356, ~6%) is verified mutation/lifecycle-only — no reader op exists in those APIs.

### 11. Signature computation — skip sigv4/routing headers, count only BINDABLE body fields

`requiredParamsOf` in the Node script:
- Skips `X-Amz-Target`, `X-Amz-Date`, `X-Amz-Signature`, `X-Amz-Algorithm`, `X-Amz-Credential`, `X-Amz-Security-Token`, `X-Amz-SignedHeaders`, `X-Amz-Content-Sha256`.
- Required body fields appear under their native (Pascal) names — no `data__` prefix because `requestBodyTranslate: naive` is set on body-bearing methods.
- For body schemas declared as `$ref`, follow one level to find the underlying `required` list.
- Counts body-required fields ONLY from the runtime-bindable content entry: exact `request.mediaType` match, or `application/json` when no `request.mediaType` is set (stackql's loader default). An unbound body's required fields are invisible to runtime routing, so counting them would make build-time signatures diverge from `SHOW EXTENDED METHODS`. The `verifyBodyBinding` guard hard-fails the build if any registered method carries a requestBody with no bindable content key (query/ec2 GET->POST translate methods exempt).

### 12. YAML 1.1 boolean keywords — must be quoted

Stackql's Go YAML parser is YAML 1.1; it coerces `y/Y/yes/Yes/YES/n/N/no/No/NO/on/On/ON/off/Off/OFF` to bool. When any of these lands in a `required: [...]` list (AWS bedrock_agentcore has members literally named `x` and `y`), the parser refuses the spec. Both writers must emit YAML 1.1 quoting — Python uses a custom `_str_repr`, Node uses `YAML.stringify(..., { version: '1.1' })`.

### 13. aws-json — amz-json content key matching `request.mediaType`, body inlined

**Protocol resolution**: stage 1 resolves the effective protocol botocore-style — first match of `['json', 'rest-json', 'rest-xml', 'query', 'ec2']` against `metadata.protocols`, falling back to the legacy `metadata.protocol` field. Newer smithy models declare `protocol: smithy-rpc-v2-cbor` while also listing `json` in `protocols` (9 services: arc_region_switch, cloudwatch, comprehendmedical, compute_optimizer, compute_optimizer_automation, gamelift, interconnect, marketplace_entitlement, snowball); trusting the legacy field routed them through the unknown-protocol fallback with `x-protocol: smithy-rpc-v2-cbor`, which starved stage 2's `request.mediaType`/`request.base` stamps and made required body fields vanish from runtime routing.

For aws-json, emit a single `application/x-amz-json-<jsonVersion>` content entry (jsonVersion from botocore metadata, default `1.0`) and stamp the same string as the method's `request.mediaType` in stage 2 (derived from the op's actual content key), plus `request.base: '{}'` (the fallback body sent verbatim when no SQL-supplied body fields exist, merged under supplied fields when they do — aws-json requires a JSON body even for no-input ops). Do NOT use `request.default` for this: it diverts supplied body params in any-sdk's armoury flow. The loader binds the body schema by EXACT content-key match against `request.mediaType`; a mismatch silently drops the schema and required body fields vanish from routing. any-sdk's media fuzzy-matcher maps amz-json variants onto the JSON marshal path. Body schemas inlined in `requestBody` (not `$ref` to a separate named shape) so stackql's required-param scan reaches them.

Same exact-match rule for rest-xml bodies: content key `application/xml` + `request.mediaType: application/xml` (activates any-sdk's schema-driven JSON-map -> XML body marshalling).

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

The walker (in `any-sdk/pkg/stream_transform`) reads the OpenAPI schema, navigates the mxj-decoded XML using the schema's `xml: {name: ...}` overrides / wrapping conventions, and emits `{"line_items": [...]}`. The per-row template is gone — the schema drives the projection.

**Display synthesis**: the generator still emits `<RowShape>Display` + `<OpName>OutputDisplay` schemas. Each property key is the **botocore member name** (`VpcId`, `Attachments` — no rename; the casing engine renders snake columns from these). When the XML wire element name differs from the member name (member `locationName`, e.g. EC2's `Attachments` serialised as `<attachmentSet>`), the property carries an `xml: {name: attachmentSet}` override — the walker extracts by the override and keys the projected row by it; drm value extraction resolves `GetWireName` first, then `GetName`. The wrapping `<OpName>OutputDisplay` is just `{type: object, properties: { line_items: { type: array, items: $ref: <RowShape>Display } }}`.

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

**EXEC-verb exception**: a method routed to EXEC whose operation has NO requestBody (query/ec2 lifecycle ops - the `$ref` is the GET form) must NOT carry a `request` block at all. Stackql's exec analyzer treats a present `request` as "this method has a body schema" and hard-fails with `no request body for operation`. Nothing is lost: `nativeCasing` only drives snake->Pascal WHERE-key reversal, and EXEC invocations pass wire-cased `@params`.

### 17. NOCASE collision demotion + build-time guard (all protocols)

Stackql builds a resource's table as `snake-aliased response columns + union of required parameters (wire-cased) across the resource's methods`. SQLite's NOCASE collation treats `role` and `Role` as duplicates and aborts CREATE TABLE **with exit code 0** (error is text-only) - so this class of bug is invisible to exit-code checks.

Three layers of defence:

1. **Stage 1** (`botocore_to_openapi.py`): service-wide demotion for query/ec2/rest-xml - required query/header params and inline required body fields whose lowercased form matches a rendered snake Display column but whose exact form differs are demoted to `required: false`. Path params exempt (structural).
2. **Stage 2** (`generate-provider.mjs` `demoteNocaseCollisions`, runs BEFORE signature computation so sqlVerbs ordering/dedupe see the demoted view): resource-scoped demotion for ALL protocols (rest-json/aws-json have no Display schemas - the pass reads the raw response schema, descending through `x-stackql-objectKey`; the lambda case was response column `role` vs create_function's required body field `Role`). Path param names are seeded into the collision set (they reserve their name: connect's body `Origin` vs path `origin`). Param-vs-param groups differing only by case keep one canonical form (the all-lowercase one when present, else lexicographically first) and demote the rest (connect: query `origin` vs body `Origin`).
3. **Build-time guard** (`verifyNoNocaseCollisions`): hard-fails the whole build if any surviving required param NOCASE-collides with a response column or another required param - a "duplicate column name" DDL abort can never ship silently.

Test-side: the harness has fatal-pattern greps and dedicated list-path DDL select tests (lambda, dynamodb - the list method's table differs from the get path's); `tests/smoke.py` applies `DEFAULT_FATAL_PATTERNS` to every test's output regardless of expectations.

### 18. Pagination — rest-json / aws-json only (for now)

Stage 1 (`_pagination_breadcrumbs`) reads `paginators-1.json` and stamps `x-stackql-pagination-*` breadcrumbs for simple paginators (single string `input_token`/`output_token`, plain top-level members; composite/jmespath tokens skipped). Stage 2 folds them into `config.pagination.{requestToken,responseToken}`. Request token location: `query` for rest querystring members (key = locationName), `body` for aws-json and rest body members. Response token: `$.<OutputMember>` against the raw JSON body, `location: body`.

**Gate**: only `rest-json` and `json` protocols. stackql extracts the response token from the response `rawBody`; for XML protocols that IS the schema-driven walker's output, which currently drops sibling scalars (the token) — see any-sdk issue #117 (https://github.com/stackql/any-sdk/issues/117). When that lands, lift the protocol gate and use the output member's XML wire name in the JSONPath.

Verified live: DynamoDB ListTables with `"Limit" = 1` traverses all pages, re-injecting `ExclusiveStartTableName` into each subsequent body with the original params preserved. (Note: `Limit` is a reserved SQL word — quote it.)

## Things NOT to do

- Don't run `analyze` / `generate-mappings` from `@stackql/provider-utils`. We short-circuit analyze by stamping `x-stackql-*` tags at openapi-generation time.
- Don't run `split` / `normalize` from `@stackql/provider-utils`. Step 1 emits per-service specs already with no polymorphism.
- Don't hand-craft `schema_override` blocks for XML services. Rule 14 generates the envelope automatically. Per-row column projection is the walker's job, driven by the schema.
- Don't rename body / parameter / response field names from their AWS canonical (Pascal) form. The casing engine renders snake at the SQL surface; the spec keeps native names.

## Integration test harness

`bin/integration-tests.sh` exercises every protocol/regime archetype with `DESCRIBE EXTENDED` (offline) and live `SELECT` (needs `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY`). It defaults to the repo-pinned Linux binary at `.bin/stackql` (run under WSL / Linux); override with `STACKQL=/path/to/stackql`. Run after every regen:

```bash
bash bin/integration-tests.sh                     # all tests (uses .bin/stackql)
bash bin/integration-tests.sh --describe-only     # offline only
bash bin/integration-tests.sh --auth-smoke-test-only  # one auth-only SELECT per service
AWS_RUN_DML_TESTS=1 bash bin/integration-tests.sh --select-only  # full DML lifecycle
```

The harness auto-detects WSL/MINGW and translates registry paths to Windows-style when stackql is a Windows binary. The manifest-driven smoke suite in `tests/` (see `tests/README.md`) uses the same `.bin/stackql` default via `config.stackql` in `tests/manifest.yaml`.

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
