"""Pack the sky-fall sequence into WebP sprite sheets — two variants.

Source: ezgif-1057b104152b5404-jpg.zip (300 JPEG frames, 1080x1920 portrait).

Why two variants. A 9:16 plate covered into a 16:10 desktop viewport shows
only 35% of the frame height — that is the "too zoomed" problem, and it is
caused by the aspect mismatch, not by resolution. So desktop gets a real
landscape crop crafted here instead of one the browser improvises at runtime.

And the first build downscaled to 540px, which the browser then upscaled 5.3x
at DPR 2 — that is the "quality is bad" problem. Both sets now stay at or
near their display size.

  desktop  1080x675 (16:10), native width   -> 1.33x at a 1440 viewport
  mobile    640x1138 portrait               -> 1.22x at 390 CSS px, DPR 2

Run:  python scripts/build-sequence.py
"""
import io, json, math, zipfile
from pathlib import Path
from PIL import Image

SRC = 'ezgif-1057b104152b5404-jpg.zip'
OUT = Path('public/sequence')
SOURCE_FRAMES = 300

# Vertical anchor of the landscape crop, as a fraction of source height.
# 0.24 keeps the sun flare, the whole head and the full arm span in shot.
CROP_TOP = 0.24

VARIANTS = {
    'wide':   dict(frames=72, width=1080, quality=68, landscape=True,  cols=3, rows=5),
    'narrow': dict(frames=60, width=640,  quality=70, landscape=False, cols=5, rows=3),
}

OUT.mkdir(parents=True, exist_ok=True)
z = zipfile.ZipFile(SRC)
manifest = {}

for name, cfg in VARIANTS.items():
    step = SOURCE_FRAMES / cfg['frames']
    frames = []
    for i in range(cfg['frames']):
        n = min(SOURCE_FRAMES, int(i * step) + 1)
        im = Image.open(io.BytesIO(z.read(f'ezgif-frame-{n:03d}.jpg'))).convert('RGB')
        if cfg['landscape']:
            W, H = im.size
            ch = round(W * 10 / 16)
            top = int(H * CROP_TOP)
            im = im.crop((0, top, W, top + ch))
        w = cfg['width']
        frames.append(im.resize((w, round(im.size[1] * w / im.size[0])), Image.LANCZOS))

    fw, fh = frames[0].size
    per = cfg['cols'] * cfg['rows']
    sheets = math.ceil(cfg['frames'] / per)
    total = 0

    for s in range(sheets):
        chunk = frames[s * per:(s + 1) * per]
        rows = math.ceil(len(chunk) / cfg['cols'])
        sheet = Image.new('RGB', (fw * cfg['cols'], fh * rows))
        for i, im in enumerate(chunk):
            sheet.paste(im, ((i % cfg['cols']) * fw, (i // cfg['cols']) * fh))
        path = OUT / f'sky-{name}-{s}.webp'
        sheet.save(path, 'WEBP', quality=cfg['quality'], method=6)
        total += path.stat().st_size
        assert max(sheet.size) <= 4096, f'{path} exceeds the 4096px texture limit'

    frames[0].save(OUT / f'sky-{name}-poster.webp', 'WEBP', quality=74, method=6)

    manifest[name] = {
        'frames': cfg['frames'],
        'frameWidth': fw,
        'frameHeight': fh,
        'cols': cfg['cols'],
        'perSheet': per,
        'sheets': [f'/sequence/sky-{name}-{s}.webp' for s in range(sheets)],
        'poster': f'/sequence/sky-{name}-poster.webp',
    }
    print(f'{name:>7}: {cfg["frames"]} frames  {fw}x{fh}  {sheets} sheets  {total/1024/1024:.2f} MB')

(OUT / 'manifest.json').write_text(json.dumps(manifest, indent=2))
print('\nEach device downloads one variant only.')
