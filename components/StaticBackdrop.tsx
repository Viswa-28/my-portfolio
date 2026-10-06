type Props = {
  id?: string
  /** Section background, shown behind the (optional) still. */
  color: string
  /** Optional still. Omit for a flat colour section. */
  image?: { src: string; alt: string; width: number; height: number }
  children: React.ReactNode
  className?: string
}

/**
 * Fallback for sections with no clip (currently `projects`).
 *
 * Deliberately not a pinned ScrollSequence: with nothing to scrub, pinning
 * would just cost the visitor empty scroll. It is a normal-flow section with
 * a very slow CSS zoom on the still — transform only, no layout, so it is
 * free to animate and stops automatically under prefers-reduced-motion.
 */
export default function StaticBackdrop({
  id,
  color,
  image,
  children,
  className = '',
}: Props) {
  return (
    <section
      id={id}
      className={`relative isolate overflow-hidden ${className}`}
      style={{ backgroundColor: color }}
    >
      {image && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image.src}
            alt=""
            aria-hidden="true"
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
            className="backdrop-zoom absolute inset-0 -z-10 h-full w-full object-cover opacity-35"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-r from-night/85 via-night/55 to-transparent"
          />
        </>
      )}
      {children}
    </section>
  )
}
