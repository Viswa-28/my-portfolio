import { useSyncExternalStore } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

// Live value, read at module load. Safe for anything that only runs in an
// effect (canvas scrubbing, timers) — those happen after hydration, so there
// is no server/client render to disagree about.
export const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia(QUERY).matches

const subscribe = (onChange: () => void) => {
  const mq = window.matchMedia(QUERY)
  mq.addEventListener('change', onChange)
  return () => mq.removeEventListener('change', onChange)
}

/**
 * Motion preference for anything that changes what gets *rendered*.
 *
 * Pages are prerendered at build time where there is no matchMedia, so the
 * server always takes the non-reduced branch. Reading the module constant
 * during render would disagree with that HTML on a reduced-motion device and
 * React would throw a hydration mismatch. useSyncExternalStore uses the
 * server snapshot for the hydrating render, then re-renders with the truth.
 */
export function useReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false
  )
}
