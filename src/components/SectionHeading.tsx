type SectionHeadingProps = {
  index: string
  children: string
}

// Small eyebrow label, not a visual anchor — the section's own content
// (a huge statement, a huge project title, ...) carries the weight instead.
// Deliberately a <p>: these read "Philosophy & Capability", "Methodology"
// and so on, which is brand language. The keyword-bearing <h2> lives in the
// section itself, next to this label.
function SectionHeading({ index, children }: SectionHeadingProps) {
  return (
    <p className="font-heading text-xs font-semibold tracking-[0.2em] text-muted uppercase">
      <span aria-hidden="true" className="text-accent">
        // {index}.
      </span>{' '}
      {children}
    </p>
  )
}

export default SectionHeading
