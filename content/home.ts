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

/** Scrolling strip of the kinds of businesses we work with. */
export const industries = [
  'Travel',
  'Visa services',
  'Clinics',
  'Restaurants',
  'Retail',
  'Salons',
  'Schools',
  'HR & consulting',
] as const

export const problem = {
  eyebrow: 'The problem',
  h2: "Your customers search on Google first. If you're not there, they call your competitor.",
  pains: [
    {
      icon: 'search',
      title: 'Not on Google',
      body: 'People search "near me" before they visit. If your business does not show up, they never find you.',
    },
    {
      icon: 'broken',
      title: 'Old or no website',
      body: 'A slow, outdated site, or none at all, makes customers doubt you before they even call.',
    },
    {
      icon: 'chat',
      title: 'Missing WhatsApp enquiries',
      body: 'Customers want to message, not fill long forms. Without a quick WhatsApp button, they leave.',
    },
  ],
} as const

export const services = {
  eyebrow: 'What we do',
  h2: 'Everything you need to get found and get enquiries',
  items: [
    {
      icon: 'website',
      name: 'Website Development',
      title: 'A website that looks great on every phone',
      body: 'Clean, fast pages that show what you do and make it easy to contact you.',
    },
    {
      icon: 'seo',
      name: 'SEO',
      title: 'Show up when people search on Google',
      body: 'We set up your pages so Google understands your business and the areas you serve.',
    },
    {
      icon: 'automation',
      name: 'Automation',
      title: 'Auto WhatsApp replies, booking & enquiry forms',
      body: 'Enquiries reach you instantly, and customers get a reply even when you are busy.',
    },
    {
      icon: 'growth',
      name: 'Digital Growth',
      title: 'Google Business Profile, ads & social to grow your reach',
      body: 'Get seen on Google Maps, Instagram and ads by people near you.',
    },
  ],
} as const

export const work = {
  eyebrow: 'Our work',
  h2: 'Real websites for real local businesses',
} as const

export const steps = {
  eyebrow: 'How it works',
  h2: 'From first call to live website in 4 simple steps',
  items: [
    { title: 'Free call', body: 'Tell us about your business on a quick call or WhatsApp. No charge.' },
    { title: 'Design preview', body: 'We show you how your website will look before you pay in full.' },
    { title: 'Launch in 7–14 days', body: 'We build it, connect your domain and put it live.' },
    { title: 'Ongoing support', body: 'Need a change later? Message us. We are just a call away.' },
  ],
} as const

export const pricingIntro = {
  eyebrow: 'Pricing',
  h2: 'Clear packages. No hidden charges.',
  sub: 'Not sure which one fits? Ask us on WhatsApp and we will suggest the right plan for free.',
} as const

export const promise = {
  eyebrow: 'Our promise',
  h2: 'Working with us is simple and safe',
  items: [
    'Free design preview before you pay in full',
    'You own your website & domain',
    'Local support. Call or WhatsApp anytime',
    'Clear pricing, no hidden charges',
  ],
} as const

export const faq = {
  eyebrow: 'FAQ',
  h2: 'Questions business owners ask us',
  // Plain-text answers: they also feed the FAQPage schema for Google.
  items: [
    {
      q: 'How much does a website cost?',
      a: 'Our websites start from ₹____. The final price depends on how many pages and features you need. See our packages above, or WhatsApp us for a free plan and quote.',
    },
    {
      q: 'How long does it take?',
      a: 'Most websites go live in 7–14 days after we receive your content (photos and details about your business).',
    },
    {
      q: 'Do I need technical knowledge?',
      a: 'No. We handle everything: design, setup, domain and hosting. You just tell us about your business.',
    },
    {
      q: 'Can my website be in Tamil?',
      a: 'Yes. We can build your website in Tamil, English, or both.',
    },
    {
      q: 'Who handles domain & hosting?',
      a: 'We set it up for you. The domain is registered in your name, so you always own your website.',
    },
    {
      q: 'What if I need changes later?',
      a: 'Just call or WhatsApp us. Small updates like new photos or prices are quick. For bigger changes, we tell you the cost before we start.',
    },
    {
      q: 'Will my website show on Google?',
      a: 'Yes. We set up your pages and Google Business Profile so Google can find and list your business. Nobody can honestly promise the #1 spot, but we give you a strong start and can keep improving it with monthly SEO.',
    },
  ],
} as const

export const finalCta = {
  h2: "Let's get your business online this month.",
  sub: 'Message us on WhatsApp, call us, or leave your number and we will call you back.',
  form: {
    title: 'Get a call back',
    businessTypes: [...industries, 'Other'],
    success: 'Thank you! We will call you back within one working day.',
    error: 'Sorry, something went wrong. Please WhatsApp or call us instead.',
  },
} as const

export const footer = {
  pitch: 'Fast, mobile-friendly websites that bring customers to local businesses in Tamil Nadu.',
} as const
