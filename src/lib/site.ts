// ── Single source of truth for everything URL- and NAP-shaped ──────────
// NAP (name / address / phone) consistency is the backbone of local SEO:
// the same strings have to appear on the site, in the schema, and on the
// Google Business Profile, character for character.
//
// ⚠️ DOMAIN is the ONE place to change when the real domain is bought.
// canonical tags, og:url, sitemap.xml, robots.txt and every schema @id all
// derive from it.
export const DOMAIN = 'https://lunolab.in'

export const SITE = {
  name: 'LunoLab',
  legalName: 'LunoLab Digital Growth Studio',
  tagline: 'Digital Growth Studio',
  slogan: 'Ideas → Presence → Results',
  email: 'viswaa288@gmail.com',
  // International format, digits only — wa.me and tel: both need it this way.
  phone: '916382825422' as string | null,
  whatsapp: '916382825422' as string | null,
  founder: 'Viswa',
  city: 'Madurai',
  region: 'Tamil Nadu',
  regionCode: 'IN-TN',
  country: 'India',
  countryCode: 'IN',
  // Madurai city centre. Replace with the real business address coordinates
  // once the Google Business Profile is claimed.
  geo: { lat: 9.9252, lng: 78.1198 },
  social: [
    'https://www.instagram.com/luno_lab_/',
    'https://www.linkedin.com/in/viswaa28/',
    'https://github.com/Viswa-28/',
  ],
} as const

export const url = (path = '/') => `${DOMAIN}${path}`

/** Prefilled WhatsApp deep link, or null while no number is configured. */
export const whatsappLink = (message: string) =>
  SITE.whatsapp
    ? `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`
    : null

/** tel: link, or null while no number is configured. */
export const telLink = () => (SITE.phone ? `tel:+${SITE.phone}` : null)

/** Human-readable number, e.g. '+91 98765 43210'. */
export const phoneDisplay = () => {
  if (!SITE.phone) return null
  const d = SITE.phone
  return d.length === 12 ? `+${d.slice(0, 2)} ${d.slice(2, 7)} ${d.slice(7)}` : `+${d}`
}
