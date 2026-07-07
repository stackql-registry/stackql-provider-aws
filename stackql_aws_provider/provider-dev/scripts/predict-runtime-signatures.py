"""Predict runtime duplicate method signatures across the generated provider.

Mirrors what stackql's runtime reports in SHOW EXTENDED METHODS RequiredParams:
- required path/query/header params (minus sigv4/routing artifacts)
- required body fields ONLY if the body schema binds:
    * method.request.mediaType exactly matches a requestBody content key, or
    * no request.mediaType and content has 'application/json' (loader default)

Then checks each (resource, sqlVerb != exec) bucket for duplicate signatures,
which is exactly the check bin/test-meta-routes.cjs performs against the
live server.
"""
import os
import sys
import yaml
from collections import defaultdict

SERVICES_DIR = sys.argv[1]

SIGNATURE_IGNORE = {
    "X-Amz-Target", "X-Amz-Content-Sha256", "X-Amz-Date", "X-Amz-Algorithm",
    "X-Amz-Credential", "X-Amz-Security-Token", "X-Amz-Signature",
    "X-Amz-SignedHeaders",
}


def deref(spec, schema):
    if not isinstance(schema, dict):
        return None
    ref = schema.get("$ref")
    if not ref:
        return schema
    if not ref.startswith("#/components/schemas/"):
        return None
    name = ref.split("/")[-1]
    return (spec.get("components", {}).get("schemas", {}) or {}).get(name)


def resolve_op(spec, op_ref):
    # "#/paths/~1GetPlanExecution/post"
    parts = op_ref.lstrip("#/").split("/")
    assert parts[0] == "paths"
    verb = parts[-1]
    path_key = "/".join(parts[1:-1]).replace("~1", "/").replace("~0", "~")
    entry = spec["paths"][path_key]
    return entry.get(verb), entry.get("parameters") or []


def runtime_required(spec, op, path_level_params, method_entry):
    names = set()
    for p in list(op.get("parameters") or []) + list(path_level_params):
        if isinstance(p, dict) and p.get("required") and p.get("name") not in SIGNATURE_IGNORE:
            names.add(p["name"])
    body = (op.get("requestBody") or {}).get("content") or {}
    media = ((method_entry.get("request") or {}).get("mediaType"))
    bound_ct = None
    if media:
        if media in body:
            bound_ct = media
    else:
        if "application/json" in body:
            bound_ct = "application/json"
    body_dropped = bool(body) and bound_ct is None
    if bound_ct:
        schema = deref(spec, body[bound_ct].get("schema") or {})
        if schema and isinstance(schema.get("required"), list):
            for r in schema["required"]:
                names.add(str(r))
    return sorted(names), body_dropped


dupes = []
dropped_body_methods = []

for fname in sorted(os.listdir(SERVICES_DIR)):
    if not fname.endswith(".yaml"):
        continue
    svc = fname[:-5]
    with open(os.path.join(SERVICES_DIR, fname), encoding="utf-8") as f:
        spec = yaml.safe_load(f)
    resources = (spec.get("components", {}).get("x-stackQL-resources") or {})
    for rname, res in resources.items():
        methods = res.get("methods") or {}
        for verb, refs in (res.get("sqlVerbs") or {}).items():
            if verb == "exec" or not refs:
                continue
            seen = {}
            for ref in refs:
                mref = ref.get("$ref") if isinstance(ref, dict) else ref
                mname = mref.split("/")[-1]
                mentry = methods.get(mname)
                if not mentry:
                    continue
                op, path_level = resolve_op(spec, mentry["operation"]["$ref"])
                if op is None:
                    continue
                sig, body_dropped = runtime_required(spec, op, path_level, mentry)
                if body_dropped:
                    dropped_body_methods.append((svc, rname, verb, mname))
                key = ",".join(sig)
                if key in seen:
                    dupes.append((svc, rname, verb, seen[key], mname, key))
                else:
                    seen[key] = mname

print(f"methods with UNBOUND body schema (required body fields invisible at runtime): {len(dropped_body_methods)}")
svc_counts = defaultdict(int)
for svc, *_ in dropped_body_methods:
    svc_counts[svc] += 1
for svc, n in sorted(svc_counts.items()):
    print(f"  {svc}: {n} methods")

print(f"\npredicted runtime duplicate signatures (meta-test failures): {len(dupes)}")
for svc, rname, verb, m1, m2, key in dupes:
    print(f"  {svc}.{rname} [{verb}] {m1} vs {m2} -> [{key}]")
