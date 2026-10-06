/**
 * Site-wide settings: brand, contact details, navigation and SEO.
 * Everything a non-developer may need to edit lives in /content.
 *
 * PLACEHOLDERS to fill: search this folder for "<" and "₹____".
 */

export const site = {
  name: 'Luno Lab',
  url: 'https://lunolab.in',
  city: 'Madurai',
  region: 'Tamil Nadu',
  country: 'IN',

  // Contact. `phone` is used for tel: links (E.164 format), `phoneDisplay` is what people see.
  phone: '+916382825422',
  phoneDisplay: '+91 63828 25422',
  // WhatsApp number: country code + number, digits only.
  whatsapp: '916382825422',
  email: 'viswaa288@gmail.com',
  address: '<ADDRESS>, Madurai, Tamil Nadu',
  hours: 'Mon–Sat, 9:30 AM – 7:00 PM',
  instagram: 'https://www.instagram.com/luno_lab_/',

  /** Default WhatsApp message, pre-filled when someone taps a WhatsApp button. */
  whatsappMessage: 'Hi Luno Lab, I need a website for my business.',

  /** The one offer used on every primary CTA. */
  primaryCta: 'Get a Free Website Plan',
  /** Shorter version for the navbar. */
  navCta: 'Get Free Website Plan',

  seo: {
    title: 'Luno Lab | Website Design & SEO for Local Businesses in Madurai',
    description:
      'Luno Lab builds fast, mobile-friendly, Google-ready websites for shops, clinics, restaurants and local businesses in Madurai and across Tamil Nadu. Live in 7–14 days.',
  },
} as const

export const nav = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
] as const
