# Screenshot Capture Checklist — /report-a-bug

A human-friendly companion to `public/images/report-a-bug/manifest.json`. Keep
this open on your phone or second monitor while you capture. Grouped by **where
you'll be**, so you can knock out a whole session at once.

When you're done, drop everything into `inbox/report-a-bug/` (any filenames) and
tell Claude **"sort screenshots"** — it renames and files them for you.

**General tips:** capture at 1920×1080 or higher · zoom the browser to ~110–125%
so text is legible · these get cropped/annotated later, so leave a little margin.

---

## 📦 Session A — RSI Launcher + Windows (no login needed on camera)

- [ ] **`01` Build number** — RSI Launcher, the version/build number under the
      **LAUNCH GAME** button. *Annotate: circle it, "write this down".*
- [ ] **`02` Game.log location** — File Explorer at
      `...\Roberts Space Industries\StarCitizen\LIVE` with **Game.log** selected.
      *Annotate: highlight the address bar + the file.*
- [ ] **`03` Game.log backups** — same folder, showing the dated backup logs
      (named by build number + date). *Annotate: arrow to the naming pattern.*
- [ ] **`04` Run dxdiag** — the **Win+R** Run box with `dxdiag` typed in.
      *Annotate: circle OK.*
- [ ] **`05` DxDiag Save All** — DirectX Diagnostic Tool open, **Save All
      Information** button visible. *Annotate: circle that button.*
- [ ] **`06` DxDiag saved** — the saved `DxDiag.txt` on your Desktop.
      *Annotate: "you'll attach this file".*

---

## 🌐 Session B — Issue Council website (signed in as a backer)

> Privacy: use a clean browser profile, hide the bookmarks bar (Ctrl+Shift+B),
> and **blur your email** on the sign-in shot.

- [ ] **`00` IC home (signed out)** — the Issue Council landing page with the
      **Sign In** button top-right. *Annotate: circle Sign In.*
- [ ] **`09` Sign-in page** — the RSI account sign-in screen.
      *Annotate: blur your email.*
- [ ] **`10` IC home (signed in)** — project tiles (Star Citizen / Squadron 42).
      *Annotate: circle the project you'll report in.*
- [ ] **`11` Search box** — the search bar with a real bug keyword typed.
      *Annotate: circle the search box.*
- [ ] **`12` Search results** — a list of results.
      *Annotate: "scan before filing a new one".*
- [ ] **`13` Status filter** — the status filter open (Open / Confirmed / Under
      Investigation). *Annotate: circle the filter control.*
- [ ] **`14` Contribute control** — an existing report with the **"I can
      reproduce this"** control. *Annotate: circle it, "add to this instead".*

### Filing a report (still signed in)
- [ ] **`15` Create button** — the **Create / New Report** button.
      *Annotate: circle it.*
- [ ] **`16` Project/version/channel** — the form top: project, game version,
      channel (LIVE/PTU). *Annotate: number them 1-2-3.*
- [ ] **`17` Title field** — the **Issue Title** field with a strong, searchable
      example typed.
- [ ] **`18` Reproduction steps** ⭐ — the steps field filled with a clean
      numbered repro. *(The single most important shot — make it look great.)*
- [ ] **`19` Attach evidence** — the upload area adding a screenshot + DxDiag +
      log. *Annotate: circle the upload control.*
- [ ] **`20` More info + Submit** — the More info field and the **Submit** button.
      *Annotate: circle Submit.*
- [ ] **`21` Report created** — the confirmation / new report page.
      *Annotate: "done — now help it get confirmed".*

### Status badges (find reports in each state, or use four different reports)
- [ ] **`22` Open** badge — *Annotate: circle the Open badge.*
- [ ] **`23` Confirmed** badge — *Annotate: circle the Confirmed badge.*
- [ ] **`24` Under Investigation** badge — *Annotate: circle the badge.*
- [ ] **`25` Acknowledged** badge — *Annotate: circle the badge.*
- [ ] **`26` Add reproduction** — the contribute/vote control on someone else's
      report (can reuse/recrop `14`). *Annotate: "10 reproductions → Confirmed".*

---

## 🎮 Session C — In-game

- [ ] **`07` Good screenshot example** — the bug clearly visible with enough
      surroundings to show the location. *Annotate: caption what makes it good.*
- [ ] **`08` Video frame** — a single frame from a short clip of the bug in
      motion. *Annotate: "video beats a still for movement bugs".*

---

## 🎨 Optional — can be made in-repo instead of captured

- [ ] **`00b` IC vs Spectrum card** — a two-column "Bug → Issue Council /
      Feedback → Spectrum" graphic.
- [ ] **`27` Lifecycle diagram** — a left-to-right arrow:
      Open → Confirmed → Under Investigation → Acknowledged.

---

### Count: 27 to capture + 2 optional graphics = 29 total

Don't worry about getting all of them in one go. Whatever's in the inbox gets
sorted; Claude will tell you which ones are still missing after each pass.
