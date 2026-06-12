# Screenshot intake — sorting raw screenshots into a guide

A lightweight, **no-app** workflow for getting screenshots off your desktop and
into a guide's image folder with the right names. There is no program to run and
no API key — Claude Code reads the images directly (the Read tool sees images),
matches them to the guide's manifest, and files them for you in-session.

It is **reusable**: any guide that defines a manifest and an inbox folder can be
sorted the same way. The first guide to use it is `/report-a-bug`.

---

## How to use it (the short version)

1. Drop your raw screenshots into `inbox/<guide>/` — any filenames, any order.
   For the bug-report guide that is `inbox/report-a-bug/`.
2. In a Claude Code session in this repo, say: **"sort screenshots"** (optionally
   name the guide, e.g. "sort screenshots for report-a-bug").
3. Claude reads each image, matches it to a shot in the manifest, and shows you a
   review table: *your file → proposed name · confidence · one-line reason.*
4. Confirm (or correct any it got wrong). Claude renames and moves each into
   `public/images/<guide>/` and flips that shot's `captured` flag to `true`.
5. Claude reports which shots are **still missing** so you know what is left to
   capture.

That's it. The renamed images under `public/images/<guide>/` get committed; the
`inbox/` staging area is git-ignored, so raw drops never clutter the repo.

---

## The manifest

Each guide has `public/images/<guide>/manifest.json`. It is the single source of
truth for what to shoot, where each shot goes, and what has been captured.

```jsonc
{
  "guide": "report-a-bug",
  "targetDir": "public/images/report-a-bug",
  "inbox": "inbox/report-a-bug",
  "shots": [
    {
      "filename": "01-launcher-build-number.png", // final name in targetDir
      "page": "gathering-evidence",               // which guide page uses it
      "step": "Find your build number",           // section within that page
      "source": "LAUNCHER",                        // LAUNCHER | WIN | WEB | GAME | GRAPHIC
      "mustShow": "RSI Launcher with the build number under the LAUNCH GAME button",
      "annotate": "circle the build number",       // what to mark up in editing
      "captured": false                             // flipped to true once filed
    }
  ]
}
```

`mustShow` is what Claude matches an inbox image against, so keep it concrete.

---

## The in-session routine (what Claude does)

When you ask Claude to sort screenshots, it:

1. Picks the guide — the one you named, otherwise the one whose `inbox/` folder
   has files in it.
2. Reads `public/images/<guide>/manifest.json`.
3. Lists `inbox/<guide>/` and **reads each image**.
4. Classifies each image to its best-matching `shots[].mustShow` entry.
5. Presents a review table and **flags any low-confidence or ambiguous match for
   you to confirm** — it never silently guesses.
6. On your confirm, moves + renames each file into `targetDir` and sets that
   shot's `captured: true`.
7. Reports the remaining `captured: false` shots so you know what is left, and
   warns before overwriting any shot that was already captured.

The manifest therefore does triple duty: it is the **spec** for what to shoot,
the **target** for sorting, and a live **checklist** of what remains.

---

## Adding a new guide

1. Create `public/images/<new-guide>/manifest.json` using the schema above.
2. Create `inbox/<new-guide>/.gitkeep`.
3. Drop screenshots in and say "sort screenshots for `<new-guide>`".

Once a real image replaces a placeholder on a page, swap the page's
`<ShotPlaceholder file="…" />` for a `next/image` `<Image>` pointing at
`/images/<guide>/<filename>` (see the note in `src/components/ShotPlaceholder.tsx`).
