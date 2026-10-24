/**
 * Case studies for "Our Work".
 *
 * Screenshots live in /public/work:
 *   <slug>-mobile.webp   390×844
 *   <slug>-desktop.webp 1440×900
 *
 * Do NOT invent numbers. `result` only renders when it is filled in with a
 * real, measured outcome (e.g. "2× more WhatsApp enquiries in 2 months").
 */

export type Project = {
  slug: string
  name: string
  url: string
  industry: string
  city: string
  challenge: string
  built: string[]
  result?: string
}

export const projects: Project[] = [
  {
    slug: 'tourglobe',
    name: 'Tourglobe',
    url: 'https://tourglobe.in',
    industry: 'Travel',
    city: 'Madurai',
    challenge:
      'A premium travel consultancy needed a site that felt as premium as its trips, and turned visitors into real enquiries.',
    built: [
      'Image-led premium design',
      'Smart enquiry form (travellers, group size, preferences)',
      'WhatsApp chat',
      '"No payment needed, reply in one working day" promise',
      'Links to sister brands',
    ],
    result: '',
  },
  {
    slug: 'visahub',
    name: 'VisaHub',
    url: 'https://thevisahub.in',
    industry: 'Visa services',
    city: 'Chennai · Coimbatore · Madurai · Trichy',
    challenge:
      'A visa consultancy across four cities needed people to find the right visa fast, and book help without visiting an office.',
    built: [
      'Country-wise visa search & destination pages',
      'Doorstep document pickup booking',
      'WhatsApp, FAQ & testimonials',
      'Instagram feed',
      'SEO-structured pages',
    ],
    result: '',
  },
  {
    slug: 'tevhr',
    name: 'TEVHR Solutions',
    url: 'https://tevhrsolutions.in',
    industry: 'Recruitment',
    city: 'Madurai',
    challenge:
      'A recruitment company hiring bike delivery drivers needed to look trustworthy to the businesses it supplies and to the riders it hires.',
    built: [
      'Clear service cards: hiring, payroll & training',
      'Client showcase page',
      'About, contact & privacy policy pages',
      'Mobile-friendly design',
    ],
    result: '',
  },
]
