// Website build packages. Ranges, not fixed prices — every project is still
// quoted on its actual scope, and the range sets expectations before a call.
export type Tier = {
  name: string
  min: number
  max: number
  unit: string
  summary: string
  includes: string[]
  /** The tier most clients should land on. Rendered with the accent border. */
  featured?: boolean
}

export const tiers: Tier[] = [
  {
    name: 'Starter',
    min: 6000,
    max: 10000,
    unit: 'one-off',
    summary: 'A single page to get a real presence online, quickly.',
    includes: [
      'One-page site, up to 5 sections',
      'Built on a proven layout',
      'Works properly on mobile',
      'Contact link or WhatsApp',
      '1 round of changes',
    ],
  },
  {
    name: 'Standard',
    min: 15000,
    max: 25000,
    unit: 'one-off',
    summary: 'A custom site designed around the enquiry you want.',
    includes: [
      'Custom design, built from scratch',
      'Motion and interaction',
      'Projects / portfolio section',
      'Working contact form',
      'SEO fundamentals',
      '2 rounds of changes',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    min: 30000,
    max: 50000,
    unit: 'one-off',
    summary: 'Multi-page, with the tools to keep it current yourself.',
    includes: [
      'Everything in Standard',
      '3D or advanced animation',
      'Blog or admin panel',
      'Multiple pages',
      '1 month of support after launch',
    ],
  },
]

export const hasPricing = tiers.length > 0
