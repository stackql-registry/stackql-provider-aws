# Native AWS provider for [`stackql`](https://github.com/stackql/stackql)

This is a **botocore-derived native AWS provider** for stackql. Unlike the previous AWS provider (which delegates to the AWS Cloud Control API, `awscc`), this provider talks directly to each AWS service's native endpoint - so it can reach the entire surface area of every service for which botocore has a model (~420 services).

The build runs in two stages, both committed to this repo:

1. **`openapi-generation/`** (Python) reads each `service-2.json` model in the in-tree `botocore/data/` checkout and emits a per-service OpenAPI 3.0 YAML into `provider-dev/source/`. Every operation is stamped with `x-stackql-*` breadcrumbs (resource, method, verb, optional objectKey) that step 2 collapses into the stackql resource model.
2. **`provider-dev/scripts/`** (Node) walks the source specs, folds the breadcrumbs into `components/x-stackQL-resources` entries with sigv4-aware `config` blocks, strips the breadcrumbs from the output, and emits a fully formed stackql provider into `provider-dev/openapi/src/aws/<version>/`.

## Prerequisites

- Python 3.10+ (only `pyyaml` outside the stdlib; the local `botocore/` is on `sys.path` automatically)
- Node.js 18+
- `stackql` CLI on `PATH` (or installed under `./stackql`) - see [stackql releases](https://github.com/stackql/stackql/releases)
- AWS credentials in `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` (sigv4 signing)

Install the Node deps once:

```bash
cd stackql_aws_provider
npm install
```

The `.npmrc` in this directory wires the `@jsr` scope to `https://npm.jsr.io` so `@stackql/provider-utils` resolves.

## 1. Generate per-service OpenAPI specs from botocore

```bash
# all 420+ services
npm run generate-openapi

# or, target a specific subset:
bash bin/generate-openapi.sh --service ec2 --service iam --service s3
```

Output: `provider-dev/source/<service>.yaml`, one file per service, each containing only the schemas its operations reference. Path keys are protocol-aware:

| Protocol | Path style |
|----------|------------|
| `ec2`, `query` | `/?Action=<Op>&Version=<v>` (GET + POST forms) |
| `rest-json`, `rest-xml` | the operation's botocore `requestUri` |
| `json` (aws-json) | `/#<Op>` with `X-Amz-Target` header set to `<targetPrefix>.<Op>` |

Each operation carries `x-stackql-resource`, `x-stackql-method`, `x-stackql-verb` (and `x-stackql-objectKey` for SELECTs whose paginator declares a `result_key`).

## 2. Generate the stackql provider

```bash
npm run generate-provider
```

Output: `provider-dev/openapi/src/aws/v00.00.00000/provider.yaml` + `services/<service>.yaml` (one per service). The `provider.yaml` carries the sigv4 auth block:

```yaml
config:
  auth:
    type: aws_signing_v4
    credentialsenvvar: AWS_SECRET_ACCESS_KEY
    keyIDenvvar: AWS_ACCESS_KEY_ID
```

For services on the `query` / `ec2` protocols, every method gets a `config` block that tells stackql to translate the typed GET-with-query into a sigv4-signed POST-with-form at request time:

```yaml
config:
  queryParamTranspose:
    algorithm: AWSCanonical
  requestTranslate:
    algorithm: get_query_to_post_form_utf_8
```

This is the same pattern used by `ref/ec2.yaml`'s `volumes_presented` resource - the GET form gives stackql the typed parameter surface, the request translation keeps long parameter sets (filter lists, tag specs, ID arrays) out of URL length limits.

## 3. Validate the provider with stackql exec

The fastest sanity check is `stackql exec` against the local registry - no wire server needed:

```bash
REG_PATH="$(pwd)/provider-dev/openapi"
REG="{\"url\":\"file://${REG_PATH}\",\"localDocRoot\":\"${REG_PATH}\",\"verifyConfig\":{\"nopVerify\":true}}"

./stackql --registry="$REG" exec "SHOW PROVIDERS"
./stackql --registry="$REG" exec "SHOW SERVICES IN aws"
./stackql --registry="$REG" exec "SHOW RESOURCES IN aws.ec2"
./stackql --registry="$REG" exec "SHOW METHODS IN aws.ec2.volumes"
./stackql --registry="$REG" exec "DESCRIBE EXTENDED aws.iam.access_keys"
./stackql --registry="$REG" shell
```

`SHOW METHODS` should show non-empty `RequiredParams` columns for path-keyed operations and `AccessKeyId`/`UserName`/etc for the query-protocol services.

## 4. Run the wire-server meta-route test suite

```bash
npm run test-meta-routes -- aws --verbose
```

The harness owns the full server lifecycle (run under WSL / Linux - the pinned binary is a Linux ELF): it stops any stackql server already on the port, starts a fresh one so provider specs are never cached between runs, walks the provider, then stops the server and exits with the result. Every lifecycle step is logged with a `[server]` prefix.

To run against a server you manage yourself, pass `--no-server` (or `--host <remote>`, which implies it); `npm run start-server` / `npm run stop-server` remain available for that mode.

`test-meta-routes` walks every service, resource, and method in the provider and asserts:

- every resource has at least one method
- no two methods sharing the same SQL verb on the same resource have an identical required-params signature (this is why lifecycle prefixes like `Attach`, `Modify`, `Set` map to `EXEC` rather than `UPDATE`)
- every selectable resource produces non-empty `DESCRIBE EXTENDED` output

## 5. UAT - run real queries

Start a stackql shell against the local registry and run a few representative queries:

```bash
REG_PATH="$(pwd)/provider-dev/openapi"
REG="{\"url\":\"file://${REG_PATH}\",\"localDocRoot\":\"${REG_PATH}\",\"verifyConfig\":{\"nopVerify\":true}}"
./stackql --registry="$REG" shell
```

```sql
-- query-protocol service
SELECT volume_id, size, availability_zone, state
FROM aws.ec2.volumes
WHERE region = 'us-east-1';

-- rest-json service
SELECT function_name, runtime, last_modified
FROM aws.lambda.functions
WHERE region = 'us-east-1';

-- query service (no region path-param needed for global IAM)
SELECT user_name, create_date, password_last_used
FROM aws.iam.users
WHERE region = 'us-east-1';

-- aws-json service
SELECT table_name, table_status, item_count
FROM aws.dynamodb.tables
WHERE region = 'us-east-1';
```

## 6. Integration tests

```bash
AWS_RUN_DML_TESTS=1 STACKQL=./stackql bash bin/integration-tests.sh --select-only 2>&1 | tail -30
```

## 7. Smoke tests

`tests/smoke.py` is a pluggable smoke-test runner: each test is an `.iql`
file (plain stackql, or a Jinja2 template) orchestrated by
`tests/manifest.yaml`. The suite exercises every wire protocol
(query/ec2/rest-json/rest-xml/aws-json) across control plane AND data
plane - including a full EC2 instance lifecycle (VPC -> subnet -> run ->
stop -> start -> modify -> terminate) and DynamoDB item put/get/delete.

**These tests create real, billable AWS resources** (a `t3.micro`
instance, a DynamoDB table, an S3 bucket, an SNS topic, ...). Everything
created is tagged `stackql-provider-test:<test-name>`; the runner cleans
up after itself and auto-runs a breadcrumb rollback if a run fails or is
interrupted.

```bash
# full suite against the local registry (run under WSL / Linux)
python3 tests/smoke.py --env-file .env

# against the PUBLISHED provider in the public stackql registry
# (pulls the latest version and prints it, drops the local registry override)
python3 tests/smoke.py --env-file .env --live

# useful flags
python3 tests/smoke.py --list                    # list tests and exit
python3 tests/smoke.py --only caller_identity    # run a subset (no dependency resolution)
python3 tests/smoke.py --rollback                # teardown-only: discover and delete smoke leftovers
python3 tests/smoke.py --no-rollback --verbose   # keep breadcrumbs, print rendered SQL + raw output
python3 tests/smoke.py --rendered-sql out.sql    # export every rendered query executed
```

Credentials come from `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` (or a
dotenv file via `--env-file`). The stackql binary resolves from
`--stackql`, else the `STACKQL` env var, else the manifest default.

## 8. Generate the web docs

```bash
rm -rf website/docs/*
npm run generate-docs -- \
  --provider-name aws \
  --provider-dir ./provider-dev/openapi/src/aws/v00.00.00000 \
  --output-dir ./website \
  --provider-data-dir ./provider-dev/docgen/provider-data
node website/scripts/snake-case-docs.mjs
node website/scripts/sanitize-docs.mjs
node website/scripts/scrub-docs.mjs
```

The snake-case pass (idempotent, safe to re-run) rewrites RESPONSE COLUMN
names from the spec's native Pascal casing to the snake_case the casing
engine renders at the SQL surface (`snake_case_aliases: true`): the
`## Fields` tables, the projection list in `SELECT` examples, and
`RETURNING` clauses in `INSERT`/`UPDATE`/`REPLACE` examples. It uses the
same algorithm as any-sdk's `casing.ToSnake` (botocore `xform_name` plus
the digit rule: `Ipv6Native` -> `ipv_6_native`) so docs match the wire
output exactly. WHERE parameters, Parameters tables and INSERT column
lists keep their wire (Pascal) form - the router accepts both casings for
inputs, and wire casing is canonical there. Because it is idempotent it
also runs automatically before `yarn start` / `yarn build` (via the
`prestart` / `prebuild` hooks) as a guard - a regen that skips it would
otherwise ship Pascal-cased columns silently.

The sanitizer is REQUIRED after every docgen run (it is one-shot, not
idempotent - always regenerate then sanitize once): AWS descriptions carry
literal `<placeholders>`, unpaired HTML, regex patterns and bare URLs that
MDX v3 parses as JSX / expressions / links / GFM autolinks, any of which
fails the Docusaurus build. It escapes description table cells and
method-description prose only; generated structure (tables, Tabs,
CodeBlock examples) is untouched.

The scrub pass (idempotent, safe to re-run - it also auto-runs before
`yarn start` / `yarn build`, like the snake-case pass) then removes `X-Amz-Target`
from everything user-facing (it is the aws-json protocol discriminator -
stackql defaults it from the spec, users never supply it) and
backtick-quotes hyphenated identifiers (`` `x-amz-acl` ``) in SQL samples;
EXEC `@param` lines keep their raw wire form.

Then build / serve locally:

```bash
cd website
yarn
yarn sanitize-docs   # ONLY if not already run - one-shot, never re-run
yarn build           # prebuild runs snake-case-docs + scrub-docs automatically
yarn serve
```

### Deploying

The site is hosted on Netlify but is NOT built there: bundling 6,400+
SSG pages exceeds the memory of standard hosted build containers, so
managed builds are stopped in the Netlify project settings and deploys
ship the locally built and verified `build/` directory via the Netlify
CLI. The CLI uploads by content digest, so after the first deploy only
changed files transfer.

One-time setup:

```bash
cd website
npx netlify-cli login                          # browser auth
npx netlify-cli link --name stackql-aws-provider
```

Deploy (from WSL / Linux, same environment as the build):

```bash
yarn build
npx netlify-cli deploy --prod --dir build --no-build
```

`--no-build` matters: without it the CLI re-runs the project's build
command itself instead of shipping the `build/` you just verified.

The custom hostname (aws-provider.stackql.io) is configured in Netlify
Domain management, with DNS in the stackql.io zone on Cloudflare.

## Notes on the verb-prefix heuristic

The Python generator maps operation-name prefixes to SQL verbs. The full mapping lives in `openapi-generation/botocore_to_openapi.py:VERB_PREFIXES`. The key design rule:

- `Describe`, `List`, `Get`, `Search`, `Lookup`, `BatchGet` -> `SELECT`
- `Create`, `Register` -> `INSERT`
- `Put` -> `REPLACE`
- `Update` -> `UPDATE`
- `Delete`, `Deregister`, `Terminate` -> `DELETE`
- everything else (`Modify`, `Attach`, `Detach`, `Enable`, `Disable`, `Tag`, `Allocate`, `Authorize`, `Start`, `Stop`, ...) -> `EXEC`

The resource name is the operation's *noun* part after the verb prefix is stripped, always pluralised (`DescribeVolumes` -> `volumes`, `CreateVolume` -> `volumes`, `AttachVolume` -> `volumes`). This co-locates the full CRUD-and-lifecycle surface for an entity under a single stackql resource - matching the convention used in `ref/iam.yaml`'s `access_keys` resource (Create + Delete + Update + List all together).

EXEC verbs are kept off the CRUD verb lists so the test-meta-routes signature-uniqueness check passes - e.g. `AttachVolume`, `DetachVolume`, and `ModifyVolume` all require `[VolumeId]`, which would collide if they shared an `UPDATE` slot. They live in `methods:` and are callable via stackql's `EXEC` clause.

## Pagination

Stage 1 reads each service's `paginators-1.json` and, for simple paginators
(single string `input_token` / `output_token`, both plain top-level members),
stamps breadcrumbs that stage 2 folds into the method's
`config.pagination.{requestToken,responseToken}` block. stackql then
traverses pages transparently: the response token is extracted from the raw
JSON body via JSONPath and re-injected into the next request (query param or
re-marshalled body) until absent.

Currently emitted for **rest-json and aws-json** list ops (~2,650 methods).
The XML protocols (query / ec2 / rest-xml) are gated off: their responses
pass through the `schema_driven_xml` walker, which drops the sibling
response token from its output - tracked upstream as
https://github.com/stackql/any-sdk/issues/117; once released, lift the
protocol gate in `_pagination_breadcrumbs` (`openapi-generation/
botocore_to_openapi.py`) and the response token key becomes `$.` + the
output member's XML wire name.

## TODOs

1. Lift the pagination protocol gate for query / ec2 / rest-xml once the
   any-sdk `schema_driven_xml` token-passthrough fix is released
   (https://github.com/stackql/any-sdk/issues/117).

## License

MIT
