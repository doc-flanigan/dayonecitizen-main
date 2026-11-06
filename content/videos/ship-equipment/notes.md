# Ship Equipment — Video Production Notes

## Scripts
- Long-form: `script-long.txt` — 667 words, roughly 3.9–4.5 minutes at a 150–170
  words-per-minute narration pace (the getting-started video's AndrewNeural TTS
  voice runs at +15% rate, which lands in this range).
- Short-form: `script-short.txt` — 126 words, roughly 44–50 seconds at the same
  pace. Fits the Shorts target of 40–60 seconds.

## Source
- Fact-checked ground truth: `E:\Claude Code\sc-portfolio\dayonecitizen-main\src\app\beyond-the-basics\ship-equipment\page.tsx`.
  Every fact, step, and tip in both scripts traces back to this page — no
  outside facts added.
- Glossary checked for in-house wording: `src/data/glossary.ts` — used the
  existing entries for ASOP ("Automated Ship Operations and Placement"),
  Quantum Travel, and Cargo so the narration's phrasing matches the site's
  own tooltips.
- Claims ledger (`docs/claims/`) checked: no standalone claim file exists yet
  for power plants, coolers, shields, or ship weapons — the component-grade
  and weapon-behavior facts live only on the page itself. `quantum-travel-sequence.md`
  and `asop-call-ship-deliver-then-retrieve.md` were reviewed but are about
  the quantum-travel keypress sequence and calling a ship to a hangar
  respectively, not component swapping, so neither changed the script content.
- `content/videos/getting-started/script.txt` and its `notes.md` were read
  for tone/voice and file-format calibration only — no content reused.

## Facts left out (unsure / not confirmed on the source page)
- No UEC prices for components or weapon kits — the page doesn't quote any,
  so the script doesn't invent any.
- No named example ship for the "size three component can't fit a size one
  slot" rule — the page states it generically, so the script keeps it
  generic rather than guessing a specific ship/slot pairing.

## Footage shot list (mirrors script-long.txt section order)
- Power plant: ship loadout screen, power plant slot and grade readout
- Coolers: loadout screen, cooler slot
- Quantum drive: loadout screen quantum drive slot, plus a quantum-travel jump in flight
- Shields: cockpit shield management display, reinforcing one facing
- Weapons: one ballistic weapon firing clip, one energy weapon firing clip
- Power triangle: cockpit MFD with power shifted between weapons/shields/engines
  (site already has `/images/guides/ship-equipment-power-triangle-mfd.jpg` —
  reuse the still or re-shoot matching footage)
- Swap steps: an equipment shop (Dumper's Depot or similar), an ASOP terminal,
  and the loadout screen drag-and-drop (site already has
  `/images/guides/ship-equipment-loadout-screen-components.jpg` — reuse or
  re-shoot)
- Stealth tip (short B-roll): full-throttle flight / continuous fire contrasted
  with a quiet, low-throttle approach

## What's left
- Record narration (TTS or live) for both scripts
- Capture footage per the shot list above
- Edit in DaVinci Resolve — same pipeline as getting-started (narration on A2
  at 0dB, system audio on A1 at -20dB, sync to script sections, speed-ramp
  long sections to match narration pace)
- Export long-form MP4 and a vertical 9:16 Shorts cut
- Upload both to YouTube; embed the long-form video on
  `/beyond-the-basics/ship-equipment` with VideoObject schema
