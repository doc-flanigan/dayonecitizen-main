# Getting Started — Video Production Notes

## Status
- [x] Script refreshed for Alpha 4.10.x (2026-10-04) — fact-checked against the Day One
      guide pages, claims ledger, keybinds extract, and comm-link 21330 (4.10.1 LIVE)
- [x] Narration re-rendered 2026-10-04 (AndrewNeural +15%, 200ms pause)
- [ ] Re-record footage to the new narration (April footage is stale — see below)
- [ ] Edit in DaVinci Resolve (training plan: `docs/video/davinci-training-plan.md`)
- [ ] Export final MP4
- [ ] Upload to YouTube — embed on this site's step-1 page + SCH getting-started +
      freeflyevent with VideoObject schema; live before the ~Nov 6 IAE freeze

## Script maintenance
- Version line says "it starts with four point ten" on purpose so point releases
  (4.10.2 is in PTU) don't date the video. Re-check when 4.11 goes LIVE.
- Keybinds quoted (F, F1, I, E) come from `tools/keybinds/keybinds.generated.json`
  (build 4.10.0-hotfix). Rerun the extractor on a major patch.
- Insurance-claim cost wording follows the ledger (RSI FAQ says filing costs aUEC).
  Do not reintroduce "standard claims are free".

## Files (local, not in git)
- Script: `E:\Claude Code\sc-portfolio\audio\getting-started\script.txt` (mirror of this folder's `script.txt`)
- Narration: `E:\Claude Code\sc-portfolio\audio\getting-started\narration_final.mp3`
- April 2026 originals kept as `script_april_2026.txt` / `narration_april_2026.mp3` (practice material for Resolve)
- Raw footage (stale): `E:\Claude Code\sc-portfolio\videos\Desktop 2026.04.29 - 21.55.13.02.mp4`
- Transcoded footage (stale): `E:\Claude Code\sc-portfolio\videos\sc-tutorial-1080p.mp4`

## Footage
Record one clip per script section, mic off, with the new narration playing in earbuds
for pacing: RSI launcher → character creation → hab → settings → mobiGlas wallet/contracts
→ elevator → spaceport → ASOP claim → bed log.
Recorded at 3440x1440 HEVC HDR. Transcode to 1920x1080 H.264 SDR before Resolve
(ffmpeg command in the video-pipeline memory note).

## DaVinci Resolve Notes
- Import `sc-tutorial-1080p.mp4` and `narration_final.mp3`
- Narration on A2 at 0dB, system audio on A1 at -20dB
- Sync narration to footage by section (see script headings)
- Speed ramp long sections to match narration pace

## Render Settings
- Format: MP4, H.265
- Resolution: 1920x1080
- Frame rate: 60fps
- Output: `E:\Claude Code\sc-portfolio\videos\getting-started-final.mp4`
