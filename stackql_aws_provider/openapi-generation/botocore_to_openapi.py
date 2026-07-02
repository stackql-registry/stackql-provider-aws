"""Generate per-service OpenAPI specs from the local botocore checkout.

Output layout: <out_dir>/<service_alias>.yaml

The output is a (bastardised) OpenAPI 3.0 document. For query/ec2 protocols,
paths are keyed `/?Action=<Op>&Version=<v>` (both GET and POST). For rest-json
and rest-xml protocols, paths come from the operation's `requestUri`. For
aws-json (the wire `json` protocol), the path is `/` and the body holds the
operation discriminator (`X-Amz-Target` header).

Every operation carries `x-stackql-*` breadcrumbs that step 2 collapses into
`components/x-stackQL-resources` blocks.
"""

from __future__ import annotations

import argparse
import html
import json
import os
import re
import sys
from collections import OrderedDict
from pathlib import Path
from typing import Any

# Resolve the repo root so we pick up the in-tree botocore checkout, not any
# version that might be installed system-wide.
REPO_ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(REPO_ROOT))

import yaml  # noqa: E402


# --------------------------------------------------------------------------- #
# HTML stripping for botocore documentation fields
# --------------------------------------------------------------------------- #
# Botocore inlines AWS doc HTML into every description field: <p>, <code>,
# <a href=...>, <ul>/<li>, <note>, <important>, <fullname>, <i>, <b>, etc.
# Docusaurus parses descriptions as MDX and chokes on tags that don't have
# matching JSX components, plus literal `<` characters around words like
# `<filter>`. We strip all tags down to plain text here, at the single point
# in the pipeline where descriptions originate.

_BLOCK_TAGS = re.compile(
    r"</?(?:p|ul|ol|li|note|important|warning|fullname|dl|dt|dd|br|hr|div|h[1-6])\b[^>]*>",
    re.IGNORECASE,
)
_ANY_TAG = re.compile(r"</?[a-zA-Z][^>]*>")
# After entity decoding, AWS doc strings still carry placeholder forms like
# `<key>`, `<filter-name>`, `<value>` that MDX interprets as opening JSX
# tags. Wrap any bare `<word>` in backticks so MDX treats it as inline code.
_PLACEHOLDER = re.compile(r"<([A-Za-z][A-Za-z0-9_\-:.]*)>")


def clean_description(text: str | None) -> str | None:
    if not text:
        return text
    # Treat block-level tags as a paragraph break so list items don't run
    # together when their <li> is removed.
    s = _BLOCK_TAGS.sub(" ", text)
    # Drop inline tags (<code>, <a>, <i>, <b>, <pre>, <span>, ...).
    s = _ANY_TAG.sub("", s)
    # Decode HTML entities (&lt;, &amp;, &nbsp;, &#x2022; ...).
    s = html.unescape(s)
    # Backtick any post-decode `<placeholder>` so MDX doesn't read it as JSX.
    s = _PLACEHOLDER.sub(r"`<\1>`", s)
    # Collapse whitespace runs into single spaces.
    s = re.sub(r"\s+", " ", s).strip()
    return s or None


# YAML 1.1's implicit-bool keyword set is much wider than YAML 1.2 - any
# of these as a bare scalar will be coerced to a boolean by a YAML 1.1
# parser (which is what Go's gopkg.in/yaml.v2 implements, and which is what
# stackql uses). When such a token appears as a list element (e.g. inside
# a `required:` array), the resulting JSON has a bool where a string is
# expected and stackql refuses to load the spec. The AWS bedrock_agentcore
# service has structures with members named `x`/`y` (screen coordinates),
# which would otherwise emit as `required: [- x, - y]` and break.
_YAML_1_1_BOOL_KEYWORDS = {
    "y", "Y", "yes", "Yes", "YES",
    "n", "N", "no", "No", "NO",
    "true", "True", "TRUE",
    "false", "False", "FALSE",
    "on", "On", "ON",
    "off", "Off", "OFF",
}


def _ordered_yaml_dump(data: Any, stream) -> None:
    class _Dumper(yaml.SafeDumper):
        # PyYAML emits `&anchor` / `*alias` whenever it sees the same Python
        # object referenced more than once (identity, not value equality).
        # Spec output gets noisy when an empty list or shared `responses`
        # block is reused, so override `ignore_aliases` to always serialise
        # the value inline. The downside is a slightly larger file; the
        # upside is no `&aXXX` / `*aXXX` anchors leaking through.
        def ignore_aliases(self, data):
            return True

    def _dict_repr(dumper, value):
        return dumper.represent_mapping("tag:yaml.org,2002:map", value.items())

    def _str_repr(dumper, value):
        # Quote any string that would be coerced to bool by a YAML 1.1
        # parser. PyYAML's default representer only knows YAML 1.2 bool
        # tokens (true/false), so `y`, `on`, `off`, etc. would otherwise
        # leak through unquoted.
        if value in _YAML_1_1_BOOL_KEYWORDS:
            return dumper.represent_scalar("tag:yaml.org,2002:str", value, style="'")
        return dumper.represent_scalar("tag:yaml.org,2002:str", value)

    _Dumper.add_representer(OrderedDict, _dict_repr)
    _Dumper.add_representer(dict, _dict_repr)
    _Dumper.add_representer(str, _str_repr)
    yaml.dump(data, stream, Dumper=_Dumper, sort_keys=False, allow_unicode=True, width=120)


# --------------------------------------------------------------------------- #
# botocore data loader
# --------------------------------------------------------------------------- #

BOTOCORE_DATA = REPO_ROOT / "botocore" / "data"


def list_services() -> list[str]:
    services = []
    for child in sorted(BOTOCORE_DATA.iterdir()):
        if not child.is_dir():
            continue
        if not any(v.is_dir() for v in child.iterdir()):
            continue
        services.append(child.name)
    return services


def latest_api_version(service: str) -> str:
    versions = sorted(
        [v.name for v in (BOTOCORE_DATA / service).iterdir() if v.is_dir()]
    )
    if not versions:
        raise RuntimeError(f"no api versions for {service}")
    return versions[-1]


def load_service(service: str) -> tuple[dict, dict, str]:
    version = latest_api_version(service)
    sdir = BOTOCORE_DATA / service / version
    with open(sdir / "service-2.json", "r", encoding="utf-8") as f:
        model = json.load(f)
    paginators = {}
    pfile = sdir / "paginators-1.json"
    if pfile.exists():
        with open(pfile, "r", encoding="utf-8") as f:
            paginators = json.load(f).get("pagination", {}) or {}
    return model, paginators, version


# --------------------------------------------------------------------------- #
# Shape -> OpenAPI schema conversion
# --------------------------------------------------------------------------- #


SCALAR_TYPE_MAP = {
    "string": ("string", None),
    "boolean": ("boolean", None),
    "integer": ("integer", None),
    "long": ("integer", "int64"),
    "float": ("number", "float"),
    "double": ("number", "double"),
    "timestamp": ("string", "date-time"),
    "blob": ("string", "byte"),
}


# OpenAPI keywords that collide when used as property names inside a
# `properties` block. Stackql's column-introspector parses some of these
# (notably `items`) as schema keywords regardless of position and fails
# with "schema unsuitable for select query". We rename colliding member
# names with a trailing underscore at emit time. This affects only the
# OpenAPI surface stackql sees; it does NOT change the wire-level field
# name AWS expects (those live in the operation's request/response
# serialisation, not the spec property names).
OPENAPI_RESERVED_PROPERTY_NAMES = {
    "items",
    "type",
    "properties",
    "required",
    "enum",
    "format",
    "default",
    "nullable",
    "oneOf",
    "anyOf",
    "allOf",
    "not",
    "additionalProperties",
    "discriminator",
    "xml",
    "externalDocs",
    "example",
    "deprecated",
    "readOnly",
    "writeOnly",
    "title",
    "pattern",
    "minimum",
    "maximum",
    "multipleOf",
    "minLength",
    "maxLength",
    "minItems",
    "maxItems",
    "uniqueItems",
    "minProperties",
    "maxProperties",
}


def _safe_property_name(name: str) -> str:
    """Rename property to avoid collision with OpenAPI reserved keywords."""
    if name in OPENAPI_RESERVED_PROPERTY_NAMES:
        return name + "_"
    return name


class SchemaWalker:
    """Resolves a service's shapes lazily into OpenAPI 3.0 schemas.

    Only the shapes that are actually referenced by an emitted operation end up
    in the output, keeping per-service files small.
    """

    def __init__(self, shapes: dict):
        self.shapes = shapes
        self.emitted: dict[str, dict] = {}

    def ref(self, shape_name: str) -> dict:
        if shape_name not in self.emitted:
            # Reserve a stub first to guard against recursion.
            self.emitted[shape_name] = {}
            self.emitted[shape_name] = self._convert(self.shapes[shape_name])
        return {"$ref": f"#/components/schemas/{shape_name}"}

    def _convert(self, shape: dict) -> dict:
        t = shape.get("type")
        out: dict = {}
        doc = clean_description(shape.get("documentation"))
        if doc:
            out["description"] = doc

        if t in SCALAR_TYPE_MAP:
            oapi, fmt = SCALAR_TYPE_MAP[t]
            out["type"] = oapi
            if fmt:
                out["format"] = fmt
            if "enum" in shape:
                out["enum"] = shape["enum"]
            if "min" in shape:
                out["minimum" if t in {"integer", "long", "float", "double"} else "minLength"] = shape["min"]
            if "max" in shape:
                out["maximum" if t in {"integer", "long", "float", "double"} else "maxLength"] = shape["max"]
            if "pattern" in shape:
                out["pattern"] = shape["pattern"]
            return out

        if t == "list":
            member = shape["member"]
            out["type"] = "array"
            out["items"] = self.ref(member["shape"])
            return out

        if t == "map":
            # Botocore maps are key/value pairs of homogeneous shape. Per
            # the no-polymorphism rule we drop the value-shape information
            # (no `additionalProperties`). But we MUST emit an explicit
            # empty `properties: {}` block alongside `type: object` -
            # otherwise stackql trips when a parent schema references this
            # map and tries to introspect columns ("schema unsuitable for
            # select query"). Empty properties tells stackql "this is an
            # unstructured object, no introspectable fields inside".
            out["type"] = "object"
            out["properties"] = {}
            return out

        if t == "structure":
            out["type"] = "object"
            members = shape.get("members") or {}
            props: dict[str, Any] = {}
            renamed: dict[str, str] = {}
            for mname, mdef in members.items():
                target = self.shapes.get(mdef["shape"]) or {}
                # When a structure member's underlying shape is a `map`, we
                # inline its flat representation (`type: object, properties: {}`)
                # rather than `$ref`-ing the named schema. AWS frequently uses
                # OpenAPI-keyword member names (`items`, `type`, `enum`, ...) -
                # if such a property holds a `$ref` to a map shape, stackql's
                # introspector trips. Inlining keeps the property self-contained.
                if target.get("type") == "map":
                    m: dict = {"type": "object", "properties": {}}
                else:
                    m = self.ref(mdef["shape"])
                # Sibling description alongside $ref. The user's
                # no-polymorphism rule forbids the allOf wrapping pattern.
                member_doc = clean_description(mdef.get("documentation"))
                if member_doc:
                    m = {**m, "description": member_doc}
                safe = _safe_property_name(mname)
                if safe != mname:
                    renamed[mname] = safe
                props[safe] = m
            if props:
                out["properties"] = props
            required = shape.get("required")
            if required:
                # Map required-list entries through the rename table.
                out["required"] = [renamed.get(r, r) for r in required]
            return out

        # Fallback for any unrecognised type.
        out["type"] = "object"
        return out


# --------------------------------------------------------------------------- #
# x-stackql tag inference
# --------------------------------------------------------------------------- #


# Verb-prefix -> SQL verb mapping. Only true CRUD lands on
# SELECT/INSERT/UPDATE/REPLACE/DELETE; lifecycle/action prefixes such as
# Attach/Detach/Modify/Enable/Disable/Tag/Untag/... still inform the
# resource grouping (we strip the prefix to find the noun) but the verb is
# EXEC. This prevents stackql's signature-uniqueness check from tripping on
# multiple lifecycle ops that share a required-params set.
VERB_PREFIXES: list[tuple[str, str]] = [
    # Order matters: longest/most specific prefixes first.
    ("Describe", "SELECT"),
    ("List", "SELECT"),
    ("BatchGet", "SELECT"),
    ("Get", "SELECT"),
    ("Search", "SELECT"),
    ("Lookup", "SELECT"),
    ("Create", "INSERT"),
    ("Register", "INSERT"),
    ("Put", "REPLACE"),
    ("Update", "UPDATE"),
    ("Modify", "UPDATE"),
    ("Patch", "UPDATE"),
    ("Set", "UPDATE"),
    # Tag/Untag/Add/Remove are field changes - UPDATE.
    ("Tag", "UPDATE"),
    ("Untag", "UPDATE"),
    ("Add", "UPDATE"),
    ("Remove", "UPDATE"),
    # Attach/Detach/Associate/Disassociate/Assign/Unassign change
    # relations between resources but the relation is a state of one
    # resource - UPDATE.
    ("Attach", "UPDATE"),
    ("Detach", "UPDATE"),
    ("Associate", "UPDATE"),
    ("Disassociate", "UPDATE"),
    ("Assign", "UPDATE"),
    ("Unassign", "UPDATE"),
    # Authorize/Revoke flip a permission bit - UPDATE.
    ("Authorize", "UPDATE"),
    ("Revoke", "UPDATE"),
    # Allocate/Release/Provision/Deprovision/Advertise/Withdraw are
    # field/resource creation-or-release patterns. Treat as UPDATE since
    # they're not pure state-machine transitions.
    ("Allocate", "UPDATE"),
    ("Release", "UPDATE"),
    ("Advertise", "UPDATE"),
    ("Withdraw", "UPDATE"),
    ("Provision", "UPDATE"),
    ("Deprovision", "UPDATE"),
    ("Replace", "REPLACE"),
    ("Delete", "DELETE"),
    ("Deregister", "DELETE"),
    ("Terminate", "DELETE"),
    # EXEC is reserved for genuine lifecycle / state-machine transitions:
    # Start, Stop, Activate, Deactivate, Enable, Disable, Reboot,
    # Restart, Pause, Resume, Resize, Cancel, Submit, Accept, Reject,
    # Continue, Restore, Send, Move, Migrate, Copy, Renew, Reset, etc.
    # State-machine transitions:
    ("Start", "EXEC"),
    ("Stop", "EXEC"),
    ("Reboot", "EXEC"),
    ("Run", "EXEC"),
    ("Enable", "EXEC"),
    ("Disable", "EXEC"),
    ("Activate", "EXEC"),
    ("Deactivate", "EXEC"),
    ("Cancel", "EXEC"),
    ("Pause", "EXEC"),
    ("Resume", "EXEC"),
    ("Resize", "EXEC"),
    # Workflow approval/decision verbs:
    ("Accept", "EXEC"),
    ("Reject", "EXEC"),
    ("Approve", "EXEC"),
    ("Confirm", "EXEC"),
    ("Submit", "EXEC"),
    # Action verbs that aren't field/relation changes:
    ("Send", "EXEC"),
    ("Publish", "EXEC"),
    ("Subscribe", "EXEC"),
    ("Unsubscribe", "EXEC"),
    ("Reset", "EXEC"),
    ("Restore", "EXEC"),
    ("Import", "EXEC"),
    ("Export", "EXEC"),
    ("Copy", "EXEC"),
    ("Move", "EXEC"),
    ("Migrate", "EXEC"),
    ("Invoke", "EXEC"),
    ("Test", "EXEC"),
    ("Validate", "EXEC"),
    ("Verify", "EXEC"),
    ("Promote", "EXEC"),
    ("Demote", "EXEC"),
    ("Refresh", "EXEC"),
    ("Renew", "EXEC"),
    ("Generate", "EXEC"),
    ("Notify", "EXEC"),
]


# Resource-name post-processing. AWS verbs map to a resource noun that is
# almost always either already plural (DescribeVolumes -> Volumes) or singular
# (CreateUser -> User). We pluralise for SELECT-style verbs and singularise
# for the rest using a very small set of rules - it isn't perfect English but
# it produces stable, predictable names.
def _to_snake(s: str) -> str:
    s = re.sub(r"(.)([A-Z][a-z]+)", r"\1_\2", s)
    s = re.sub(r"([a-z0-9])([A-Z])", r"\1_\2", s)
    return s.lower()


def _pluralise(noun: str) -> str:
    if noun.endswith("s"):
        return noun
    if noun.endswith("y") and len(noun) > 1 and noun[-2] not in "aeiou":
        return noun[:-1] + "ies"
    if noun.endswith(("ch", "sh", "x", "z")):
        return noun + "es"
    return noun + "s"


def _singularise(noun: str) -> str:
    # We work in snake_case so split, mutate the last token, rejoin.
    if not noun:
        return noun
    parts = noun.split("_")
    last = parts[-1]
    if last.endswith("ies") and len(last) > 3:
        parts[-1] = last[:-3] + "y"
    elif last.endswith("ses") or last.endswith("xes") or last.endswith("zes"):
        parts[-1] = last[:-2]
    elif last.endswith("s") and not last.endswith("ss"):
        parts[-1] = last[:-1]
    return "_".join(parts)


def infer_stackql_tags(
    op_name: str,
    output_shape: dict | None,
    paginator: dict | None,
    shapes: dict | None = None,
    protocol: str = "",
) -> dict:
    """Pick (resource, method, verb, objectKey) from the operation name."""
    verb = "EXEC"
    noun = op_name
    for prefix, sql_verb in VERB_PREFIXES:
        if op_name.startswith(prefix) and len(op_name) > len(prefix):
            verb = sql_verb
            noun = op_name[len(prefix):]
            break

    resource_snake = _to_snake(noun) if noun else "service"
    # All CRUD verbs target the same resource (always pluralised), so
    # CreateVolume/DeleteVolume/DescribeVolumes co-locate under `volumes`.
    # This matches the convention in ref/iam.yaml where access_keys carries
    # Create, Delete, and List together.
    if verb in {"SELECT", "INSERT", "UPDATE", "REPLACE", "DELETE"}:
        resource = _pluralise(resource_snake)
    else:
        resource = resource_snake

    method = _to_snake(op_name)

    tags = {
        "x-stackql-resource": resource,
        "x-stackql-method": method,
        "x-stackql-verb": verb,
    }

    # objectKey: tells stackql which property of the response carries the
    # row array. Different protocols need this hint at different times:
    #
    # - query/ec2: response goes through Display synthesis (rule 15) which
    #   hoists rows to `$.line_items`. Stage 2 stamps that objectKey from
    #   the response template builder; nothing to do here.
    # - rest-xml: same Display synthesis applies; objectKey is stamped by
    #   the response template builder, not here.
    # - rest-json: NO Display synthesis. Stackql doesn't auto-discover the
    #   row-bearing member on rest-json list responses (lambda's
    #   ListFunctions returns `{Functions: [...], NextMarker: "..."}` and
    #   stackql treats `Functions` as a top-level column rather than the
    #   row carrier). Emit `objectKey: $.<result_key>` here from the
    #   paginator's result_key, which is authoritative.
    # - aws-json: similar to rest-json - no Display synthesis. Same fix.
    #
    # Rule 4a's `items` rename still applies: when the literal wire name is
    # `items`, the OpenAPI property gets renamed to `items_` and the
    # objectKey points at the renamed property. Stackql's request-time
    # response walker reads the actual JSON (still has `items`) but the
    # JSONPath in objectKey references the spec-side property name.
    if (
        verb == "SELECT"
        and paginator
        and "result_key" in paginator
        and output_shape
        and shapes
    ):
        rk = paginator["result_key"]
        result_key = rk if isinstance(rk, str) else (rk[0] if isinstance(rk, list) and rk else None)
        if result_key:
            # Special-case the `items` rename per rule 4a.
            if result_key == "items":
                member = (output_shape.get("members") or {}).get("items")
                if member:
                    member_shape = shapes.get(member["shape"]) or {}
                    if member_shape.get("type") == "list":
                        tags["x-stackql-objectKey"] = "$.items_"
            elif protocol in ("rest-json", "json"):
                member = (output_shape.get("members") or {}).get(result_key)
                if member:
                    member_shape = shapes.get(member["shape"]) or {}
                    if member_shape.get("type") == "list":
                        tags["x-stackql-objectKey"] = f"$.{result_key}"

    return tags


# --------------------------------------------------------------------------- #
# Operation -> path entry conversion
# --------------------------------------------------------------------------- #


def _common_aws_headers() -> list[dict]:
    return [
        {"$ref": "#/components/parameters/X-Amz-Content-Sha256"},
        {"$ref": "#/components/parameters/X-Amz-Date"},
        {"$ref": "#/components/parameters/X-Amz-Algorithm"},
        {"$ref": "#/components/parameters/X-Amz-Credential"},
        {"$ref": "#/components/parameters/X-Amz-Security-Token"},
        {"$ref": "#/components/parameters/X-Amz-Signature"},
        {"$ref": "#/components/parameters/X-Amz-SignedHeaders"},
    ]


def _aws_header_params_block() -> dict:
    block = {}
    for name in (
        "X-Amz-Content-Sha256",
        "X-Amz-Date",
        "X-Amz-Algorithm",
        "X-Amz-Credential",
        "X-Amz-Security-Token",
        "X-Amz-Signature",
        "X-Amz-SignedHeaders",
    ):
        block[name] = {
            "in": "header",
            "name": name,
            "required": False,
            "schema": {"type": "string"},
        }
    return block


def _flatten_input_to_query_params(input_shape: dict, walker: SchemaWalker) -> list[dict]:
    """For query/ec2 protocols, top-level structure members become query params.

    AWS query serialisation actually flattens nested structures and lists with
    dot-and-index notation; we represent the public surface as one parameter
    per top-level member referencing the underlying shape. This matches the
    pattern used by ref/ec2.yaml.
    """
    params: list[dict] = []
    if not input_shape or input_shape.get("type") != "structure":
        return params
    required = set(input_shape.get("required") or [])
    for name, mdef in (input_shape.get("members") or {}).items():
        schema = walker.ref(mdef["shape"])
        params.append(
            {
                "name": name,
                "in": "query",
                "required": name in required,
                "description": clean_description(mdef.get("documentation")),
                "schema": schema,
            }
        )
    # Drop description if missing to keep output tidy.
    for p in params:
        if not p.get("description"):
            p.pop("description", None)
    return params


def _rest_param(name: str, location: str, mdef: dict, walker: SchemaWalker, required: bool) -> dict:
    out = {
        "name": name,
        "in": location,
        "required": required,
        "schema": walker.ref(mdef["shape"]),
    }
    desc = clean_description(mdef.get("documentation"))
    if desc:
        out["description"] = desc
    return out


def _build_rest_op_block(
    op_name: str,
    op_def: dict,
    walker: SchemaWalker,
    paginator: dict | None,
    api_version: str,
    protocol: str = "rest-json",
) -> tuple[str, str, dict, list[dict]]:
    """Return (path_template, http_method, operation_block, path_level_params).

    Used for both rest-json and rest-xml protocols. We honour the HTTP verb
    botocore declares for the operation - no promotion/demotion. The
    provider-gen step adds `requestBodyTranslate: naive` to any method
    that carries a requestBody, which gives stackql a clean view of the
    body fields regardless of HTTP verb.

    For rest-xml, the operation gets stamped with
    `x-stackql-responseEnvelope: <OpName>OutputDisplay` (the synthesised
    Display wrapper, rule 14) plus `x-stackql-responseObjectKey:
    $.line_items`. The Node step folds these into the method's response
    block: `schema_override` + the schema-driven XML transform +
    `mediaType: application/xml` + `overrideMediaType: application/json`.
    The walker (any-sdk pkg/stream_transform) projects rows straight off
    the Display schema - no per-op template is emitted.
    """
    http = op_def.get("http") or {}
    method = (http.get("method") or "POST").lower()
    request_uri = http.get("requestUri") or "/"
    # Strip query string from requestUri - those typically encode required
    # subresource markers (e.g. "?metadata"). We preserve them in the path key
    # as written; OpenAPI 3.0 allows query in the path template loosely but for
    # safety we keep them inline since stackql consumers index on the literal
    # path key.
    op_block: dict = {
        "operationId": op_name,
        "description": clean_description(op_def.get("documentation")),
    }
    if not op_block["description"]:
        op_block.pop("description")

    # ----- parameters -----
    # Path parameters get snake-cased - both in the URI template and in the
    # OpenAPI parameter `name`. AWS path params arrive in CamelCase (e.g.
    # `{AccessPreviewId}`) which makes SQL ugly; stackql doesn't care about
    # the wire-level name for path params (they're substituted into the URI
    # template), so we normalise. Query, header and body params keep their
    # native casing because those names ARE the wire-level names.
    path_param_renames: dict[str, str] = {}
    parameters: list[dict] = []
    input_ref = op_def.get("input")
    body_members: dict[str, dict] = {}
    body_required: list[str] = []
    if input_ref:
        input_shape_name = input_ref["shape"]
        input_shape = walker.shapes[input_shape_name]
        required = set(input_shape.get("required") or [])
        for mname, mdef in (input_shape.get("members") or {}).items():
            loc = mdef.get("location")
            if loc == "uri":
                # The URI template uses locationName (or mname) as the placeholder.
                original = mdef.get("locationName") or mname
                snake = _to_snake(original)
                if snake != original:
                    path_param_renames[original] = snake
                parameters.append(_rest_param(snake, "path", mdef, walker, True))
            elif loc == "querystring":
                parameters.append(
                    _rest_param(mdef.get("locationName") or mname, "query", mdef, walker, mname in required)
                )
            elif loc == "header":
                parameters.append(
                    _rest_param(mdef.get("locationName") or mname, "header", mdef, walker, mname in required)
                )
            elif loc == "headers":
                # Multi-header map - represent as a single header parameter
                # whose schema is the underlying map.
                parameters.append(
                    _rest_param(mdef.get("locationName") or mname, "header", mdef, walker, mname in required)
                )
            else:
                body_members[mname] = mdef
                if mname in required:
                    body_required.append(mname)

    # Apply path-param renames to the URI template. We also strip the
    # botocore-specific `+` greedy-match suffix (`{Key+}` -> `{key}`) since
    # OpenAPI 3.0 doesn't support it and stackql treats it as a literal
    # character otherwise.
    if "{" in request_uri:
        # Greedy-match suffix: `{Foo+}` -> `{Foo}` before renaming.
        request_uri = re.sub(r"\{([^}+]+)\+\}", r"{\1}", request_uri)
        for original, snake in path_param_renames.items():
            request_uri = request_uri.replace("{" + original + "}", "{" + snake + "}")
        # Also snake-case any remaining path placeholders we didn't see in the
        # input shape (rare - happens when botocore omits the member binding).
        def _snake_match(m):
            return "{" + _to_snake(m.group(1)) + "}"
        request_uri = re.sub(r"\{([A-Za-z][A-Za-z0-9_\-]*)\}", _snake_match, request_uri)

    op_block["parameters"] = parameters or []

    # ----- request body -----
    # The content key is the wire media type: rest-xml bodies marshal to XML
    # (any-sdk's schema-driven JSON-map -> XML marshaller keys off the
    # method's `request.mediaType`, which the loader must find as an exact
    # content key to bind the body schema), rest-json bodies stay JSON.
    if body_members:
        body_props: dict[str, Any] = {}
        for mname, mdef in body_members.items():
            body_props[mname] = walker.ref(mdef["shape"])
        body_schema: dict = {"type": "object", "properties": body_props}
        if body_required:
            body_schema["required"] = body_required
        body_content_key = (
            "application/xml" if protocol == "rest-xml" else "application/json"
        )
        op_block["requestBody"] = {
            "required": bool(body_required),
            "content": {body_content_key: {"schema": body_schema}},
        }

    # ----- responses -----
    response_code = str(http.get("responseCode") or 200)
    response_block: dict = {"description": "Success"}
    output_ref = op_def.get("output")
    # For rest-xml, synthesise the Display schemas like query/ec2 (rule
    # 14). Point the path-level response schema at the Display wrapper too
    # (rule 16 column convergence) so column inference converges on a
    # single column set.
    rest_xml_display_list_name: str | None = None
    if protocol == "rest-xml" and output_ref:
        rest_xml_display_list_name = _register_display_schemas(
            walker, op_name, output_ref["shape"], paginator
        )

    if output_ref:
        if rest_xml_display_list_name:
            response_block["content"] = {
                "application/json": {
                    "schema": {
                        "$ref": f"#/components/schemas/{rest_xml_display_list_name}"
                    }
                }
            }
        else:
            response_block["content"] = {
                "application/json": {"schema": walker.ref(output_ref["shape"])}
            }
    op_block["responses"] = {response_code: response_block}

    # ----- x-stackql tags -----
    output_shape = walker.shapes[output_ref["shape"]] if output_ref else None
    stack_tags = infer_stackql_tags(op_name, output_shape, paginator, walker.shapes, protocol)
    # rest-xml: stamp the response envelope as the synthesised Display
    # wrapper. Stage 2 reads these to set `schema_override`, the
    # schema-driven XML transform, and `objectKey: $.line_items`.
    if rest_xml_display_list_name:
        stack_tags["x-stackql-responseEnvelope"] = rest_xml_display_list_name
        stack_tags["x-stackql-responseObjectKey"] = "$.line_items"
    op_block.update(stack_tags)

    return request_uri, method, op_block, []


def _build_awsjson_op_block(
    op_name: str,
    op_def: dict,
    walker: SchemaWalker,
    paginator: dict | None,
    api_version: str,
    target_prefix: str,
    json_version: str = "1.0",
) -> tuple[str, str, dict, list[dict]]:
    """aws-json protocol: POST `/` with X-Amz-Target: <prefix>.<Op>."""
    op_block: dict = {
        "operationId": op_name,
        "description": clean_description(op_def.get("documentation")),
    }
    if not op_block["description"]:
        op_block.pop("description")

    # X-Amz-Target is the aws-json wire-protocol discriminator. Stackql
    # treats it as `required: false` with a `default` value so it's filled
    # in automatically at request time without surfacing in the user's SQL
    # surface or in SHOW METHODS' RequiredParams column. The `enum`
    # remains as a single-value constraint.
    target_value = f"{target_prefix}.{op_name}"
    parameters: list[dict] = [
        {
            "name": "X-Amz-Target",
            "in": "header",
            "description": "Action Header",
            "required": False,
            "schema": {
                "type": "string",
                "enum": [target_value],
                "default": target_value,
            },
        }
    ]
    op_block["parameters"] = parameters

    input_ref = op_def.get("input")
    if input_ref:
        # Inline the input shape's top-level members into the requestBody
        # schema. Stackql reads `required` and `properties` directly off
        # the schema object - it doesn't follow `$ref` indirection for the
        # required-param scan - so a flat inline schema is the only way
        # body fields show up in SHOW METHODS' RequiredParams.
        input_shape = walker.shapes[input_ref["shape"]]
        body_schema: dict = {"type": "object"}
        members = input_shape.get("members") or {}
        if members:
            body_props: dict[str, Any] = {}
            for mname, mdef in members.items():
                m = walker.ref(mdef["shape"])
                mdoc = clean_description(mdef.get("documentation"))
                if mdoc:
                    m = {**m, "description": mdoc}
                body_props[mname] = m
            body_schema["properties"] = body_props
        if input_shape.get("required"):
            body_schema["required"] = list(input_shape["required"])
        # The content key is the amz-json wire content type (e.g.
        # `application/x-amz-json-1.0`). Stage 2 stamps the same string as
        # the method's `request.mediaType`; the loader binds the body schema
        # by EXACT content-key match against request.mediaType, and any-sdk's
        # media fuzzy-matcher maps amz-json variants onto the JSON marshal
        # path. Emit a single entry - duplicating an `application/json`
        # variant would just bloat the spec.
        op_block["requestBody"] = {
            "required": True,
            "content": {
                f"application/x-amz-json-{json_version}": {"schema": body_schema}
            },
        }

    response_block: dict = {"description": "Success"}
    output_ref = op_def.get("output")
    if output_ref:
        response_block["content"] = {
            "application/json": {"schema": walker.ref(output_ref["shape"])},
        }
    op_block["responses"] = {"200": response_block}

    output_shape = walker.shapes[output_ref["shape"]] if output_ref else None
    op_block.update(infer_stackql_tags(op_name, output_shape, paginator, walker.shapes, "json"))

    # The wire-level URI for every aws-json op is `/`, with X-Amz-Target
    # selecting the operation. But we can't key the OpenAPI `paths` map on
    # `/` for every op (they'd collide). Use `/<OpName>` as a synthetic
    # OpenAPI-valid path key - stackql's request translator drops the path
    # suffix when constructing the actual HTTP request, so the wire call
    # still hits `/` with the X-Amz-Target header.
    return f"/{op_name}", "post", op_block, []


SCALAR_DISPLAY_TYPES = {
    "string": "string",
    "boolean": "boolean",
    "integer": "integer",
    "long": "integer",
    "float": "number",
    "double": "number",
    "timestamp": "string",
    "blob": "string",
}


def _wire_name(member_name: str, mdef: dict) -> str:
    """Return the XML element name a member will be serialised as.

    Botocore's `member.locationName` overrides the member name on the
    wire. For EC2/query lists, the inner element name comes from
    `member.shape -> list.member.locationName` (also defaulting to "item"
    when not declared).
    """
    return mdef.get("locationName") or member_name


def _scalar_template_expr(member_name: str, mdef: dict, shapes: dict) -> tuple[str, str]:
    """Return (display_type, go_template_expression) for emitting one column.

    For scalars: the expression dereferences `index . "<wireName>"` and
    casts it with the right helper. For structures/lists/maps: the
    expression toJsons the sub-value and embeds it as a JSON-string.
    """
    wire = _wire_name(member_name, mdef)
    shape = shapes.get(mdef["shape"]) or {}
    t = shape.get("type")

    # Go template's `{{with .}}` treats `false`, `0`, `""`, and nil all as
    # empty, so a boolean field with value false would emit `null` under
    # `{{with ... toBool .}}{{else}}null{{end}}`. We need an explicit
    # nil-check that ONLY routes to null when the key is missing, not
    # when the value is falsy. The pattern `{{ $v := index . "k" }}{{ if
    # eq $v nil }}null{{ else }}{{toBool $v}}{{ end }}` does that.
    q = _go_quote(wire)
    if t in SCALAR_DISPLAY_TYPES:
        display_type = SCALAR_DISPLAY_TYPES[t]
        if t in {"integer", "long"}:
            cast = "toInt"
        elif t in {"float", "double"}:
            cast = "toFloat"
        elif t == "boolean":
            cast = "toBool"
        else:
            cast = None  # string / timestamp / blob -> %q printf

        if cast is not None:
            expr = (
                "{{ $v := index . " + q + " }}"
                "{{ if eq $v nil }}null{{ else }}{{" + cast + " $v}}{{ end }}"
            )
        else:
            # string / timestamp / blob columns. The wire JSON from mxj
            # may have auto-typed a numeric-looking string element to an
            # integer (e.g. AWS account IDs like 824532806693 land as
            # int64s). Go's `printf "%q"` on an int produces a Unicode
            # character escape (`'...'`) which then breaks downstream
            # JSON parsing. Coerce to string via `printf "%v"` first, then
            # JSON-quote with `printf "%q"`. Missing keys still route to
            # null via the explicit nil check.
            expr = (
                "{{ $v := index . " + q + " }}"
                "{{ if or (eq $v nil) (eq (printf \"%v\" $v) \"\") }}null"
                "{{ else if eq (printf \"%T\" $v) \"string\" }}{{ printf \"%q\" $v }}"
                "{{ else if eq (printf \"%T\" $v) \"float64\" }}{{ printf \"%q\" (printf \"%.0f\" $v) }}"
                "{{ else }}{{ printf \"%q\" (printf \"%v\" $v) }}{{ end }}"
            )
        return display_type, expr

    # structure / list / map -> stringified JSON via the v0.2.0 engine's
    # `toJson`. The column is `type: string` in the Display schema; users
    # decompose with `JSON_EXTRACT(col, '$.path')` or `JSON_EACH(col)`.
    # We wrap toJson's output in `printf "%q"` so the JSON itself becomes
    # a quoted SQL string (escapes embedded quotes), matching the
    # `string`-typed column.
    #
    # Empty / self-closing XML elements (`<attachmentSet/>`) come through
    # mxj as the empty string "", while populated elements come through
    # as map[string]interface{}. A direct `eq $v ""` works for the empty
    # case but fails with "incompatible types" when $v is a map. We
    # stringify first via `printf "%v"` so the comparison is always
    # string-vs-string. Nil still needs the dedicated `eq $v nil` check
    # because `printf "%v" nil` is "<nil>", not "".
    expr = (
        "{{ $v := index . " + q + " }}"
        "{{ if or (eq $v nil) (eq (printf \"%v\" $v) \"\") }}null"
        "{{ else }}{{ printf \"%q\" (toJson $v) }}{{ end }}"
    )
    return "string", expr


def _go_quote(s: str) -> str:
    """Quote a string for use as a Go string literal in a template.

    Backslash-escapes `"` and `\\` so the result is a safe `"..."` literal.
    """
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'


def _pick_row_shape(
    output_shape: dict, shapes: dict, paginator: dict | None,
    op_name: str = "",
) -> tuple[str | None, str | None, str | None, str | None, str | None]:
    """Decide which member of the output shape carries the row data.

    Returns a 5-tuple:
      (row_member_name, list_member_wire_name, list_inner_wire_name,
       row_element_shape_name, singleton_unwrap_wire_name)

    Three regimes:
      a. **list** — the output has a list-typed member (the typical
         `Describe*`/`List*` shape). Template walks the list and emits
         one row per element. `list_member_wire_name` is the wire name
         of the list-bearing member.
      b. **singleton-unwrapped** — the output has a structure-typed
         member that should be unwrapped (`GetUser` -> `{User: ...}`,
         `GetHostedZone` -> `{HostedZone: ..., DelegationSet: ...,
         VPCs: [...]}`). Unwrap one layer so the columns are the inner
         structure's members.
      c. **singleton-direct** — the output IS the row (e.g.
         `GetCallerIdentity` returns the row's members directly under
         the response root).

    Disambiguation between (a) and (b) is non-trivial when a Get* op's
    output has BOTH a primary structure member AND ancillary list
    members. Examples:
      - GetHostedZone -> {HostedZone: <row>, DelegationSet: ..., VPCs: [...]}
        The row is HostedZone; VPCs is metadata. Without disambiguation,
        the list-first heuristic picks VPCs as rows -> wrong columns.

    Heuristic: only prefer regime (a) when there's an explicit signal
    that the op is genuinely list-returning:
      1. Paginator with `result_key` (most authoritative - botocore only
         declares paginators for list ops).
      2. Op name starts with `List`, `Describe`, `BatchGet`, `Search`, or
         `Lookup`.
    For all other ops (Get*, Create*, etc.), prefer regime (b)
    singleton-unwrap on the first structure member that matches the op's
    noun (e.g. `GetHostedZone` -> the structure member named
    `HostedZone`), else fall back to the existing behaviour.
    """
    if output_shape.get("type") != "structure":
        return None, None, None, None, None
    members = output_shape.get("members") or {}

    # Decide whether this op is genuinely list-shaped.
    _LIST_OP_PREFIXES = ("List", "Describe", "BatchGet", "Search", "Lookup")
    has_result_key = bool(
        paginator and isinstance(paginator.get("result_key"), (str, list)) and paginator["result_key"]
    )
    is_list_op = has_result_key or any(op_name.startswith(p) for p in _LIST_OP_PREFIXES)

    # ----- regime (a): list response (only when is_list_op) -----
    if is_list_op:
        candidate = None
        if has_result_key:
            rk = paginator["result_key"]
            candidate = rk if isinstance(rk, str) else (rk[0] if isinstance(rk, list) and rk else None)
        if not (candidate and candidate in members and shapes.get(members[candidate]["shape"], {}).get("type") == "list"):
            candidate = None
            for mname, mdef in members.items():
                if shapes.get(mdef["shape"], {}).get("type") == "list":
                    candidate = mname
                    break
        if candidate:
            list_mdef = members[candidate]
            list_shape = shapes[list_mdef["shape"]]
            elem_mdef = list_shape.get("member") or {}
            elem_shape_name = elem_mdef.get("shape")
            list_member_wire = _wire_name(candidate, list_mdef)
            inner_wire = elem_mdef.get("locationName") or "item"
            return candidate, list_member_wire, inner_wire, elem_shape_name, None

    # ----- regime (b): singleton-unwrap -----
    # Look for the structure member whose name matches the op's noun
    # (e.g. GetHostedZone -> noun "HostedZone" -> unwrap that member,
    # ignoring DelegationSet / VPCs siblings). Falls back to the
    # one-structure-only rule for ops without a recognisable noun.
    structure_members = [
        (mname, mdef) for mname, mdef in members.items()
        if shapes.get(mdef["shape"], {}).get("type") == "structure"
    ]
    # Strip the verb prefix from op_name to derive the expected noun.
    noun = ""
    for prefix, _ in VERB_PREFIXES:
        if op_name.startswith(prefix) and len(op_name) > len(prefix):
            noun = op_name[len(prefix):]
            break
    if noun:
        for mname, mdef in structure_members:
            if mname == noun:
                return None, None, None, mdef["shape"], _wire_name(mname, mdef)
    if len(structure_members) == 1 and len(members) == 1:
        mname, mdef = structure_members[0]
        return None, None, None, mdef["shape"], _wire_name(mname, mdef)

    # ----- regime (c): singleton-direct -----
    return None, None, None, None, None


def _build_row_template_body(
    row_shape: dict, shapes: dict
) -> tuple[dict, str]:
    """Return (display_properties_dict, row_template_body).

    `display_properties_dict` is the `properties` block for the row
    Display schema. The keys are the botocore member names verbatim
    (`VpcId`, `Attachments`) - the casing engine snake-renders them at
    the SQL surface. When the XML wire element name differs from the
    member name (member `locationName`, e.g. EC2's `Attachments`
    serialised as `<attachmentSet>`), the property carries an
    `xml: {name: <wire>}` override; the schema-driven XML walker keys
    row extraction on that override, and drm value extraction resolves
    GetWireName first. The `row_template_body` is the Go-template
    `{{define "row"}}...{{end}}` block that renders one row as JSON from
    an mxj-decoded XML map (kept only for the fallback escape hatch; the
    default response path is the schema-driven walker, which needs no
    template).
    """
    members = row_shape.get("members") or {}
    if not members:
        return {}, '{{define "row"}}{}{{end}}'

    display_props: dict[str, Any] = {}
    column_lines: list[str] = []
    for mname, mdef in members.items():
        wire = _wire_name(mname, mdef)
        display_type, expr = _scalar_template_expr(mname, mdef, shapes)
        prop: dict[str, Any] = {"type": display_type}
        # Carry the member's documentation through to the Display schema
        # so stackql can surface it in DESCRIBE EXTENDED. Botocore puts
        # docs on the member when overriding, otherwise on the shape.
        doc = clean_description(mdef.get("documentation"))
        if not doc:
            target = shapes.get(mdef["shape"]) or {}
            doc = clean_description(target.get("documentation"))
        if doc:
            prop["description"] = doc
        if wire != mname:
            prop["xml"] = {"name": wire}
        display_props[mname] = prop
        # The fallback row template emits wire-name keys (matching the
        # walker's projected-row keying, which drm extraction reads via
        # GetWireName).
        column_lines.append(f'        "{wire}": {expr}')

    body = (
        '{{define "row"}}\n'
        '{\n'
        + ",\n".join(column_lines) + "\n"
        + '}\n'
        '{{end}}'
    )
    return display_props, body


def _register_display_schemas(
    walker: SchemaWalker,
    op_name: str,
    output_shape_name: str,
    paginator: dict | None,
) -> str:
    """Synthesise `<RowShape>Display` and `<OpName>OutputDisplay` schemas.

    Returns the list-wrapper schema name. The row Display schema is
    cached by row-shape name (reused across ops that share an element
    shape - e.g. EC2's `Volume` returned by both DescribeVolumes and
    CreateVolume).
    """
    output_shape = walker.shapes.get(output_shape_name) or {}
    _row_member, _list_wire, _inner_wire, elem_shape_name, unwrap_wire = _pick_row_shape(
        output_shape, walker.shapes, paginator, op_name
    )

    if elem_shape_name:
        # Regimes (a) and (b) both resolve to a named sub-shape.
        row_shape_name = elem_shape_name
        row_shape = walker.shapes[elem_shape_name]
    else:
        # Regime (c): singleton-direct - the output IS the row.
        row_shape_name = output_shape_name
        row_shape = output_shape

    row_display_name = f"{row_shape_name}Display"
    list_display_name = f"{op_name}OutputDisplay"

    if row_display_name not in walker.emitted:
        display_props, _ = _build_row_template_body(row_shape, walker.shapes)
        walker.emitted[row_display_name] = {
            "type": "object",
            "properties": display_props,
        }

    walker.emitted[list_display_name] = {
        "type": "object",
        "properties": {
            "line_items": {
                "type": "array",
                "items": {"$ref": f"#/components/schemas/{row_display_name}"},
            },
        },
    }

    return list_display_name


def _build_transform_body(
    op_name: str,
    output_shape_name: str,
    walker: SchemaWalker,
    paginator: dict | None,
    protocol: str,
    result_wrapper: str | None,
) -> str:
    """Build the full Go-template body for an op's XML-to-line_items transform.

    UNUSED FALLBACK ESCAPE HATCH. The default response path is the
    schema-driven XML walker (`schema_driven_xml_v0.1.0` in any-sdk's
    pkg/stream_transform), which projects rows directly off the Display
    schema and needs no per-op template. This builder is retained only in
    case a service surfaces an XML shape the walker cannot navigate; wire
    it back up by stamping `x-stackql-responseTransform` on the op block
    and emitting a `golang_template_mxj_v0.2.0` transform in stage 2.

    The template emits `{"line_items": [...]}` with one JSON-object row
    per XML `<item>` (for list responses) or one row for the singleton
    response. The objectKey on the response block is always `$.line_items`.
    """
    output_shape = walker.shapes[output_shape_name]
    _row_member, list_wire, inner_wire, elem_shape_name, unwrap_wire = _pick_row_shape(
        output_shape, walker.shapes, paginator, op_name
    )
    if elem_shape_name:
        row_shape = walker.shapes[elem_shape_name]
    else:
        row_shape = output_shape

    _, row_block = _build_row_template_body(row_shape, walker.shapes)

    # Common envelope chain from mxj-decoded root down to the response
    # element. For ec2 this is just `<OpName>Response`. For query, one
    # extra step into the resultWrapper. From there:
    #   - regime (a) list: append <listWire>, "item"
    #   - regime (b) singleton-unwrap: append <unwrap_wire>
    #   - regime (c) singleton-direct: stay at response root
    chain: list[str] = [f"{op_name}Response"]
    if protocol == "query":
        chain.append(result_wrapper or f"{op_name}Result")

    if list_wire:
        # Descend the chain in two stages so we can guard the list-bearing
        # parent element. AWS returns self-closing tags (`<Stacks/>`) for
        # empty lists, which mxj decodes as the empty string "". Indexing
        # a string with another string key is a template runtime error,
        # so we resolve the parent ($list_parent) first, check its type,
        # then descend into the inner-wire child only when it's a map.
        list_inner = inner_wire or "item"
        parent_index = " ".join(_go_quote(p) for p in chain + [list_wire])
        body = (
            '{\n'
            '  "line_items": [\n'
            f'    {{{{- $list_parent := index . {parent_index} -}}}}\n'
            '    {{- if eq (printf "%T" $list_parent) "map[string]interface {}" }}\n'
            f'      {{{{- $items := index $list_parent {_go_quote(list_inner)} -}}}}\n'
            '      {{- if eq (printf "%T" $items) "map[string]interface {}" }}\n'
            '        {{template "row" $items}}\n'
            '      {{- else if eq (printf "%T" $items) "[]interface {}" }}\n'
            '        {{- range $i, $v := $items }}\n'
            '          {{- if $i}},{{end}}\n'
            '          {{template "row" $v}}\n'
            '        {{- end }}\n'
            '      {{- end }}\n'
            '    {{- end }}\n'
            '  ]\n'
            '}\n'
            + row_block
        )
    else:
        # Singleton (regime b or c). For (b) we need one extra index step
        # into the wrapping member; for (c) the response root IS the row.
        if unwrap_wire:
            chain.append(unwrap_wire)
        items_index = " ".join(_go_quote(p) for p in chain)
        body = (
            '{\n'
            '  "line_items": [\n'
            f'    {{{{- $row := index . {items_index} -}}}}\n'
            '    {{- with $row }}{{template "row" .}}{{end}}\n'
            '  ]\n'
            '}\n'
            + row_block
        )
    return body


def _build_query_op_block(
    op_name: str,
    op_def: dict,
    walker: SchemaWalker,
    paginator: dict | None,
    api_version: str,
    protocol: str,
) -> tuple[str, dict, dict, list[dict]]:
    """Return (path_key, get_block, post_block, path_level_params).

    Both GET and POST flavours are emitted to match the ref/ec2.yaml pattern,
    where stackql's request translator may flip a GET-with-query into a
    POST-with-form.
    """
    description = clean_description(op_def.get("documentation"))
    input_ref = op_def.get("input")
    output_ref = op_def.get("output")
    input_shape = walker.shapes[input_ref["shape"]] if input_ref else None

    # Path key like /?Action=DescribeVolumes&Version=2016-11-15
    path_key = f"/?Action={op_name}&Version={api_version}"

    # Build query params from input top-level structure members.
    query_params = _flatten_input_to_query_params(input_shape or {}, walker) if input_shape else []

    # Synthesise `<RowShape>Display` + `<OpName>OutputDisplay` schemas.
    # Stackql uses them for column inference (DESCRIBE EXTENDED) and the
    # schema-driven XML walker projects rows off them at SELECT time - no
    # per-op template needed.
    display_list_name = None
    if output_ref:
        display_list_name = _register_display_schemas(
            walker, op_name, output_ref["shape"], paginator
        )

    # Path-level response schema for both GET and POST. We point both at
    # the synthesised <OpName>OutputDisplay wrapper rather than the raw
    # botocore output shape. Stackql merges columns from BOTH the
    # path-level `responses[2xx].content.<mt>.schema` AND the
    # resource-level `methods.<m>.response.schema_override` when building
    # CREATE TABLE statements. Pointing both at the same Display wrapper
    # means the union is a no-op (deduplicates to one column set with
    # snake_case names). Pointing at the original output shape would
    # leak PascalCase columns (`Engine`) alongside the Display ones
    # (`engine`) and cause `duplicate column name` errors at DDL time.
    path_response_schema_ref = (
        {"$ref": f"#/components/schemas/{display_list_name}"}
        if display_list_name
        else (walker.ref(output_ref["shape"]) if output_ref else None)
    )

    # GET form
    get_block: dict = {
        "operationId": f"GET_{op_name}",
        "description": description,
        "parameters": query_params,
        "responses": {
            "200": {
                "description": "Success",
                "content": (
                    {"text/xml": {"schema": path_response_schema_ref}}
                    if path_response_schema_ref
                    else {}
                ),
            }
        },
    }
    if not get_block["description"]:
        get_block.pop("description")
    if not get_block["responses"]["200"]["content"]:
        del get_block["responses"]["200"]["content"]

    # POST form: same params (form-encoded body), no separate body to keep
    # parity with ref/ec2.yaml's representation. We rebuild the `responses`
    # dict fresh (rather than sharing a reference with the GET block) so
    # the YAML dumper doesn't emit anchor/alias pairs for the duplicate
    # object identity.
    post_responses = {
        "200": {
            "description": "Success",
            **(
                {"content": {"text/xml": {"schema": path_response_schema_ref}}}
                if path_response_schema_ref
                else {}
            ),
        }
    }
    post_block: dict = {
        "operationId": f"POST_{op_name}",
        "description": description,
        "responses": post_responses,
        "parameters": [],
    }
    if not post_block["description"]:
        post_block.pop("description")
    if input_ref:
        post_block["requestBody"] = {
            "content": {"text/xml": {"schema": walker.ref(input_ref["shape"])}}
        }

    output_shape = walker.shapes[output_ref["shape"]] if output_ref else None
    stack_tags = infer_stackql_tags(op_name, output_shape, paginator, walker.shapes, protocol)
    # Stamp the display schema name + objectKey onto the operation so the
    # Node provider-gen step can assemble the method's response block
    # (schema_override + schema-driven transform + objectKey). objectKey
    # is always `$.line_items` because the Display wrapper hoists rows to
    # the top under that key.
    if display_list_name:
        stack_tags["x-stackql-responseEnvelope"] = display_list_name
        stack_tags["x-stackql-responseObjectKey"] = "$.line_items"
    get_block.update(stack_tags)
    post_block.update(stack_tags)

    return path_key, get_block, post_block, _common_aws_headers()


# --------------------------------------------------------------------------- #
# Service builder
# --------------------------------------------------------------------------- #


def _service_alias(service_name: str) -> str:
    # snake_case, replace dashes with underscores. This is what stackql expects
    # for service identifiers.
    return service_name.replace("-", "_").lower()


def _service_endpoint_template(metadata: dict, service_name: str) -> list[dict]:
    prefix = metadata.get("endpointPrefix") or service_name
    if metadata.get("globalEndpoint"):
        # Global services (IAM, STS, ...) only have a single hostname, but
        # stackql still needs a `region` server-variable so the WHERE-clause
        # region survives the request build and is available for sigv4
        # signing context. We hang the variable off the global URL even
        # though it never gets substituted into the URL itself.
        return [
            {
                "url": f"https://{metadata['globalEndpoint']}",
                "variables": {"region": {"default": "us-east-1", "description": "AWS region"}},
                "description": f"Global endpoint for {service_name}",
            },
        ]
    return [
        {
            "url": f"https://{prefix}.{{region}}.amazonaws.com",
            "variables": {"region": {"default": "us-east-1", "description": "AWS region"}},
            "description": f"Regional endpoint for {service_name}",
        }
    ]


def build_service_openapi(service_name: str) -> dict:
    model, paginators, version = load_service(service_name)
    metadata = model.get("metadata") or {}
    protocol = metadata.get("protocol") or "query"
    shapes = model.get("shapes") or {}
    operations = model.get("operations") or {}
    walker = SchemaWalker(shapes)

    paths: dict[str, dict] = OrderedDict()

    target_prefix = metadata.get("targetPrefix") or metadata.get("serviceId") or service_name
    json_version = str(metadata.get("jsonVersion") or "1.0")

    for op_name in sorted(operations.keys()):
        op_def = operations[op_name]
        paginator = paginators.get(op_name)

        if protocol in {"query", "ec2"}:
            path_key, get_block, post_block, path_level = _build_query_op_block(
                op_name, op_def, walker, paginator, version, protocol
            )
            paths[path_key] = {
                "parameters": path_level,
                "get": get_block,
                "post": post_block,
            }
        elif protocol == "json":
            path_key, http_method, op_block, _ = _build_awsjson_op_block(
                op_name, op_def, walker, paginator, version, target_prefix,
                json_version,
            )
            entry = paths.setdefault(path_key, {})
            entry[http_method] = op_block
        elif protocol in {"rest-json", "rest-xml"}:
            request_uri, http_method, op_block, _ = _build_rest_op_block(
                op_name, op_def, walker, paginator, version, protocol
            )
            # rest-* path-collision guard: two operations can share the
            # same `(requestUri, httpMethod)` pair (e.g. S3's ListBuckets
            # and ListDirectoryBuckets are both GET /). Without
            # disambiguation, the second `paths[uri][method] = op_block`
            # silently overwrites the first and one of the ops disappears
            # from the published surface. Detect collisions and append
            # `?x-id=<OpName>` to the path key; the URL stackql builds
            # carries the suffix to AWS, which ignores `x-id` (it's an SDK
            # tracing convention AWS treats as a no-op query parameter)
            # and sigv4 still hashes correctly because the canonical
            # request includes the param.
            entry = paths.setdefault(request_uri, {})
            if http_method in entry:
                disambiguated_uri = (
                    f"{request_uri}{'&' if '?' in request_uri else '?'}x-id={op_name}"
                )
                entry = paths.setdefault(disambiguated_uri, {})
            entry[http_method] = op_block
        else:
            # Unknown / future protocol - emit as aws-json fallback so the
            # operation is at least visible.
            path_key, http_method, op_block, _ = _build_awsjson_op_block(
                op_name, op_def, walker, paginator, version, target_prefix,
                json_version,
            )
            entry = paths.setdefault(path_key, {})
            entry[http_method] = op_block

    # --- collision-demotion pass (rule 17) ---
    # Stackql builds the CREATE TABLE column set as `response columns +
    # union of required parameters across all methods on the resource`.
    # Response columns render as snake aliases (casing engine), so a
    # required request parameter whose lowercased form equals a rendered
    # snake column - but whose exact form differs - would collide under
    # SQLite's NOCASE collation (`Attribute` vs rendered `attribute`).
    # Demote such params to `required: false`; the WHERE clause still
    # routes them into the request when present. Multi-word Pascal params
    # (`VpcId`) never collide with their snake rendering (`vpc_id` -
    # the underscore breaks NOCASE equality), so only single-word names
    # are typically affected.
    #
    # Runs for any protocol that emits Display schemas (query/ec2/rest-xml).
    if protocol in {"query", "ec2", "rest-xml"}:
        # Rendered snake column names. Display properties carry the
        # botocore member names; _to_snake approximates the casing
        # engine's ToSnake.
        column_snake: set[str] = set()
        for schema_name, schema in walker.emitted.items():
            if not schema_name.endswith("Display") or schema_name.endswith("OutputDisplay"):
                continue
            for col_name in (schema.get("properties") or {}).keys():
                column_snake.add(_to_snake(col_name))
        if column_snake:
            for path_item in paths.values():
                for verb_key, op in path_item.items():
                    if verb_key == "parameters" or not isinstance(op, dict):
                        continue
                    # Demote query/header params with colliding names.
                    # Path params are exempt - they're structural (the URL
                    # template can't be built without them) and stackql
                    # routes the call by their presence in the SQL clause.
                    # Demoting a path param means SHOW METHODS no longer
                    # surfaces it as required, rule 10's signature dedupe
                    # then collapses get_X (no required) with list_X (no
                    # required) and demotes get_X to EXEC.
                    for p in op.get("parameters") or []:
                        if not isinstance(p, dict):
                            continue
                        name = p.get("name")
                        if not name:
                            continue
                        if p.get("in") == "path":
                            continue
                        # Don't demote AWS sigv4 header params or the
                        # X-Amz-Target discriminator - those are routing,
                        # already required:false, but defend anyway.
                        if name.startswith("X-Amz-"):
                            continue
                        if name.lower() in column_snake and name not in column_snake:
                            p["required"] = False
                    # Demote requestBody-required fields with case-colliding
                    # names. Single-word required body fields (route53
                    # CreateHostedZone's `Name`) collide under NOCASE with
                    # the rendered snake response column (`name`); multi-word
                    # Pascal fields (`CallerReference` vs `caller_reference`)
                    # never do - the underscore breaks NOCASE equality. The
                    # body schema is inlined under content.<mt>.schema; the
                    # `required` list there is what stackql's
                    # requiredParamsOf reads (rule 11). Query/ec2 POST bodies
                    # are `$ref`s - `required` absent - and skip through.
                    body = op.get("requestBody") or {}
                    content = body.get("content") or {}
                    for _, mt_block in content.items():
                        if not isinstance(mt_block, dict):
                            continue
                        schema = mt_block.get("schema") or {}
                        required_list = schema.get("required")
                        if not isinstance(required_list, list):
                            continue
                        new_required = [
                            r for r in required_list
                            if not (
                                isinstance(r, str)
                                and r.lower() in column_snake
                                and r not in column_snake
                            )
                        ]
                        if new_required != required_list:
                            if new_required:
                                schema["required"] = new_required
                            else:
                                schema.pop("required", None)

    spec: dict = OrderedDict()
    spec["openapi"] = "3.0.0"
    spec["info"] = {
        "version": version,
        "title": metadata.get("serviceFullName") or service_name,
        "description": metadata.get("serviceFullName") or service_name,
        # x-serviceName must be the AWS sigv4 signing name (the string AWS
        # expects in the Credential scope of an Authorization header). Botocore
        # exposes it as metadata.signingName when it differs from the endpoint
        # prefix; otherwise the endpoint prefix is the signing name. The
        # stackql namespace (aws.<alias>.*) is driven by filename and
        # x-serviceAlias - NOT this field.
        "x-serviceName": (
            metadata.get("signingName")
            or metadata.get("endpointPrefix")
            or service_name
        ),
        "x-serviceAlias": _service_alias(service_name),
        "x-protocol": protocol,
        "x-apiVersion": version,
        "x-endpointPrefix": metadata.get("endpointPrefix") or service_name,
    }
    if metadata.get("targetPrefix"):
        spec["info"]["x-targetPrefix"] = metadata["targetPrefix"]
    if metadata.get("jsonVersion"):
        spec["info"]["x-jsonVersion"] = metadata["jsonVersion"]
    spec["servers"] = _service_endpoint_template(metadata, service_name)
    spec["paths"] = paths
    spec["components"] = {
        "parameters": _aws_header_params_block(),
        "schemas": walker.emitted,
    }
    return spec


# --------------------------------------------------------------------------- #
# CLI
# --------------------------------------------------------------------------- #


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--output-dir",
        required=True,
        help="Directory to write per-service OpenAPI specs into",
    )
    parser.add_argument(
        "--service",
        action="append",
        default=None,
        help="Service name (botocore directory). Repeatable. Default: all services.",
    )
    parser.add_argument(
        "--limit",
        type=int,
        default=None,
        help="Only process the first N services (testing aid).",
    )
    args = parser.parse_args()

    out_dir = Path(args.output_dir).resolve()
    out_dir.mkdir(parents=True, exist_ok=True)

    targets = args.service or list_services()
    if args.limit:
        targets = targets[: args.limit]

    failures: list[tuple[str, str]] = []
    written = 0
    for svc in targets:
        try:
            spec = build_service_openapi(svc)
        except Exception as exc:  # noqa: BLE001
            failures.append((svc, repr(exc)))
            print(f"  fail  {svc}: {exc}", file=sys.stderr)
            continue
        alias = spec["info"]["x-serviceAlias"]
        out_path = out_dir / f"{alias}.yaml"
        with open(out_path, "w", encoding="utf-8") as f:
            _ordered_yaml_dump(spec, f)
        written += 1
        print(f"  ok    {svc} -> {out_path.name}  ({len(spec['paths'])} paths, {len(spec['components']['schemas'])} schemas)")

    print(f"\nwrote {written} services to {out_dir}")
    if failures:
        print(f"failed ({len(failures)}):", file=sys.stderr)
        for svc, err in failures:
            print(f"  {svc}: {err}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
