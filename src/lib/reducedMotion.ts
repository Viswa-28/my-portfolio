// Single source of truth for the user's motion preference.
// Read once, at module load (top level), so every animation in the app —
// Lenis, GSAP, and Motion — gates on the same value. When true, callers
// skip animation entirely and render content immediately.
export const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
