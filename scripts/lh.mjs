/**
 * Lighthouse runner. Mobile emulation by default (the target the spec sets).
 *
 *   node scripts/lh.mjs [url] [desktop]
 */
import { launch } from 'chrome-launcher'
import lighthouse from 'lighthouse'

const url = process.argv[2] ?? 'http://localhost:4312'
const desktop = process.argv[3] === 'desktop'

const chrome = await launch({ chromeFlags: ['--headless=new', '--no-sandbox'] })

const result = await lighthouse(
  url,
  { port: chrome.port, output: 'json', logLevel: 'error' },
  desktop
    ? {
        extends: 'lighthouse:default',
        settings: {
          formFactor: 'desktop',
          screenEmulation: { mobile: false, width: 1440, height: 900, deviceScaleFactor: 1, disabled: false },
          throttling: { rttMs: 40, throughputKbps: 10240, cpuSlowdownMultiplier: 1 },
        },
      }
    : undefined
)

const { categories, audits } = result.lhr
const pct = (c) => Math.round(c.score * 100)

console.log(`\n${desktop ? 'DESKTOP' : 'MOBILE'}  ${url}`)
console.log('─'.repeat(52))
for (const key of ['performance', 'accessibility', 'best-practices', 'seo']) {
  const c = categories[key]
  console.log(`  ${c.title.padEnd(18)} ${String(pct(c)).padStart(3)}`)
}
console.log('')
for (const id of [
  'largest-contentful-paint',
  'cumulative-layout-shift',
  'total-blocking-time',
  'first-contentful-paint',
  'speed-index',
]) {
  const a = audits[id]
  if (a) console.log(`  ${a.title.padEnd(30)} ${a.displayValue ?? '-'}`)
}

const failing = Object.values(audits)
  .filter((a) => a.score !== null && a.score < 0.9 && a.scoreDisplayMode !== 'informative')
  .sort((a, b) => a.score - b.score)

if (failing.length) {
  console.log('\n  Failing / sub-90 audits:')
  for (const a of failing.slice(0, 18)) {
    const bytes = a.details?.overallSavingsBytes
    const extra = bytes ? `  (${(bytes / 1024 / 1024).toFixed(2)} MB)` : ''
    console.log(`   ${String(Math.round(a.score * 100)).padStart(3)}  ${a.title}${extra}`)
  }
}

await chrome.kill()
