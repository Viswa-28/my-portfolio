/**
 * Single source of truth for the scroll-driven background sequences.
 *
 * `scrollVh` is the pinned scroll length for each section. `frames` must
 * match what scripts/extract-frames.py produced — the generated manifest is
 * the authority at runtime, this is here so the two can be diffed.
 */

export type SequenceName =
  | 'hero'
  | 'about'
  | 'services'
  | 'projects'
  | 'testimonials'
  | 'contact'
  | 'footer'

export type SequenceConfig = {
  /** Pinned scroll distance, in vh. Longer = slower, finer-grained scrub. */
  scrollVh: number
  /**
   * Horizontal focal point used by the cover maths, 0–1.
   * The subject sits right of centre in these clips, so cropping to a phone
   * biases right to keep them in shot rather than slicing them in half.
   */
  focalX: number
  focalY: number
}

export const SEQUENCES: Record<SequenceName, SequenceConfig> = {
  hero: { scrollVh: 250, focalX: 0.7, focalY: 0.5 },
  about: { scrollVh: 200, focalX: 0.7, focalY: 0.5 },
  services: { scrollVh: 250, focalX: 0.7, focalY: 0.5 },
  projects: { scrollVh: 150, focalX: 0.7, focalY: 0.5 },
  testimonials: { scrollVh: 150, focalX: 0.7, focalY: 0.5 },
  contact: { scrollVh: 150, focalX: 0.7, focalY: 0.5 },
  footer: { scrollVh: 100, focalX: 0.5, focalY: 0.5 },
}

/**
 * Where the services cards appear within the services scrub, as a fraction
 * of that section's progress — matched to the panels in the clip.
 */
export const SERVICE_CARD_STOPS = [0.25, 0.45, 0.65, 0.85] as const

/** Decoded-bitmap cache size per sequence. Each 1280x720 bitmap is ~3.7 MB
 *  of GPU-backed memory, so this is the main memory lever. */
export const BITMAP_CACHE_SIZE = 40

/** A section starts fetching when it is within this many viewports. */
export const PRELOAD_VIEWPORTS = 1.5
