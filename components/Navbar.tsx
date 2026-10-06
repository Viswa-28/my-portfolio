'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { nav, site } from '@/content/site'
import { whatsappLink } from '@/lib/whatsapp'
import Logo from './Logo'
import { CloseIcon, MenuIcon, WhatsAppIcon } from './icons'

/**
 * Sticky navbar. On mobile the links move into a full-screen menu that
 * traps focus, closes on Esc / link tap, and returns focus to the toggle.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  const close = useCallback(() => {
    setOpen(false)
    toggleRef.current?.focus()
  }, [])

  useEffect(() => {
    if (!open) return
    const panel = panelRef.current
    if (!panel) return

    const focusables = () =>
      Array.from(panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'))
    focusables()[0]?.focus()
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return close()
      if (e.key !== 'Tab') return
      // Wrap focus inside the panel.
      const items = focusables()
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, close])

  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper/95 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="/" aria-label="Luno Lab home" className="rounded-lg">
          <Logo />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          <ul className="flex gap-6 font-semibold">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="underline-offset-4 hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener"
            data-track="whatsapp_click"
            data-track-location="navbar"
            className="btn btn-primary min-h-11 py-2 text-sm"
          >
            {site.navCta}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Open menu"
          className="grid size-12 place-items-center rounded-xl border-2 border-ink bg-white shadow-hard-sm md:hidden"
        >
          <MenuIcon />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          ref={panelRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 flex flex-col bg-paper px-4 pb-8 md:hidden"
        >
          <div className="flex h-16 items-center justify-between border-b-2 border-ink">
            <Logo />
            <button
              type="button"
              onClick={close}
              aria-label="Close menu"
              className="grid size-12 place-items-center rounded-xl border-2 border-ink bg-white shadow-hard-sm"
            >
              <CloseIcon />
            </button>
          </div>
          <ul className="mt-6 flex flex-col gap-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl py-3 font-heading text-3xl font-extrabold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener"
            data-track="whatsapp_click"
            data-track-location="mobile_menu"
            className="btn btn-primary mt-auto w-full text-lg"
          >
            <WhatsAppIcon />
            {site.navCta}
          </a>
        </div>
      )}
    </header>
  )
}
