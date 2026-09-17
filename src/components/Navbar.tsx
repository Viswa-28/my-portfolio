import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import Logo from './Logo'
import { prefersReducedMotion } from '../lib/reducedMotion'
import { EASE } from '../lib/motion'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#process', label: 'Process' },
  { href: '#story', label: 'Behind the Work' },
]

const SECTION_IDS = links.map((l) => l.href.slice(1))

const reduce = prefersReducedMotion

function Navbar() {
  // Transparent over the hero, then a blurred fill once the page scrolls.
  const [scrolled, setScrolled] = useState(false)
  // Full-screen mobile menu open state (desktop shows the inline pill row).
  const [open, setOpen] = useState(false)
  // Which section is centred in the viewport — drives the active pill.
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
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
          solid
            ? 'border-line bg-background/90 backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <nav className="relative z-10 mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 py-3 lg:px-12">
          <a
            href="#hero"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5"
          >
            <Logo className="h-9 w-9 shrink-0" />
            <span className="flex flex-col leading-none">
              <span className="font-heading text-lg font-extrabold tracking-tight text-accent">
                VISWA
              </span>
              <span className="mt-0.5 hidden text-[10px] font-semibold tracking-[0.18em] text-muted uppercase sm:inline">
                Dev &amp; Digital Growth
              </span>
            </span>
          </a>

          {/* Desktop: floating pill row with an animated active indicator. */}
          <ul className="hidden items-center gap-1 rounded-full border border-line bg-card/90 p-1 backdrop-blur-md xl:flex">
            {links.map((link) => {
              const isActive = activeId === link.href.slice(1)
              return (
                <li key={link.href} className="relative">
                  <a
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative z-10 inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-accent'
                        : 'text-muted hover:text-ink'
                    }`}
                  >
                    {link.label}
                  </a>
                  {isActive && (
                    <motion.span
                      layoutId={reduce ? undefined : 'nav-pill'}
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full border border-accent/30 bg-surface"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden min-h-11 items-center rounded-full bg-accent px-5 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover sm:inline-flex"
            >
              Let's Work Together
            </a>

            {/* Mobile: hamburger / close toggle (44x44 tap target). */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="inline-flex h-11 w-11 items-center justify-center text-ink xl:hidden"
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
          </div>
        </nav>
      </header>

      {/* Full-screen mobile menu — rendered OUTSIDE <header> on purpose: the
          header's backdrop-blur is a containing block for fixed elements, so a
          menu nested inside it would collapse to the header's height instead of
          covering the viewport. As a sibling, `fixed inset-0` fills the screen.
          z-40 sits just under the header's z-50 so the logo + X stay on top. */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 flex flex-col justify-center bg-background px-8 xl:hidden"
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
                    : { delay: 0.04 * i, duration: 0.3, ease: EASE }
                }
              >
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-4 py-2 font-heading text-3xl font-extrabold text-ink transition-colors hover:text-accent"
                >
                  <span className="text-base font-medium text-accent">
                    0{i + 1}
                  </span>
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-semibold text-on-accent transition-colors hover:bg-accent-hover"
          >
            Let's Work Together
          </a>
        </div>
      )}
    </>
  )
}

export default Navbar
