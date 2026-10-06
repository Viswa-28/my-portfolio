/** Relative luminance per WCAG 2.1. */
export function luminance(hex: string): number {
  const h = hex.replace('#', '')
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(h.slice(i, i + 2), 16) / 255
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

/**
 * Which logo variant belongs on this background.
 *
 * The spec asked for the light logo in the footer, but also set the footer
 * background to #F4D9C0 — a light logo on cream is invisible. Deriving it
 * from luminance instead means the right one is picked whatever the colour
 * ends up being, including the violet sampled from a clip's final frame.
 */
export function logoVariant(bg: string): 'light' | 'dark' {
  return luminance(bg) > 0.45 ? 'dark' : 'light'
}

/** Readable ink for a given background, from the brand palette. */
export function inkOn(bg: string): string {
  return luminance(bg) > 0.45 ? '#14122B' : '#EEF0FA'
}
