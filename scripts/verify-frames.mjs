/**
 * Assert every manifest matches what is actually on disk.
 *
 * Added after a silent failure: the hero mobile manifest claimed 72 frames
 * while only 56 had been written, so the browser 404'd on frames 57-72 and
 * on a poster.avif that did not exist. Nothing surfaced that until a
 * Lighthouse run flagged console errors. This turns that class of bug into
 * a build failure.
 *
 * Runs as part of `npm run build`.
 */
import { readFile, access } from 'node:fs/promises'
import { join } from 'node:path'

const ROOT = 'public/frames'
const manifests = JSON.parse(await readFile(join(ROOT, 'manifests.json'), 'utf8'))

const exists = async (p) => {
  try {
    await access(join('public', p))
    return true
  } catch {
    return false
  }
}

let failures = 0

for (const [name, m] of Object.entries(manifests)) {
  for (const variant of ['desktop', 'mobile']) {
    const v = m[variant]
    if (!v) continue

    const missing = []
    for (let i = 1; i <= v.frameCount; i++) {
      const p = `${v.dir}/${String(i).padStart(4, '0')}.webp`
      if (!(await exists(p))) missing.push(i)
    }
    if (missing.length) {
      failures++
      const span =
        missing.length > 6
          ? `${missing.length} missing (${missing[0]}…${missing[missing.length - 1]})`
          : missing.join(', ')
      console.error(`  ✗ ${name}/${variant}: manifest says ${v.frameCount} frames — ${span}`)
    }

    for (const [fmt, url] of Object.entries(v.poster)) {
      if (url && !(await exists(url))) {
        failures++
        console.error(`  ✗ ${name}/${variant}: manifest lists ${fmt} poster but ${url} is absent`)
      }
    }
  }
}

if (failures) {
  console.error(`\nframe verification failed (${failures} problem${failures > 1 ? 's' : ''}).`)
  console.error('Re-run: npm run frames -- <name>')
  process.exit(1)
}

const total = Object.values(manifests).reduce(
  (n, m) => n + m.desktop.frameCount + (m.mobile?.frameCount ?? 0),
  0
)
console.log(`frames verified: ${Object.keys(manifests).length} sequences, ${total} frames, all posters present`)
