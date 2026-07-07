#!/usr/bin/env python3
"""Pluggable smoke-test runner for the stackql AWS provider.

Each test is an .iql file (plain stackql, or a Jinja2 template) orchestrated
by a YAML manifest. Tests run in manifest order and share a variable map:
a test's `exports` publish values under `{test_name}.{export_name}`, which
later templates reference as `{{ test_name.export_name }}` - so a lifecycle
can INSERT (capturing an eagerly-assigned id from RETURNING, or a
lazily-assigned id from a follow-up SELECT), then UPDATE / DELETE with it.

Usage (WSL - the stackql binary is a Linux ELF):
    python3 tests/smoke.py --env-file .env
    python3 tests/smoke.py --only vpc_create,vpc_delete --stackql ./.bin/stackql

Manifest schema - see tests/README.md.
"""

import argparse
import json
import os
import re
import subprocess
import sys
import time

import yaml
from jinja2 import Environment, StrictUndefined
from jinja2.exceptions import UndefinedError

PASS, FAIL, SKIP = "PASS", "FAIL", "SKIP"

# Failure signatures that fail a test regardless of its expectations (even
# with allow_error) - stackql exits 0 for several of these, so exit-code
# checks alone would miss them (that is exactly how a NOCASE DDL collision
# once slipped through). Override / extend via manifest config.fatal_patterns.
DEFAULT_FATAL_PATTERNS = [
    "duplicate column name",
    "aborting DDL run",
    "error processing response",
    "failed to transform",
    "schema unsuitable for select",
    "no such column",
    "could not locate symbol",
    "unknown flag",
    # stackql exits 0 when a statement routes to no method (e.g. a verb was
    # demoted out from under a query) - without this a broken smoke query
    # "passes" while doing nothing.
    "cannot find matching operation",
]


class TestResult:
    def __init__(self, name, status, detail="", duration=0.0):
        self.name = name
        self.status = status
        self.detail = detail
        self.duration = duration


def load_env_file(path):
    """Load KEY=VALUE lines into the environment.

    Tolerates comments, blank lines, `export ` prefixes, surrounding quotes
    and Windows CRLF line endings (a stray \r in a credential breaks sigv4
    with `invalid header field value for "Authorization"`).
    """
    with open(path, "r", encoding="utf-8-sig") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            if line.startswith("export "):
                line = line[len("export "):]
            key, _, value = line.partition("=")
            key = key.strip()
            value = value.strip().strip('"').strip("'").replace("\r", "")
            if key:
                os.environ[key] = value


def registry_arg(registry_path):
    reg = {
        "url": "file://" + registry_path,
        "localDocRoot": registry_path,
        "verifyConfig": {"nopVerify": True},
    }
    return "--registry=" + json.dumps(reg)


def run_stackql(stackql, registry_path, query, timeout):
    # registry_path=None (--live) omits the --registry override so stackql
    # resolves the provider from the public registry, signatures verified.
    cmd = [stackql]
    if registry_path:
        cmd.append(registry_arg(registry_path))
    # The bare "--" argv separator stops cobra from parsing a query that
    # begins with a SQL comment ("-- ...") as a CLI flag.
    cmd += ["--output", "json", "exec", "--", query]
    proc = subprocess.run(
        cmd,
        capture_output=True,
        text=True,
        timeout=timeout,
    )
    return proc.returncode, proc.stdout or "", proc.stderr or ""


def parse_rows(stdout):
    """stackql --output json prints a JSON array of row objects (or nothing)."""
    text = stdout.strip()
    if not text:
        return None
    try:
        parsed = json.loads(text)
    except json.JSONDecodeError:
        return None
    if isinstance(parsed, list):
        return parsed
    if isinstance(parsed, dict):
        return [parsed]
    return None


def evaluate(expect, rc, stdout, stderr, rows, fatal_patterns):
    """Return a list of failure strings (empty = expectations met).

    `expect` must already have its `contains` / `not_contains` needles
    Jinja-rendered (done alongside query rendering so an unresolvable
    reference skips the test rather than erroring mid-evaluation).
    """
    failures = []
    combined = stdout + "\n" + stderr

    for pattern in fatal_patterns:
        if pattern.lower() in combined.lower():
            failures.append("fatal pattern %r in output: %s" % (pattern, combined.strip()[:300]))

    if rc != 0 and not expect.get("allow_error", False):
        failures.append("exit code %d: %s" % (rc, (stderr or stdout).strip()[:300]))

    min_rows = expect.get("min_rows")
    if min_rows is not None:
        count = len(rows) if rows is not None else 0
        if count < min_rows:
            failures.append("expected >= %d rows, got %d" % (min_rows, count))

    for needle in expect.get("contains", []) or []:
        if needle not in combined:
            failures.append("output does not contain %r" % needle)

    for needle in expect.get("not_contains", []) or []:
        if needle in combined:
            # Neutral wording: for async state polls, seeing a transitional
            # state (stopping, pending) is entirely expected - the retry
            # loop exists precisely to wait through it.
            failures.append("output still contains %r" % needle)

    return failures


def extract_exports(test, stdout, stderr, rows, render):
    """Return ({export_name: value}, [failure strings]).

    `regex` patterns are Jinja-rendered first so they can reference earlier
    exports and manifest vars (e.g. 'arn:aws:sns:...:{{ topic_name }}').
    """
    values = {}
    failures = []
    for export in test.get("exports", []) or []:
        name = export["name"]
        if "column" in export:
            row_index = export.get("row", 0)
            if not rows or row_index >= len(rows):
                failures.append("export %r: no row %d in result" % (name, row_index))
                continue
            row = rows[row_index]
            if export["column"] not in row:
                failures.append(
                    "export %r: column %r not in row (have: %s)"
                    % (name, export["column"], ", ".join(sorted(row)))
                )
                continue
            values[name] = row[export["column"]]
        elif "regex" in export:
            pattern = render(str(export["regex"]))
            match = re.search(pattern, stdout + "\n" + stderr)
            if not match:
                # `optional: true` exports may legitimately find nothing
                # (e.g. a cleanup sweep with no strays). The export simply
                # never materialises, so steps referencing it are skipped
                # via the unresolvable-template rule.
                if not export.get("optional"):
                    failures.append("export %r: regex %r not found" % (name, pattern))
                continue
            values[name] = match.group(1) if match.groups() else match.group(0)
        else:
            failures.append("export %r: needs 'column' or 'regex'" % name)
    return values, failures


def rollback(stackql, registry_path, gvars, timeout=180):
    """Best-effort teardown of every smoke-test breadcrumb, independent of
    the manifest's export chain (so it works even when a mid-run failure or
    Ctrl+C left exports unresolved). Discovery is live: smoke VPCs by CIDR,
    their subnets, instances by test tag OR smoke-subnet occupancy, then
    the sns topic / s3 bucket / dynamodb table by name. All mutations are
    singleton statements (no batch support - stackql/stackql#683), paced
    with stackql's native `sleep` between dependent phases.
    """
    region = gvars.get("region", "ap-southeast-2")
    global_region = gvars.get("global_region", "us-east-1")
    cidr = gvars.get("cidr_block", "10.99.0.0/16")
    topic_name = gvars.get("topic_name", "stackql-smoke-topic")
    table_name = gvars.get("table_name", "stackql-smoke-ddb")
    bucket_prefix = gvars.get("bucket_prefix", "stackql-smoke")

    def log(msg):
        print("[rollback] %s" % msg, flush=True)

    def q(sql, tolerate=True):
        try:
            rc, out, err = run_stackql(stackql, registry_path, sql, timeout)
        except (subprocess.TimeoutExpired, OSError) as exc:
            log("ERROR running %r: %s" % (sql[:100], exc))
            return 1, "", "", None
        if rc != 0 and not tolerate:
            log("ERROR (%d): %s -> %s" % (rc, sql[:100], (err or out).strip()[:180]))
        return rc, out or "", err or "", parse_rows(out)

    def pause(ms):
        # stackql-native pause between dependent operations.
        q("sleep %d" % ms)

    log("scanning for smoke breadcrumbs in %s" % region)

    # --- ec2: vpcs (by smoke cidr) -> subnets -> instances -----------------
    _, _, _, vrows = q(
        "SELECT vpc_id FROM aws.ec2.vpcs WHERE region = '%s' AND cidr_block = '%s'" % (region, cidr)
    )
    vpcs = [r["vpc_id"] for r in (vrows or []) if r.get("vpc_id")]
    subnets = []
    if vpcs:
        in_list = ", ".join("'%s'" % v for v in vpcs)
        _, _, _, srows = q(
            "SELECT subnet_id, vpc_id FROM aws.ec2.subnets WHERE region = '%s' AND vpc_id IN (%s)"
            % (region, in_list)
        )
        subnets = [r for r in (srows or []) if r.get("subnet_id")]
    log("found %d smoke vpc(s), %d subnet(s)" % (len(vpcs), len(subnets)))

    subnet_ids = {s["subnet_id"] for s in subnets}
    _, _, _, irows = q(
        "SELECT instance_id, subnet_id, state, tag_set FROM aws.ec2.instances WHERE region = '%s'" % region
    )
    strays = []
    for r in irows or []:
        if "terminated" in (r.get("state") or ""):
            continue
        tagged = "stackql-provider-test" in (r.get("tag_set") or "")
        occupying = r.get("subnet_id") in subnet_ids
        if r.get("instance_id") and (tagged or occupying):
            strays.append(r["instance_id"])
    for iid in strays:
        log("terminating instance %s" % iid)
        q("DELETE FROM aws.ec2.instances WHERE region = '%s' AND InstanceId = '%s'" % (region, iid), tolerate=False)
    if strays and subnet_ids:
        log("waiting for %d instance(s) to release the smoke subnet(s)" % len(strays))
        for _attempt in range(24):
            pause(5000)
            _, _, _, chk = q(
                "SELECT instance_id, subnet_id FROM aws.ec2.instances WHERE region = '%s'" % region
            )
            occupied = [c for c in (chk or []) if c.get("subnet_id") in subnet_ids]
            if not occupied:
                break
            log("  still occupied by %s" % ", ".join(c["instance_id"] for c in occupied))
        else:
            log("WARNING: subnets still occupied after wait; subnet deletes may fail")

    for s in subnets:
        log("deleting subnet %s" % s["subnet_id"])
        q("DELETE FROM aws.ec2.subnets WHERE region = '%s' AND subnet_id = '%s'" % (region, s["subnet_id"]), tolerate=False)
    if subnets:
        pause(2000)
    for v in vpcs:
        log("deleting vpc %s" % v)
        q("DELETE FROM aws.ec2.vpcs WHERE region = '%s' AND vpc_id = '%s'" % (region, v), tolerate=False)

    # --- sns topic ---------------------------------------------------------
    _, out, err, trows = q("SELECT topic_arn FROM aws.sns.topics WHERE region = '%s'" % region)
    arns = [
        r["topic_arn"] for r in (trows or [])
        if r.get("topic_arn", "").endswith(":" + topic_name)
    ]
    for arn in arns:
        log("deleting sns topic %s" % arn)
        q("DELETE FROM aws.sns.topics WHERE region = '%s' AND topic_arn = '%s'" % (region, arn), tolerate=False)

    # --- s3 bucket (account-namespaced name; 404 tolerated) ----------------
    _, _, _, acct_rows = q(
        "SELECT account FROM aws.sts.caller_identities WHERE region = '%s'" % global_region
    )
    account = (acct_rows or [{}])[0].get("account")
    if account:
        bucket = "%s-%s" % (bucket_prefix, account)
        log("deleting s3 bucket %s (404 tolerated)" % bucket)
        q("DELETE FROM aws.s3.buckets WHERE region = '%s' AND bucket = '%s'" % (global_region, bucket))

    # --- dynamodb table (not-found tolerated) ------------------------------
    log("deleting dynamodb table %s (not-found tolerated)" % table_name)
    q("DELETE FROM aws.dynamodb.tables WHERE region = '%s' AND table_name = '%s'" % (region, table_name))

    # --- appconfig application (by smoke name) -----------------------------
    app_name = gvars.get("appconfig_app_name", "stackql-smoke-app")
    _, _, _, apps = q("SELECT id, name FROM aws.appconfig.applications WHERE region = '%s'" % region)
    for a in apps or []:
        if a.get("name") == app_name and a.get("id"):
            log("deleting appconfig application %s (%s)" % (a["id"], app_name))
            q(
                "DELETE FROM aws.appconfig.applications WHERE region = '%s' AND application_id = '%s'"
                % (region, a["id"]),
                tolerate=False,
            )

    log("rollback complete")


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    here = os.path.dirname(os.path.abspath(__file__))
    ap.add_argument("--manifest", default=os.path.join(here, "manifest.yaml"))
    ap.add_argument("--stackql", default=None, help="stackql binary (default: manifest config, else STACKQL env, else 'stackql')")
    ap.add_argument("--env-file", default=None, help="dotenv file with AWS credentials (parsed, CRLF-safe)")
    ap.add_argument("--only", default=None, help="comma-separated test names to run (dependencies are NOT auto-included)")
    ap.add_argument("--list", action="store_true", help="list tests and exit")
    ap.add_argument("--verbose", action="store_true", help="print each rendered query and raw output")
    ap.add_argument(
        "--rendered-sql",
        default=None,
        metavar="FILE",
        help="write every rendered query executed this run to FILE, with a SQL comment header per test "
        "(values are the real substitutions, so exports from earlier tests appear resolved)",
    )
    ap.add_argument(
        "--rollback",
        action="store_true",
        help="run ONLY the breadcrumb rollback (live discovery + teardown of smoke resources) and exit",
    )
    ap.add_argument(
        "--no-rollback",
        action="store_true",
        help="do not auto-run the rollback after a failed or interrupted run",
    )
    ap.add_argument(
        "--live",
        action="store_true",
        help="test the published provider from the public stackql registry "
        "(drops the local --registry override; provider is pulled and "
        "signature-verified by stackql on first use)",
    )
    args = ap.parse_args()

    with open(args.manifest, "r", encoding="utf-8") as f:
        manifest = yaml.safe_load(f)

    config = manifest.get("config") or {}
    manifest_dir = os.path.dirname(os.path.abspath(args.manifest))
    queries_dir = os.path.join(manifest_dir, config.get("queries_dir", "queries"))
    if args.live:
        registry_path = None
    else:
        registry_path = os.path.abspath(os.path.join(manifest_dir, config.get("registry_path", "../provider-dev/openapi")))
    timeout = int(config.get("query_timeout_seconds", 300))
    fatal_patterns = config.get("fatal_patterns", DEFAULT_FATAL_PATTERNS)

    stackql = (
        args.stackql
        or os.environ.get("STACKQL")
        or os.path.abspath(os.path.join(manifest_dir, config.get("stackql", "../.bin/stackql")))
    )

    if args.env_file:
        load_env_file(args.env_file)

    tests = manifest.get("tests") or []
    if args.list:
        for t in tests:
            print("%-32s %s" % (t["name"], t.get("description", "")))
        return 0

    only = set(args.only.split(",")) if args.only else None

    try:
        version_proc = subprocess.run(
            [stackql, "--version"], capture_output=True, text=True, timeout=30
        )
        version = (version_proc.stdout or "").strip().splitlines()
        version = version[0] if version else "unknown"
    except OSError as exc:
        print("cannot execute stackql binary %r: %s" % (stackql, exc), file=sys.stderr)
        return 2
    print("binary:   %s" % stackql)
    print("version:  %s" % version)
    print("registry: %s" % (registry_path or "public registry (live)"))

    if args.live:
        # exec does not auto-pull: without a local --registry override the
        # provider must be installed from the public registry first, and a
        # fresh pull also picks up the latest published version.
        print("pulling aws provider from the public registry ...")
        try:
            rc, out, err = run_stackql(stackql, registry_path, "REGISTRY PULL aws", timeout)
        except (subprocess.TimeoutExpired, OSError) as exc:
            print("registry pull failed: %s" % exc, file=sys.stderr)
            return 2
        pull_text = (out + err).strip()
        if pull_text:
            print(pull_text)
        if rc != 0:
            print("registry pull failed (rc=%d), aborting" % rc, file=sys.stderr)
            return 2
        # capture the installed provider version for the run log
        # (SHOW VERSIONS is not in the grammar; SHOW PROVIDERS carries a
        # version column)
        try:
            rc, out, err = run_stackql(stackql, registry_path, "SHOW PROVIDERS", timeout)
        except (subprocess.TimeoutExpired, OSError) as exc:
            print("warning: SHOW PROVIDERS failed: %s" % exc, file=sys.stderr)
            rc, out = 1, ""
        aws_version = None
        for row in parse_rows(out) or []:
            if row.get("name") == "aws":
                aws_version = row.get("version")
        if aws_version:
            print("provider: aws %s (public registry)" % aws_version)
        else:
            print("warning: could not determine installed aws provider version", file=sys.stderr)

    jenv = Environment(undefined=StrictUndefined)
    context = dict(manifest.get("vars") or {})

    if args.rollback:
        rollback(stackql, registry_path, dict(manifest.get("vars") or {}), timeout)
        return 0

    results = []
    rendered_log = []
    run_aborted = False
    interrupted = False

    try:
      for test in tests:
        name = test["name"]
        if only is not None and name not in only:
            continue
        always_run = bool(test.get("always_run", False))
        if run_aborted and not always_run:
            results.append(TestResult(name, SKIP, "earlier failure"))
            continue

        def render(s, _ctx=context):
            return jenv.from_string(s).render(**_ctx)

        started = time.time()
        try:
            with open(os.path.join(queries_dir, test["file"]), "r", encoding="utf-8") as f:
                raw_query = f.read()
            query = render(raw_query).strip()
            expect = dict(test.get("expect") or {})
            expect["contains"] = [render(str(n)) for n in (expect.get("contains") or [])]
            expect["not_contains"] = [render(str(n)) for n in (expect.get("not_contains") or [])]
        except UndefinedError as exc:
            # A missing export from a failed predecessor: skip, don't error.
            results.append(TestResult(name, SKIP, "unresolvable template: %s" % exc))
            continue
        except OSError as exc:
            results.append(TestResult(name, FAIL, str(exc)))
            run_aborted = True
            continue

        if args.verbose:
            print("--- %s ---\n%s" % (name, query))

        if args.rendered_sql is not None:
            header = ["-- " + "=" * 66, "-- test: %s" % name, "-- file: %s" % test["file"]]
            if test.get("description"):
                header.append("-- %s" % test["description"])
            header.append("-- " + "=" * 66)
            rendered_log.append("\n".join(header) + "\n" + query + ";\n")

        retry = test.get("retry") or {}
        attempts = max(1, int(retry.get("attempts", 1)))
        delay = float(retry.get("delay_seconds", 5))

        failures = ["not run"]
        stdout = stderr = ""
        rows = None
        for attempt in range(attempts):
            if attempt:
                # Visible heartbeat: without this a deterministic failure
                # inside a long retry loop (15 x 10s) is indistinguishable
                # from a hang - output only prints after the final attempt.
                print(
                    "  [retry] attempt %d/%d failed (%s); retrying in %ds"
                    % (attempt, attempts, "; ".join(failures)[:160], delay),
                    flush=True,
                )
                time.sleep(delay)
            try:
                rc, stdout, stderr = run_stackql(stackql, registry_path, query, timeout)
            except (subprocess.TimeoutExpired, OSError) as exc:
                failures = ["invocation failed: %s" % exc]
                continue
            rows = parse_rows(stdout)
            # Per-test `fatal_exempt` subtracts patterns that are expected
            # noise for THIS test only (e.g. a cleanup DELETE against a
            # never-created resource 404s and stackql reports "error
            # processing response" for the no-body operation).
            exempt = set(test.get("fatal_exempt") or [])
            effective_fatal = [p for p in fatal_patterns if p not in exempt]
            failures = evaluate(expect, rc, stdout, stderr, rows, effective_fatal)
            if not failures:
                break

        if args.verbose:
            print(stdout.strip() or stderr.strip())

        if failures:
            results.append(TestResult(name, FAIL, "; ".join(failures), time.time() - started))
            run_aborted = True
            continue

        export_values, export_failures = extract_exports(test, stdout, stderr, rows, render)
        if export_failures:
            results.append(TestResult(name, FAIL, "; ".join(export_failures), time.time() - started))
            run_aborted = True
            continue
        if export_values:
            context[name] = {**context.get(name, {}), **export_values}

        results.append(TestResult(name, PASS, "", time.time() - started))
    except KeyboardInterrupt:
        # Don't let Ctrl+C strand live resources: fall through to the
        # summary and the automatic rollback below.
        interrupted = True
        print("\n[interrupt] run interrupted - proceeding to summary and rollback", flush=True)

    if args.rendered_sql is not None:
        with open(args.rendered_sql, "w", encoding="utf-8") as f:
            f.write(
                "-- Rendered queries executed by tests/smoke.py (%s)\n"
                "-- binary: %s\n-- version: %s\n\n" % (os.path.basename(args.manifest), stackql, version)
            )
            f.write("\n".join(rendered_log))
        print("rendered SQL written to %s (%d queries)" % (args.rendered_sql, len(rendered_log)))

    width = max((len(r.name) for r in results), default=10)
    print("\n" + "=" * 74)
    counts = {PASS: 0, FAIL: 0, SKIP: 0}
    for r in results:
        counts[r.status] += 1
        line = "  %-*s  %-4s  %5.1fs" % (width, r.name, r.status, r.duration)
        if r.detail:
            line += "  %s" % r.detail[:180]
        print(line)
    print("=" * 74)
    print("  %d passed, %d failed, %d skipped" % (counts[PASS], counts[FAIL], counts[SKIP]))

    # Self-cleaning: a failed or interrupted run leaves live resources
    # behind (manifest cleanups only cover the export chain that
    # materialised). The rollback rediscovers everything from scratch.
    if (interrupted or counts[FAIL]) and not args.no_rollback:
        print("\nfailure/interrupt detected - rolling back smoke breadcrumbs "
              "(disable with --no-rollback)", flush=True)
        rollback(stackql, registry_path, dict(manifest.get("vars") or {}), timeout)

    if interrupted:
        return 130
    return 1 if counts[FAIL] else 0


if __name__ == "__main__":
    sys.exit(main())
