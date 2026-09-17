import tevhr from '../assets/work/tevhr.jpg'
import tourglobe from '../assets/work/tourglobe.jpg'
import packgo from '../assets/work/packgo.jpg'
import visahub from '../assets/work/visahub.jpg'

export type Project = {
  title: string
  tagline: string
  problem: string
  whatIDid: string
  result: string
  link: string
  /** Shown on the card; the live URL is the proof. */
  linkLabel: string
  image: string
  tags: string[]
  categories: string[]
}

// Four shipped, publicly reachable sites. Pack & Go and VisaHub are still on
// their Vercel preview URLs pending domain binding.
export const projects: Project[] = [
  {
    title: 'Tourglobe',
    tagline: 'Premium Tourism Consultancy',
    problem:
      'A premium tourism consultancy needed a professional web presence to showcase its specialty travel categories and tour operations, and to build credibility as a quality-focused alternative to price-driven booking platforms.',
    whatIDid:
      'Designed and built the site from scratch with Next.js, structuring content around its specialty tourism categories (cultural, pilgrimage, culinary, wellness, wildlife) and its outbound, incoming, domestic, and MICE tour operations, plus an enquiry workflow for prospective travellers.',
    result:
      "A live consultancy site presenting the company's full range of services alongside its related brands, Tourindias.com and Vayoaura.com.",
    link: 'https://tourglobe.in',
    linkLabel: 'tourglobe.in',
    image: tourglobe,
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    categories: ['Web Design', 'Web Development', 'Travel & Tourism'],
  },
  {
    title: 'VisaHub',
    tagline: 'Visa Consulting Platform',
    problem:
      'A visa consulting service needed a platform to explain its doorstep visa assistance across 40+ destinations and build trust with first-time travellers and previously rejected applicants.',
    whatIDid:
      'Designed and built the site from scratch with Next.js, structuring content around destination-specific visa guidance, the doorstep consultation offering, and ancillary travel services like flights, hotels, and insurance.',
    result:
      "A live platform presenting the service's destination coverage and application support to prospective applicants across Tamil Nadu.",
    link: 'https://visa-hub-eight.vercel.app/',
    linkLabel: 'visa-hub-eight.vercel.app',
    image: visahub,
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    categories: ['Web Design', 'Web Development', 'Travel & Tourism'],
  },
  {
    title: 'Pack & Go Vacation',
    tagline: 'Travel & Vehicle Rental',
    problem:
      'A Madurai-based travel and vehicle rental crew needed a web presence for its curated South India holiday packages and self-drive rentals, and a path from visitor to WhatsApp enquiry.',
    whatIDid:
      'Designed and built the site from scratch with Next.js, covering pre-designed tour packages, customisable itinerary requests, and car, bike, and SUV rental listings with a direct WhatsApp booking flow.',
    result:
      'A live site presenting the crew’s Goa, Kerala, Tamil Nadu temple, hill-station, and bike-trip packages alongside transparent rental rates.',
    link: 'https://packgo-nine.vercel.app/',
    linkLabel: 'packgo-nine.vercel.app',
    image: packgo,
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    categories: ['Web Design', 'Web Development', 'Travel & Tourism'],
  },
  {
    title: 'Tev HR Solutions',
    tagline: 'HR Services Company',
    problem:
      'A local HR services company needed a professional web presence to showcase talent acquisition, payroll, employee engagement, and training — and to build credibility with potential business clients.',
    whatIDid:
      "Designed and built the company's website from scratch, including a client-facing service overview, a dedicated clients and partners page, and company info pages.",
    result:
      "A live business website showcasing the company's services and partnerships with logistics companies including Rapido, Bluedart, Porter, and Pidge.",
    link: 'https://tevhrsolutions.in',
    linkLabel: 'tevhrsolutions.in',
    image: tevhr,
    tags: ['PHP', 'MySQL', 'JavaScript'],
    categories: ['Web Design', 'Web Development', 'Business Services'],
  },
]

export const ALL = 'All Projects'

// Sector categories, as opposed to the discipline ones.
const SECTORS = ['Travel & Tourism', 'Business Services']

// Pills are derived from the projects themselves, so a filter can never render
// an empty grid or imply work that isn't listed.
export const categories: string[] = [
  ALL,
  ...Array.from(new Set(projects.flatMap((p) => p.categories))),
]

// Counted from the list above rather than written by hand, so the numbers
// cannot drift out of sync when a project is added or removed.
export const workStats: { value: number; suffix: string; label: string }[] = [
  { value: projects.length, suffix: '', label: 'Sites shipped' },
  { value: 100, suffix: '%', label: 'Live today' },
  {
    value: new Set(
      projects.flatMap((p) => p.categories.filter((c) => SECTORS.includes(c)))
    ).size,
    suffix: '',
    label: 'Industries',
  },
  {
    value: projects.filter((p) => p.tags.includes('Next.js')).length,
    suffix: '',
    label: 'Next.js builds',
  },
]
