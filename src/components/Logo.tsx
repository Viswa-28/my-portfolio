type LogoProps = {
  className?: string
}

// Geometric V monogram intersecting a precision node (PRD §4 brand mark).
// Inline SVG so it inherits the accent token and needs no network request.
function Logo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      role="img"
      aria-label="Viswa"
    >
      <rect
        x="0.75"
        y="0.75"
        width="38.5"
        height="38.5"
        rx="9"
        fill="var(--color-card)"
        stroke="var(--color-accent)"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />
      <path
        d="M11 12.5 20 27.5 29 12.5"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="29" cy="12.5" r="3.25" fill="var(--color-accent-hover)" />
    </svg>
  )
}

export default Logo
