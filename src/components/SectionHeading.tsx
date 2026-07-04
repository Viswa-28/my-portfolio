type SectionHeadingProps = {
  children: string
}

// Small eyebrow label, not a visual anchor — the section's own content
// (a huge statement, a huge project title, ...) carries the weight instead.
function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="font-heading text-sm font-semibold tracking-[0.3em] text-muted uppercase">
      <span aria-hidden="true" className="text-accent">
        /
      </span>{' '}
      {children}
    </h2>
  )
}

export default SectionHeading
