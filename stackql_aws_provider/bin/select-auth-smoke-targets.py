#!/usr/bin/env python3
"""Emit one auth-smoke-test target per stackql aws service.

Reads provider-dev/openapi/src/aws/v00.00.00000/services/*.yaml and
prints `<service>\t<resource>\t<method>\t<is_global>` for each service.

Selection heuristic (per service):
  1. For each resource, look at sqlVerbs.select[0] (the most-specific SELECT
     method). Read its operation's required-param set.
  2. Score: lower required-param count is better. Empty list (global) and
     ["region"] tie for best.
  3. Tie-break by method-name prefix (list_ > describe_ > get_) - list ops
     are the most likely to be cheap, side-effect free informational queries.
  4. Within the same prefix, prefer common informational nouns like
     'regions', 'availability_zones', 'operations', 'accounts', 'aliases',
     'arns', 'identity', 'limits', 'quotas', then alphabetical first.
  5. Skip resources whose chosen method needs more than just region+global
     creds. We're testing credential scoping, not parameter wiring.

Output goes to stdout. One line per service. Services with no eligible
resource are emitted to stderr and skipped.
"""
from __future__ import annotations

import sys
from pathlib import Path

try:
    import yaml
except ImportError:
    sys.stderr.write("PyYAML required. pip install pyyaml\n")
    sys.exit(2)


PROVIDER_ROOT = Path(__file__).resolve().parents[1] / "provider-dev" / "openapi" / "src" / "aws" / "v00.00.00000"
SERVICES_DIR = PROVIDER_ROOT / "services"


PREFERRED_NOUNS = (
    "regions", "availability_zones", "operations", "accounts",
    "identity", "caller_identities", "limits", "quotas", "aliases",
    "arns", "users", "groups", "roles", "topics", "queues", "streams",
    "tables", "buckets", "functions", "instances", "stacks",
    "clusters", "domains", "endpoints", "keys", "policies", "rules",
    "alarms", "events", "tags",
)

# Method-name prefixes ranked by safety/cheapness.
PREFIX_RANK = {
    "list_": 0,
    "describe_": 1,
    "get_": 2,
    "search_": 3,
    "lookup_": 4,
    "batch_get_": 5,
}


def prefix_score(method_name: str) -> int:
    for p, rank in PREFIX_RANK.items():
        if method_name.startswith(p):
            return rank
    return 99


def noun_score(resource_name: str) -> int:
    for i, n in enumerate(PREFERRED_NOUNS):
        if resource_name == n:
            return i
    return len(PREFERRED_NOUNS) + 1


def resolve_ref(doc: dict, ref: str):
    # ref like "#/components/x-stackQL-resources/volumes/methods/describe_volumes"
    if not ref.startswith("#/"):
        return None
    cursor = doc
    for seg in ref[2:].split("/"):
        seg = seg.replace("~1", "/").replace("~0", "~")
        if not isinstance(cursor, dict) or seg not in cursor:
            return None
        cursor = cursor[seg]
    return cursor


def operation_required_params(doc: dict, op_ref: str) -> list[str] | None:
    """Return list of required-param names for a method's operation, or None."""
    target = resolve_ref(doc, op_ref)
    if not isinstance(target, dict):
        return None
    required = []
    for p in target.get("parameters") or []:
        if not isinstance(p, dict):
            continue
        if "$ref" in p:
            sub = resolve_ref(doc, p["$ref"])
            if isinstance(sub, dict) and sub.get("required") is True:
                name = sub.get("name")
                if name:
                    required.append(name)
            continue
        if p.get("required") is True:
            name = p.get("name")
            if name:
                required.append(name)
    return required


def is_global_service(doc: dict) -> bool:
    """A service is 'global' if its only server has no region template."""
    servers = doc.get("servers") or []
    if not servers:
        return False
    for s in servers:
        url = s.get("url", "")
        # Global hostnames look like https://iam.amazonaws.com, no {region}.
        if "{region}" not in url and "{Region}" not in url:
            return True
        return False
    return False


def pick_target(doc: dict, svc_yaml_name: str) -> tuple[str, str, bool] | None:
    components = doc.get("components") or {}
    resources = (components.get("x-stackQL-resources") or {})
    if not resources:
        return None
    is_global = is_global_service(doc)
    candidates = []  # (req_count, prefix_score, noun_score, resource_name, method_name)
    for rname, rblock in resources.items():
        if not isinstance(rblock, dict):
            continue
        sql_verbs = (rblock.get("sqlVerbs") or {})
        selects = sql_verbs.get("select") or []
        # Scan every SELECT method on the resource (not just [0] - the most-
        # specific-first ordering puts ID-bearing methods like get_app ahead
        # of list_apps, but for smoke-testing we want the cheapest one).
        for sel in selects:
            if not isinstance(sel, dict) or "$ref" not in sel:
                continue
            method = resolve_ref(doc, sel["$ref"])
            if not isinstance(method, dict):
                continue
            op = method.get("operation") or {}
            op_ref = op.get("$ref")
            if not op_ref:
                continue
            req = operation_required_params(doc, op_ref)
            if req is None:
                continue
            req_set = set(p.lower() for p in req)
            # Allow at most {region} - any extra required params mean we'd
            # have to invent a value, which defeats the smoke-test purpose.
            if req_set - {"region"}:
                continue
            method_name = sel["$ref"].rsplit("/", 1)[-1]
            candidates.append((
                len(req_set),
                prefix_score(method_name),
                noun_score(rname),
                rname,
                method_name,
            ))
    if not candidates:
        return None
    candidates.sort()
    best = candidates[0]
    return best[3], best[4], is_global


def main() -> int:
    if not SERVICES_DIR.is_dir():
        sys.stderr.write(f"services dir not found: {SERVICES_DIR}\n")
        return 2
    skipped = []
    for yfile in sorted(SERVICES_DIR.glob("*.yaml")):
        svc = yfile.stem
        try:
            with open(yfile, "r", encoding="utf-8") as f:
                doc = yaml.safe_load(f)
        except Exception as e:
            skipped.append((svc, f"yaml load error: {e}"))
            continue
        target = pick_target(doc, svc)
        if target is None:
            skipped.append((svc, "no eligible select method"))
            continue
        resource, method, is_global = target
        sys.stdout.write(f"{svc}\t{resource}\t{method}\t{'1' if is_global else '0'}\n")
    if skipped:
        sys.stderr.write(f"# {len(skipped)} services skipped (no eligible target):\n")
        for s, reason in skipped:
            sys.stderr.write(f"#   {s}: {reason}\n")
    return 0


if __name__ == "__main__":
    sys.exit(main())
