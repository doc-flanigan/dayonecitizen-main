# Party Management — Video Production Notes

## Scripts
- Long-form: `script-long.txt` — 630 words, est. ~4.3 minutes at a conversational
  narration pace (~145 wpm), within the 3–5 minute target.
- Short-form: `script-short.txt` — 122 words, est. ~55 seconds at a conversational
  pace (~135 wpm), within the 40–60 second target.

## Source material checked
- Ground-truth page: `src/app/beyond-the-basics/party-management/page.tsx`
  (already fact-checked — every step, tip, and FAQ answer in both scripts
  traces back to this page; nothing was invented).
- Glossary (`src/data/glossary.ts`): checked `mobiGlas`, `Quantum Travel`, and
  `the 'Verse` so the spoken explanations match the site's own wording.
  `Commlink`, `Party`, `Shard`, and `F11` are **not** glossary entries, so
  they're spelled out inline in the narration on first use per the
  Plain-English Standard, same as the page itself does.
- Claims ledger (`docs/claims/`): grepped for party / quantum-link / shard —
  no matching claim files exist. There's no network-wide ledger entry for
  this topic yet; the page itself is the sole source.
- Tone/voice calibration only: `content/videos/getting-started/script.txt`
  (read for style, no content reused).

## Facts left out (unsure, didn't want to guess)
- None. Every claim in both scripts is a direct restatement of something the
  page already states. The exact numeric party cap was deliberately left
  vague ("the cap has changed across updates... two to eight works best")
  because the page itself doesn't commit to a hard number — matched that
  hedge rather than inventing a specific cap.

## Remaining production steps
- [ ] Render narration (TTS or VO) for both scripts
- [ ] Record footage per the shot list below
- [ ] Edit in DaVinci Resolve, sync footage to narration by section
- [ ] Export both final MP4s
- [ ] Upload to YouTube; embed long-form on the party-management page (and
      any related guides); add VideoObject schema; Shorts upload separately

## Footage shot list — long-form (mirrors script sections)
- Intro: dayonecitizen branding card
- F11 → Commlink → Friends tab → right-click a contact → Invite to Party
  (Method 1)
- F1 → mobiGlas → Contacts Manager app → Invite to Party (Method 2)
- HUD shot: friendly party-member markers visible on screen
- Main menu: both players forming the party before entering, leader clicking
  Enter Universe, second player following in
- Shard-mismatch recovery: leaving to main menu, re-entering, landing together
- Party screen: leader indicator, transfer-leadership option, remove-member
  option
- mobiGlas vehicle management screen: setting ship access permissions to
  Friends or Party so crew can use turrets/co-pilot/engineering seats
- Quantum travel jump with the quantum-link prompt, ships jumping together
- Outro: dayonecitizen.com card + referral code card

## Footage shot list — short-form
- Hook: two players on different shards, can't find each other
- F11 → Friends tab → right-click → Invite to Party
- Main menu: party formed first, leader clicks Enter Universe, second player
  follows, both land on the same shard
- Outro: dayonecitizen.com card (no referral card — short-form has no pitch)
