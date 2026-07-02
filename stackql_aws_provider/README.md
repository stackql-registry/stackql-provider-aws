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

stackql --registry="$REG" exec "SHOW PROVIDERS"
stackql --registry="$REG" exec "SHOW SERVICES IN aws"
stackql --registry="$REG" exec "SHOW RESOURCES IN aws.ec2"
stackql --registry="$REG" exec "SHOW METHODS IN aws.ec2.volumes"
stackql --registry="$REG" exec "DESCRIBE EXTENDED aws.iam.access_keys"
```

`SHOW METHODS` should show non-empty `RequiredParams` columns for path-keyed operations and `AccessKeyId`/`UserName`/etc for the query-protocol services.

## 4. Run the wire-server meta-route test suite

```bash
npm run start-server
npm run test-meta-routes -- aws --verbose
npm run stop-server
```

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
SELECT VolumeId, Size, AvailabilityZone, State
FROM aws.ec2.volumes
WHERE region = 'us-east-1';

-- rest-json service
SELECT FunctionName, Runtime, LastModified
FROM aws.lambda.functions
WHERE region = 'us-east-1';

-- query service (no region path-param needed for global IAM)
SELECT UserName, CreateDate, PasswordLastUsed
FROM aws.iam.users;

-- aws-json service
SELECT TableName, TableStatus, ItemCount
FROM aws.dynamodb.tables
WHERE region = 'us-east-1';
```

## 6. Generate the web docs

```bash
rm -rf website/docs/*
npm run generate-docs -- \
  --provider-name aws \
  --provider-dir ./provider-dev/openapi/src/aws/v00.00.00000 \
  --output-dir ./website \
  --provider-data-dir ./provider-dev/docgen/provider-data
```

Then build / serve locally:

```bash
cd website
yarn build
yarn start
```

## Repository layout

```
stackql_aws_provider/
├── bin/                                shell wrappers + meta-route tests
│   ├── generate-openapi.sh             wraps openapi-generation/botocore_to_openapi.py
│   ├── generate-provider.sh            wraps provider-dev/scripts/generate-provider.mjs
│   ├── start-server.sh                 start stackql pg-wire server against local registry
│   ├── stop-server.sh
│   ├── server-status.sh
│   └── test-meta-routes.cjs            connects via pgwire-lite, walks the metadata graph
├── openapi-generation/
│   └── botocore_to_openapi.py          stage 1 - botocore -> source spec
├── provider-dev/
│   ├── source/                         stage 1 output (per-service OpenAPI)
│   ├── scripts/
│   │   └── generate-provider.mjs       stage 2 - source spec -> stackql provider
│   ├── openapi/src/aws/v00.00.00000/   stage 2 output (the published provider)
│   ├── config/                         (reserved - the analyze step is short-circuited)
│   └── docgen/provider-data/           docusaurus header content
├── website/                            docusaurus microsite
├── package.json
├── .npmrc                              wires @jsr to npm.jsr.io
└── README.md
```

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

## Integration tests

```bash
AWS_RUN_DML_TESTS=1 STACKQL=./stackql bash bin/integration-tests.sh --select-only 2>&1 | tail -30
```

## TODOs

1. Add pagination block emission for list ops that botocore declares paginators for

## License

MIT
