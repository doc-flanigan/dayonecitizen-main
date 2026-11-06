# CCU Chains — Video Production Notes

## Scripts
- `script-long.txt` — 548 words. Estimated runtime 3:55–4:15 at a 130–140 wpm
  narration pace (same voice/pace family as the getting-started script).
- `script-short.txt` — 144 words (including the short outro). Estimated
  runtime 55–60 seconds at a 140–150 wpm Shorts-style pace.

## Source material checked
- Live page (ground truth for every fact, step, and number used):
  `E:\Claude Code\sc-portfolio\dayonecitizen-main\src\app\beyond-the-basics\ccu-chains\page.tsx`
- Glossary (in-house wording for jargon): `E:\Claude Code\sc-portfolio\dayonecitizen-main\src\data\glossary.ts`
  — confirmed terms: CCU, CCU Game (chain), LTI, Store Credit, Melt, IAE,
  plus ship entries for Gladius, Freelancer, Talon, Nova, RAFT, Constellation
  (Taurus), Hurricane, Terrapin, Corsair, Idris.
- Claims ledger (`E:\Claude Code\sc-portfolio\docs\claims\`):
  - `ccu-pay-price-difference.md` (verified) — backs the core "CCU = pay the
    price difference" mechanic and the $50/$80/$30 style example.
  - `corsair-2year-pledge-250-usd.md` (verified) — backs the $250 Drake
    Corsair MSRP used in the worked example.
  - Checked but not needed: `sabre-collection-warbond-pack.md`,
    `constellation-centaurus-warbond-275-usd.md` (no Warbond price figures
    were quoted in either script — only the page's existing 50–90% discount
    range and the chain table's own numbers were used).
- Reference only, tone/voice calibration (not reused for content):
  `E:\Claude Code\sc-portfolio\dayonecitizen-main\content\videos\getting-started\script.txt`

## Facts left out (unconfirmed, not on the page)
- Did not describe what the Drake Kraken or the Pioneer actually look like
  or do (carrier, base-builder, etc.) — neither has a glossary entry or a
  claims-ledger file, and the page itself only names them as CCU-blocked
  ships without describing them. Mentioned them by name only, as "rare
  capital ships," matching the page's own level of detail.
- Did not reference the StarHangarApps CCU price-recommendation tool — the
  live page only names and links `ccugame.app` as the planning tool, so the
  scripts follow the page rather than introducing a tool it doesn't mention.
- Did not invent any current Warbond CCU prices beyond the worked eight-step
  Gladius → Corsair example already on the page ($250 MSRP / $65 paid / $95
  saved, 38%).

## Footage shot list (mirrors script section order)
1. **RSI pledge store — CCU listing.** Screen-record the pledge store
   upgrade page showing available CCUs with price differences (same shot
   style as the page's own `ccu-chains-pledge-store-ccu-available.jpg`).
2. **Simple CCU example.** Overlay/graphic: two ships side by side with a
   price-difference callout ($50 → $80 → pay $30). No need to record live
   UI for this beat — a motion-graphic overlay works.
3. **Chain concept.** Graphic: a row of ship icons stepping up in price from
   a cheap starter pack to an expensive target ship.
4. **Warbond vs. standard CCU.** Screen-record the pledge store during an
   event (or archived footage) showing a Warbond CCU badge/price vs. a
   standard CCU price on the same ship pair.
5. **Step-by-step process.** Screen-record: picking a base ship in the
   pledge store → ccugame.app chain planner in a browser tab → My Hangar →
   Apply Upgrade button (same shot as the page's
   `ccu-chains-rsi-hangar-apply-ccu.jpg`).
6. **"Don't apply early" warning.** Graphic/overlay: a broken chain link or
   "STUCK" callout on an intermediate ship — no live UI needed.
7. **Worked example (Gladius → Corsair).** Animate or screen-record the
   eight-row table from the page (From → To / MSRP / You Pay / Saved),
   building row by row to the $250 / $65 / $95 (38%) total.
8. **Blocked-ships warning.** Brief shot of the pledge store's Kraken,
   Idris, and Pioneer listings (or their ship images) with a "no CCU"
   overlay.
9. **Outro.** Reuse the site's standard outro card/lower-third (dayonecitizen.com
   + referral code in description), matching the getting-started video.

## Status
Remaining before this video is postable:
- [ ] Record/assemble footage per the shot list above (live RSI site + ccugame.app
      captures, plus motion-graphic overlays for beats 2, 3, and 6)
- [ ] Render narration (long + short) and sync to footage
- [ ] Edit long-form cut in DaVinci Resolve
- [ ] Cut the short-form/Shorts version (vertical reframe, captions burned in)
- [ ] Export both, upload to YouTube, embed long-form on
      `/beyond-the-basics/ccu-chains` with VideoObject schema
