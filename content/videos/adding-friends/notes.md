# Adding Friends — Video Production Notes

## Source
- Page: `src/app/beyond-the-basics/adding-friends/page.tsx` — treated as the
  fact-checked source of truth for every step, key bind, and menu label in
  both scripts.
- Glossary check: `src/data/glossary.ts` — confirmed in-house wording for
  Spectrum, mobiGlas, PU (Persistent Universe), and Inner Thought so the
  spoken explanations match the site's own definitions.
- Claims ledger: grepped `docs/claims/` for `*friend*`, `*party*`, `*shard*`,
  `*uec*` — no dedicated claim files exist for the friends/party/shard
  mechanics (those live only on the page itself). The fifty-thousand-UEC
  referral bonus line is already covered by
  `docs/claims/referral-enlistment-bonus-50k-uec.md`, so no new claim file
  was needed.
- Tone/voice calibration only: `content/videos/getting-started/script.txt`
  (read for pacing and "veteran backer" voice — no content reused).

## Word counts & runtime estimates
- `script-long.txt`: 552 words → roughly 3 minutes 40 seconds to 4 minutes
  15 seconds at a 130–150 wpm narration pace. Within the 3–5 minute target.
- `script-short.txt`: 120 words → roughly 48–55 seconds at the same pace.
  Within the 40–60 second target.

## Footage shot-list (one clip per script beat)
- RSI handle explainer — character screen or profile page showing the handle.
- Method 1 (Spectrum): robertsspaceindustries.com → sign in → Spectrum search
  → player profile → Add Friend click.
- Method 2 (main menu): main menu Friends panel → + Add Friend button → type
  handle → confirm.
- Method 3 (in-game Commlink): F11 → Commlink → Global Chat → Members tab →
  click a name → Send Friend Request. (Also show F1 → mobiGlas → Commlink app
  as the alternate entry point.)
- Method 4 (Inner Thought wheel): approach another player → hold F → wheel
  open → aim → Add Contact.
- Accepting a request: quick cut across the three accept locations (Spectrum
  Settings → Friends, main menu Friends panel, F11 → Contacts tab).
- Party/shard explainer: F11 → Contacts tab → right-click a name → Invite to
  Party → party leader clicks Enter Universe.
- Troubleshooting beat (short-form omits this): Commlink close/reopen (F11,
  wait, F11) as the quick fix b-roll.
- Outro: dayonecitizen.com beauty shot / logo card, matches getting-started
  outro framing.

## Remaining steps
- Record footage per the shot-list above against the final narration track
  for pacing (same mic-off-earbuds-in approach as getting-started).
- Generate narration audio for both scripts.
- Edit long-form and short-form cuts in DaVinci Resolve.
- Export final MP4s for both versions.
- Upload to YouTube; embed the long-form video on the adding-friends page
  with VideoObject schema; consider a Shorts-native upload for the
  short-form cut.
