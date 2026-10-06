/**
 * Real client testimonials only. The Testimonials section stays hidden
 * while this list is empty. Example entry:
 *   { quote: '…', name: 'Ramesh K.', business: 'Owner, Ramesh Travels', city: 'Madurai' }
 */

export type Testimonial = {
  quote: string
  name: string
  business: string
  city: string
}

export const testimonials: Testimonial[] = []
