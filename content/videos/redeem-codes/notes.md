# Redeem Codes — Video Production Notes

## Scripts
- Long-form: `script-long.txt` — 528 words, est. runtime ~3 min 45 sec
  (at ~140 wpm spoken, matching the getting-started video's pace)
- Short-form: `script-short.txt` — 140 words, est. runtime ~55-60 sec
  (at ~145-150 wpm; Shorts narration tends to run a touch faster/tighter)

## Source
- Ground truth: `E:\Claude Code\sc-portfolio\dayonecitizen-main\src\app\beyond-the-basics\redeem-codes\page.tsx`
  (live, fact-checked page — treated as sole source of facts/steps for this script)
- Tone/voice calibration only (not reused for content):
  `E:\Claude Code\sc-portfolio\dayonecitizen-main\content\videos\getting-started\script.txt`
- Glossary terms checked for in-house wording: `src/data/glossary.ts` — CIG, RSI, UEC,
  aUEC, Free Fly (Bar Citizen and CitizenCon are not in the glossary; defined inline
  per the Plain-English Standard's "not in glossary" rule, matching page framing)

## Claim files checked (docs/claims/)
- `referral-enlistment-bonus-50k-uec.md` — 50,000 UEC referral signup bonus (verified)
- `no-official-coupon-codes.md` — no documented coupon/promo/percent-off system beyond
  the referral bonus (verified; absence-of-documentation claim, phrased carefully)
- `referral-code-24h-window.md` — referral code must be applied at signup or within
  ~24 hours (not used in this script — out of scope for redeem-codes topic, but
  confirmed so the script doesn't accidentally contradict it)
- `hardware-promotional-codes-deprecated.md` — old hardware promo codes (Optane/Radeon)
  are deprecated; not mentioned in the script, confirmed out of scope
- `randomizers-stale-bonus-amounts.md` — third-party "5,000 UEC" randomizer sites are
  stale vs. the real 50,000 UEC figure; informed the "fake lists" framing but not
  cited directly (dated observation, not reused as a timeless claim)

## Facts intentionally left out (unsure / would require guessing)
- Did not name "Pirate Week 2026" or any single current/past promo event by date —
  the live page calls out Pirate Week 2026 specifically, but that would date the
  script the way "Alpha 4.10" dates matter in the getting-started script. Kept the
  general "May fleet event" framing (Invictus Launch Week historically, DefenseCon
  in 2026) since the page itself frames it that way as a recurring pattern, not a
  one-off.
- Did not state whether DefenseCon runs again in 2027 or what replaces it next — not
  confirmed anywhere in the source page or claims ledger.
- Did not give a cost/mechanism for how RSI validates a promo code beyond "the site
  tells you immediately whether it's valid" — page doesn't specify the underlying
  validation logic, so didn't invent one.

## Footage shot-list (mirrors script sections)
- [ ] Hook/cold open: screen-record a "star citizen redeem codes" search results page
      showing a sketchy "codes list" site (b-roll only, no clicking through)
- [ ] Referral code section: RSI account creation screen, the field where a referral
      code is entered at signup
- [ ] Gift code section: RSI Account → Settings area (the general settings page;
      package-redemption screen if accessible without using a real gift code)
- [ ] Promo code section: RSI Account → Settings → Apply a Promotional Code screen
- [ ] "Nobody tells you" section: mobiGlas wallet showing aUEC vs. UEC side by side
      (reuse/re-record similar framing to the getting-started video's wallet shot)
- [ ] Bar Citizen / CitizenCon section: b-roll only — no original footage exists;
      use a CIG official photo/clip with attribution, or keep this section voice-only
      over a simple graphic
- [ ] Two legitimate paths section: Free Fly events page on dayonecitizen.com, and
      the /referral-code page, as screen-recorded b-roll
- [ ] Short-form: needs only the Apply a Promotional Code screen plus the referral
      signup field — can reuse clips captured for the long-form edit, trimmed tighter

## Remaining steps
- [ ] Record/gather footage per the shot-list above
- [ ] Render narration (TTS or live) for both scripts
- [ ] Edit in DaVinci Resolve — narration on A2, sync to footage by script section
- [ ] Export both final MP4s (long-form + Shorts aspect ratio/crop for the short)
- [ ] Upload to YouTube — embed long-form on the redeem-codes page; Shorts cross-posted
      per usual channel practice
