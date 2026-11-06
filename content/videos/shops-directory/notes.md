# Shops Directory — Video Production Notes

## Scripts
- Long-form: `script-long.txt` — 574 words, est. runtime ~3 min 50 sec at ~150 wpm
  (falls inside the 3-5 minute target)
- Short-form: `script-short.txt` — 119 words, est. runtime ~48 sec at ~150 wpm
  (falls inside the 40-60 second target)

## Source material
- Ground truth: `E:\Claude Code\sc-portfolio\dayonecitizen-main\src\app\beyond-the-basics\shops-directory\page.tsx`
  (already fact-checked; every shop name, location, and claim in both scripts
  is taken directly from this page — no outside facts added)
- Glossary check: `E:\Claude Code\sc-portfolio\dayonecitizen-main\src\data\glossary.ts`
  — read `aUEC`, `Mining`, and `Stanton` entries so spoken phrasing matches the
  site's own definitions (e.g. Stanton = "the one star system you can currently
  explore"; aUEC referred to in plain terms as "earned/in-game money" rather
  than the acronym, to keep the short-form hook jargon-free)
- Claims ledger checked: `E:\Claude Code\sc-portfolio\docs\claims\ships-earnable-in-game-auec.md`
  — confirms the "buy ships with earned money, catalogue smaller than the
  pledge store" framing used on the page is verified network canon; this
  script references the fact but doesn't restate the pledge-store comparison
  (out of scope for a shop-location video)
- Voice/tone calibration only (not reused for content): `E:\Claude Code\sc-portfolio\dayonecitizen-main\content\videos\getting-started\script.txt`

## Facts left out (unsure / not on the source page)
- Exact aUEC prices for any item — the page intentionally sends readers to
  Gallog.co / the wiki for live prices instead of stating numbers, so the
  scripts do the same rather than guessing a figure.
- Whether Live Fire Weapons or specific other station vendors appear at
  *every* station versus "most" — the page hedges with "most orbital
  stations" / "some stations," so the long-form script was trimmed to the
  five highest-value shops per location rather than listing every minor
  vendor, to stay inside the 3-5 minute runtime without over-claiming
  coverage the page itself doesn't claim.

## Footage shot list (mirrors script section order)

**Long-form:**
1. Intro — exterior/establishing shot of any city, or the mobiGlas map screen
2. Short-answer montage — quick cuts: Cubby Blast storefront, Hurston Security
   Depot storefront, Shubin Interstellar storefront, a ship-buy kiosk
3. Gallog.co / price-comparison beat — screen-record the shop kiosk price grid
   (same image already used on the live page) or Gallog.co in a browser
4. New Babbage — walk-in shots of Tammany & Sons, Omega Pro, Shubin
   Interstellar, microTech Showroom
5. Area18 — walk-in shots of Cubby Blast, Dumper's Depot, Apocalypse Arms,
   Astro Armada
6. Lorville — walk-in shots of New Deal, Hurston Security Depot, Skutters
7. Space stations — Dumper's Depot and Casaba Outlet at any orbital station
8. Tips beat — shop kiosk showing an out-of-stock item, and/or a faction-
   locked item prompt at Hurston Security Depot
9. Outro — pull back to city skyline or mobiGlas close

**Short-form:**
1. Hook — Cubby Blast storefront or weapon rack close-up
2. Cubby Blast interior — weapon wall pan
3. Hurston Security Depot — armor rack close-up
4. Gallog.co price-check beat (quick insert, 1-2 sec)
5. Outro card / logo

## Remaining steps
- Record footage per the shot list above
- Record narration (TTS or voice) for both scripts
- Edit in DaVinci Resolve, sync narration to footage by section
- Export final long-form and short-form MP4s
- Upload both to YouTube; embed the long-form on the shops-directory page
  with VideoObject schema
