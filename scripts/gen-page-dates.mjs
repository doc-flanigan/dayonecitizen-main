// Generates src/data/page-dates.generated.json: datePublished / dateModified for every
// page that emits Article JSON-LD, taken from git history of that page's source file.
// Run locally (needs full git history, not a shallow clone), review, commit the JSON:
//   node scripts/gen-page-dates.mjs
import { execFileSync } from 'node:child_process'
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(import.meta.dirname, '..')
const APP = path.join(ROOT, 'src', 'app')

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = path.join(dir, name)
    if (statSync(p).isDirectory()) yield* walk(p)
    else if (name === 'page.tsx') yield p
  }
}

const git = (...args) => execFileSync('git', args, { cwd: ROOT, encoding: 'utf8' }).trim()
const out = {}
for (const file of walk(APP)) {
  const src = readFileSync(file, 'utf8')
  if (!/'Article'/.test(src)) continue
  const rel = path.relative(ROOT, file).split(path.sep).join('/')
  const route = '/' + path.relative(APP, path.dirname(file)).split(path.sep).join('/')
  const modified = git('log', '-1', '--format=%cI', '--', rel)
  const published = git('log', '--follow', '--diff-filter=A', '--format=%cI', '--', rel).split('\n').pop()
  if (!modified || !published) continue
  out[route] = { datePublished: published, dateModified: modified }
}
const sorted = Object.fromEntries(Object.entries(out).sort(([a], [b]) => a.localeCompare(b)))
writeFileSync(path.join(ROOT, 'src', 'data', 'page-dates.generated.json'), JSON.stringify(sorted, null, 2) + '\n')
console.log(`wrote ${Object.keys(sorted).length} routes`)
