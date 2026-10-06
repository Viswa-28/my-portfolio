import { industries } from '@/content/home'

/**
 * Industries marquee. Pure CSS: the list is rendered twice and the track
 * slides by -50% on loop. The copy is aria-hidden so screen readers hear
 * the list once. Stops (and wraps) under prefers-reduced-motion.
 */
export default function Marquee() {
  const row = (hidden: boolean) => (
    <ul className="marquee-row flex shrink-0 items-center gap-8 pr-8" aria-hidden={hidden || undefined}>
      {industries.map((name) => (
        <li key={name} className="flex items-center gap-8 font-heading text-2xl font-extrabold whitespace-nowrap sm:text-3xl">
          {name}
          <span className="text-lime" aria-hidden="true">✦</span>
        </li>
      ))}
    </ul>
  )

  return (
    <div className="-rotate-1 border-y-2 border-ink bg-ink py-4 text-paper" aria-label="Businesses we work with">
      <div className="marquee flex overflow-hidden">
        <div className="marquee-track flex">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </div>
  )
}
