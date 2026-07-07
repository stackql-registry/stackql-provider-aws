# AWS provider smoke tests

A pluggable, manifest-driven smoke suite that proves the provider "just
works": full INSERT / SELECT / UPDATE / DELETE lifecycles for important
resources across all four AWS wire protocols, with every created resource
torn down and its absence verified.

| Protocol | Resource | Lifecycle |
|----------|----------|-----------|
| ec2 | `aws.ec2.vpcs` + `vpc_attributes` | create (id via `RETURNING`), list, get, nested-struct update, verify, delete, confirm gone |
| ec2 | `aws.ec2.instances` (+ `subnets`, `instance_attributes`) | compute lifecycle: subnet create, AMI lookup via SSM, INSERT (RunInstances via durable-mappings CSV pin), poll running, EXEC stop, poll stopped, EXEC start, poll running, attribute update + verify, DELETE (terminate), poll terminated, subnet delete |
| query | `aws.sns.topics` + `topic_attributes` | create (arn captured lazily via follow-up select), update, verify, delete, confirm gone |
| rest-xml | `aws.s3.buckets` | create (path-param routed, account-namespaced name), list, delete, confirm gone |
| aws-json | `aws.dynamodb.tables` | create (list-of-struct body), poll ACTIVE, update, verify, delete, poll gone |
| aws-json | `aws.dynamodb.items` | data-plane ops interleaved with the table lifecycle: REPLACE (PutItem) x2, point SELECT (GetItem, ConsistentRead) x2, DELETE (DeleteItem) x2, confirm gone |

Plus read-only smokes: `sts` (query global + account id export), `iam`
(query global list), `lambda` (rest-json list).

## Running

The stackql binary is a Linux ELF - run under WSL (or any Linux). Needs
python3 with `pyyaml` and `jinja2`.

```bash
cd stackql_aws_provider
python3 tests/smoke.py --env-file .env          # full suite
python3 tests/smoke.py --list                   # show tests
python3 tests/smoke.py --only vpc_create,vpc_delete
python3 tests/smoke.py --verbose                # print rendered queries + raw output
python3 tests/smoke.py --env-file .env --rendered-sql rendered.sql
                                                # also write every executed query to one
                                                # SQL file, comment header per test, with
                                                # exports resolved to their live values
python3 tests/smoke.py --env-file .env --rollback
                                                # teardown-only: live-discover and delete
                                                # every smoke breadcrumb (see below)
```

## Rollback (self-cleaning)

A failed or Ctrl+C'd run can strand live resources (manifest cleanups only
cover the export chain that materialised). The suite is self-cleaning: any
run that ends with failures or an interrupt automatically runs the
rollback (`--no-rollback` disables it), and `--rollback` runs it
standalone. The rollback ignores exports entirely - it rediscovers state
live: smoke VPCs by CIDR, their subnets, instances by the
`stackql-provider-test` tag OR smoke-subnet occupancy, then the sns topic
/ s3 bucket / dynamodb table by name. Every mutation is a singleton
statement, and phases are paced with stackql's native `sleep <ms>`
statement while waiting on AWS state transitions (instance termination
releasing the subnet).

`--env-file` parses `KEY=VALUE` lines (CRLF-safe - a stray `\r` in a
credential breaks sigv4) and exports them; alternatively export
`AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` yourself. The binary defaults
to `config.stackql` in the manifest (`../.bin/stackql`), overridable with
`--stackql` or the `STACKQL` env var. Exit code is non-zero on any failure.

## How it works

- Each test is an `.iql` file under `queries/` - plain stackql, or a Jinja2
  template. Full-line `--` SQL comments are fine (the runner passes the
  query after an argv `--` separator so they are not parsed as CLI flags).
- `manifest.yaml` runs tests in order. Queries execute with
  `--output json`; expectations match against raw stdout+stderr.
- A test's `exports` publish values into a shared map as
  `{test_name}.{export_name}`; later templates (queries AND `contains` /
  `not_contains` needles AND `regex` export patterns) reference them as
  `{{ test_name.export_name }}`.
  - Eager ids: `INSERT ... RETURNING vpc_id` + `column: vpc_id`.
  - Lazy ids: follow-up `SELECT` + `regex:` export (first capture group,
    else the whole match).
- On a failure, subsequent tests are SKIPPED except those marked
  `always_run: true` (cleanup steps), so nothing leaks. A cleanup step
  whose template references an export that never materialised is skipped
  automatically.
- Every test's output is screened against fatal error patterns
  ("duplicate column name", "aborting DDL run", ...) regardless of its
  expectations and even under `allow_error` - stackql exits 0 for several
  of these, so exit-code checks alone would miss them. Override the list
  with `config.fatal_patterns` in the manifest.

## Manifest schema

```yaml
config:
  registry_path: ../provider-dev/openapi   # relative to the manifest
  queries_dir: queries
  stackql: ../.bin/stackql
  query_timeout_seconds: 300

vars:                       # globals available to every template
  region: ap-southeast-2

tests:
  - name: my_test           # unique; namespace for exports
    description: optional
    file: subdir/query.iql  # relative to queries_dir
    always_run: false       # run even after an earlier failure (cleanups)
    retry:                  # re-run until expectations pass (async states)
      attempts: 10
      delay_seconds: 8
    expect:                 # all optional; no expect = "exit code 0"
      allow_error: true     # tolerate non-zero exit (e.g. not-found probes)
      min_rows: 1           # parsed from the JSON result
      contains: ["{{ other_test.id }}"]      # substring of raw output
      not_contains: ["{{ other_test.id }}"]
    exports:
      - name: my_id
        column: vpc_id      # from the JSON result; optional `row:` (default 0)
      - name: arn
        regex: 'arn:aws:sns:\S+:{{ topic_name }}'   # jinja-rendered pattern
```

Gotchas learned the hard way:

- JSON column keys are the snake aliases (`vpc_id`, `account`).
- A column whose value is itself a JSON string arrives escaped inside
  `--output json` - assert on bare tokens, not on `"key":"value"` fragments.
- Struct-valued query params need the `JSON('...')` wrapper (see
  `ec2/vpc_attr_update.iql`); aws-json list-of-struct body fields are plain
  JSON strings (see `dynamodb/table_create.iql`).
- `JSON()` parses in SELECT WHERE but does NOT transpose to the wire, and
  is rejected outright in DELETE WHERE. Plain JSON-array strings go to the
  wire VERBATIM (InvalidInstanceID.Malformed). Net: scope SELECTs by column
  equality (client-side SQL, see `ec2/instance_state.iql`) and make every
  mutation a singleton scalar (`WHERE InstanceId = 'i-...'`,
  `@InstanceId = 'i-...'`) - batch mutations are unsupported
  (stackql/stackql#683); use one DELETE per target.
- `REPLACE` is UPDATE-shaped, not INSERT-shaped: `REPLACE <table> SET
  <body fields> WHERE <routing keys>` (see `dynamodb/item_put_1.iql`).
- EXEC methods take wire-cased named params (`@InstanceIds = '["i-..."]'`);
  body-bearing exec ops can also take `@@json='{...}'`. Query/ec2 exec
  methods carry no `request` block by design - the exec analyzer hard-fails
  on a `request` block without a body schema.
- Terminated EC2 instances stay visible in DescribeInstances for up to an
  hour - assert `state = terminated`, not absence from the list.

## Adding a test

1. Drop an `.iql` file under `queries/<service>/`.
2. Append an entry to `manifest.yaml` (order matters; put it after any test
   whose exports it references).
3. If it creates anything, add `delete` + `confirm gone` steps with
   `always_run: true`.
4. `python3 tests/smoke.py --only your_test --verbose` to iterate.
