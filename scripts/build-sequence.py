"""Pack the founder-turn frame sequence into WebP sprite sheets.

Source: ezgif-44f71bf1da462dd9-jpg.zip (300 JPEG frames, 720x1280).
Output: public/sequence/turn-{n}.webp + a small JSON manifest.

Run:  python scripts/build-sequence.py

Why sheets rather than 300 files: 300 requests is what would actually hurt
on mobile, not the bytes. Three sheets is 0.4 MB and three requests, and
each sheet stays under 4096px so older mobile GPUs can texture it.
"""
import io, json, math, zipfile
from pathlib import Path
from PIL import Image

SRC = 'ezgif-44f71bf1da462dd9-jpg.zip'
OUT = Path('public/sequence')
SOURCE_FRAMES = 300
# Frame-difference analysis puts all the real movement between 55 and 245:
# 1-50 is a static back-view and 250-300 is a static front-view. Sampling the
# full range spent half the scroll on frames where nothing happens.
START, END = 55, 245
FRAMES = 90          # plenty for a scrub; 300 is imperceptibly smoother
WIDTH = 360          # it is a dimmed background layer, not a hero image
COLS, ROWS = 6, 5    # 30 per sheet -> 3 sheets, 2160x2880 each
CROP_BOTTOM = 0.10   # removes the AI-generation watermark at ~91% height
QUALITY = 72
BLACK_FLOOR = 28     # see crush() — everything below this becomes true black

def crush(im):
    """Force the plate background to true black.

    The canvas composites this with mix-blend-mode: screen, which leaves the
    backdrop untouched only where the source is exactly 0. The source plate is
    a vignetted 7-21 grey, which screens to ~31 against the #0b0b0f canvas and
    shows up as a visible rectangle. Rescaling so everything under BLACK_FLOOR
    clips to zero makes the plate genuinely disappear, leaving just the lit
    parts of the figure. Shadow detail in the shirt is lost on purpose.
    """
    lut = [0 if v <= BLACK_FLOOR else round((v - BLACK_FLOOR) * 255 / (255 - BLACK_FLOOR))
           for v in range(256)]
    return im.point(lut * 3)


OUT.mkdir(parents=True, exist_ok=True)
z = zipfile.ZipFile(SRC)
span = END - START
step = span / (FRAMES - 1)

frames = []
for i in range(FRAMES):
    n = min(SOURCE_FRAMES, max(1, START + round(i * step)))
    im = Image.open(io.BytesIO(z.read(f'ezgif-frame-{n:03d}.jpg'))).convert('RGB')
    w, h = im.size
    im = im.crop((0, 0, w, int(h * (1 - CROP_BOTTOM))))
    im = im.resize((WIDTH, round(im.size[1] * WIDTH / im.size[0])), Image.LANCZOS)
    frames.append(crush(im))

fw, fh = frames[0].size
per = COLS * ROWS
sheets = math.ceil(FRAMES / per)
total = 0

for s in range(sheets):
    chunk = frames[s * per:(s + 1) * per]
    rows = math.ceil(len(chunk) / COLS)
    sheet = Image.new('RGB', (fw * COLS, fh * rows), (0, 0, 0))
    for i, im in enumerate(chunk):
        sheet.paste(im, ((i % COLS) * fw, (i // COLS) * fh))
    path = OUT / f'turn-{s}.webp'
    sheet.save(path, 'WEBP', quality=QUALITY, method=6)
    total += path.stat().st_size
    print(f'  {path}  {sheet.size[0]}x{sheet.size[1]}  {path.stat().st_size/1024:.0f} KB')

manifest = {
    'frames': FRAMES,
    'frameWidth': fw,
    'frameHeight': fh,
    'cols': COLS,
    'rows': ROWS,
    'perSheet': per,
    'sheets': [f'/sequence/turn-{s}.webp' for s in range(sheets)],
}
(OUT / 'manifest.json').write_text(json.dumps(manifest, indent=2))

# A single still for reduced-motion users and as the poster before load.
frames[-1].save(OUT / 'turn-poster.webp', 'WEBP', quality=78, method=6)

print(f'\n{FRAMES} frames, {sheets} sheets, {total/1024/1024:.2f} MB total')
print(json.dumps(manifest, indent=2))
