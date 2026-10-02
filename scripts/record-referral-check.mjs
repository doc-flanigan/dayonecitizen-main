#!/usr/bin/env node
// Record a referral-code check in src/data/verification.ts: bumps
// VERIFIED_ON / VERIFIED_DISPLAY / VERIFIED_MONTH and prepends a dated entry
// to VERIFICATION_LOG. Run by the "referral check" workflow after Doc confirms
// the code on the live RSI enlist page.
//
//   node scripts/record-referral-check.mjs [YYYY-MM-DD]   (defaults to today, UTC)
//
// Also: `node scripts/record-referral-check.mjs --age` prints how many days
// old VERIFIED_ON is (used by the workflow's staleness check).

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const FILE = path.resolve(HERE, '../src/data/verification.ts')
const MARKER = '// __VERIFY_LOG_INSERT__'
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const src = fs.readFileSync(FILE, 'utf8')
const current = src.match(/export const VERIFIED_ON = '(\d{4}-\d{2}-\d{2})'/)
if (!current) {
  console.error(`VERIFIED_ON not found in ${FILE}`)
  process.exit(1)
}

function parseIso(iso) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return null
  const d = new Date(`${iso}T00:00:00Z`)
  return Number.isNaN(d.getTime()) || d.toISOString().slice(0, 10) !== iso ? null : d
}

const today = new Date().toISOString().slice(0, 10)

if (process.argv[2] === '--age') {
  const age = Math.floor((parseIso(today) - parseIso(current[1])) / 86_400_000)
  console.log(age)
  process.exit(0)
}

const iso = process.argv[2] || today
const date = parseIso(iso)
if (!date) {
  console.error(`Not a valid YYYY-MM-DD date: ${iso}`)
  process.exit(1)
}
if (iso > today) {
  console.error(`Check date ${iso} is in the future.`)
  process.exit(1)
}
if (iso <= current[1]) {
  console.error(`Check date ${iso} is not newer than VERIFIED_ON (${current[1]}); nothing to do.`)
  process.exit(1)
}
if (!src.includes(MARKER)) {
  console.error(`Log insert marker ${MARKER} not found in ${FILE}`)
  process.exit(1)
}

const month = MONTHS[date.getUTCMonth()]
const display = `${month} ${date.getUTCDate()}, ${date.getUTCFullYear()}`

const entry = `  {
    display: '${display}',
    text: 'STAR-GCQJ-N6NC entered on the live RSI enlist page. RSI accepted it and showed the code as applied. (manual check in a real browser)',
  },
`

const out = src
  .replace(/export const VERIFIED_ON = '[^']*'/, `export const VERIFIED_ON = '${iso}'`)
  .replace(/export const VERIFIED_DISPLAY = '[^']*'/, `export const VERIFIED_DISPLAY = '${display}'`)
  .replace(/export const VERIFIED_MONTH = '[^']*'/, `export const VERIFIED_MONTH = '${month} ${date.getUTCFullYear()}'`)
  .replace(/^(.*__VERIFY_LOG_INSERT__.*\n)/m, `$1${entry}`)

fs.writeFileSync(FILE, out)
console.log(`Recorded check on ${display}.`)
