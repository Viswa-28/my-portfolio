import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
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
    <div className="min-h-screen bg-white text-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-line px-6 py-8 text-center text-sm text-muted">
        © 2026 Viswa · Business &amp; Data Analyst
      </footer>
    </div>
  )
}

export default App
