// Rewrites response-column names in the generated docs from the spec's native
// (Pascal) casing to the snake_case the stackql casing engine renders at the SQL
// surface (provider.yaml: snake_case_aliases: true).
//
// Scope - ONLY the places that show RESPONSE COLUMNS:
//   1. `## Fields` section:   <CopyableCode code="RegionName" />  ->  region_name
//   2. `## \`SELECT\` examples`: the projection list between SELECT and FROM
//   3. `## \`INSERT\`/\`UPDATE\`/\`REPLACE\` examples`: RETURNING clause fields
//
// Everything else (WHERE params, Parameters tables, INSERT column lists, EXEC
// args, manifest props) stays in wire casing - the request router accepts both
// forms, and wire casing is canonical for inputs.
//
// The transform is a verbatim port of botocore's xform_name (the same algorithm
// as any-sdk/pkg/casing ToSnake), so acronyms collapse exactly as the engine
// renders them (VPCId -> vpc_id, S3Bucket -> s3_bucket). Names already
// containing '_' pass through, so the script is idempotent and safe on the
// exploded faux columns (table_name, queue_url, ...).
//
// Run after generate-docs, alongside sanitize-docs / scrub-docs:
//   node website/scripts/snake-case-docs.mjs

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const docsDir = path.resolve(__dirname, '..', 'docs');

// --- botocore xform_name port (matches any-sdk/pkg/casing xform) ---
const firstCapRe = /(.)([A-Z][a-z]+)/g;
const numberCapRe = /([a-z])([0-9]+)/g;
const endCapRe = /([a-z0-9])([A-Z])/g;
const specialRe = /[A-Z]{2,}s$/;

const snakeCache = new Map();

function toSnake(name) {
    if (snakeCache.has(name)) return snakeCache.get(name);
    let out;
    if (name.includes('_')) {
        out = name;
    } else {
        let n = name;
        const special = n.match(specialRe);
        if (special) {
            n = n.slice(0, n.length - special[0].length) + '_' + special[0].toLowerCase();
        }
        n = n.replace(firstCapRe, '$1_$2');
        n = n.replace(numberCapRe, '$1_$2');
        n = n.replace(endCapRe, '$1_$2');
        out = n.toLowerCase();
    }
    snakeCache.set(name, out);
    return out;
}

// --- section-scoped line rewriting ---
const IDENT = /^[A-Za-z][A-Za-z0-9]*$/;

function snakeIdentLine(line, { stripComma = true, stripSemi = false } = {}) {
    // lines look like: "RegionName," | "RegionName" | "RegionName;" (update RETURNING)
    let body = line;
    let suffix = '';
    if (stripSemi && body.endsWith(';')) {
        suffix = ';';
        body = body.slice(0, -1);
    }
    if (stripComma && body.endsWith(',')) {
        suffix = ',' + suffix;
        body = body.slice(0, -1);
    }
    if (!IDENT.test(body)) return line; // '*', expressions, anything unexpected - leave alone
    return toSnake(body) + suffix;
}

function transformFile(filePath) {
    const original = fs.readFileSync(filePath, 'utf8');
    const lines = original.split('\n');

    let section = '';       // current ## heading text
    let inSqlFence = false;
    let inProjection = false;  // between SELECT and FROM (SELECT examples only)
    let inReturning = false;   // between RETURNING and ; (INSERT/UPDATE/REPLACE)

    const isSelectSection = () => section === '`SELECT` examples';
    const isReturningSection = () =>
        section === '`INSERT` examples' ||
        section === '`UPDATE` examples' ||
        section === '`REPLACE` examples';

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmed = line.trim();

        if (trimmed.startsWith('## ')) {
            section = trimmed.slice(3).trim();
            inSqlFence = false;
            inProjection = false;
            inReturning = false;
            continue;
        }

        if (section === 'Fields') {
            if (line.includes('<CopyableCode code="')) {
                lines[i] = line.replace(/(<CopyableCode code=")([^"]+)(")/g,
                    (_, pre, name, post) => pre + toSnake(name) + post);
            }
            continue;
        }

        if (isSelectSection() || isReturningSection()) {
            if (trimmed.startsWith('```')) {
                inSqlFence = trimmed === '```sql';
                inProjection = false;
                inReturning = false;
                continue;
            }
            if (!inSqlFence) continue;

            if (isSelectSection()) {
                if (trimmed === 'SELECT') { inProjection = true; continue; }
                if (trimmed.startsWith('FROM ')) { inProjection = false; continue; }
                if (inProjection) {
                    lines[i] = snakeIdentLine(trimmed);
                }
            } else {
                if (trimmed === 'RETURNING') { inReturning = true; continue; }
                if (inReturning) {
                    if (trimmed === ';') { inReturning = false; continue; }
                    lines[i] = snakeIdentLine(trimmed, { stripComma: true, stripSemi: true });
                    if (trimmed.endsWith(';')) inReturning = false;
                }
            }
        }
    }

    const updated = lines.join('\n');
    if (updated !== original) {
        fs.writeFileSync(filePath, updated, 'utf8');
        return true;
    }
    return false;
}

function walk(dir, out = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(full, out);
        else if (entry.name.endsWith('.md')) out.push(full);
    }
    return out;
}

const files = walk(docsDir);
let changed = 0;
for (const f of files) {
    if (transformFile(f)) changed++;
}
console.log(`snake-case-docs: scanned ${files.length} files, updated ${changed}`);
