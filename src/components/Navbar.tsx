import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { prefersReducedMotion } from '../lib/reducedMotion'
import { EASE } from '../lib/motion'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

const SECTION_IDS = ['hero', ...links.map((l) => l.href.slice(1))]

const reduce = prefersReducedMotion

function Navbar() {
  // Transparent over the hero, then a blurred fill once the page scrolls.
  const [scrolled, setScrolled] = useState(false)
  // Full-screen mobile menu open state (desktop shows an inline link row).
  const [open, setOpen] = useState(false)
  // Which section is centred in the viewport — drives the sliding underline.
  const [activeId, setActiveId] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scrollspy: whichever section crosses a thin band near viewport-centre
  // becomes active. Native IntersectionObserver — no scroll library needed.
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    )
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // Close the mobile menu on Escape, and lock background scroll while open.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        solid
          ? 'border-line bg-white/90 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="relative z-10 mx-auto flex max-w-3xl items-center justify-between px-6 py-3">
        <a
          href="#hero"
          onClick={() => setOpen(false)}
          className="font-heading text-lg font-bold tracking-tight text-ink"
        >
          Viswa<span className="text-accent">.</span>
        </a>

        {/* Desktop: inline link row with a sliding active-section underline */}
        <ul className="hidden gap-x-8 text-xs font-semibold tracking-[0.15em] text-muted uppercase md:flex">
          {links.map((link) => {
            const isActive = activeId === link.href.slice(1)
            return (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  className={`inline-flex min-h-11 items-center pb-1 transition-colors ${
                    isActive ? 'text-ink' : 'hover:text-accent'
                  }`}
                >
                  {link.label}
                </a>
                {isActive && (
                  <motion.span
                    layoutId={reduce ? undefined : 'nav-underline'}
                    className="absolute right-0 bottom-0 left-0 h-0.5 bg-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </li>
            )
          })}
        </ul>

        {/* Mobile: hamburger toggle (44x44 tap target, inline SVG — no icon lib) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="inline-flex h-11 w-11 items-center justify-center text-ink md:hidden"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
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

      {/* Mobile: full-screen bold-type menu, matching the rest of the site */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? undefined : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-0 flex flex-col justify-center bg-white px-8 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={reduce ? undefined : { opacity: 0, y: 16 }}
                  animate={reduce ? undefined : { opacity: 1, y: 0 }}
                  transition={
                    reduce
                      ? undefined
                      : { delay: 0.05 * i, duration: 0.35, ease: EASE }
                  }
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-4 py-2 font-heading text-4xl font-bold text-ink transition-colors hover:text-accent"
                  >
                    <span className="text-base font-medium text-accent">
                      0{i + 1}
                    </span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
