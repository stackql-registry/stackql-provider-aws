#!/bin/bash
set -euo pipefail

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
BASE_DIR="$( cd "$DIR/.." && pwd )"

PROVIDER_NAME="aws"
SOURCE_DIR="${BASE_DIR}/provider-dev/source"
OUTPUT_DIR="${BASE_DIR}/provider-dev/openapi/src"
VERSION="v00.00.00000"

while [[ $# -gt 0 ]]; do
  case $1 in
    --provider-name) PROVIDER_NAME="$2"; shift 2 ;;
    --source-dir)    SOURCE_DIR="$2";    shift 2 ;;
    --output-dir)    OUTPUT_DIR="$2";    shift 2 ;;
    --version)       VERSION="$2";       shift 2 ;;
    --help)
      echo "Usage: generate-provider.sh [--provider-name aws] [--source-dir DIR] [--output-dir DIR] [--version v00.00.00000]"
      echo ""
      echo "Reads per-service OpenAPI specs from --source-dir and emits a fully-formed"
      echo "stackql provider tree under --output-dir/<provider>/<version>/."
      exit 0
      ;;
    *) echo "Unknown option: $1"; exit 1 ;;
  esac
done

cd "$BASE_DIR"
node provider-dev/scripts/generate-provider.mjs \
  --provider-name "$PROVIDER_NAME" \
  --source-dir "$SOURCE_DIR" \
  --output-dir "$OUTPUT_DIR" \
  --version "$VERSION" \
  --overwrite
