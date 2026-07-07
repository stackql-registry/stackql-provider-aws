#!/bin/sh
# Launch the repo-pinned Linux stackql binary as a pgwire server under WSL,
# serving the local provider-dev registry. Usage (from Windows Git Bash):
#   MSYS_NO_PATHCONV=1 wsl.exe -- sh <repo>/bin/wsl-run-server.sh [port]
BASE=$(cd "$(dirname "$0")/.." && pwd)
REG_PATH="$BASE/provider-dev/openapi"
REG="{\"url\": \"file://$REG_PATH\", \"localDocRoot\": \"$REG_PATH\", \"verifyConfig\": {\"nopVerify\": true}}"
cd "$BASE"
chmod +x ./stackql 2>/dev/null
exec ./stackql --registry="$REG" --pgsrv.port="${1:-5444}" srv
