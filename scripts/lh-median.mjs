import { launch } from 'chrome-launcher'
import lighthouse from 'lighthouse'

const url = process.argv[2] ?? 'http://localhost:4323'
const runs = Number(process.argv[3] ?? 3)
const med = (a) => a.slice().sort((x, y) => x - y)[Math.floor(a.length / 2)]

const out = { perf: [], a11y: [], bp: [], seo: [], lcp: [], cls: [], tbt: [], fcp: [], si: [] }
let lcpEl = ''

for (let i = 0; i < runs; i++) {
  const chrome = await launch({ chromeFlags: ['--headless=new', '--no-sandbox'] })
  const { lhr } = await lighthouse(url, { port: chrome.port, output: 'json', logLevel: 'error' })
  out.perf.push(lhr.categories.performance.score * 100)
  out.a11y.push(lhr.categories.accessibility.score * 100)
  out.bp.push(lhr.categories['best-practices'].score * 100)
  out.seo.push(lhr.categories.seo.score * 100)
  out.lcp.push(lhr.audits['largest-contentful-paint'].numericValue)
  out.cls.push(lhr.audits['cumulative-layout-shift'].numericValue)
  out.tbt.push(lhr.audits['total-blocking-time'].numericValue)
  out.fcp.push(lhr.audits['first-contentful-paint'].numericValue)
  out.si.push(lhr.audits['speed-index'].numericValue)
  const el = lhr.audits['largest-contentful-paint-element']?.details?.items?.[0]?.items?.[0]?.node
  if (el) lcpEl = el.selector
  await chrome.kill()
  process.stderr.write(`  run ${i + 1}/${runs} done\n`)
}

const r = (n) => Math.round(n)
console.log(`\nMOBILE, median of ${runs} runs — ${url}`)
console.log('─'.repeat(56))
console.log(`  Performance      ${r(med(out.perf))}   (runs: ${out.perf.map(r).join(', ')})`)
console.log(`  Accessibility    ${r(med(out.a11y))}`)
console.log(`  Best Practices   ${r(med(out.bp))}`)
console.log(`  SEO              ${r(med(out.seo))}`)
console.log('')
console.log(`  LCP   ${(med(out.lcp) / 1000).toFixed(1)}s   (runs: ${out.lcp.map((v) => (v / 1000).toFixed(1)).join(', ')})`)
console.log(`  FCP   ${(med(out.fcp) / 1000).toFixed(1)}s`)
console.log(`  CLS   ${med(out.cls).toFixed(3)}`)
console.log(`  TBT   ${r(med(out.tbt))}ms`)
console.log(`  SI    ${(med(out.si) / 1000).toFixed(1)}s`)
console.log(`\n  LCP element: ${lcpEl}`)
