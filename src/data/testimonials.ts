// ⚠️ EMPTY ON PURPOSE. <Testimonials /> renders nothing while this is empty,
// so the section simply does not appear on the live site until there are real
// quotes. Never add an invented one — a fabricated endorsement attributed to
// a named person is the fastest way to lose a client who checks.
//
// To go live: add two or more entries. Full name, role and company all matter
// — an anonymous "— happy client" reads as fake and does more harm than good.
export type Testimonial = {
  quote: string
  name: string
  role: string
  company: string
}

export const testimonials: Testimonial[] = []
