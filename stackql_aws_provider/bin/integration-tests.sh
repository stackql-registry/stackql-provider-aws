#!/bin/bash
# Integration test harness — exercises every protocol/regime archetype
# we've identified against a regenerated provider. Each test names what
# it's checking. Run after `npm run generate-openapi && npm run generate-provider`.
#
# This is a regression harness, NOT a unit test. It hits live AWS so
# requires AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in environment.
# The DESCRIBE EXTENDED tests work offline (no API call), the SELECTs
# need credentials.
#
# Usage:
#   bash bin/integration-tests.sh                       # run all
#   bash bin/integration-tests.sh --describe-only       # skip SELECTs
#   bash bin/integration-tests.sh --select-only         # skip DESCRIBEs
#   bash bin/integration-tests.sh --auth-smoke-test-only # one auth-only
#                                                         SELECT per service.
#                                                         Pass = no
#                                                         SignatureDoesNotMatch
#                                                         in response. Needs
#                                                         AWS credentials.

set -uo pipefail

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
BASE_DIR="$( cd "$DIR/.." && pwd )"
STACKQL="${STACKQL:-stackql}"

# Build the registry URL. The default uses `pwd`-style paths which work
# transparently for:
#   - Linux binary on native Linux        (/home/... or wherever)
#   - Linux binary under WSL              (/mnt/c/... - WSL can resolve it)
# A Windows stackql binary running under WSL / MINGW can NOT read
# /mnt/c/... — it needs C:/... — so sniff the binary header and rewrite
# the path only when the binary is a Windows PE (`MZ` magic).
NEEDS_WIN_PATH=0
_BIN_PATH=$(command -v "$STACKQL" 2>/dev/null || echo "$STACKQL")
if [[ -r "$_BIN_PATH" ]]; then
  _MAGIC=$(head -c 2 "$_BIN_PATH" 2>/dev/null || true)
  [[ "$_MAGIC" == "MZ" ]] && NEEDS_WIN_PATH=1
fi

if (( NEEDS_WIN_PATH == 1 )); then
  if [[ -n "${WSL_DISTRO_NAME:-}" ]]; then
    BASE_DIR_FOR_URL=$(echo "$BASE_DIR" | sed -E 's|^/mnt/([a-z])/|\U\1:/|')
  elif pwd -W >/dev/null 2>&1; then
    BASE_DIR_FOR_URL=$(cd "$BASE_DIR" && pwd -W)
  else
    BASE_DIR_FOR_URL="$BASE_DIR"
  fi
else
  BASE_DIR_FOR_URL="$BASE_DIR"
fi
REG_PATH="${REG_PATH:-${BASE_DIR_FOR_URL}/provider-dev/openapi}"
REG="{\"url\":\"file://${REG_PATH}\",\"localDocRoot\":\"${REG_PATH}\",\"verifyConfig\":{\"nopVerify\":true}}"

MODE="all"
case "${1:-}" in
  --describe-only)         MODE="describe" ;;
  --select-only)           MODE="select" ;;
  --auth-smoke-test-only)  MODE="auth_smoke" ;;
esac

PASS=0
FAIL=0
FAILURES=()

run_test() {
  local name="$1"
  local kind="$2"  # describe | select
  local query="$3"
  local expect="${4:-}"  # optional grep pattern that must be in output

  if [[ "$MODE" == "describe" && "$kind" != "describe" ]]; then return; fi
  if [[ "$MODE" == "select" && "$kind" != "select" ]]; then return; fi
  if [[ "$MODE" == "auth_smoke" ]]; then return; fi

  printf "  %-60s " "$name"
  output=$("$STACKQL" --registry="$REG" exec "$query" 2>&1)
  status=$?

  if [[ $status -ne 0 ]]; then
    echo "FAIL (exit $status)"
    FAILURES+=("$name: $output")
    ((FAIL++))
    return
  fi

  # Specific failure patterns we always treat as failure
  if echo "$output" | grep -qiE "duplicate column name|error processing response|failed to transform|schema unsuitable|SELECT not supported|no items present in schema"; then
    echo "FAIL (error in output)"
    FAILURES+=("$name: $(echo "$output" | head -3)")
    ((FAIL++))
    return
  fi

  # Case-insensitive pattern match. We use -i because stackql sometimes
  # wraps wide table output across lines and the column-name fragments
  # can land mid-word; matching loosely confirms the column exists
  # somewhere in the output without requiring exact case or position.
  if [[ -n "$expect" ]]; then
    # Write output to a temp file rather than piping through `echo`/`printf`
    # — for very large outputs (>64KB) some shells truncate or mishandle
    # the substitution. File-based grep is bulletproof.
    local _tmp
    _tmp=$(mktemp)
    printf '%s' "$output" > "$_tmp"
    if ! grep -qiE -- "$expect" "$_tmp"; then
      echo "FAIL (expected pattern not found: $expect)"
      FAILURES+=("$name: pattern not found (output len=${#output})")
      rm -f "$_tmp"
      ((FAIL++)) || true
      return
    fi
    rm -f "$_tmp"
  fi

  echo "ok"
  ((PASS++))
}

echo
echo "==================================================================="
echo "  stackql AWS provider integration tests"
echo "==================================================================="
echo "Registry: $REG_PATH"
echo "Mode:     $MODE"
echo

# Auth-smoke mode runs an entirely different test set (one SELECT per
# service, signature-scope check) so jump straight to that branch and skip
# the curated archetype tests below.
if [[ "$MODE" != "auth_smoke" ]]; then

echo "--- ec2 protocol (XML list response) ---"
run_test "DESCRIBE ec2.volumes"               describe "DESCRIBE EXTENDED aws.ec2.volumes"                                              "volume_id"
run_test "DESCRIBE ec2.account_attributes"    describe "DESCRIBE EXTENDED aws.ec2.account_attributes"                                  "attribute_name"
run_test "SELECT ec2.volumes (ap-se-2)"        select   "SELECT * FROM aws.ec2.volumes WHERE region = 'ap-southeast-2' LIMIT 2"
run_test "SELECT ec2.account_attributes"       select   "SELECT * FROM aws.ec2.account_attributes WHERE region = 'ap-southeast-2'"
# Tier 1 shape checks: explicit projection on ec2.volumes exercising
# scalar types (string/int/bool), enum-like state, AZ pattern, and
# complex columns (attachments/tags) that arrive as JSON-or-null.
# Patterns are deliberately loose — they assert type/shape, not values.
run_test "SELECT ec2.volumes shape (volume_id)" select \
  "SELECT volume_id, encrypted, multi_attach_enabled, size, state, availability_zone, attachments, tags FROM aws.ec2.volumes WHERE region = 'ap-southeast-2' LIMIT 5" \
  "vol-[0-9a-f]+"
run_test "SELECT ec2.volumes shape (booleans)" select \
  "SELECT volume_id, encrypted, multi_attach_enabled, size, state, availability_zone, attachments, tags FROM aws.ec2.volumes WHERE region = 'ap-southeast-2' LIMIT 5" \
  "(true|false)[[:space:]]*\\|"
run_test "SELECT ec2.volumes shape (state enum)" select \
  "SELECT volume_id, encrypted, multi_attach_enabled, size, state, availability_zone, attachments, tags FROM aws.ec2.volumes WHERE region = 'ap-southeast-2' LIMIT 5" \
  "[[:space:]](available|in-use|creating|deleting|deleted)[[:space:]]"
run_test "SELECT ec2.volumes shape (AZ)" select \
  "SELECT volume_id, encrypted, multi_attach_enabled, size, state, availability_zone, attachments, tags FROM aws.ec2.volumes WHERE region = 'ap-southeast-2' LIMIT 5" \
  "ap-southeast-2[a-z]"
# Tier 1 shape checks: ec2.account_attributes exercises scalar list
# inside row (attribute_values) — JSON object with "item" key, plus
# known attribute_name values present in any AWS account.
run_test "SELECT ec2.account_attributes shape (name)" select \
  "SELECT * FROM aws.ec2.account_attributes WHERE region = 'ap-southeast-2'" \
  "(supported-platforms|max-instances|max-elastic-ips|default-vpc)"
run_test "SELECT ec2.account_attributes shape (item)" select \
  "SELECT * FROM aws.ec2.account_attributes WHERE region = 'ap-southeast-2'" \
  "\\{.*\"item\".*\"attributeValue\""

# --- DML round-trip: INSERT...RETURNING then DELETE ----------------------
# Creates a real VPC in ap-southeast-2 and tears it back down. Opt-in via
# AWS_RUN_DML_TESTS=1 because it costs money and leaves resource traces if
# the cleanup step fails. CIDR 10.99.0.0/16 picked to avoid collision with
# common defaults; override via DML_VPC_CIDR if it clashes locally.
#
# Pass criteria:
#   1. INSERT...RETURNING projects vpc-<hex> and the requested CIDR.
#   2. The vpc_id can be extracted and fed back into a DELETE that AWS
#      accepts (no error pattern in output).
#
# We don't assert anything about the DELETE's stdout shape - DeleteVpc has
# no output shape per rule 15, so stackql renders an affected-row count
# only. If a future stackql version adds a RETURNING-style projection, the
# captured output is logged for inspection.
if [[ "$MODE" != "describe" && "${AWS_RUN_DML_TESTS:-0}" == "1" ]]; then
  echo "--- DML lifecycle (ec2.vpcs: INSERT, SELECT list+get, UPDATE, SELECT verify, DELETE) ---"
  DML_VPC_CIDR="${DML_VPC_CIDR:-10.99.0.0/16}"
  DML_REGION="${AWS_REGION:-ap-southeast-2}"

  # Track resource lifecycle in a single variable so any step's failure
  # can short-circuit but still attempt cleanup.
  vpc_id=""

  # ----- 1. INSERT -----
  insert_query="INSERT INTO aws.ec2.vpcs(region, CidrBlock) SELECT '${DML_REGION}', '${DML_VPC_CIDR}' RETURNING vpc_id, state, cidr_block, owner_id, instance_tenancy, is_default, dhcp_options_id"
  printf "  %-65s " "1. INSERT aws.ec2.vpcs RETURNING projects vpc_id + cidr"
  insert_out=$("$STACKQL" --registry="$REG" exec "$insert_query" 2>&1)
  insert_status=$?
  vpc_id=$(echo "$insert_out" | grep -oE "vpc-[0-9a-f]+" | head -1)
  if (( insert_status != 0 )) || [[ -z "$vpc_id" ]] || ! echo "$insert_out" | grep -qF "${DML_VPC_CIDR}"; then
    echo "FAIL"
    FAILURES+=("INSERT ec2.vpcs: $(echo "$insert_out" | head -5)")
    ((FAIL++)) || true
  else
    echo "ok ($vpc_id)"
    ((PASS++)) || true
  fi

  # ----- 2. SELECT list (find by region) -----
  # Confirms the VPC appears in the list response. Cheap because there's
  # no LIMIT; the list call is the same shape as the prod list query.
  if [[ -n "$vpc_id" ]]; then
    list_query="SELECT vpc_id, state, cidr_block FROM aws.ec2.vpcs WHERE region = '${DML_REGION}'"
    printf "  %-65s " "2. SELECT aws.ec2.vpcs (list) sees the new vpc_id"
    list_out=$("$STACKQL" --registry="$REG" exec "$list_query" 2>&1)
    if echo "$list_out" | grep -qF "${vpc_id}"; then
      echo "ok"
      ((PASS++)) || true
    else
      echo "FAIL"
      FAILURES+=("SELECT list did not find ${vpc_id}: $(echo "$list_out" | head -5)")
      ((FAIL++)) || true
    fi

    # ----- 3. SELECT get (filtered by vpc_id) -----
    # Same describe_vpcs method but with a vpc_id filter. AWS-side this
    # is server-filtered (Filter.Name=vpc-id&Filter.Value=...); stackql
    # routes the WHERE clause's vpc_id into the request.
    get_query="SELECT vpc_id, state, cidr_block, owner_id FROM aws.ec2.vpcs WHERE region = '${DML_REGION}' AND vpc_id = '${vpc_id}'"
    printf "  %-65s " "3. SELECT aws.ec2.vpcs WHERE vpc_id = ... projects row"
    get_out=$("$STACKQL" --registry="$REG" exec "$get_query" 2>&1)
    if echo "$get_out" | grep -qF "${vpc_id}" && echo "$get_out" | grep -qF "${DML_VPC_CIDR}"; then
      echo "ok"
      ((PASS++)) || true
    else
      echo "FAIL"
      FAILURES+=("SELECT by vpc_id missing data: $(echo "$get_out" | head -5)")
      ((FAIL++)) || true
    fi

    # ----- 4. UPDATE - toggle EnableDnsHostnames via modify_vpc_attribute -----
    # ModifyVpcAttribute takes the AttributeBooleanValue wrapper, expressed
    # as `EnableDnsHostnames = JSON('{"Value": true}')` (wire-format inner
    # keys, PascalCase). The JSON() function marks the value for the
    # AWSCanonical query transpose, which fans the struct out to
    # `EnableDnsHostnames.Value=true` on the wire; a bare string would be
    # sent verbatim and AWS rejects it with InvalidRequest. The WHERE key
    # uses snake_case (vpc_id) - step 3 uses it too, step 6 as well - and
    # the casing engine reverse-resolves it to the VpcId wire param.
    #
    # Default VPC behaviour: EnableDnsHostnames=false at creation. We flip
    # it to true. The SELECT-after-update step then re-reads via
    # describe_vpc_attribute to confirm the change took effect.
    update_query="UPDATE aws.ec2.vpc_attributes SET EnableDnsHostnames = JSON('{\"Value\":true}') WHERE region = '${DML_REGION}' AND vpc_id = '${vpc_id}'"
    printf "  %-65s " "4. UPDATE aws.ec2.vpc_attributes (EnableDnsHostnames=true)"
    update_out=$("$STACKQL" --registry="$REG" exec "$update_query" 2>&1)
    if (( $? != 0 )) || echo "$update_out" | grep -qiE "error|fail|denied|invalid|exception"; then
      echo "FAIL"
      FAILURES+=("UPDATE ec2.vpc_attributes: $(echo "$update_out" | head -5)")
      ((FAIL++)) || true
    else
      echo "ok"
      ((PASS++)) || true
    fi

    # ----- 5. SELECT after update - verify change -----
    # describe_vpc_attribute takes (VpcId, Attribute) - we ask for the
    # enableDnsHostnames attribute and confirm the response contains
    # "true". The attribute_values column is a stringified JSON of the
    # AttributeBooleanValue, like `{"Value":"true"}`.
    verify_query="SELECT enable_dns_hostnames FROM aws.ec2.vpc_attributes WHERE region = '${DML_REGION}' AND VpcId = '${vpc_id}' AND Attribute = 'enableDnsHostnames'"
    printf "  %-65s " "5. SELECT aws.ec2.vpc_attributes confirms update"
    verify_out=$("$STACKQL" --registry="$REG" exec "$verify_query" 2>&1)
    if echo "$verify_out" | grep -qiE '"value"[[:space:]]*:[[:space:]]*"?true'; then
      echo "ok"
      ((PASS++)) || true
    else
      echo "FAIL"
      FAILURES+=("SELECT verify did not see EnableDnsHostnames=true: $(echo "$verify_out" | head -5)")
      ((FAIL++)) || true
    fi

    # ----- 6. DELETE - cleanup -----
    # Uses snake_case vpc_id (casing engine reverse-resolves to VpcId).
    delete_query="DELETE FROM aws.ec2.vpcs WHERE region = '${DML_REGION}' AND vpc_id = '${vpc_id}'"
    printf "  %-65s " "6. DELETE aws.ec2.vpcs (${vpc_id}, snake_case)"
    delete_out=$("$STACKQL" --registry="$REG" exec "$delete_query" 2>&1)
    delete_status=$?
    if (( delete_status != 0 )) || echo "$delete_out" | grep -qiE "error|fail|denied|invalid|exception"; then
      echo "FAIL"
      FAILURES+=("DELETE ec2.vpcs ${vpc_id}: $(echo "$delete_out" | head -5)")
      ((FAIL++)) || true
    else
      echo "ok"
      ((PASS++)) || true
    fi

    # ----- 7. SELECT after delete - confirm gone -----
    gone_query="SELECT vpc_id FROM aws.ec2.vpcs WHERE region = '${DML_REGION}'"
    printf "  %-65s " "7. SELECT aws.ec2.vpcs confirms ${vpc_id} gone"
    gone_out=$("$STACKQL" --registry="$REG" exec "$gone_query" 2>&1)
    if echo "$gone_out" | grep -qF "${vpc_id}"; then
      echo "FAIL"
      FAILURES+=("SELECT after DELETE still sees ${vpc_id}")
      ((FAIL++)) || true
    else
      echo "ok"
      ((PASS++)) || true
    fi
  else
    echo "  SKIP: no vpc_id captured from INSERT - subsequent steps skipped"
  fi
fi
# --- end DML lifecycle ----------------------------------------------------

# --- query-protocol DML lifecycle (sns.topics) -------------------------------
# Exercises the plain query protocol end to end: CreateTopic (INSERT),
# ListTopics row shape, SetTopicAttributes (UPDATE on the topic_attributes
# resource), GetTopicAttributes verify, DeleteTopic (snake key), then a
# list to confirm the topic is gone. SNS topics are free.
if [[ "$MODE" != "describe" && "${AWS_RUN_DML_TESTS:-0}" == "1" ]]; then
  echo "--- query-protocol DML lifecycle (sns.topics) ---"
  SNS_TOPIC="${SNS_TEST_TOPIC:-stackql-harness-e2e-topic}"
  SNS_REGION="${AWS_REGION:-ap-southeast-2}"

  printf "  %-65s " "1. INSERT aws.sns.topics (CreateTopic)"
  sns_out=$("$STACKQL" --registry="$REG" exec "INSERT INTO aws.sns.topics(region, Name) SELECT '${SNS_REGION}', '${SNS_TOPIC}'" 2>&1)
  if (( $? != 0 )) || echo "$sns_out" | grep -qiE "error|exception|denied|invalid"; then
    echo "FAIL"
    FAILURES+=("INSERT sns.topics: $(echo "$sns_out" | head -5)")
    ((FAIL++)) || true
  else
    echo "ok"
    ((PASS++)) || true

    sns_arn=$("$STACKQL" --registry="$REG" exec "SELECT topic_arn FROM aws.sns.topics WHERE region = '${SNS_REGION}'" 2>&1 | grep -oE "arn:aws:sns:[a-z0-9-]+:[0-9]+:${SNS_TOPIC}" | head -1)
    printf "  %-65s " "2. SELECT aws.sns.topics (list) sees the topic arn"
    if [[ -n "$sns_arn" ]]; then
      echo "ok"
      ((PASS++)) || true

      printf "  %-65s " "3. UPDATE aws.sns.topic_attributes (DisplayName)"
      sns_upd=$("$STACKQL" --registry="$REG" exec "UPDATE aws.sns.topic_attributes SET AttributeValue = 'stackql-harness-display' WHERE region = '${SNS_REGION}' AND TopicArn = '${sns_arn}' AND AttributeName = 'DisplayName'" 2>&1)
      if (( $? != 0 )) || echo "$sns_upd" | grep -qiE "error|exception|denied|invalid"; then
        echo "FAIL"
        FAILURES+=("UPDATE sns.topic_attributes: $(echo "$sns_upd" | head -5)")
        ((FAIL++)) || true
      else
        echo "ok"
        ((PASS++)) || true
      fi

      printf "  %-65s " "4. SELECT aws.sns.topic_attributes confirms DisplayName"
      sns_verify=$("$STACKQL" --registry="$REG" exec "SELECT * FROM aws.sns.topic_attributes WHERE region = '${SNS_REGION}' AND TopicArn = '${sns_arn}'" 2>&1)
      if echo "$sns_verify" | grep -q "stackql-harness-display"; then
        echo "ok"
        ((PASS++)) || true
      else
        echo "FAIL"
        FAILURES+=("SELECT sns.topic_attributes missing updated DisplayName: $(echo "$sns_verify" | head -3)")
        ((FAIL++)) || true
      fi

      printf "  %-65s " "5. DELETE aws.sns.topics (snake key)"
      sns_del=$("$STACKQL" --registry="$REG" exec "DELETE FROM aws.sns.topics WHERE region = '${SNS_REGION}' AND topic_arn = '${sns_arn}'" 2>&1)
      if (( $? != 0 )) || echo "$sns_del" | grep -qiE "error|exception|denied|invalid"; then
        echo "FAIL"
        FAILURES+=("DELETE sns.topics: $(echo "$sns_del" | head -5)")
        ((FAIL++)) || true
      else
        echo "ok"
        ((PASS++)) || true
      fi

      printf "  %-65s " "6. SELECT aws.sns.topics confirms topic gone"
      sns_gone=$("$STACKQL" --registry="$REG" exec "SELECT topic_arn FROM aws.sns.topics WHERE region = '${SNS_REGION}'" 2>&1)
      if echo "$sns_gone" | grep -qF "$sns_arn"; then
        echo "FAIL"
        FAILURES+=("SELECT after DELETE still sees ${sns_arn}")
        ((FAIL++)) || true
      else
        echo "ok"
        ((PASS++)) || true
      fi
    else
      echo "FAIL"
      FAILURES+=("SELECT sns.topics did not find ${SNS_TOPIC}")
      ((FAIL++)) || true
    fi
  fi
fi
# --- end query-protocol DML lifecycle ----------------------------------------

# --- rest-xml DML lifecycle (s3.buckets) --------------------------------------
# CreateBucket (INSERT, path-param routed, no body - us-east-1 needs no
# LocationConstraint), list shape check, DeleteBucket, list confirms gone.
# Bucket names are global; suffix with the account id to avoid collisions.
if [[ "$MODE" != "describe" && "${AWS_RUN_DML_TESTS:-0}" == "1" ]]; then
  echo "--- rest-xml DML lifecycle (s3.buckets) ---"
  S3_REGION="us-east-1"
  s3_acct=$("$STACKQL" --registry="$REG" exec "SELECT Account FROM aws.sts.caller_identities WHERE region = 'us-east-1'" 2>&1 | grep -oE '[0-9]{12}' | head -1)
  S3_BUCKET="${S3_TEST_BUCKET:-stackql-harness-e2e-${s3_acct:-noacct}}"

  printf "  %-65s " "1. INSERT aws.s3.buckets (CreateBucket ${S3_BUCKET})"
  s3_out=$("$STACKQL" --registry="$REG" exec "INSERT INTO aws.s3.buckets(region, bucket) SELECT '${S3_REGION}', '${S3_BUCKET}'" 2>&1)
  if (( $? != 0 )) || echo "$s3_out" | grep -qiE "error|exception|denied|invalid|malformed"; then
    echo "FAIL"
    FAILURES+=("INSERT s3.buckets: $(echo "$s3_out" | head -5)")
    ((FAIL++)) || true
  else
    echo "ok"
    ((PASS++)) || true

    printf "  %-65s " "2. SELECT aws.s3.buckets (list) sees the bucket + arn"
    s3_list=$("$STACKQL" --registry="$REG" exec "SELECT name, bucket_arn FROM aws.s3.buckets WHERE region = '${S3_REGION}'" 2>&1)
    if echo "$s3_list" | grep -qF "arn:aws:s3:::${S3_BUCKET}"; then
      echo "ok"
      ((PASS++)) || true
    else
      echo "FAIL"
      FAILURES+=("SELECT s3.buckets did not find ${S3_BUCKET}: $(echo "$s3_list" | head -3)")
      ((FAIL++)) || true
    fi

    printf "  %-65s " "3. DELETE aws.s3.buckets (${S3_BUCKET})"
    s3_del=$("$STACKQL" --registry="$REG" exec "DELETE FROM aws.s3.buckets WHERE region = '${S3_REGION}' AND bucket = '${S3_BUCKET}'" 2>&1)
    if (( $? != 0 )) || echo "$s3_del" | grep -qiE "error|exception|denied|invalid"; then
      echo "FAIL"
      FAILURES+=("DELETE s3.buckets: $(echo "$s3_del" | head -5)")
      ((FAIL++)) || true
    else
      echo "ok"
      ((PASS++)) || true
    fi

    printf "  %-65s " "4. SELECT aws.s3.buckets confirms bucket gone"
    s3_gone=$("$STACKQL" --registry="$REG" exec "SELECT name FROM aws.s3.buckets WHERE region = '${S3_REGION}'" 2>&1)
    if echo "$s3_gone" | grep -qF "${S3_BUCKET}"; then
      echo "FAIL"
      FAILURES+=("SELECT after DELETE still sees ${S3_BUCKET}")
      ((FAIL++)) || true
    else
      echo "ok"
      ((PASS++)) || true
    fi
  fi
fi
# --- end rest-xml DML lifecycle -----------------------------------------------

# --- aws-json DML lifecycle (dynamodb.tables) -------------------------------
# Exercises the aws-json (POST-body) protocol end to end: CREATE with a
# list-of-struct body field (KeySchema / AttributeDefinitions passed as JSON
# strings, translated by `requestBodyTranslate: naive` + the spec's native
# body schema), get-by-name, then DELETE. Opt-in via AWS_RUN_DML_TESTS=1.
# PAY_PER_REQUEST billing so the empty table costs nothing while it exists.
if [[ "$MODE" != "describe" && "${AWS_RUN_DML_TESTS:-0}" == "1" ]]; then
  echo "--- aws-json DML lifecycle (dynamodb.tables: INSERT, SELECT get, DELETE) ---"
  DDB_TABLE="${DDB_TEST_TABLE:-stackql-harness-ddb-test}"
  DDB_REGION="${AWS_REGION:-ap-southeast-2}"

  # ----- 1. INSERT (CreateTable) -----
  ddb_insert_query="INSERT INTO aws.dynamodb.tables(region, TableName, KeySchema, AttributeDefinitions, BillingMode) SELECT '${DDB_REGION}', '${DDB_TABLE}', '[{\"AttributeName\":\"pk\",\"KeyType\":\"HASH\"}]', '[{\"AttributeName\":\"pk\",\"AttributeType\":\"S\"}]', 'PAY_PER_REQUEST'"
  printf "  %-65s " "1. INSERT aws.dynamodb.tables (CreateTable)"
  ddb_insert_out=$("$STACKQL" --registry="$REG" exec "$ddb_insert_query" 2>&1)
  ddb_insert_status=$?
  if (( ddb_insert_status != 0 )) || echo "$ddb_insert_out" | grep -qiE "error|exception|denied|invalid"; then
    echo "FAIL"
    FAILURES+=("INSERT dynamodb.tables: $(echo "$ddb_insert_out" | head -5)")
    ((FAIL++)) || true
  else
    echo "ok"
    ((PASS++)) || true

    # ----- 2. SELECT get (DescribeTable) - wait for ACTIVE -----
    # CreateTable is async; poll until table_status reads ACTIVE (or give
    # up after ~60s) so the DELETE step doesn't race the creation.
    printf "  %-65s " "2. SELECT aws.dynamodb.tables sees ${DDB_TABLE} ACTIVE"
    ddb_seen=""
    for _i in 1 2 3 4 5 6; do
      ddb_get_out=$("$STACKQL" --registry="$REG" exec "SELECT * FROM aws.dynamodb.tables WHERE region = '${DDB_REGION}' AND TableName = '${DDB_TABLE}'" 2>&1)
      if echo "$ddb_get_out" | grep -qF "$DDB_TABLE" && echo "$ddb_get_out" | grep -q "ACTIVE"; then
        ddb_seen=1
        break
      fi
      sleep 10
    done
    if [[ -n "$ddb_seen" ]]; then
      echo "ok"
      ((PASS++)) || true
    else
      echo "FAIL"
      FAILURES+=("SELECT dynamodb.tables did not reach ACTIVE: $(echo "$ddb_get_out" | head -5)")
      ((FAIL++)) || true
    fi

    # ----- 3. UPDATE (UpdateTable: TableClass, snake_case where key) -----
    # A string-typed single-field update. (A boolean RHS like
    # DeletionProtectionEnabled=true is not yet supported by stackql's
    # UPDATE parser - sqlparser.BoolVal limitation.)
    printf "  %-65s " "3. UPDATE aws.dynamodb.tables (TableClass)"
    ddb_upd=$("$STACKQL" --registry="$REG" exec "UPDATE aws.dynamodb.tables SET TableClass = 'STANDARD_INFREQUENT_ACCESS' WHERE region = '${DDB_REGION}' AND table_name = '${DDB_TABLE}'" 2>&1)
    if (( $? != 0 )) || echo "$ddb_upd" | grep -qiE "error|exception|denied|invalid"; then
      echo "FAIL"
      FAILURES+=("UPDATE dynamodb.tables: $(echo "$ddb_upd" | head -5)")
      ((FAIL++)) || true
    else
      echo "ok"
      ((PASS++)) || true
    fi

    # ----- 4. SELECT verify the update took -----
    printf "  %-65s " "4. SELECT aws.dynamodb.tables confirms TableClass"
    ddb_verify=""
    for _i in 1 2 3; do
      ddb_verify=$("$STACKQL" --registry="$REG" exec "SELECT * FROM aws.dynamodb.tables WHERE region = '${DDB_REGION}' AND TableName = '${DDB_TABLE}'" 2>&1)
      echo "$ddb_verify" | grep -q "STANDARD_INFREQUENT_ACCESS" && break
      sleep 5
    done
    if echo "$ddb_verify" | grep -q "STANDARD_INFREQUENT_ACCESS"; then
      echo "ok"
      ((PASS++)) || true
    else
      echo "FAIL"
      FAILURES+=("SELECT verify did not see TableClass update: $(echo "$ddb_verify" | head -3)")
      ((FAIL++)) || true
    fi

    # ----- 5. DELETE (DeleteTable, snake_case key) -----
    printf "  %-65s " "5. DELETE aws.dynamodb.tables (${DDB_TABLE})"
    ddb_delete_out=$("$STACKQL" --registry="$REG" exec "DELETE FROM aws.dynamodb.tables WHERE region = '${DDB_REGION}' AND table_name = '${DDB_TABLE}'" 2>&1)
    ddb_delete_status=$?
    if (( ddb_delete_status != 0 )) || echo "$ddb_delete_out" | grep -qiE "error|exception|denied|invalid"; then
      echo "FAIL"
      FAILURES+=("DELETE dynamodb.tables ${DDB_TABLE}: $(echo "$ddb_delete_out" | head -5)")
      ((FAIL++)) || true
    else
      echo "ok"
      ((PASS++)) || true
    fi

    # ----- 6. SELECT confirms the table is gone -----
    # DescribeTable on a missing table returns ResourceNotFoundException;
    # deletion takes a few seconds so poll briefly.
    printf "  %-65s " "6. SELECT aws.dynamodb.tables confirms table gone"
    ddb_gone=""
    for _i in 1 2 3 4 5 6; do
      ddb_gone=$("$STACKQL" --registry="$REG" exec "SELECT * FROM aws.dynamodb.tables WHERE region = '${DDB_REGION}' AND TableName = '${DDB_TABLE}'" 2>&1)
      echo "$ddb_gone" | grep -q "ResourceNotFoundException" && break
      sleep 8
    done
    if echo "$ddb_gone" | grep -q "ResourceNotFoundException"; then
      echo "ok"
      ((PASS++)) || true
    else
      echo "FAIL"
      FAILURES+=("table still present after DELETE: $(echo "$ddb_gone" | head -3)")
      ((FAIL++)) || true
    fi
  fi
fi
# --- end aws-json DML lifecycle ---------------------------------------------

echo "--- query protocol regional (XML wrapped in resultWrapper) ---"
run_test "DESCRIBE cloudformation.stacks"     describe "DESCRIBE EXTENDED aws.cloudformation.stacks"                                   "stack_name|StackName"
run_test "DESCRIBE autoscaling.auto_scaling_groups" describe "DESCRIBE EXTENDED aws.autoscaling.auto_scaling_groups"                   "auto_scaling_group_name|AutoScalingGroupName"
run_test "DESCRIBE rds.db_instances"          describe "DESCRIBE EXTENDED aws.rds.db_instances"                                        "db_instance|DBInstance"
run_test "DESCRIBE elbv2.load_balancers"      describe "DESCRIBE EXTENDED aws.elbv2.load_balancers"                                    "load_balancer|LoadBalancer"
run_test "DESCRIBE sns.topics"                describe "DESCRIBE EXTENDED aws.sns.topics"                                              "topic_arn|TopicArn"
run_test "SELECT cloudformation.stacks"        select   "SELECT * FROM aws.cloudformation.stacks WHERE region = 'ap-southeast-2'"
run_test "SELECT autoscaling.auto_scaling_groups" select "SELECT * FROM aws.autoscaling.auto_scaling_groups WHERE region = 'ap-southeast-2'"
run_test "SELECT rds.db_instances"             select   "SELECT * FROM aws.rds.db_instances WHERE region = 'ap-southeast-2'"
run_test "SELECT sns.topics"                   select   "SELECT * FROM aws.sns.topics WHERE region = 'ap-southeast-2'"

echo "--- query protocol global endpoint ---"
run_test "DESCRIBE iam.users"                 describe "DESCRIBE EXTENDED aws.iam.users"                                               "user_name"
run_test "DESCRIBE iam.access_keys"           describe "DESCRIBE EXTENDED aws.iam.access_keys"                                         "access_key_id"
run_test "DESCRIBE sts.caller_identities"     describe "DESCRIBE EXTENDED aws.sts.caller_identities"                                   "user_id"
run_test "SELECT iam.users (us-east-1)"        select   "SELECT * FROM aws.iam.users WHERE region = 'us-east-1' LIMIT 2"               "user_name"
run_test "SELECT sts.caller_identities"        select   "SELECT * FROM aws.sts.caller_identities WHERE region = 'us-east-1'"           "Account|user_id"

echo "--- rest-xml regional & global ---"
run_test "DESCRIBE route53.hosted_zones"      describe "DESCRIBE EXTENDED aws.route53.hosted_zones"                                    "caller_reference|resource_record_set_count"
run_test "DESCRIBE cloudfront.distributions"  describe "DESCRIBE EXTENDED aws.cloudfront.distributions"                                "domain_name|distribution_config|active_trusted_signers"
# rest-xml per-row projection: confirms the rest-xml display transform
# (rule 15, rest-xml variant) produces snake_case columns and lands one
# row per bucket, not a single dumped-doc row. The path-collision fix
# (?x-id=<OpName> uniquifier) is what made list_buckets reachable in the
# first place.
run_test "DESCRIBE s3.buckets columns"        describe "DESCRIBE EXTENDED aws.s3.buckets"                                              "name.*string.*name of the bucket|bucket_arn|creation_date"
run_test "SELECT s3.buckets shape (bucket arn)" select \
  "SELECT name, creation_date, bucket_arn FROM aws.s3.buckets WHERE region = 'us-east-1'" \
  "arn:aws:s3:::[a-z0-9._-]+"
run_test "SELECT s3.buckets shape (creation date)" select \
  "SELECT name, creation_date, bucket_arn FROM aws.s3.buckets WHERE region = 'us-east-1'" \
  "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}"
# Route 53 hosted_zones: exercises rest-xml singleton-unwrap regime (Get*
# ops, rule 23) plus the list response. The DESCRIBE check pulls
# snake_case columns from the Display synthesis; SELECT shape checks
# confirm runtime row projection. The `id` value AWS returns is path-
# style (`/hostedzone/<id>`) so the pattern matches that prefix.
run_test "DESCRIBE route53.hosted_zones columns" describe \
  "DESCRIBE EXTENDED aws.route53.hosted_zones" \
  "id.*string|caller_reference.*string|resource_record_set_count.*integer"
run_test "SELECT route53.hosted_zones shape (id)" select \
  "SELECT id, name, caller_reference, resource_record_set_count FROM aws.route53.hosted_zones WHERE region = 'us-east-1'" \
  "/hostedzone/[A-Z0-9]+"
run_test "SELECT route53.hosted_zones shape (name)" select \
  "SELECT id, name, caller_reference, resource_record_set_count FROM aws.route53.hosted_zones WHERE region = 'us-east-1'" \
  "[a-z0-9.-]+\\."

echo "--- rest-json regional ---"
run_test "DESCRIBE lambda.functions"          describe "DESCRIBE EXTENDED aws.lambda.functions"                                        "function|Function"
# Lambda is rest-json. We've stamped `objectKey: $.Functions` on
# list_functions per rule 13 (extension for rest-json list ops). HOWEVER
# stackql's column inference is schema-driven, not runtime-driven - the
# table's column set comes from the path-level response schema, which
# for rest-json is still the raw response shape (e.g. GetFunctionResponse
# with top-level `Configuration/Code/Tags/...` wrappers). So
# `SELECT FunctionName FROM aws.lambda.functions` fails with "no such
# column".
#
# Workaround for users today: JSON_EXTRACT from the wrapper columns.
# This is also the test we run here - it exercises get_function with
# a function_name filter, then unwraps Configuration.FunctionName.
run_test "SELECT lambda.functions get + JSON_EXTRACT (arn)" select \
  "SELECT JSON_EXTRACT(Configuration, '\$.FunctionArn') AS function_arn FROM aws.lambda.functions WHERE region = 'us-east-1' AND function_name = '${AWS_LAMBDA_TEST_FN:-stackql-helloworld-fn}'" \
  "arn:aws:lambda:[a-z0-9-]+:[0-9]+:function:[A-Za-z0-9._-]+"

echo "--- aws-json (POST-body protocol) ---"
run_test "DESCRIBE dynamodb.tables"           describe "DESCRIBE EXTENDED aws.dynamodb.tables"                                         "table|Table"

echo "--- JSON column round-trip (complex value -> JSON_EXTRACT) ---"
run_test "JSON_EXTRACT ec2.volumes.operator" select "SELECT volume_id, JSON_EXTRACT(operator, '\$.managed') AS managed FROM aws.ec2.volumes WHERE region = 'ap-southeast-2' LIMIT 2"

echo "--- meta-route invariants ---"
run_test "SHOW PROVIDERS contains aws"        describe "SHOW PROVIDERS"                                                                "aws"
run_test "SHOW SERVICES IN aws (sample)"      describe "SHOW SERVICES IN aws"                                                          "ec2|iam|rds"
run_test "SHOW RESOURCES IN aws.ec2"          describe "SHOW RESOURCES IN aws.ec2"                                                     "volume|instance"
run_test "SHOW METHODS IN aws.ec2.volumes"    describe "SHOW METHODS IN aws.ec2.volumes"                                               "describe_volumes"

fi  # end normal-mode test block

# --- auth smoke test mode --------------------------------------------------
# One LIMIT-1 SELECT per service against an informational/list-style method
# with no required AWS-level params (just region). Pass = response does NOT
# contain SignatureDoesNotMatch / "Credential should be scoped". Any other
# AWS-side response (empty rows, ValidationError, AccessDenied, throttle)
# counts as pass because it proves the request was signed with the right
# service scope.
#
# Skips:
#   - Services whose every selectable method needs a resource ID (the picker
#     reports these via stderr).
#   - JSON column-round-trip / meta-route tests (irrelevant for auth scope).
if [[ "$MODE" == "auth_smoke" ]]; then
  if ! command -v python >/dev/null 2>&1 && ! command -v python3 >/dev/null 2>&1; then
    echo "auth-smoke-test-only requires python or python3 on PATH"
    exit 2
  fi
  PYBIN=$(command -v python || command -v python3)
  TARGET_REGION="${AWS_REGION:-ap-southeast-2}"
  GLOBAL_REGION="${AWS_GLOBAL_REGION:-us-east-1}"

  echo "--- auth smoke (one LIMIT 1 SELECT per service, signature-scope check) ---"
  echo "  regional region: $TARGET_REGION   global region: $GLOBAL_REGION"
  echo

  # Generate the target list. Stderr (skipped services) is captured separately
  # so we can summarise after.
  SMOKE_TMP=$(mktemp -d)
  trap 'rm -rf "$SMOKE_TMP"' EXIT
  if ! "$PYBIN" "$DIR/select-auth-smoke-targets.py" \
        > "$SMOKE_TMP/targets.tsv" 2> "$SMOKE_TMP/skipped.txt"; then
    echo "FAIL (target picker errored)"
    cat "$SMOKE_TMP/skipped.txt" | head -20
    exit 1
  fi
  TARGET_COUNT=$(wc -l < "$SMOKE_TMP/targets.tsv" | tr -d ' ')
  SKIPPED_COUNT=$(grep -c '^#  ' "$SMOKE_TMP/skipped.txt" 2>/dev/null || echo 0)
  echo "  targets: $TARGET_COUNT, skipped services (no eligible method): $SKIPPED_COUNT"
  echo

  SMOKE_PASS=0
  SMOKE_FAIL=0
  SMOKE_FAILURES=()
  while IFS=$'\t' read -r svc resource method is_global; do
    [[ -z "$svc" ]] && continue
    region="$TARGET_REGION"
    [[ "$is_global" == "1" ]] && region="$GLOBAL_REGION"
    query="SELECT 1 FROM aws.${svc}.${resource} WHERE region = '${region}' LIMIT 1"
    printf "  %-65s " "${svc}.${resource} (${method})"
    output=$("$STACKQL" --registry="$REG" exec "$query" 2>&1)
    # We DON'T care about exit status here. AWS returning ValidationError or
    # AccessDenied is exit 0 (stackql renders the body as text); some
    # transforms may also fail with non-zero. The ONLY thing that fails the
    # smoke test is a sigv4 scope mismatch.
    if echo "$output" | grep -qiE "SignatureDoesNotMatch|Credential should be scoped to (the )?correct service"; then
      echo "FAIL (sigv4 scope mismatch)"
      # Pull the AWS error message line for the failure list.
      msg=$(echo "$output" | grep -iE "Credential should be scoped|SignatureDoesNotMatch" | head -1 | tr -s ' \t')
      SMOKE_FAILURES+=("${svc}.${resource}: ${msg}")
      ((SMOKE_FAIL++)) || true
    else
      echo "ok"
      ((SMOKE_PASS++)) || true
    fi
  done < "$SMOKE_TMP/targets.tsv"

  echo
  echo "==================================================================="
  echo "  Auth smoke results: $SMOKE_PASS passed, $SMOKE_FAIL failed"
  echo "  Services without an eligible smoke target: $SKIPPED_COUNT"
  echo "==================================================================="
  if (( SMOKE_FAIL > 0 )); then
    echo
    echo "Sigv4 scope mismatches:"
    for f in "${SMOKE_FAILURES[@]}"; do
      echo "  - $f"
    done | head -50
    exit 1
  fi
  exit 0
fi
# --- end auth smoke -------------------------------------------------------

echo
echo "==================================================================="
echo "  Results: $PASS passed, $FAIL failed"
echo "==================================================================="

if (( FAIL > 0 )); then
  echo
  echo "Failures:"
  for f in "${FAILURES[@]}"; do
    echo "  - $f"
  done | head -40
  exit 1
fi
