import SectionHeading from './SectionHeading'

function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-line py-16 sm:py-20"
    >
      <SectionHeading>Contact</SectionHeading>
      <ul className="mt-5 space-y-2 text-body">
        <li>
          <span className="font-medium text-ink">Email: </span>
          <a
            href="mailto:viswaa288@gmail.com"
            className="font-medium text-accent hover:underline"
          >
            viswaa288@gmail.com
          </a>
        </li>
        <li>
          <span className="font-medium text-ink">LinkedIn: </span>
          <a
            href="https://www.linkedin.com/in/viswaa28/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent hover:underline"
          >
            linkedin.com/in/viswaa28
          </a>
        </li>
        <li>
          <span className="font-medium text-ink">GitHub: </span>
          <span className="text-muted">[ your GitHub URL, if you have one ]</span>
        </li>
      </ul>
    </section>
  )
}

export default Contact
