# Production Guide — Issue Council Video (Doc's first video)

This is the hand-holding layer. Read it once before you record anything. It
covers the workflow decision, the gear, the privacy cleanup, what to open before
you hit record, and how to publish across platforms. The two scripts
(`short.md`, `deep-dive.md`) assume you've done the setup here.

---

## 1. The workflow decision: record locally, edit, publish natively

You asked whether to stream to Twitch and move the file to YouTube. For a
tutorial, **no** — record locally instead. Here's why:

- A tutorial has to be **tight** — no dead air, no fumbling, mistakes cut out.
  Live streaming bakes every stumble into the final file.
- A **Twitch VOD is a worse master** — lower bitrate, and it carries the Twitch
  layout. Uploading that to YouTube gives viewers a degraded video.
- "Multi-platform at once" (Restream, StreamYard) is a **live** strategy. For a
  polished tutorial you record once, edit once, then upload the finished file to
  each platform's own uploader — that's what each algorithm rewards.

**Your pipeline:** record with OBS → edit → export one master → upload the long
cut to YouTube and the vertical cut to Shorts / TikTok / Reels / X.

Save live-streaming for later, when you want casual, interactive content where
mistakes are part of the charm. A reference tutorial isn't that.

---

## 2. Voice-over: do it in two passes (recommended for your first video)

Talking while you click is hard. For your first video, split it:

- **Pass 1 — capture (silent).** Follow the script's CAPTURE lines and record
  your screen actions with no narration. Mess up? Just redo that action; you'll
  trim it later. This is low-pressure.
- **Pass 2 — narration.** Play back your footage and read the SAY lines into your
  mic. Clean audio, and you can re-read any line until it's right.

In editing, you lay the narration over the footage and nudge the timing. If a
line runs long, stretch the footage (hold a frame) to match.

> Prefer talking live as you go? The scripts work that way too — just read the
> SAY line while you perform the matching CAPTURE action. The two-pass method is
> only a recommendation, not a requirement.

---

## 3. Gear & software (free-first, Windows)

**Capture — OBS Studio (free):**
- Base/output resolution: **1920×1080**. Frame rate: **30 or 60 fps** (60 looks
  smoother for cursor movement; 30 is lighter to edit).
- Output → Recording: bitrate ~**12–20 Mbps**, format **mp4** (or mkv, then
  remux to mp4 — OBS can auto-remux).
- Add a **Display Capture** (whole screen) or **Window Capture** (just the
  browser/launcher). Add an **Audio Input Capture** for your mic on its own track.
- Alternative capture: **NVIDIA ShadowPlay** (Alt+F9) if you have an NVIDIA GPU
  and want the lightest-weight option.

**Mic:** any USB mic or a decent headset mic beats your laptop's built-in mic.
Record in a soft room (curtains, carpet, not a bare kitchen) to kill echo. Speak
close to the mic, at a steady level.

**Editing — pick one:**
- **Clipchamp** (ships with Windows 11) — easiest start, fine for cuts + text.
- **DaVinci Resolve** (free) — more powerful, slightly steeper; great once you
  want cleaner zooms and audio control.

**In editing, do these:** cut dead air; **zoom in** on small UI (the build
number, form fields) so phone viewers can read it; add the **on-screen text /
arrows** from each script's ON-SCREEN lines (these match the annotations in the
screenshot manifest, so the video and the written guide look consistent).

**Cursor visibility:** turn on a click highlight so viewers can follow your
clicks — an OBS cursor-highlight plugin, or add a pointer-emphasis effect in
editing. At minimum, move the mouse slowly and deliberately.

---

## 4. Privacy / PII cleanup — do this BEFORE you record

You'll be on camera showing your desktop and a logged-in RSI account. Clean up
first so you don't publish anything personal.

**Windows desktop:**
- Set a **clean, neutral wallpaper** (or a Star Citizen one with nothing
  personal).
- **Hide desktop icons:** right-click the desktop → View → uncheck "Show desktop
  icons."
- Turn on **Do Not Disturb / Focus assist** (Settings → System → Notifications)
  so no Discord, email, or Slack pop-ups with names appear mid-recording.
- **Close personal apps** and anything on a second monitor.

**Taskbar / tray:** hide sensitive pinned apps and clear tray clutter if it's
visible in your capture.

**Browser (you'll record the RSI / Issue Council site):**
- Use a **clean or separate browser profile**, logged into RSI **only**. The
  Issue Council needs a logged-in backer, so private/incognito won't work for the
  demo — a fresh profile is the move.
- **Hide the bookmarks bar:** Ctrl+Shift+B.
- **Hide extension icons** so a personal extension doesn't show.
- **Clear address-bar autocomplete** (or use the clean profile) so typing a URL
  doesn't reveal sites you visit.
- **Zoom the page to ~110–125%** (Ctrl++) so text is legible on video, especially
  on phones.

**What to blur or avoid on camera:**
- **Blur:** your **email** (it shows on the RSI sign-in screen), your real name,
  billing / order history, and payment methods.
- **Safe to show:** your **RSI handle and avatar** — in fact, showing your handle
  is good for credibility. This is your call, but it's not PII you need to hide.

**In-game:** other players' names in chat and your contacts list are generally
fine to show. Just make it a conscious choice rather than an accident.

> These notes match the screenshot manifest at
> `public/images/report-a-bug/manifest.json` — e.g. shot `09-signin-redirect` is
> flagged to blur your email. The video and the written guide share one privacy
> standard.

---

## 5. Pre-flight — open these before you hit record

Set the stage so the session flows and you're not hunting for windows on camera:

- **RSI Launcher** — signed in, game updated to the **current build**.
- **Browser tab** — the Issue Council, signed in.
- **File Explorer** — open at `...\Roberts Space Industries\StarCitizen\LIVE`
  (for the Game.log demo).
- **Evidence files ready** — one screenshot, one short clip, and a DxDiag `.txt`
  in a known folder, so the "attach evidence" step is smooth.
- **Your script** — open on a **phone or second monitor**, off-camera, as a
  teleprompter.
- **A demo bug picked in advance** — choose a bug you can reproduce on demand
  (a known elevator or tram issue is ideal) so the "file a report" demo is real
  but quick.

---

## 6. Publish & repurpose

Export **one master** file, then:

- **YouTube (long cut, 16:9):** upload the deep-dive. Paste the description box
  and chapter timestamps from `deep-dive.md`. Add an end screen pointing to the
  written guide and the Short.
- **The Short (vertical 9:16):** upload natively to **YouTube Shorts, TikTok,
  Instagram Reels, and X**. Native uploads beat posting a link — each platform
  favors video it hosts.
- Keep it manual for video #1. Once you've done a few, you can look at scheduling
  tools, but don't add that complexity now.

**Link back to the site** in every description: the pillar guide at
`/report-a-bug` and your referral link. The site does the SEO work; the video
sends people to it and to enlisting.

---

## 7. First-timer reassurance

- Your first take will feel awkward. That's universal. Record the silent capture
  first — it's the easy part — and your confidence builds before you ever narrate.
- Short and clear beats long and polished. A 60-second Short that actually helps
  someone is a win.
- You can always re-record narration without re-recording footage. That's the
  whole point of the two-pass method.

o7 — go make it.
