import { chromium } from 'playwright'

const sizes = [
  { name: 'wide-short', width: 1800, height: 860 },
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
]

const browser = await chromium.launch()
for (const s of sizes) {
  const page = await browser.newPage({ viewport: { width: s.width, height: s.height } })
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle' })
  await page.waitForSelector('#hero')
  await page.waitForTimeout(2200)
  await page.screenshot({ path: `_hero_${s.name}.png` })
  await page.close()
}
console.log('done')
await browser.close()
