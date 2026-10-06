'use client'

import { useEffect, useRef, useState } from 'react'
import { nav, site } from '@/content/site'

/**
 * Sticky minimal nav. The mobile panel is a focus trap that closes on Esc
 * and on backdrop click, and locks background scroll while open.
 */
export default function Nav() {
  const [open, setOpen] = useState(false)
  // Which logo reads against whatever is currently under the bar.
  const [variant, setVariant] = useState<'light' | 'dark'>('light')
  const panelRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  // Sections declare `data-nav-theme="light-bg"` when their background is
  // pale. Whichever one is under the bar wins. A thin band at the very top
  // of the viewport is the observation target, so the swap happens exactly
  // as the section passes beneath the logo.
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-nav-theme]')
    if (sections.length === 0) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          const light = e.target.getAttribute('data-nav-theme') === 'light-bg'
          setVariant(light ? 'dark' : 'light')
        }
      },
      { rootMargin: '0px 0px -92% 0px' }
    )
    sections.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const panel = panelRef.current
    if (!panel) return

    const focusable = panel.querySelectorAll<HTMLElement>('a, button')
    focusable[0]?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
        return
      }
      if (e.key !== 'Tab' || focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-10"
      >
        <a href="#top" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/brand/luno-${variant}.svg`}
            alt={`${site.studio} home`}
            width={132}
            height={28}
            className="h-7 w-auto"
          />
        </a>

        <ul
          className={`hidden items-center gap-8 md:flex ${
            variant === 'dark' ? 'text-night' : 'text-light'
          }`}
        >
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium opacity-75 transition-opacity hover:opacity-100"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className={`inline-flex h-11 w-11 items-center justify-center md:hidden ${
            variant === 'dark' ? 'text-night' : 'text-light'
          }`}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div
          id="mobile-nav"
          ref={panelRef}
          className="fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-night px-8 md:hidden"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-3 font-heading text-3xl font-bold text-light"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
