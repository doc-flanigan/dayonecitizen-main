# Quantum Travel — Video Production Notes

## Scripts
- Long-form: `script-long.txt` — 574 words, ~3 min 50 sec at 150 wpm
- Short-form (Shorts): `script-short.txt` — 103 words, ~41 sec at 150 wpm

## Source material checked
- Ground truth: `src/app/beyond-the-basics/quantum-travel/page.tsx` (site copy,
  reviewed July 18, 2026; accurate for Alpha 4.x including Stanton and Pyro)
- Claim file: `docs/claims/quantum-travel-sequence.md` (status: verified,
  lastVerified 2026-10-14) — confirms B and the jump click are real HOLDS,
  not taps; middle-click to QT mode is a tap; auto-calibration needs no
  button hold. Followed this over any older "single press" phrasing.
- Glossary wording checked for in-house definitions: `src/data/glossary.ts`
  — Quantum Travel, Quantum Snare, Mantis, NPC, Stanton, Pyro, Jumpgate/Jump
  Point, mobiGlas. Narration paraphrases these definitions rather than
  quoting the `<Term>` tooltip text verbatim (spoken script, not web copy).
- Tone/voice calibration only (no content reused): `content/videos/getting-started/script.txt`

## Facts left out (not guessed)
- Exact Pyro jump-point travel time and the Pyro jump point's in-system
  coordinates — the page doesn't give a number, so the script only says
  "a special jump sequence carries you into Pyro" without a duration.
- Whether interdiction can happen inside Stanton's "safe" zones — the page
  only says it's "most common on busy routes and near known pirate areas,
  especially in Pyro." Left the safe-zone question out rather than assume
  either way.

## Footage shot-list (mirrors script sections)
- Cold open / intro: pilot seat POV, ship idling at a landing pad
- Prerequisites: mobiGlas component health screen (F1), quantum fuel gauge
  close-up, ship lifting off and clearing a landing zone restricted-area warning
- Core loop: hold B → NAV mode markers appear; middle-click → QT mode marker
  highlight; calibration countdown; "QUANTUM READY" prompt; hold left-click →
  blue tunnel; arrival/slowdown near destination
- Starmap: F2 open, browsing/searching the 3D map, clicking a destination,
  "Route to this Location," closing the map, waypoint marker in space
- Pyro: Starmap view of the Pyro Jump Point icon near Stanton's edge, the
  jump-point transition sequence
- Tips: power triangle UI (power to Engines), shields/weapons toggle, a
  Cry-Astro station exterior (orange branding), one of the four landing zones
- Troubleshooting: component health display showing orange/red damage state,
  restricted-area HUD warning
- Interdiction: quantum snare visual distortion/audio cue, contacts panel,
  boosting away, a Mantis (or similar) ship for b-roll if available
- Outro: wide shot of a ship mid-quantum-tunnel or arriving at a station

## Remaining steps
- Record footage per the shot list above (screen capture, no mic — narration
  added in post, same pipeline as getting-started)
- Generate narration audio for both scripts
- Edit long-form in DaVinci Resolve; cut a vertical (9:16) version for Shorts
  from the short script's footage beats
- Export both, upload to YouTube, embed long-form on this page and add
  VideoObject schema once live
