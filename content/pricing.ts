/**
 * Packages. Replace every ₹____ with your real starting price.
 * Each "Get this plan" button opens WhatsApp with the plan name pre-filled.
 */

export type Plan = {
  name: string
  price: string
  tagline: string
  features: string[]
  popular?: boolean
}

export const plans: Plan[] = [
  {
    name: 'Starter',
    price: '₹____',
    tagline: 'Get online fast with a simple, professional page.',
    features: ['1-page website', 'WhatsApp button', 'Google Maps location', 'Mobile-ready design'],
  },
  {
    name: 'Business',
    price: '₹____',
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
    price: '₹____',
    tagline: 'For businesses ready to grow every month.',
    features: [
      'Everything in Business',
      'WhatsApp & enquiry automation',
      'Monthly SEO',
      'Ads & social media support',
    ],
  },
]
