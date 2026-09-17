type SectionHeadingProps = {
  index: string
  children: string
}

// Small eyebrow label, not a visual anchor — the section's own content
// (a huge statement, a huge project title, ...) carries the weight instead.
function SectionHeading({ index, children }: SectionHeadingProps) {
  return (
    <h2 className="font-heading text-xs font-semibold tracking-[0.2em] text-muted uppercase">
      <span aria-hidden="true" className="text-accent">
        // {index}.
      </span>{' '}
      {children}
    </h2>
  )
}

export default SectionHeading
