import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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

gsap.registerPlugin(ScrollTrigger)

function App() {
  // Lenis smooth scroll, wired to drive ScrollTrigger. Skipped entirely for
  // reduced-motion users — they get native scroll.
  useEffect(() => {
    if (prefersReducedMotion) return

    const lenis = new Lenis()
    lenis.on('scroll', ScrollTrigger.update)

    const onTick = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(onTick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(onTick)
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
