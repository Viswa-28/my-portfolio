import { useEffect, useState } from 'react'
import { SITE, whatsappLink } from '../lib/site'

const MESSAGE = `Hi LunoLab, I'd like to talk about a project.`

// Persistent WhatsApp tap target. Instagram ad traffic arrives on a phone,
// cold, with seconds of patience — a form is the wrong ask at that moment.
// This is the same pattern we build for clients (Pack & Go, Tourglobe), so
// not having one was a visible gap.
function WhatsAppFab() {
  // The contact section has its own WhatsApp button, so the floating one
  // would sit on top of a duplicate of itself. Step aside while it's on screen.
  const [overContact, setOverContact] = useState(false)

  useEffect(() => {
    const contact = document.getElementById('contact')
    if (!contact) return
    const observer = new IntersectionObserver(
      ([entry]) => setOverContact(entry.isIntersecting),
      { rootMargin: '0px 0px -25% 0px' }
    )
    observer.observe(contact)
    return () => observer.disconnect()
  }, [])

  const href = whatsappLink(MESSAGE)
  if (!href) return null

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Message ${SITE.name} on WhatsApp`}
      className={`group fixed right-4 bottom-4 z-40 inline-flex min-h-12 items-center gap-2 rounded-full bg-accent pr-5 pl-4 font-semibold text-on-accent shadow-lg shadow-black/40 transition-all duration-300 hover:bg-accent-hover sm:right-6 sm:bottom-6 ${
        overContact
          ? 'pointer-events-none translate-y-4 opacity-0'
          : 'translate-y-0 opacity-100'
      }`}
      tabIndex={overContact ? -1 : undefined}
      aria-hidden={overContact || undefined}
    >
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="currentColor"
        aria-hidden="true"
        className="shrink-0"
      >
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.07-.13-.27-.2-.57-.35z" />
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.25 8.24z" />
      </svg>
      <span className="text-sm">WhatsApp</span>
    </a>
  )
}

export default WhatsAppFab
