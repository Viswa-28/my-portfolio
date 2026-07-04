function Hero() {
  return (
    <section
      id="hero"
      className="relative scroll-mt-24 overflow-hidden py-24 text-center sm:py-32"
    >
      {/* Accent dot field, masked to fade behind the text. */}
      <div
        aria-hidden="true"
        className="hero-dots pointer-events-none absolute inset-0 -z-10"
      />
      {/* Centring stays on the parent so the glow holds position when the
          breathing animation is disabled for reduced-motion users. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-16 left-1/2 -z-10 -translate-x-1/2 sm:top-20"
      >
        <div className="hero-glow h-56 w-56 rounded-full bg-accent/20 blur-3xl sm:h-72 sm:w-72" />
      </div>

      <h1 className="font-heading text-5xl font-bold tracking-tight text-ink sm:text-6xl">
        Viswa
      </h1>
      <p className="mt-4 text-lg font-medium text-accent sm:text-xl">
        Business &amp; Data Analyst
      </p>
      <p className="mt-2 text-sm text-muted">
        Developer background · SQL · Excel · Power BI
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href="#projects"
          className="w-full rounded-card bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-accent-hover sm:w-auto"
        >
          View projects
        </a>
        <a
          href="#contact"
          className="w-full rounded-card border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent sm:w-auto"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}

export default Hero
