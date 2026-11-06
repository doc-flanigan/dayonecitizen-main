# Inventory Management — Video Production Notes

## Word counts and runtime
- `script-long.txt`: 571 words. At a ~140 wpm narration pace (matches the
  getting-started video's deliberate delivery), that's roughly 4 minutes
  5 seconds — within the 3-5 minute target.
- `script-short.txt`: 128 words. At the same ~140 wpm pace, roughly 55
  seconds — within the 40-60 second Shorts target.

## Source and fact-check
- Ground truth: `E:\Claude Code\sc-portfolio\dayonecitizen-main\src\app\beyond-the-basics\inventory-management\page.tsx`
  (already fact-checked; nothing in either script goes beyond what that
  page states).
- Glossary cross-check: `E:\Claude Code\sc-portfolio\dayonecitizen-main\src\data\glossary.ts`
  — confirmed SCU ("Standard Cargo Unit... 1 SCU = 100 microSCU", 1.25m
  cube = ~1.95 cubic metres, matches the page's "just under two") and
  Cargo (trading context) definitions align with how the script explains
  them.
- Claims ledger checked (`E:\Claude Code\sc-portfolio\docs\claims\`):
  `claimed-ship-old-copy-bricked-cargo-retrievable.md` — confirms the old
  ship copy is bricked once a replacement is created via insurance claim,
  and cargo can be retrieved from the bricked hull before scrapping.
  The scripts keep the simpler, page-level wording ("unload before you
  claim") rather than introducing the bricked-ship/scrap-retrieval detail,
  since that's not stated on the inventory-management page itself and
  would need its own explanation to stay plain-English.
- No fact from the page was left out for being unverifiable — every
  section of the page (storage types, transfer steps, persistence rules,
  organisation tips, FAQ) is reflected in the long-form script.

## Footage shot-list (mirrors script-long.txt section order)
- Open inventory screen (press I) — show personal inventory panel
- Backpack equip/unequip, before/after carry-capacity change
- Local storage terminal / habitation locker, walking up and opening it
- Ship inventory panel vs. physical cargo hold (SCU readout) in a cargo ship
- Standing near ship/terminal, dragging an item between panels
- Right-click → Transfer All on a stacked item
- Ship destruction / respawn moment showing personal inventory intact
- Insurance claim screen — claim being filed, old ship gone
- Inventory screen appearing empty, then closing/reopening it to reload
- TDD terminal or commodity kiosk, selling loot

## Remaining steps
- [ ] Record footage per the shot-list above (character + ship inventory
      screens, local storage terminal, cargo hold SCU display, insurance
      claim flow)
- [ ] Record/select separate b-roll or capture for the short-form cut
      (inventory screen + transfer drag + insurance claim beats only)
- [ ] Generate narration audio for both scripts
- [ ] Edit long-form in DaVinci Resolve, sync to section headings above
- [ ] Edit short-form as a vertical 9:16 cut
- [ ] Export final MP4s for both versions
- [ ] Upload to YouTube; embed long-form on this page with VideoObject
      schema; cross-link from the getting-started video's description
