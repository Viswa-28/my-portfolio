import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Capabilities from './components/Capabilities'
import Services from './components/Services'
import Work from './components/Work'
import Process from './components/Process'
import BehindTheWork from './components/BehindTheWork'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { prefersReducedMotion } from './lib/reducedMotion'

function App() {
  // Lenis smooth scroll on a plain rAF loop. This used to run on gsap.ticker,
  // but GSAP + ScrollTrigger were pulled in solely to be that ticker — there
  // was never a tween or a trigger (every scroll reveal is Motion's
  // whileInView), so the dependency was ~30KB gzipped of pure overhead.
  // Skipped entirely for reduced-motion users — they get native scroll.
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

  return (
    <div className="min-h-screen bg-background text-body">
      <Navbar />
      <main>
        <Hero />
        <Capabilities />
        <Services />
        <Work />
        <Process />
        <BehindTheWork />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
