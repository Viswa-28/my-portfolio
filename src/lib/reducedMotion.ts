import { useSyncExternalStore } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

// Live value, read at module load. Safe for anything that only runs in an
// effect (Lenis, canvas scrubbing, timers) — those happen after hydration, so
// there is no server/client render to disagree about.
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
 * The pages are prerendered at build time, where there is no matchMedia, so
 * the server always takes the non-reduced branch. A component that read the
 * module constant during render would therefore disagree with that HTML on a
 * reduced-motion device and React would throw a hydration mismatch.
 *
 * useSyncExternalStore solves exactly this: it uses the server snapshot for
 * the initial (hydrating) render, then re-renders with the real value. So the
 * first paint always matches the prerendered HTML, and reduced-motion users
 * drop out of the animations a tick later.
 */
export function useReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false
  )
}
