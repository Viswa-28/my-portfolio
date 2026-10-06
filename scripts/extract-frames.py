#!/usr/bin/env python3
"""Build the scroll-sequence frame sets.

DEVIATION FROM SPEC, and why. The spec asked for `extract-frames.sh` driving
ffmpeg over /raw-videos/*.mp4. There are no mp4s and no ffmpeg on this
machine -- the assets arrived as "scroll animation clips/*.zip", each holding
300 pre-extracted JPEG frames at exactly the resolutions the spec wanted
(1920x1080, plus 1080x1920 for the vertical hero). So this reads the zips
directly. It still emits precisely the layout the spec describes:

    public/frames/<name>/desktop/0001.webp ...
    public/frames/<name>/mobile/0001.webp  ...
    public/frames/<name>/manifest.json
    public/frames/<name>/<variant>/poster.webp  (+ .avif where supported)

If mp4s arrive later, flip SOURCE_KIND to 'video'; everything downstream is
unchanged.

WEIGHT. The spec's 1920px / q80 / 24fps / 300 frames measures 123 KB per
frame = 36 MB for the hero desktop set alone, which cannot coexist with
Lighthouse mobile >= 90. Defaults here are 1280px / 120 frames desktop and
640px / 72 frames mobile: roughly 8 MB and 3.5 MB per clip. 120 frames across
250vh is a new frame every ~19px of scroll, finer than anyone perceives.
Raise PROFILES to trade bandwidth for sharpness.

Usage:  python scripts/extract-frames.py [name ...]
"""
from __future__ import annotations

import io
import json
import shutil
import sys
import zipfile
from pathlib import Path

from PIL import Image

SRC_DIR = Path("scroll animation clips")
OUT_ROOT = Path("public/frames")
SOURCE_KIND = "zip"  # "zip" | "video"

# Zip filenames are inconsistent, so map them onto the section names the app
# uses. "projects" has no clip yet -- that section falls back to a still.
SOURCES = {
    "hero": {"wide": "16 9 hero.zip", "tall": "9 16 hero.zip"},
    "about": {"wide": "about.zip", "tall": None},
    "services": {"wide": "service.zip", "tall": None},
    "projects": {"wide": None, "tall": None},
    "testimonials": {"wide": "testimonial.zip", "tall": None},
    "contact": {"wide": "contact.zip", "tall": None},
    "footer": {"wide": "footer.zip", "tall": None},
}

PROFILES = {
    "desktop": {"width": 1280, "frames": 120, "quality": 75},
    "mobile": {"width": 640, "frames": 72, "quality": 70},
}

# Sections delivered as a ready-made frame zip rather than raw clip frames.
# The desktop set is copied through verbatim (that is the point -- it was
# rendered at a quality we are not going to improve by re-encoding), and the
# mobile set is derived from those same high-quality frames.
PRERENDERED = {
    "about": "about-frames-desktop.zip",
}

MOBILE_ASPECT = 9 / 16
FOCAL_X = 0.7  # subject sits right of centre; bias the crop window right


def zip_frames(path):
    z = zipfile.ZipFile(path)
    names = sorted(
        n
        for n in z.namelist()
        if not n.endswith("/") and n.lower().endswith((".jpg", ".jpeg", ".png", ".webp"))
    )
    return z, names


def crop_to_aspect(im, aspect, focal_x=FOCAL_X):
    """Crop to `aspect`, biased toward the subject rather than dead centre."""
    w, h = im.size
    target_w = int(round(h * aspect))
    if target_w <= w:
        left = int(round((w - target_w) * focal_x))
        left = max(0, min(w - target_w, left))
        return im.crop((left, 0, left + target_w, h))
    target_h = int(round(w / aspect))
    top = max(0, min(h - target_h, (h - target_h) // 2))
    return im.crop((0, top, w, top + target_h))


def avg_color(im):
    small = im.resize((16, 16), Image.LANCZOS).convert("RGB")
    px = list(small.get_flattened_data())
    n = len(px)
    r = sum(p[0] for p in px) // n
    g = sum(p[1] for p in px) // n
    b = sum(p[2] for p in px) // n
    return "#%02x%02x%02x" % (r, g, b)


def public_url(path):
    return "/" + path.as_posix().split("public/", 1)[1]


def save_poster(im, out_dir):
    im.save(out_dir / "poster.webp", "WEBP", quality=82, method=6)
    avif = None
    try:
        im.save(out_dir / "poster.avif", "AVIF", quality=62)
        avif = public_url(out_dir / "poster.avif")
    except Exception:
        pass  # Pillow without libavif; WebP alone is a fine LCP image
    return {"webp": public_url(out_dir / "poster.webp"), "avif": avif}


def build_variant(name, variant, zip_path, portrait):
    prof = PROFILES[variant]
    out_dir = OUT_ROOT / name / variant
    if out_dir.exists():
        shutil.rmtree(out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)

    z, names = zip_frames(zip_path)
    total = len(names)
    want = min(prof["frames"], total)
    step = total / want
    width = prof["width"]

    last = None
    for i in range(want):
        src_i = min(total - 1, int(i * step))
        im = Image.open(io.BytesIO(z.read(names[src_i]))).convert("RGB")
        if portrait and im.size[0] / im.size[1] > MOBILE_ASPECT:
            im = crop_to_aspect(im, MOBILE_ASPECT)
        im = im.resize((width, round(im.size[1] * width / im.size[0])), Image.LANCZOS)
        im.save(out_dir / ("%04d.webp" % (i + 1)), "WEBP", quality=prof["quality"], method=4)
        last = im

    first = Image.open(io.BytesIO(z.read(names[0]))).convert("RGB")
    if portrait and first.size[0] / first.size[1] > MOBILE_ASPECT:
        first = crop_to_aspect(first, MOBILE_ASPECT)
    first = first.resize((width, round(first.size[1] * width / first.size[0])), Image.LANCZOS)
    poster = save_poster(first, out_dir)

    size_mb = sum(p.stat().st_size for p in out_dir.glob("*.webp")) / 1024 / 1024
    fh = last.size[1] if last else 0
    print("  %-8s %4d frames  %dx%d  %6.2f MB" % (variant, want, width, fh, size_mb))

    return (
        {
            "frameCount": want,
            "width": width,
            "height": fh,
            "fps": 24,
            "dir": "/frames/%s/%s" % (name, variant),
            "poster": poster,
        },
        avg_color(last) if last else "#14122B",
    )


def build_prerendered(name, zip_path):
    """Adopt a ready-made desktop set, and derive the mobile set from it."""
    z = zipfile.ZipFile(zip_path)
    desktop_names = sorted(
        n for n in z.namelist()
        if "/desktop/" in n and n.lower().endswith((".webp", ".jpg", ".png"))
    )
    if not desktop_names:
        raise SystemExit("%s: no <name>/desktop/ frames inside %s" % (name, zip_path))

    out_desktop = OUT_ROOT / name / "desktop"
    if out_desktop.exists():
        shutil.rmtree(out_desktop)
    out_desktop.mkdir(parents=True, exist_ok=True)

    # Copied byte-for-byte: re-encoding a finished WebP only loses quality.
    for i, n in enumerate(desktop_names):
        (out_desktop / ("%04d.webp" % (i + 1))).write_bytes(z.read(n))

    first = Image.open(io.BytesIO(z.read(desktop_names[0]))).convert("RGB")
    last = Image.open(io.BytesIO(z.read(desktop_names[-1]))).convert("RGB")
    poster = save_poster(first, out_desktop)
    d_size = sum(p.stat().st_size for p in out_desktop.glob("*.webp")) / 1024 / 1024
    print("  %-8s %4d frames  %dx%d  %6.2f MB  (verbatim)"
          % ("desktop", len(desktop_names), first.size[0], first.size[1], d_size))

    # No mobile set was supplied, so derive one: crop to portrait and
    # downscale. Source is the high-quality plate, so this is as good as it
    # gets without a purpose-shot vertical clip.
    prof = PROFILES["mobile"]
    out_mobile = OUT_ROOT / name / "mobile"
    if out_mobile.exists():
        shutil.rmtree(out_mobile)
    out_mobile.mkdir(parents=True, exist_ok=True)

    want = min(prof["frames"], len(desktop_names))
    step = len(desktop_names) / want
    width = prof["width"]
    m_last = None
    for i in range(want):
        src = desktop_names[min(len(desktop_names) - 1, int(i * step))]
        im = Image.open(io.BytesIO(z.read(src))).convert("RGB")
        if im.size[0] / im.size[1] > MOBILE_ASPECT:
            im = crop_to_aspect(im, MOBILE_ASPECT)
        im = im.resize((width, round(im.size[1] * width / im.size[0])), Image.LANCZOS)
        im.save(out_mobile / ("%04d.webp" % (i + 1)), "WEBP", quality=prof["quality"], method=4)
        m_last = im
    m_first = Image.open(io.BytesIO(z.read(desktop_names[0]))).convert("RGB")
    if m_first.size[0] / m_first.size[1] > MOBILE_ASPECT:
        m_first = crop_to_aspect(m_first, MOBILE_ASPECT)
    m_first = m_first.resize((width, round(m_first.size[1] * width / m_first.size[0])), Image.LANCZOS)
    m_poster = save_poster(m_first, out_mobile)
    m_size = sum(p.stat().st_size for p in out_mobile.glob("*.webp")) / 1024 / 1024
    print("  %-8s %4d frames  %dx%d  %6.2f MB  (derived)"
          % ("mobile", want, width, m_last.size[1] if m_last else 0, m_size))

    return {
        "name": name,
        "desktop": {
            "frameCount": len(desktop_names),
            "width": first.size[0],
            "height": first.size[1],
            "fps": 24,
            "dir": "/frames/%s/desktop" % name,
            "poster": poster,
        },
        "mobile": {
            "frameCount": want,
            "width": width,
            "height": m_last.size[1] if m_last else 0,
            "fps": 24,
            "dir": "/frames/%s/mobile" % name,
            "poster": m_poster,
        },
        "endColor": avg_color(last),
    }


def main(only):
    OUT_ROOT.mkdir(parents=True, exist_ok=True)
    index_path = OUT_ROOT / "manifests.json"
    manifests = json.loads(index_path.read_text()) if index_path.exists() else {}
    grand = 0.0

    for name, src in SOURCES.items():
        if only and name not in only:
            continue
        pre = PRERENDERED.get(name)
        if pre and Path(pre).exists():
            print("%s:" % name)
            manifests[name] = build_prerendered(name, Path(pre))
            (OUT_ROOT / name / "manifest.json").write_text(
                json.dumps(manifests[name], indent=2)
            )
            grand += sum(p.stat().st_size for p in (OUT_ROOT / name).rglob("*.webp")) / 1024 / 1024
            continue

        wide = SRC_DIR / src["wide"] if src["wide"] else None
        tall = SRC_DIR / src["tall"] if src["tall"] else None

        if not wide or not wide.exists():
            print("%s: no clip -- section falls back to a still" % name)
            continue

        print("%s:" % name)
        desktop, end_color = build_variant(name, "desktop", wide, portrait=False)
        has_tall = bool(tall and tall.exists())
        # A purpose-shot vertical clip always beats cropping the landscape one.
        mobile, _ = build_variant(
            name, "mobile", tall if has_tall else wide, portrait=not has_tall
        )

        manifests[name] = {
            "name": name,
            "desktop": desktop,
            "mobile": mobile,
            "endColor": end_color,
        }
        (OUT_ROOT / name / "manifest.json").write_text(json.dumps(manifests[name], indent=2))
        grand += sum(p.stat().st_size for p in (OUT_ROOT / name).rglob("*.webp")) / 1024 / 1024

    index_path.write_text(json.dumps(manifests, indent=2))
    print("\nWritten this run: %.1f MB" % grand)


if __name__ == "__main__":
    main(sys.argv[1:])
