#!/bin/bash
set -euo pipefail

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
BASE_DIR="$( cd "$DIR/.." && pwd )"

OUTPUT_DIR="${BASE_DIR}/provider-dev/source"
SERVICES=()
CLEAN="false"

while [[ $# -gt 0 ]]; do
  case $1 in
    --output-dir)
      OUTPUT_DIR="$2"
      shift 2
      ;;
    --service)
      SERVICES+=("$2")
      shift 2
      ;;
    --clean)
      CLEAN="true"
      shift
      ;;
    --help)
      echo "Usage: generate-openapi.sh [--output-dir DIR] [--service NAME ...] [--clean]"
      echo ""
      echo "Walks the in-tree botocore checkout and emits one (bastardised) OpenAPI"
      echo "spec per service into --output-dir. Specs are stamped with x-stackql-*"
      echo "breadcrumbs that the provider-generation step folds into x-stackQL-resources."
      exit 0
      ;;
    *)
      echo "Unknown option: $1"
      exit 1
      ;;
  esac
done

if [ "$CLEAN" = "true" ] && [ -d "$OUTPUT_DIR" ]; then
  rm -rf "${OUTPUT_DIR:?}"/*.yaml
fi

mkdir -p "$OUTPUT_DIR"

ARGS=(--output-dir "$OUTPUT_DIR")
for svc in "${SERVICES[@]}"; do
  ARGS+=(--service "$svc")
done

cd "$BASE_DIR/.."
python "stackql_aws_provider/openapi-generation/botocore_to_openapi.py" "${ARGS[@]}"
