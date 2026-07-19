#!/usr/bin/env node
// Regenerate src/data/claims.json from the portfolio claims ledger
// (E:\Claude Code\sc-portfolio\docs\claims — sibling checkout of sc-portfolio-docs).
// Run locally, commit the JSON, deploy: the public /fact-check page ships a
// snapshot; it never reads the ledger at runtime.
//
//   npm run sync-claims
//
// Public fields only: id, claim, status, correction, sources, lastVerified.
// The ledger's usage maps and body notes are internal and deliberately excluded.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const LEDGER = path.resolve(HERE, '../../docs/claims');
const OUT = path.resolve(HERE, '../src/data/claims.json');

if (!fs.existsSync(LEDGER)) {
  console.error(`Ledger not found at ${LEDGER} — run from a full portfolio checkout.`);
  process.exit(1);
}

function parseClaimFile(txt) {
  const fm = txt.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fm) return null;
  const out = { id: '', claim: '', status: '', correction: '', sources: [], lastVerified: '' };
  let listKey = null;
  for (const line of fm[1].split(/\r?\n/)) {
    const item = line.match(/^\s+-\s+(.*)$/);
    if (listKey && item) { out[listKey].push(item[1].trim()); continue; }
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (!kv) continue;
    const [, key, val] = kv;
    if (key === 'sources' || key === 'usage') { listKey = key === 'sources' ? 'sources' : null; continue; }
    listKey = null;
    if (['id', 'claim', 'status', 'correction', 'lastVerified'].includes(key)) {
      out[key] = val.replace(/^"(.*)"$/, '$1').trim();
    }
  }
  if (!out.correction) delete out.correction;
  return out;
}

const claims = [];
for (const f of fs.readdirSync(LEDGER).filter((f) => f.endsWith('.md') && f !== 'README.md')) {
  const c = parseClaimFile(fs.readFileSync(path.join(LEDGER, f), 'utf8'));
  if (!c) continue;
  if (!c.id) c.id = f.replace(/\.md$/, '');
  if (!c.claim || !c.status) { console.warn(`skipping ${f} — missing claim/status`); continue; }
  claims.push(c);
}

claims.sort((a, b) => a.id.localeCompare(b.id));
fs.writeFileSync(OUT, JSON.stringify({ generated: new Date().toISOString().slice(0, 10), claims }, null, 2) + '\n');
console.log(`Wrote ${claims.length} claims → ${path.relative(process.cwd(), OUT)}`);
const counts = {};
for (const c of claims) counts[c.status] = (counts[c.status] || 0) + 1;
console.log(Object.entries(counts).map(([k, v]) => `${k}: ${v}`).join(' · '));
