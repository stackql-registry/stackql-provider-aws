# Make targets for the stackql AWS provider (run from stackql_aws_provider/).
# Works under Git Bash or WSL (GNU make + bash + python + node required).

SHELL := bash

UPSTREAM_URL    ?= https://github.com/boto/botocore.git
UPSTREAM_BRANCH ?= develop

.PHONY: help upstream-sync openapi provider build test-describe test docs

help:
	@echo "Targets:"
	@echo "  upstream-sync  fetch + merge upstream botocore ($(UPSTREAM_BRANCH)) into the current branch"
	@echo "                 (sync only - we never push or raise PRs back to botocore)"
	@echo "  openapi        stage 1: botocore/data -> provider-dev/source/*.yaml"
	@echo "  provider       stage 2: provider-dev/source -> provider-dev/openapi/src/aws/<version>/"
	@echo "  build          openapi + provider"
	@echo "  test-describe  offline DESCRIBE harness"
	@echo "  test           full integration harness (needs AWS creds)"
	@echo "  docs           docgen + snake-case + sanitize + scrub (see website/)"

upstream-sync:
	@git remote get-url upstream >/dev/null 2>&1 || git remote add upstream $(UPSTREAM_URL)
	git fetch upstream $(UPSTREAM_BRANCH)
	git merge --no-edit upstream/$(UPSTREAM_BRANCH)

openapi:
	bash bin/generate-openapi.sh --clean

provider:
	bash bin/generate-provider.sh

build: openapi provider

test-describe:
	bash bin/integration-tests.sh --describe-only

test:
	bash bin/integration-tests.sh

docs:
	npm run generate-docs
	cd website && yarn snake-case-docs && yarn sanitize-docs && yarn scrub-docs
