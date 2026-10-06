// ── Project constants ──────────────────────────────────────────────────
// DOMAIN is the single place the live URL is defined. scripts/gen-seo.mjs
// reads it to write robots.txt and sitemap.xml, and anything emitting
// canonical / og:url tags should derive from it too.
export const DOMAIN = 'https://lunolab.in'

export const url = (path = '/') => `${DOMAIN}${path}`
