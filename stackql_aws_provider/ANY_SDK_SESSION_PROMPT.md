# Session prompt: stackql core (`any-sdk` + `stackql`)

Paste the body of this file into a fresh Claude Code session opened in `c:\LocalGitRepos\stackql\core\any-sdk` (primary) with `c:\LocalGitRepos\stackql\core\stackql` available as a secondary repo for downstream consumer changes.

---

## Goal

Land two PRs in `any-sdk` (primary; `stackql` core needs only minor downstream touch-ups if any) that move provider specs from per-op verbose Go templates to schema-driven, casing-aware machinery. The work is **provider-agnostic**: it's enabled per-spec via `provider.yaml` flags and per-method extensions, not by hard-coding AWS knowledge in core.

## Context (read first)

The motivating use case is the stackql AWS provider at `c:\LocalGitRepos\stackql-registry\providers\stackql-provider-aws\stackql_aws_provider`. Read its `CLAUDE.md` to understand how it currently consumes `any-sdk`. The relevant pain points the PRs eliminate:

1. The provider hand-rolls per-op Go templates that rename request body fields between snake_case (SQL surface) and PascalCase (AWS wire). Every new shape tier (scalar, list-of-scalar, nested-struct, list-of-struct) needs new template code. ~250 LOC of generator code currently produces ~30,000+ lines of templated YAML per regen. This is reinventing what botocore's serialisers do generically.

2. Response transforms for XML services (query, ec2, rest-xml) emit per-row Go templates that hand-walk the mxj-decoded body and dispatch type conversions field-by-field. Same problem: verbose, lossy (mxj heuristically retypes 12-digit AWS account IDs as float64; the template fights this per field), per-op.

PR 1 fixes the **input case-resolution** problem by adding a small `casing` engine in `any-sdk`. PR 2 fixes the **XML response shape** problem by adding a schema-driven walker as a new `StreamTransformer` family.

Both PRs are **opt-in via OpenAPI extensions** — no behavior change for existing providers (google, okta, github, awscc, ...) that don't stamp the flags.

## PR 1 — `casing` engine

### What it does

Two layered conveniences:

1. **Snake-case alias on output**: when `provider.yaml` carries `config: { snake_case_aliases: true }`, top-level response column names are rendered in snake_case at the SQL surface, derived via `xform_name`-style transform from the property's wire name. DDL emits `vpc_id` for a `VpcId` property; `SELECT vpc_id` and `SELECT VpcId` both work.

2. **Reverse-casing input lookup**: when a method's `request` block in `x-stackQL-resources` carries `nativeCasing: pascal` (or `kebab` | `camel` | `snake`), an unresolved SQL clause key is run through the appropriate reverse-transform and looked up against the parameter set / request-body schema again. If that still misses, return a precise error listing the **wire-formatted** valid keys: `field 'foo_bar' not found; available: [VpcId, EnableDnsHostnames, DryRun, ...]`.

Applies to top-level fields only (parameters and one level of body schema properties). Nested struct contents are NOT case-transformed by the engine — users pass wire-format inner keys verbatim (`'{"Value":true}'`). This matches what the AWS CLI does (`xform_name` is applied to top-level arg names only).

### Mechanism reference

The CLI does this via paired `(cli_name, serialized_name)` on each argument; only the cli_name is transformed. botocore's transform function is:

```python
_first_cap_regex = re.compile('(.)([A-Z][a-z]+)')
_end_cap_regex = re.compile('([a-z0-9])([A-Z])')
_special_case_transform = re.compile('[A-Z]{2,}s$')

def xform_name(name, sep='_', _xform_cache=_xform_cache):
    if sep in name:
        return name
    # ...regex substitutions, lowercase, cache
```

Port that algorithm (snake variant) plus its inverse trio for `pascal | kebab | camel`. Tests must cover acronyms (`VPCEndpoint` → `vpc_endpoint`, `VPCId` → `vpc_id`), and the round-trip property `inverse(xform(name)) == name` for the relevant native casing.

### Files to touch

- `any-sdk/pkg/casing/casing.go` (NEW) — the four transform pairs + cache.
- `any-sdk/pkg/casing/casing_test.go` (NEW) — table-driven tests.
- `any-sdk/internal/anysdk/const.go` — new extension keys: `ExtensionKeySnakeCaseAliases` (provider-level), `ExtensionKeyNativeCasing` (method-request-level).
- `any-sdk/internal/anysdk/provider.go` — expose `IsSnakeCaseAliasesEnabled()` on the `Provider` interface, reading `config.snake_case_aliases` from `provider.yaml`.
- `any-sdk/internal/anysdk/operation_store.go` — expose `GetRequestNativeCasing()` on `OperationStore`, reading `x-stackql-resources.<r>.methods.<m>.request.nativeCasing`.
- `any-sdk/internal/anysdk/params.go:GetParameter` / `getParameterFromInSubset` — extend lookup: after exact match miss, if `nativeCasing` set on the method, apply reverse transform and retry. On final miss, return a typed error carrying the list of wire-format names.
- `any-sdk/internal/anysdk/operation_store.go:getschemaAttributeMatcher` — same extension for body-field fuzzy matcher: try exact, then reverse-cased, then error with wire-format options.
- `any-sdk/internal/anysdk/schema.go:getPropertiesColumns` — when the enclosing provider has `snake_case_aliases: true`, apply `xform_name` to the column descriptor's `Name`. Wire property name stays in `Schema.Name` for response navigation.
- `any-sdk/public/radix_tree_address_space/legacy_address_space.go:simpleLegacyTableSchemaAnalyzer.GetColumns` — when the provider has `snake_case_aliases: true`, apply `xform_name` to required-parameter names before union with response columns. This keeps the column set consistent (snake on both sides) and prevents the SQLite NOCASE collision that rule 19 documents in the AWS provider's CLAUDE.md.

### Out of scope for this PR

- Nested struct inner-key case-transformation. Wire-format struct contents are the contract.
- Cross-method consistency checks (a method on a resource with `nativeCasing: pascal` and another with `nativeCasing: snake` is technically allowed; just don't bake that pattern intentionally).
- UI / CLI help text formatting changes.

### Acceptance criteria

- All existing `any-sdk` tests pass unchanged.
- New round-trip tests for each of `snake | pascal | kebab | camel` in `pkg/casing/casing_test.go`.
- New integration test: a mock service spec with `config.snake_case_aliases: true` and a method with `nativeCasing: pascal`. Exercises:
  - DESCRIBE returns snake column names.
  - SELECT with snake column name in WHERE resolves to the PascalCase parameter; wire request carries PascalCase.
  - SELECT with PascalCase column name in WHERE still works (backwards-compat).
  - SELECT with neither (e.g. `foo_bar` against a real `Baz` param) returns an error message listing wire-format valid keys.

### Robot test (REQUIRED)

Per the user's standard, this feature MUST have a robot test in stackql's mock-server framework:

- Location: `c:\LocalGitRepos\stackql\core\stackql\test\robot\functional\` — add a new `stackql_casing.robot` file or extend `stackql_mocked_from_cmd_line.robot`.
- Mock service spec: add a minimal fake provider to `c:\LocalGitRepos\stackql\core\stackql\test\registry\src\` (look at `googleapis.com` for a template). The spec should be small (~100 lines) and exercise both `snake_case_aliases` and `nativeCasing` extensions.
- Mock HTTP server: add a Flask mock in `c:\LocalGitRepos\stackql\core\stackql\test\python\stackql_test_tooling\flask\<your_provider>\` that echoes the request body (so tests can assert the wire form has the correct case).
- Test cases:
  - SELECT with snake column name → assert wire request used the native (Pascal) form
  - SELECT with mixed snake / Pascal in same WHERE clause → both resolve correctly
  - INSERT with snake body field name → assert wire body has Pascal field
  - SELECT with unknown column → assert error message contains wire-format valid keys

## PR 2 — `schema_driven_xml_v0.1.0` transform

### What it does

A new `StreamTransformer` in `any-sdk/pkg/stream_transform` that consumes the schema referenced by `response.schema_override` and walks mxj-decoded XML to project rows into stackql's expected `{"line_items": [...]}` envelope. Replaces the per-op Go template `golang_template_mxj_v*` for the 90% of AWS XML response shapes.

The transform declaration in the provider spec looks like:

```yaml
response:
  mediaType: application/xml
  overrideMediaType: application/json
  schema_override:
    $ref: '#/components/schemas/DescribeVolumesOutputDisplay'
  transform:
    type: schema_driven_xml_v0.1.0
  objectKey: $.line_items
```

The walker reads `DescribeVolumesOutputDisplay` from the spec, understands the per-row schema is the `items` of its `line_items` array property, and:

1. mxj-decodes the XML body.
2. Skips the AWS query/ec2 envelope: `<OpName>Response` → optional `<ResultWrapper>` → list-bearing member.
3. For rest-xml, ranges over the single top-level key (XML root tag name varies and is not in the spec) and treats its body as the response payload.
4. For each row's fields, reads the wire-named child from the mxj map and converts per the schema's declared `type` (`integer` → int, `boolean` → bool, `string` → string, `object`/`array` → JSON-stringified). The schema declaration wins over mxj's heuristic typing (fixes 12-digit AWS account IDs being auto-typed as `float64`).
5. Emits `{"line_items": [...]}` to stackql.

For singleton responses (no list), the walker emits a one-element `line_items` array.

### Files to touch

- `any-sdk/pkg/stream_transform/schema_driven_xml.go` (NEW) — the walker.
- `any-sdk/pkg/stream_transform/schema_driven_xml_test.go` (NEW) — table-driven tests with fixture XML responses.
- `any-sdk/pkg/stream_transform/template_stream_transform.go` — register the new transform type in the factory (the `IsTransformable` switch and the `GetTransformer` switch).
- Naming: this is **`v0.1.0` (NOT v0.2.0 or higher)** — it's a new family, distinct from `golang_template_mxj_v*`. The constant should be `SchemaDrivenXMLV1 = "schema_driven_xml_v0.1.0"`.

### Envelope shape understanding

The walker needs to recognise:

- **query protocol**: outermost wrapper `<OpName>Response>`, then a `<*Result>` wrapper, then the list-bearing member (`Stacks`, `DBInstances`, ...) whose elements are wrapped in `<item>` (botocore default) or a `locationName`-specified wire name.
- **ec2 protocol**: outermost wrapper `<OpName>Response>`, then directly the list-bearing member (no `*Result` layer).
- **rest-xml**: outermost wrapper is a service-specific tag (`<ListAllMyBucketsResult>`, `<ListHostedZonesResponse>`) which is NOT carried in `service-2.json`. Walker tolerates this by `range`-ing once over the top-level mxj key.

These can be inferred from the spec's `info.x-protocol` extension. The walker reads this and dispatches its envelope-skipping logic accordingly.

### Acceptance criteria

- All existing transform-related tests pass unchanged.
- New table-driven tests for each protocol shape: ec2 list, ec2 small payload, query list-with-resultWrapper, query empty-self-closing list, rest-xml list, rest-xml singleton, rest-xml singleton-with-ancillary-list (the `GetHostedZone -> {HostedZone, DelegationSet, VPCs}` case).
- Type-dispatch correctness: 12-digit numeric strings projected as strings (no scientific notation), booleans as booleans (not as "false" strings), integers as integers, nested objects as JSON-stringified text.
- Self-closing XML elements (`<attachmentSet/>` → mxj's empty string `""`) projected as `null`, not as an empty-string column value.

### Robot test (REQUIRED)

- Add a new `stackql_xml_walker.robot` file or extend an existing mocked robot file.
- Fixtures: include canned XML responses for each protocol/regime archetype in `test/python/stackql_test_tooling/flask/<your_provider>/templates/`.
- Test cases:
  - SELECT against ec2-shape mock → assert per-row projection with correct types
  - SELECT against query-shape mock with empty list (self-closing tag) → assert zero rows, not error
  - SELECT against rest-xml singleton-unwrap mock → assert one row with the inner-struct's columns
  - SELECT projects `cidr_block` correctly (column name from spec's snake-aliased schema) and the wire field is `cidrBlock`

## Ordering

- PR 1 lands first (small, focused, no XML dependency).
- PR 2 lands second.
- Both should land before the AWS provider's PR 3 (provider rip-and-replace) — see `AWS_PROVIDER_RESUME_PROMPT.md` in the provider repo.

## Verification

After both PRs:

1. Build a stackql binary from the branch:
   ```bash
   cd c:/LocalGitRepos/stackql/core/stackql
   make build
   cp dist/stackql /tmp/stackql
   ```
2. Switch to the provider repo at `c:/LocalGitRepos/stackql-registry/providers/stackql-provider-aws/stackql_aws_provider`.
3. The provider currently uses the per-op-template approach (still works with the new binary because the new transforms are additive). Re-run the integration harness to confirm no regression:
   ```bash
   STACKQL=/tmp/stackql bash bin/integration-tests.sh --describe-only
   ```

If 20/20 passes against the new binary with the existing provider yamls, the new transforms are backwards-compatible and PR 3 (the provider rip) can proceed in a separate session.
