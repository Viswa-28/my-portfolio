import { site } from '@/content/site'

/** Builds a wa.me link with a pre-filled message (defaults to the site-wide one). */
export function whatsappLink(message: string = site.whatsappMessage): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}
