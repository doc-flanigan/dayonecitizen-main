#!/usr/bin/env python3
"""
Generate correctly-sized social media banner images for every major platform.

Matches the centered design of youtube_channel_banner.png:
  - Navy gradient background
  - "DayOneCitizen.com" headline in Orbitron Bold gold
  - Tagline in Orbitron Regular starwhite
  - "www.dayonecitizen.com" URL in Orbitron Bold gold (smaller)
  - Gold rule lines framing the text block

Output: public/images/brand/
  youtube_channel_banner.png    2560x1440
  twitch_offline_banner.png     1920x1080
  twitch_profile_banner.png     1200x480
  discord_server_banner.png      960x540
  twitter_banner.png            1500x500
  tiktok_profile_cover.png      1080x1920

Run:
    python3 scripts/make-social-banners.py

Dependencies: Pillow
"""
from __future__ import annotations

import random
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
FONTS_DIR = ROOT / "scripts" / "fonts"
OUT = ROOT / "public" / "images" / "brand"

BOLD_PATH = FONTS_DIR / "Orbitron-Bold.ttf"
REGULAR_PATH = FONTS_DIR / "Orbitron-Regular.ttf"

NAVY = (10, 14, 26)
NAVY_LIGHT = (20, 28, 46)
GOLD = (240, 192, 64)
GOLD_DARK = (196, 154, 32)
STARWHITE = (232, 234, 240)
MUTED = (136, 146, 164)

HEADLINE = "DayOneCitizen.com"
TAGLINE = "Star Citizen for brand-new players. Plain English. No jargon."
URL = "www.dayonecitizen.com"


def font(size: int, bold: bool = True) -> ImageFont.FreeTypeFont:
    path = BOLD_PATH if bold else REGULAR_PATH
    return ImageFont.truetype(str(path), size=size)


def measure(text: str, fnt: ImageFont.FreeTypeFont) -> tuple[int, int]:
    left, top, right, bottom = fnt.getbbox(text)
    return right - left, bottom - top


def fit_font(text: str, max_w: int, max_h: int, start: int, bold: bool = True) -> ImageFont.FreeTypeFont:
    size = start
    while size > 8:
        fnt = font(size, bold=bold)
        tw, th = measure(text, fnt)
        if tw <= max_w and th <= max_h:
            return fnt
        size -= 1
    return font(8, bold=bold)


def draw_centered_x(img: Image.Image, text: str, fnt: ImageFont.FreeTypeFont,
                    fill: tuple, y: int) -> None:
    draw = ImageDraw.Draw(img)
    left, top, right, bottom = fnt.getbbox(text)
    tw = right - left
    th = bottom - top
    x = (img.width - tw) // 2 - left
    draw.text((x, y - top), text, font=fnt, fill=fill)
    return th


def gradient_bg(size: tuple[int, int]) -> Image.Image:
    w, h = size
    img = Image.new("RGB", size, NAVY)
    px = img.load()
    for y in range(h):
        t = y / max(h - 1, 1)
        r = int(NAVY[0] + (NAVY_LIGHT[0] - NAVY[0]) * t)
        g = int(NAVY[1] + (NAVY_LIGHT[1] - NAVY[1]) * t)
        b = int(NAVY[2] + (NAVY_LIGHT[2] - NAVY[2]) * t)
        for x in range(w):
            px[x, y] = (r, g, b)
    return img


def add_starfield(img: Image.Image, seed: int = 7) -> None:
    draw = ImageDraw.Draw(img, "RGBA")
    w, h = img.size
    rng = random.Random(seed)
    count = max(60, (w * h) // 10000)
    for _ in range(count):
        x = rng.randint(0, w - 1)
        y = rng.randint(0, h - 1)
        if rng.random() < 0.1:
            r = rng.randint(2, 4)
            alpha = rng.randint(140, 220)
            color = STARWHITE
        else:
            r = rng.randint(0, 1)
            alpha = rng.randint(40, 110)
            color = MUTED
        draw.ellipse((x - r, y - r, x + r, y + r),
                     fill=(color[0], color[1], color[2], alpha))


def gold_rule(draw: ImageDraw.ImageDraw, w: int, y: int, thickness: int) -> None:
    for i in range(w):
        t = i / (w - 1)
        a = int(200 * (1 - abs(2 * t - 1)))
        if a > 0:
            draw.rectangle((i, y, i + 1, y + thickness),
                            fill=(GOLD[0], GOLD[1], GOLD[2], a))


def landscape_banner(width: int, height: int, *, seed: int = 7) -> Image.Image:
    """Centered text layout: headline / tagline / url, framed by gold rules."""
    img = gradient_bg((width, height)).convert("RGBA")
    add_starfield(img, seed=seed)
    draw = ImageDraw.Draw(img, "RGBA")

    pad_x = int(width * 0.06)
    inner_w = width - 2 * pad_x
    center_y = height // 2

    # Font sizes relative to height so every format feels proportionate.
    h_fnt = fit_font(HEADLINE, inner_w, int(height * 0.38), int(height * 0.22))
    t_fnt = fit_font(TAGLINE, inner_w, int(height * 0.16), int(height * 0.085), bold=False)
    u_fnt = fit_font(URL, inner_w, int(height * 0.12), int(height * 0.10))

    _, hh = measure(HEADLINE, h_fnt)
    _, th = measure(TAGLINE, t_fnt)
    _, uh = measure(URL, u_fnt)

    gap_ht = int(height * 0.04)
    gap_tu = int(height * 0.03)
    block_h = hh + gap_ht + th + gap_tu + uh

    rule_gap = int(height * 0.06)
    rule_thick = max(2, height // 240)

    block_top = center_y - block_h // 2

    # Gold rule above.
    gold_rule(draw, width, block_top - rule_gap, rule_thick)

    # Text stack.
    y = block_top
    draw_centered_x(img, HEADLINE, h_fnt, GOLD, y)
    y += hh + gap_ht
    draw_centered_x(img, TAGLINE, t_fnt, STARWHITE, y)
    y += th + gap_tu
    draw_centered_x(img, URL, u_fnt, GOLD, y)
    y += uh

    # Gold rule below.
    gold_rule(draw, width, y + rule_gap, rule_thick)

    return img


def portrait_banner(width: int = 1080, height: int = 1920, *, seed: int = 42) -> Image.Image:
    """Portrait layout for TikTok profile cover. Stacks content in the
    upper-center third where TikTok's UI is least cluttered."""
    img = gradient_bg((width, height)).convert("RGBA")
    add_starfield(img, seed=seed)
    draw = ImageDraw.Draw(img, "RGBA")

    pad_x = int(width * 0.08)
    inner_w = width - 2 * pad_x

    # Place block in the upper-center third.
    center_y = int(height * 0.38)

    h_fnt = fit_font(HEADLINE, inner_w, int(height * 0.12), int(width * 0.12))
    t_fnt = fit_font(TAGLINE, inner_w, int(height * 0.08), int(width * 0.055), bold=False)
    u_fnt = fit_font(URL, inner_w, int(height * 0.06), int(width * 0.075))

    _, hh = measure(HEADLINE, h_fnt)
    _, th = measure(TAGLINE, t_fnt)
    _, uh = measure(URL, u_fnt)

    gap_ht = int(height * 0.02)
    gap_tu = int(height * 0.015)
    block_h = hh + gap_ht + th + gap_tu + uh

    rule_gap = int(height * 0.025)
    rule_thick = max(2, width // 240)

    block_top = center_y - block_h // 2

    gold_rule(draw, width, block_top - rule_gap, rule_thick)

    y = block_top
    draw_centered_x(img, HEADLINE, h_fnt, GOLD, y)
    y += hh + gap_ht
    draw_centered_x(img, TAGLINE, t_fnt, STARWHITE, y)
    y += th + gap_tu
    draw_centered_x(img, URL, u_fnt, GOLD, y)
    y += uh

    gold_rule(draw, width, y + rule_gap, rule_thick)

    # "unofficial fan site" foot tag at the bottom of safe area.
    foot_text = "An unofficial fan site by Doc_Flanigan"
    foot_fnt = fit_font(foot_text, inner_w, int(height * 0.03), int(width * 0.038), bold=False)
    fw, fh = measure(foot_text, foot_fnt)
    foot_y = int(height * 0.88)
    draw_centered_x(img, foot_text, foot_fnt,
                    (MUTED[0], MUTED[1], MUTED[2], 180), foot_y)

    return img


PLATFORMS = [
    # (filename, width, height, is_portrait)
    ("youtube_channel_banner.png",  2560, 1440, False),
    ("twitch_offline_banner.png",   1920, 1080, False),
    ("twitch_profile_banner.png",   1200,  480, False),
    ("discord_server_banner.png",    960,  540, False),
    ("twitter_banner.png",          1500,  500, False),
    ("tiktok_profile_cover.png",    1080, 1920, True),
]


def main() -> None:
    if not BOLD_PATH.exists() or not REGULAR_PATH.exists():
        raise SystemExit(
            f"Missing fonts in {FONTS_DIR}. "
            "See CLAUDE.md 'Brand mark assets' for the bootstrap recipe."
        )

    OUT.mkdir(parents=True, exist_ok=True)

    print("Generating social media banners...\n")
    for filename, w, h, portrait in PLATFORMS:
        img = portrait_banner(w, h) if portrait else landscape_banner(w, h)
        out_path = OUT / filename
        img.convert("RGB").save(out_path, "PNG", optimize=True)
        size_kb = out_path.stat().st_size // 1024
        print(f"  {filename:<36} {w}x{h:<6} {size_kb} KB")

    print(f"\nDone. {len(PLATFORMS)} banners written to {OUT.relative_to(ROOT)}/")
    print("\nUpload guide:")
    print("  YouTube    : Studio > Customization > Branding > Banner image")
    print("  Twitch     : Creator Dashboard > Settings > Channel > Profile Banner")
    print("  Discord    : Server Settings > Overview > Server Banner")
    print("  Twitter/X  : Profile > Edit profile > Header photo")
    print("  TikTok     : Profile > Edit profile > Background photo")


if __name__ == "__main__":
    main()
