// Post-build: write robots.txt and sitemap.xml into dist/.
//
// The URL list is derived by walking the generated HTML rather than being
// maintained by hand, so adding a route to src/routes.tsx automatically adds
// it to the sitemap. DOMAIN is read from the single constant in
// src/lib/site.ts, so there is still exactly one place to change it.
import { readdir, readFile, writeFile, stat } from 'node:fs/promises'
import { join, relative, sep } from 'node:path'

const DIST = 'dist'

const siteTs = await readFile('src/lib/site.ts', 'utf8')
const match = siteTs.match(/export const DOMAIN = '([^']+)'/)
if (!match) {
  throw new Error('Could not read DOMAIN from src/lib/site.ts — did its shape change?')
}
const DOMAIN = match[1].replace(/\/$/, '')

async function htmlFiles(dir) {
  const out = []
  for (const entry of await readdir(dir)) {
    const full = join(dir, entry)
    if ((await stat(full)).isDirectory()) out.push(...(await htmlFiles(full)))
    else if (entry.endsWith('.html') && entry !== '404.html') out.push(full)
  }
  return out
}

const paths = (await htmlFiles(DIST))
  .map((f) => '/' + relative(DIST, f).split(sep).join('/'))
  .map((p) => (p === '/index.html' ? '/' : p.replace(/\.html$/, '')))
  .sort((a, b) => a.length - b.length || a.localeCompare(b))

const today = new Date().toISOString().slice(0, 10)

const urls = paths.map((p) => {
  const home = p === '/'
  return [
    '  <url>',
    `    <loc>${DOMAIN}${p}</loc>`,
    `    <lastmod>${today}</lastmod>`,
    `    <changefreq>${home ? 'weekly' : 'monthly'}</changefreq>`,
    `    <priority>${home ? '1.0' : '0.8'}</priority>`,
    '  </url>',
  ].join('\n')
})

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls,
  '</urlset>',
  '',
].join('\n')

const robots = ['User-agent: *', 'Allow: /', '', `Sitemap: ${DOMAIN}/sitemap.xml`, ''].join('\n')

await writeFile(join(DIST, 'sitemap.xml'), sitemap, 'utf8')
await writeFile(join(DIST, 'robots.txt'), robots, 'utf8')

console.log(`SEO files written for ${DOMAIN}:`)
for (const p of paths) console.log('  ' + DOMAIN + p)
