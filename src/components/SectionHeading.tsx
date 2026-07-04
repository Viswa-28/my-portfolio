type SectionHeadingProps = {
  children: string
}

// Shared heading for every section: one type treatment + a small accent bar
// so the sections read as one system instead of drifting per component.
function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="flex items-center gap-3 font-heading text-2xl font-bold tracking-tight text-ink sm:text-3xl">
      <span aria-hidden="true" className="h-6 w-1 rounded-full bg-accent" />
      {children}
    </h2>
  )
}

export default SectionHeading
