/**
 * Landing-page copy, section by section.
 * Keep sentences short and outcome-focused: no tech jargon in headings.
 */

export const hero = {
  h1: 'Websites that bring customers to your business.',
  /** Word in the H1 that gets the lime highlighter mark. Must appear in `h1`. */
  h1Highlight: 'customers',
  sub: 'We build fast, mobile-friendly, Google-ready websites for local businesses in Madurai and across Tamil Nadu.',
  secondaryCta: { label: 'See Our Work', href: '#work' },
  // Honest claims only.
  trustChips: ['Live in 7–14 days', 'Mobile-first', 'WhatsApp built in', 'Based in Madurai'],
  stickers: ['WhatsApp enquiries', 'Google-ready', 'Loads fast'],
} as const
