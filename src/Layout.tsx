import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'
import { prefersReducedMotion } from './lib/reducedMotion'

// Shared chrome for every route. Lenis smooth scroll on a plain rAF loop —
// this used to run on gsap.ticker, but GSAP + ScrollTrigger were pulled in
// solely to be that ticker (every scroll reveal is Motion's whileInView), so
// the dependency was ~30KB gzipped of pure overhead. Skipped entirely for
// reduced-motion users, who get native scroll.
function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (prefersReducedMotion) return

    const lenis = new Lenis()
    let frame = 0
    const loop = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(loop)
    }
    frame = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])

  // Client-side navigation keeps the old scroll offset, so a route change
  // would otherwise drop you mid-page on the new route.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen bg-background text-body">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}

export default Layout
