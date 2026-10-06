/** All editable copy lives here. */

export const site = {
  name: 'Viswa',
  studio: 'Luno Lab',
  url: 'https://lunolab.in',
  city: 'Madurai',
  region: 'Tamil Nadu',
  country: 'India',
  email: 'viswaa288@gmail.com',
  phone: '+916382825422',
  whatsapp: '916382825422',
  linkedin: 'https://www.linkedin.com/in/viswaa28/',
  instagram: 'https://www.instagram.com/luno_lab_/',
  title: 'Viswa — Luno Lab | Websites, SEO & Automation in Madurai',
  description:
    'I build websites, SEO and automation that grow your business. Luno Lab is a digital growth studio in Madurai, Tamil Nadu.',
} as const

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
] as const

export const hero = {
  h1: "Hi, I'm Viswa",
  subline: 'I build websites, SEO and automation that grow your business.',
  primaryCta: { label: 'View Projects', href: '#projects' },
  secondaryCta: { label: "Let's Talk", href: '#contact' },
} as const

export const about = {
  heading: 'A one-person studio that ships.',
  // PLACEHOLDER — replace with your own story.
  body: [
    'I started Luno Lab because most small businesses in Madurai were paying for websites that looked fine and did nothing. No enquiries, no tracking, no way to tell whether any of it worked.',
    'So I build the other kind: sites designed around one action, search groundwork that brings the right people, and automation that stops the busywork eating your week.',
  ],
  // PLACEHOLDER — swap in real numbers before launch.
  stats: [
    { value: '4', label: 'Live client sites' },
    { value: '10+', label: 'Tools & platforms' },
    { value: '24h', label: 'Reply window' },
  ],
} as const

export type Service = {
  title: string
  description: string
  /** Inline SVG path data, drawn on a 24x24 grid. */
  icon: string
}

/** Order matters — these map to the four panels in the services clip. */
export const services: Service[] = [
  {
    title: 'Website Development',
    description: 'Custom sites in Next.js and React, built around the enquiry you want.',
    icon: 'M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Zm0 3h18M7 7.5h.01M10 7.5h.01',
  },
  {
    title: 'SEO',
    description: 'Local search, on-page structure and the technical groundwork underneath.',
    icon: 'M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm10 2-4.35-4.35',
  },
  {
    title: 'Automation',
    description: 'Enquiry routing, follow-ups and reporting that run without you.',
    icon: 'M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1m-8.6 8.6-2.1 2.1M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z',
  },
  {
    title: 'Digital Growth',
    description: 'Joining the pieces so the site actually earns what it cost.',
    icon: 'M3 17l6-6 4 4 8-8M21 7v5m0-5h-5',
  },
]

export type Project = {
  title: string
  result: string
  tags: string[]
  image: string
  alt: string
  href: string
}

// PLACEHOLDER — real screenshots live in /public/work. Replace `result`
// with a measured outcome; a description is not a result.
export const projects: Project[] = [
  {
    title: 'Tourglobe',
    result: 'A live consultancy site covering five specialty tourism categories.',
    tags: ['Next.js', 'React', 'Tailwind'],
    image: '/work/tourglobe.jpg',
    alt: 'Tourglobe homepage showing its travel consultancy services',
    href: 'https://tourglobe.in',
  },
  {
    title: 'VisaHub',
    result: 'Doorstep visa guidance across 40+ destinations, with an enquiry flow.',
    tags: ['Next.js', 'React', 'Tailwind'],
    image: '/work/visahub.jpg',
    alt: 'VisaHub homepage showing visa consulting services',
    href: 'https://visa-hub-eight.vercel.app/',
  },
  {
    title: 'Pack & Go Vacation',
    result: 'Tour packages and vehicle rentals with a direct WhatsApp booking path.',
    tags: ['Next.js', 'React', 'Tailwind'],
    image: '/work/packgo.jpg',
    alt: 'Pack and Go Vacation homepage showing holiday packages',
    href: '#',
  },
  {
    title: 'Tev HR Solutions',
    result: 'A recruitment company presence built for employer and candidate trust.',
    tags: ['React', 'Tailwind'],
    image: '/work/tevhr.jpg',
    alt: 'Tev HR Solutions homepage showing recruitment services',
    href: '#',
  },
]

export type Testimonial = {
  quote: string
  name: string
  role: string
  company: string
  avatar: string
}

// PLACEHOLDER — every one of these is invented and must be replaced with a
// real quote before launch. A fabricated endorsement attributed to a named
// person is the fastest way to lose a client who checks.
export const testimonials: Testimonial[] = [
  {
    quote: 'Placeholder quote — replace with a real client sentence about the work and what changed.',
    name: 'Client name',
    role: 'Role',
    company: 'Company',
    avatar: '/avatars/placeholder.svg',
  },
  {
    quote: 'Placeholder quote — replace with a real client sentence about the work and what changed.',
    name: 'Client name',
    role: 'Role',
    company: 'Company',
    avatar: '/avatars/placeholder.svg',
  },
  {
    quote: 'Placeholder quote — replace with a real client sentence about the work and what changed.',
    name: 'Client name',
    role: 'Role',
    company: 'Company',
    avatar: '/avatars/placeholder.svg',
  },
]

export const contact = {
  heading: "Got an idea? Let's build it.",
  body: 'Tell me what you are trying to achieve and I will tell you what would actually move the needle. Direct reply within 24 hours.',
} as const

export const footer = {
  line: 'Built through many late nights. See you at sunrise.',
} as const
