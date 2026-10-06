import { whatsappLink } from '@/lib/whatsapp'
import { WhatsAppIcon } from './icons'

/** Floating WhatsApp button, bottom-right on every page. */
export default function WhatsAppFab() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener"
      aria-label="Chat with Luno Lab on WhatsApp"
      data-track="whatsapp_click"
      data-track-location="floating_button"
      className="fixed right-4 bottom-4 z-30 grid size-14 place-items-center rounded-full border-2 border-ink bg-wa text-white shadow-hard transition-transform hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none sm:right-6 sm:bottom-6 sm:size-16"
    >
      <WhatsAppIcon className="size-7 sm:size-8" />
    </a>
  )
}
