import { launch } from 'chrome-launcher'
import lighthouse from 'lighthouse'
const chrome = await launch({ chromeFlags: ['--headless=new', '--no-sandbox'] })
const r = await lighthouse(process.argv[2] ?? 'http://localhost:4312', { port: chrome.port, output: 'json', logLevel: 'error' })
const a = r.lhr.audits
const show = (id, n = 6) => {
  const au = a[id]; if (!au) return
  console.log('\n### ' + au.title + '  [' + au.score + ']')
  const items = au.details?.items ?? []
  for (const it of items.slice(0, n)) {
    console.log('  ' + JSON.stringify(it).slice(0, 400))
  }
}
show('largest-contentful-paint-element')
show('color-contrast')
show('render-blocking-resources')
show('offscreen-images')
show('prioritize-lcp-image')
await chrome.kill()
