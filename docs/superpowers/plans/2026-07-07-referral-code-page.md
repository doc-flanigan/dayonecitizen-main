# dayonecitizen /referral-code Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship `dayonecitizen.com/referral-code` — a query-matched, GEO-armed, transactional page that makes DOC the authority on "star citizen referral code."

**Architecture:** One server-component page (`src/app/referral-code/page.tsx`) mirroring the structure of `day-one-citizen/worth-buying`, plus one small client component (`CopyCode.tsx`) for the copy-to-clipboard chip. Facts come from the network claims ledger via the existing `PageSources` component; internal links and llms.txt/sitemap entries wire discovery.

**Tech Stack:** Next.js 14 App Router, TypeScript, Tailwind, existing components (`CTAButton`, `PageSources`, `SourceLink`, `Term`, `BreadcrumbsJsonLd`, `NavBar`, `Footer`, `next/image`).

## Global Constraints

- **Referral code (verbatim):** `STAR-GCQJ-N6NC`. Enlist URL: `https://www.robertsspaceindustries.com/enlist?referral=STAR-GCQJ-N6NC` (use `SITE.referralUrl`).
- **Plain-English Standard (repo CLAUDE.md):** glossary terms wrapped in `<Term>` on first mention; non-glossary terms spelled out inline; sentences under 25 words; no gaming verbs; numbers under 100 spelled out (except the code, "50,000 UEC", version numbers, dates); every factual claim wrapped in `<SourceLink>`.
- **Verified facts (do not deviate):**
  - The 50,000 UEC bonus credits immediately on **free** account creation with a referral code — **no purchase required** for the bonus. Source: RSI Referral Program FAQ.
  - The referrer's separate "Recruitment Point" requires the recruit to later spend $40+ on a game package — this does NOT affect the new player's bonus. (Use to explain the common confusion.)
  - The code must be applied at signup or within ~24 hours in account settings; it cannot be added later.
- **Sources allowed (official only):**
  - `https://robertsspaceindustries.com/en/referral-program`
  - `https://support.robertsspaceindustries.com/hc/en-us/articles/115013102847-Referral-Program-FAQ`
- **Claims-ledger rule:** any factual claim must map to a ledger file; wire via `PageSources`, do not hand-edit the generated manifest.
- **Discovery placement (Doc's decision):** footer link + llms.txt + sitemap + two contextual in-body links. NO top-nav link.

---

### Task 1: Claims ledger — add /referral-code usage + Recruitment-Point claim, regenerate manifest

**Files:**
- Modify: `../docs/claims/referral-enlistment-bonus-50k-uec.md` (usage list)
- Modify: `../docs/claims/referral-code-24h-window.md` (usage list)
- Modify: `../docs/claims/referral-bonus-no-purchase-required.md` (usage list)
- Create: `../docs/claims/referral-recruitment-point-40-usd.md`
- Modify (generated): `src/data/page-sources.generated.json`

**Interfaces:**
- Produces: manifest route key `/referral-code` with 4 claims, consumed by `PageSources` in Task 3.

- [ ] **Step 1: Add the new claim file** `docs/claims/referral-recruitment-point-40-usd.md`:

```markdown
---
id: referral-recruitment-point-40-usd
claim: "A referrer earns a Recruitment Point only after their recruit spends at least $40 USD on a Star Citizen game package; this is separate from — and does not reduce — the recruit's 50,000 UEC enlistment bonus."
status: verified
sources:
  - https://support.robertsspaceindustries.com/hc/en-us/articles/115013102847-Referral-Program-FAQ
lastVerified: 2026-07-07
usage:
  - dayonecitizen.com /referral-code — "is it legit / who benefits" clarification
---

Clears up the common confusion (seen in older marketing copy) that the 50,000 UEC bonus requires buying a game package. It does not: the bonus credits on free account creation. The $40 package spend only gates the REFERRER's Recruitment Point reward. Re-verify against the Referral Program FAQ each audit.
```

- [ ] **Step 2: Append a usage line to each of the 3 existing referral claim files.**

To `referral-enlistment-bonus-50k-uec.md` usage list, add:
```
  - dayonecitizen.com /referral-code — bold answer + "what you get" + FAQ
```
To `referral-code-24h-window.md` usage list, add:
```
  - dayonecitizen.com /referral-code — "how to apply" 24-hour caveat
```
To `referral-bonus-no-purchase-required.md` usage list, add:
```
  - dayonecitizen.com /referral-code — "what you get" no-purchase clarification
```

- [ ] **Step 3: Regenerate the manifest.**

Run: `node ../docs/claims/gen-sources.mjs dayonecitizen.com src/data/page-sources.generated.json`
Expected: output lists `/referral-code   4 claim(s)`.

- [ ] **Step 4: Verify the route is in the manifest.**

Run: `node -e "console.log((require('./src/data/page-sources.generated.json').routes['/referral-code']||[]).map(c=>c.id))"`
Expected: `[ 'referral-enlistment-bonus-50k-uec', 'referral-code-24h-window', 'referral-bonus-no-purchase-required', 'referral-recruitment-point-40-usd' ]` (order may vary).

- [ ] **Step 5: Commit (docs repo + main repo separately).**

```bash
# docs repo (own git root)
git -C ../docs add claims/referral-recruitment-point-40-usd.md claims/referral-enlistment-bonus-50k-uec.md claims/referral-code-24h-window.md claims/referral-bonus-no-purchase-required.md
git -C ../docs commit -m "claims: wire /referral-code usage + add recruitment-point-40-usd claim"
git -C ../docs push origin master
```
(The regenerated manifest commits with the page in Task 3.)

---

### Task 2: Copy the annotated signup screenshot into DOC

**Files:**
- Create: `public/images/referral/rsi-signup-referral-code-field.jpg` (copied from SCH)

**Interfaces:**
- Produces: image path `/images/referral/rsi-signup-referral-code-field.jpg`, consumed by the page in Task 3.

- [ ] **Step 1: Create the folder and copy the asset.**

Run:
```bash
mkdir -p public/images/referral
cp "../StarCitizenHelp-live/public/images/guides/getting-started-rsi-account-referral-code.jpg" public/images/referral/rsi-signup-referral-code-field.jpg
```

- [ ] **Step 2: Verify it copied (non-empty).**

Run: `ls -l public/images/referral/rsi-signup-referral-code-field.jpg`
Expected: file exists, size > 100 KB.

(Commits with the page in Task 3.)

---

### Task 3: Build the CopyCode client component + the /referral-code page

**Files:**
- Create: `src/components/CopyCode.tsx`
- Create: `src/app/referral-code/page.tsx`
- Modify (commit): `src/data/page-sources.generated.json`, `public/images/referral/*`

**Interfaces:**
- Consumes: `SITE.referralUrl`, `SITE.referralCode` from `@/lib/site`; `PageSources` route `/referral-code` from Task 1; image from Task 2.
- Produces: route `/referral-code`.

- [ ] **Step 1: Create `src/components/CopyCode.tsx`** (client component; copies the code, shows Copied state, logs to `/api/log`):

```tsx
'use client'
import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export default function CopyCode({ code, trackingLabel = 'referral-code-copy' }: { code: string; trackingLabel?: string }) {
  const [copied, setCopied] = useState(false)

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      fetch('/api/log', {
        method: 'POST',
        keepalive: true,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          label: trackingLabel,
          referralCode: code,
          page: window.location.pathname,
          site: window.location.hostname,
        }),
      }).catch(() => {})
      ;(window as any).gtag?.('event', 'referral_code_copy', { referral_code: code })
    } catch {
      /* clipboard unavailable — user can still select the text */
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label={`Copy referral code ${code}`}
      className="group inline-flex items-center gap-3 rounded-xl border border-gold/40 bg-navyLight px-5 py-3 font-mono text-lg tracking-wider text-gold transition-all hover:border-gold hover:bg-navyLight/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
    >
      <span>{code}</span>
      {copied ? (
        <span className="inline-flex items-center gap-1 text-sm text-green-400"><Check size={16} aria-hidden /> Copied</span>
      ) : (
        <span className="inline-flex items-center gap-1 text-sm text-starwhite/70 group-hover:text-gold"><Copy size={16} aria-hidden /> Copy</span>
      )}
    </button>
  )
}
```

- [ ] **Step 2: Create `src/app/referral-code/page.tsx`.** Full page (metadata, FAQPage JSON-LD, breadcrumb, hero answer + CopyCode + CTA + disclosure, screenshot-led how-to with 24h caveat, what-you-get with no-purchase clarification, legit section with recruitment-point nuance, FAQ, bottom CTA, PageSources). Follow the exact composition of `day-one-citizen/worth-buying/page.tsx` for imports and layout classes. Key required elements:
  - `metadata.title` = `Star Citizen Referral Code 2026 — STAR-GCQJ-N6NC for 50,000 UEC Free`
  - `metadata.description` = `Use Star Citizen referral code STAR-GCQJ-N6NC when you create your RSI account to get a free 50,000 UEC bonus. Here's the code and exactly where to enter it.`
  - `alternates.canonical: '/referral-code'`
  - H1 `Star Citizen Referral Code`; bold lead: **The Star Citizen referral code is `STAR-GCQJ-N6NC`.**
  - `<CopyCode code={SITE.referralCode} />`
  - `<CTAButton external href={SITE.referralUrl} trackingLabel="referral-code-hero" size="lg">Use my code &amp; get 50K UEC</CTAButton>`
  - Inline FTC disclosure sentence near the hero CTA.
  - `next/image` of `/images/referral/rsi-signup-referral-code-field.jpg`, width 1200 height ~1000, with the alt text from the spec.
  - Numbered how-to steps; 24-hour caveat wrapped in `<SourceLink href="https://support.robertsspaceindustries.com/hc/en-us/articles/115013102847-Referral-Program-FAQ">Official RSI Referral Program FAQ</SourceLink>`.
  - What-you-get: 50,000 UEC + no purchase required, each with `<SourceLink>` to the FAQ or `https://robertsspaceindustries.com/en/referral-program`.
  - Legit section: explains the referrer's $40 Recruitment Point is separate, with `<SourceLink>`.
  - FAQ block mirroring the FAQPage JSON-LD questions.
  - `<CTAButton external href={SITE.referralUrl} trackingLabel="referral-code-bottom" size="lg">Start with 50,000 UEC</CTAButton>`
  - `<PageSources route="/referral-code" />` before `</main>`.
  - `<Term>` wrapping for UEC, RSI, Backer, etc. on first mention.

- [ ] **Step 3: Build.**

Run: `npm run build`
Expected: compiles clean; `/referral-code` appears in the route list; no TypeScript errors.

- [ ] **Step 4: Commit.**

```bash
git add src/app/referral-code/page.tsx src/components/CopyCode.tsx src/data/page-sources.generated.json public/images/referral/rsi-signup-referral-code-field.jpg
git commit -m "feat(seo): /referral-code authority page — code, annotated signup shot, GEO schema, ledger sources"
```

---

### Task 4: Wire discovery — footer link, llms.txt, sitemap, two contextual links

**Files:**
- Modify: `src/components/Footer.tsx` (add "Referral Code" link to the "Get Started" list)
- Modify: `public/llms.txt` (add a Pages entry)
- Modify: `src/app/sitemap.ts` (add the route)
- Modify: `src/app/day-one-citizen/worth-buying/page.tsx` (one contextual link)
- Modify: `src/app/page.tsx` (link the homepage referral sentence)

**Interfaces:**
- Consumes: route `/referral-code` from Task 3.

- [ ] **Step 1: Footer — add a link** in the "Get Started" `<ul>`, above "Use my code":

```tsx
<li>
  <Link href="/referral-code" className="text-starwhite/80 hover:text-gold">
    Referral Code
  </Link>
</li>
```

- [ ] **Step 2: sitemap.ts — add the route** to the `routes` array (after `/free-fly-events`):

```ts
{ url: '/referral-code', changeFrequency: 'monthly', priority: 0.85 },
```

- [ ] **Step 3: llms.txt — add a Pages entry** (after the Free Fly Events line):

```
- [Star Citizen Referral Code](https://dayonecitizen.com/referral-code): The referral code STAR-GCQJ-N6NC, where to enter it during RSI signup, and how the free 50,000 UEC bonus works — no purchase required.
```

- [ ] **Step 4: Two contextual in-body links.** In `worth-buying/page.tsx`, where the 50,000 UEC bonus is mentioned, link the phrase to `/referral-code`. In `page.tsx` (homepage), link the existing referral sentence to `/referral-code`. Use `<Link href="/referral-code">` with existing link styling. (Grep each file for "referral" / "50,000" to place naturally.)

- [ ] **Step 5: Build + verify links resolve.**

Run: `npm run build`
Expected: clean build; sitemap includes `/referral-code`.

- [ ] **Step 6: Commit.**

```bash
git add src/components/Footer.tsx public/llms.txt src/app/sitemap.ts src/app/day-one-citizen/worth-buying/page.tsx src/app/page.tsx
git commit -m "seo: wire /referral-code — footer, llms.txt, sitemap, contextual links"
```

---

### Task 5: Ship + verify live

- [ ] **Step 1: Push (branch protection is bypass-for-admin; direct push to main is the repo norm).**

Run: `git push origin main`
Expected: postbuild IndexNow ping submits URLs incl. `/referral-code`.

- [ ] **Step 2: Verify the live page after Vercel deploy** (wait ~1-2 min):

Run:
```bash
node -e "fetch('https://dayonecitizen.com/referral-code').then(r=>r.text()).then(t=>{console.log('status ok:', t.includes('STAR-GCQJ-N6NC'), '| title:', (t.match(/<title>([^<]*)/)||[])[1]); console.log('faq schema:', t.includes('FAQPage'), '| sources:', t.includes('referral-program'))})"
```
Expected: code present, FAQPage present, referral-program citation present.

- [ ] **Step 3: Confirm sitemap + llms.txt live.**

Run: `node -e "Promise.all([fetch('https://dayonecitizen.com/sitemap.xml').then(r=>r.text()),fetch('https://dayonecitizen.com/llms.txt').then(r=>r.text())]).then(([s,l])=>console.log('sitemap:', s.includes('/referral-code'), '| llms:', l.includes('/referral-code')))"`
Expected: both `true`.

## Self-Review Notes

- **Spec coverage:** route ✓ (T3), metadata ✓ (T3), copy chip ✓ (T3), screenshot ✓ (T2/T3), 24h caveat ✓ (T3), no-purchase fact ✓ (T1/T3), FAQ+schema ✓ (T3), PageSources+ledger ✓ (T1/T3), footer/llms/sitemap ✓ (T4), two contextual links ✓ (T4), tracking labels ✓ (T3), out-of-scope respected (no nav, no microsite changes). Fact-check gate resolved pre-plan (no purchase required; recruitment point is separate).
- **No placeholders:** all code shown; the page JSX in T3 is described element-by-element with exact strings — the implementer mirrors `worth-buying/page.tsx` structure.
