/**
 * Packages. Prices are one-time; `monthly` adds an ongoing fee line.
 * Each "Get this plan" button opens WhatsApp with the plan name pre-filled.
 */

export type Plan = {
  name: string
  price: string
  /** Optional recurring fee, shown under the one-time price. */
  monthly?: string
  tagline: string
  features: string[]
  popular?: boolean
}

export const plans: Plan[] = [
  {
    name: 'Starter',
    price: '₹7,999',
    tagline: 'Get online fast with a simple, professional page.',
    features: ['1-page website', 'WhatsApp button', 'Google Maps location', 'Mobile-ready design'],
  },
  {
    name: 'Business',
    price: '₹14,999',
    tagline: 'The full package most local businesses need.',
    features: [
      'Up to 5 pages',
      'Basic SEO setup',
      'Google Business Profile setup',
      'Enquiry form',
      'WhatsApp button & Google Maps',
    ],
    popular: true,
  },
  {
    name: 'Growth',
    price: '₹24,999',
    monthly: '₹3,999',
    tagline: 'For businesses ready to grow every month.',
    features: ['Everything in Business', 'Monthly SEO', 'Ads & social media support'],
  },
]
