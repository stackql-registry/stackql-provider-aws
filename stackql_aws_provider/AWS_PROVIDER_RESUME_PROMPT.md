# Resume prompt: AWS provider repo

Paste the body of this file into a fresh Claude Code session opened in `c:\LocalGitRepos\stackql-registry\providers\stackql-provider-aws\stackql_aws_provider` once the two `any-sdk` PRs from `ANY_SDK_SESSION_PROMPT.md` have landed and a new stackql binary is built from that branch.

---

## Pre-flight

Two upstream PRs MUST have landed in `c:\LocalGitRepos\stackql\core\any-sdk`:

1. **`casing` engine** — `provider.yaml: config.snake_case_aliases: true` + per-method `request.nativeCasing: pascal` activates snake-case input lookup + snake-case column rendering.
2. **`schema_driven_xml_v0.1.0` transform** — schema-driven XML walker replaces per-op Go templates for query / ec2 / rest-xml response shapes.

Confirm by inspecting:
```bash
ls /c/LocalGitRepos/stackql/core/any-sdk/pkg/casing/
ls /c/LocalGitRepos/stackql/core/any-sdk/pkg/stream_transform/schema_driven_xml.go
```

And confirm the stackql binary is built from that branch:
```bash
/tmp/stackql --version
# Inspect the binary against the branch's HEAD via build metadata
```

If either is missing, stop and tell the user. Don't proceed with the provider rewrite.

## Read first

1. `CLAUDE.md` — authoritative rules. Already reflects the post-PR world.
2. `bin/integration-tests.sh` — the harness. 20 describe-only tests pass today against the pre-PR provider; goal is to keep 20/20 (or grow it) after the rewrite.

Run the offline harness immediately to establish baseline:
```bash
cd stackql_aws_provider
STACKQL=/tmp/stackql bash bin/integration-tests.sh --describe-only
```

Expected (pre-rewrite, post-new-binary): **20 passed, 0 failed**. New stackql binary should not regress the existing provider yamls — both transforms are backwards-compatible.

If baseline differs, investigate before touching anything else.

## The work — Provider rewrite (call this PR 3 internally)

Goal: rip out the per-op Go template machinery and the snake-case body-rewrite path from the provider generator. Replace with three small things:

1. Stamp `config.snake_case_aliases: true` in `provider.yaml` once.
2. Stamp `nativeCasing: pascal` on every method's `request` block in stage 2.
3. Switch XML response transforms from `golang_template_mxj_v*` to `schema_driven_xml_v0.1.0`.

After the rewrite, generator output drops by ~30,000+ lines of templated YAML per regen.

### Concrete changes

**`openapi-generation/botocore_to_openapi.py`:**

- DELETE `_build_ec2_mutable_request` and all callers. ~150 lines gone.
- DELETE the rule-20 EC2 mutable rewrite block in `_build_query_op_block` that stamps `x-stackql-request-mediatype` / `x-stackql-request-transform-body` breadcrumbs.
- DELETE `_classify_ec2_input_shape` (no longer needed).
- DELETE the body-required collision-demotion in the collision-demotion pass. Path/query param demotion stays (the rule-17 logic for non-body params).
- DELETE the case-collision exception helper (`_is_case_collision`) — without snake-case-property generation, the underlying collision goes away.
- DELETE the snake_case `_to_snake()` calls inside `_build_row_template_body`. Row templates emit PascalCase wire field names verbatim.
- KEEP the Display schema synthesis (`_register_display_schemas`) — still needed for the walker's schema. But the row-shape display now has **PascalCase property names** (matching botocore wire names), not snake_case.
- KEEP path param snake-casing (rule 5 — these are template substitutions, no wire meaning).
- KEEP `_build_transform_body` only as a fallback escape hatch. Default replaced with the schema-driven transform.

**`provider-dev/scripts/generate-provider.mjs`:**

- DELETE Branch A in the main loop (the EC2 snake-case rewrite consumer). The `request.transform` block + `requestBodyTranslate: naive` is the only thing left.
- DELETE the breadcrumb deletes for `x-stackql-request-mediatype` / `x-stackql-request-transform-type` / `x-stackql-request-transform-body` since the generator no longer emits them.
- ADD: for every method's `request` block (when the method has request body or query params), stamp `nativeCasing: pascal`. This is the universal AWS convention for native casing.
- ADD: in `provider.yaml` output, ensure `config.snake_case_aliases: true` is set.
- For XML response methods: change the emitted `transform.type` from `golang_template_mxj_v0.2.0` to `schema_driven_xml_v0.1.0`. The `body` field becomes redundant (the walker drives off the schema) but can stay for backwards-compat; cleaner to drop.

**Display schema renaming:**

- BEFORE: each property in `<RowShape>Display` had snake_case name (`vpc_id`, `cidr_block`) with a `description` from the source.
- AFTER: each property uses the **botocore wire member name** (`VpcId`, `CidrBlock`). No rename. The casing engine renders snake at the SQL surface.
- Row template (if kept as fallback) emits `"VpcId": ...` keys, not `"vpc_id": ...`. Schema-driven walker drives off the schema's property names directly.

### Test the rewrite — order of operations

1. Make changes incrementally. After each significant change, regen one service (`ec2`) and run `bash bin/integration-tests.sh --describe-only`. Don't move on until 20/20 holds.
2. After all changes, full regen all 424 services:
   ```bash
   rm -rf provider-dev/source/*.yaml
   python openapi-generation/botocore_to_openapi.py --output-dir provider-dev/source
   npm run generate-provider
   STACKQL=/tmp/stackql bash bin/integration-tests.sh --describe-only
   ```
3. Live-test with AWS credentials:
   ```bash
   AWS_RUN_DML_TESTS=1 STACKQL=/tmp/stackql bash bin/integration-tests.sh --select-only
   ```
   The 6-step DML lifecycle on `aws.ec2.vpcs` (CREATE → list → get → UPDATE attribute → verify → DELETE) should all pass. Specifically the UPDATE step (which previously failed on the nested_struct gap) should now work because the casing engine handles `vpc_id` ↔ `VpcId` and the AWS wire body uses the spec's PascalCase fields verbatim.

### What to look out for

- **Column name regressions**: tests that grep for `vpc_id|VpcId|stack_name|StackName` (loose patterns) should still pass. If a pattern that worked before fails, it means a column rename or rendering issue — check whether `snake_case_aliases` is actually being read by the new binary on the regen'd provider.
- **Backwards-compat in SQL**: existing harness queries written with snake column names must still work. The casing engine accepts both, so this should hold.
- **Body wire shape**: `--http.log.enabled` in stackql shell should show PascalCase keys in form-urlencoded bodies. If you see `vpc_id` on the wire, the spec has wrong field naming.
- **CLAUDE.md drift**: the file was rewritten in advance assuming PRs 1+2 have shipped. If something contradicts, update the file rather than work around it.

### After rewrite

- Re-add to `bin/integration-tests.sh` any lifecycle assertions that previously needed special-casing for the nested_struct gap (the UPDATE-verify step).
- Add a harness entry for `aws-json` lifecycle (e.g. DynamoDB) — previously skipped because the body translation was different per protocol; with the casing engine + spec-native bodies, this should work uniformly.
- Update SESSION_RESUME.md? It's been deleted. Don't recreate it; CLAUDE.md is authoritative.

## Open follow-ups (not in scope for PR 3)

- list-of-struct on input (`TagSpecifications`, `IpPermissions`): with PascalCase wire format, users pass `'{"ResourceType":"vpc","Tag":[{"Key":"Name","Value":"foo"}]}'` and stackql's `naive` translator + native body schema handles it without a per-op template. Verify end-to-end and write a test (`INSERT INTO aws.ec2.vpcs(..., TagSpecifications) ...`).
- Pagination: `paginators-1.json` parsed but multi-page traversal not implemented. Emit `config.pagination.{requestToken,responseToken}` block on list ops.
- Doubly-nested list responses (`DescribeInstances -> Reservations[].Instances[]`): row-shape picker needs multi-level descent.
- Extend `auth-smoke-test` to also exercise `--insert-smoke` lifecycle (cheap create+delete on safe resources).

## When you're done

Report back:
- Before / after `--describe-only` counts (should both be 20 or grow).
- Live DML lifecycle test full output (all 6 steps).
- Net LOC change in `botocore_to_openapi.py` and `generate-provider.mjs`.
- Net YAML size change in `provider-dev/openapi/src/aws/v00.00.00000/services/ec2.yaml`.
