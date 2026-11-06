# Food, Drink & Survival — Video Production Notes

## Status
- [ ] Record footage per shot list below
- [ ] Generate narration audio for both scripts (long-form + Shorts)
- [ ] Edit long-form cut in DaVinci Resolve (training plan: `docs/video/davinci-training-plan.md`)
- [ ] Edit vertical Shorts cut (9:16, single-take-feel, captions burned in)
- [ ] Export final MP4s
- [ ] Upload to YouTube — embed long-form on
      `/beyond-the-basics/food-drink-survival` with VideoObject schema; post Shorts
      separately

## Source material
- **Ground-truth page:** `src/app/beyond-the-basics/food-drink-survival/page.tsx`
  — already fact-checked; the script does not state anything beyond what this
  page covers (Nutrition/Hydration meters, mobiGlas + HUD display, damage/
  unconsciousness/"Malnutrition" death, helmet-off requirement, NDR for food,
  HEI for drinks, filtered water HEI of eighty, caffeine/alcohol lowering HEI,
  dietary effects, where to buy, stocking tips).
- **Claim files checked:** grepped `docs/claims/` for `hydration`, `nutrition`,
  `NDR`, `HEI`, `survival`, `malnutrition`, `food` — no dedicated claim file
  exists for this topic yet (one incidental match was the substring "ndr"
  inside the unrelated word "hundreds" in `docs/claims/README.md`). The page
  content stands as the sole source of truth per the task brief.
- **Glossary terms referenced:** `mobiGlas` and `Cargo` (`src/data/glossary.ts`)
  — wording in the script matches the in-house glossary definitions.
- **Tone/voice calibration:** `content/videos/getting-started/script.txt`
  (read for style only — no content reused).

## Script stats
- `script-long.txt`: 613 words — estimated runtime ~4 min 5 sec at a ~150
  words-per-minute narration pace (same ballpark as the getting-started video).
- `script-short.txt`: 124 words — estimated runtime ~50 sec at the same pace.

## Facts left out (uncertain, not on the source page)
- Exact drain rates for Nutrition/Hydration, the damage-per-tick once a meter
  is empty, or how long it takes to go from "too low" to unconscious — the
  page doesn't give numbers, so the script doesn't invent any.
- Specific named food/drink items or NDR/HEI values beyond "filtered water,
  HEI eighty" — the page only names that one value, so no other item names
  were invented for examples.

## Footage shot-list (mirrors script sections)
- **Intro:** short exterior/hab or hub establishing shot (reuse existing b-roll if on hand)
- **Meters:** mobiGlas personal status screen (F1) showing both Nutrition and
  Hydration bars; a close-up of the bottom-left HUD meters during normal play
- **Low-meter consequence:** a low-meter warning/damage state if one can be
  shown safely without staging an actual character death
- **How to eat/drink:** removing the helmet; eating a food item in one bite;
  drinking — one clip of a small sip, one of finishing a drink in one go
- **NDR/HEI ratings:** inventory tooltip showing a food item's NDR and a
  drink's HEI, ideally filtered water showing HEI eighty; a caffeinated or
  alcoholic drink's lower HEI for contrast if available
- **Where to buy:** a vending machine or shop/bar kiosk in a station or city
  common area, buying food and drink
- **Practical tips:** packing one food + one drink into personal inventory;
  stocking ship storage before a cargo run or exploration trip; checking
  meters at the mobiGlas or HUD before departing on a mission
- **Outro:** closing shot consistent with the getting-started video's sign-off framing

## Files (local, not in git — once recorded/rendered)
- Scripts: this folder's `script-long.txt` / `script-short.txt`
- Narration: TBD — follow the `audio/food-drink-survival/` convention used for
  getting-started (`audio/getting-started/narration_final.mp3`)
- Raw/transcoded footage: TBD — follow the `videos/` convention used for
  getting-started

## DaVinci Resolve notes
- Narration on A2 at 0dB, in-game audio on A1 at -20dB (same mix as getting-started)
- Sync narration to footage by script section (see shot list above)
- Shorts cut: crop/reframe to 9:16, trim to the single most useful section,
  add burned-in captions since Shorts are often watched muted

## Render settings
- Long-form: MP4, H.265, 1920x1080, 60fps
- Shorts: MP4, H.265, 1080x1920, 30 or 60fps
