#!/usr/bin/env node
// Post-docgen scrub pass for the generated provider docs. Runs AFTER
// sanitize-docs.mjs; unlike the sanitizer this script is IDEMPOTENT and
// can be re-run safely on already-scrubbed docs.
//
// 1. X-Amz-Target is the aws-json protocol discriminator - stackql
//    defaults it from the spec and users must never supply it. Remove it
//    everywhere it surfaces: parameter dictionary rows, method-table
//    param links, SELECT/UPDATE WHERE clauses, INSERT column/value lists,
//    manifest-tab YAML blocks, and EXEC @param lines.
//
// 2. SQL identifiers containing '-' (header-mapped params like
//    x-amz-acl) must be backtick-quoted in SQL samples - column lists,
//    WHERE/AND clauses, SET entries. EXEC @param lines are NOT quoted
//    (@X-Amz-Invocation-Type=... is the wire form, not a SQL identifier).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const docsDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'docs');

const XAT = 'X-Amz-Target';
const XAT_LINK = /<a href="#parameter-X-Amz-Target"><code>X-Amz-Target<\/code><\/a>/g;
const HYPHEN_IDENT = '[A-Za-z][A-Za-z0-9_]*(?:-[A-Za-z0-9_]+)+';

let filesChanged = 0;

function scrubTdCell(line) {
  if (!line.includes(XAT)) return line;
  const m = /^(\s*<td>)(.*)(<\/td>\s*)$/.exec(line);
  if (!m) return line;
  let inner = m[2].replace(XAT_LINK, '');
  inner = inner
    .replace(/,\s*,/g, ', ')
    .replace(/^\s*,\s*/, '')
    .replace(/\s*,\s*$/, '')
    .trim();
  return m[1] + inner + m[3];
}

// Strip a single trailing comma from a list line, preserving any
// comment/semicolon-free suffix ("'{{ region }}'," -> "'{{ region }}'").
function stripTrailingComma(line) {
  return line.replace(/,(\s*)$/, '$1');
}

function scrub(text) {
  const lines = text.split('\n');
  const out = [];
  let inFence = false;
  let inCodeBlock = false;
  let skipParamTr = false;
  let skipManifestBlock = false;
  let manifestIndent = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // --- parameter dictionary row: <tr id="parameter-X-Amz-Target"> ... </tr>
    if (skipParamTr) {
      if (/^<\/tr>/.test(trimmed)) skipParamTr = false;
      continue;
    }
    if (trimmed === `<tr id="parameter-${XAT}">`) {
      skipParamTr = true;
      continue;
    }

    if (trimmed.startsWith('```')) {
      inFence = !inFence;
      out.push(line);
      continue;
    }

    // --- CodeBlock template literal (manifest tab YAML)
    if (inCodeBlock) {
      if (/<\/CodeBlock>/.test(line)) inCodeBlock = false;
      if (skipManifestBlock) {
        const indent = line.length - line.trimStart().length;
        // consume the value:/description: continuation lines
        if (trimmed && indent > manifestIndent && !trimmed.startsWith('- name:')) continue;
        skipManifestBlock = false;
      }
      if (new RegExp(`^\\s*- name: ${XAT}\\s*$`).test(line)) {
        skipManifestBlock = true;
        manifestIndent = line.length - line.trimStart().length;
        continue;
      }
      out.push(line);
      continue;
    }
    if (/<CodeBlock\b/.test(line) && !/<\/CodeBlock>/.test(line)) {
      inCodeBlock = true;
      out.push(line);
      continue;
    }

    if (!inFence) {
      out.push(scrubTdCell(line));
      continue;
    }

    // --- inside a ```sql fence ---

    // WHERE/AND X-Amz-Target = '{{ X-Amz-Target }}'  (optionally ';')
    let m = new RegExp(`^(WHERE|AND) ${XAT} = '\\{\\{ ${XAT}\\s*\\}\\}'(;?)\\s*$`).exec(line);
    if (m) {
      if (m[2] === ';' && out.length) out[out.length - 1] += ';';
      if (m[1] === 'WHERE') {
        // promote the next AND to WHERE (defensive; region is always first)
        const next = lines[i + 1];
        if (next && /^AND /.test(next)) lines[i + 1] = next.replace(/^AND /, 'WHERE ');
      }
      continue;
    }

    // INSERT column-list / value-list entries
    m = new RegExp(`^(?:${XAT}|'\\{\\{ ${XAT} \\}\\}')(,?)\\s*$`).exec(line);
    if (m) {
      if (m[1] !== ',' && out.length) out[out.length - 1] = stripTrailingComma(out[out.length - 1]);
      continue;
    }

    // EXEC @X-Amz-Target='{{ X-Amz-Target }}'
    m = new RegExp(`^@${XAT}='\\{\\{ ${XAT} \\}\\}'\\s*(,?)\\s*$`).exec(line);
    if (m) {
      if (m[1] !== ',' && out.length) out[out.length - 1] = stripTrailingComma(out[out.length - 1]);
      continue;
    }

    // --- backtick-quote hyphenated SQL identifiers (idempotent: the
    // patterns only match unquoted identifiers at their SQL positions)
    let l = line;
    if (!l.startsWith('@')) {
      // bare list entry: "x-amz-acl," / "x-amz-acl"
      l = l.replace(new RegExp(`^(${HYPHEN_IDENT})(,?)$`), '`$1`$2');
      // WHERE/AND/OR clause LHS
      l = l.replace(new RegExp(`^((?:WHERE|AND|OR)\\s+)(${HYPHEN_IDENT})(\\s*=)`), '$1`$2`$3');
      // SET-list / assignment LHS: "x-amz-acl = ..." (not placeholders,
      // which start with a quote)
      l = l.replace(new RegExp(`^(${HYPHEN_IDENT})(\\s*=)`), '`$1`$2');
      // inline "SET x = ..." form
      l = l.replace(new RegExp(`^(SET\\s+)(${HYPHEN_IDENT})(\\s*=)`), '$1`$2`$3');
    }
    out.push(l);
  }

  return { text: out.join('\n'), changed: out.join('\n') !== text };
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(p);
    } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
      const before = fs.readFileSync(p, 'utf8');
      const { text: after, changed } = scrub(before);
      if (changed) {
        fs.writeFileSync(p, after);
        filesChanged++;
      }
    }
  }
}

walk(docsDir);
console.log(`scrub-docs: modified ${filesChanged} file(s)`);
