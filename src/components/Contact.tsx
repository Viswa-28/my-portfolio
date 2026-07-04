function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-gray-200 py-16"
    >
      <h2 className="text-2xl font-semibold text-gray-900">Contact</h2>
      <ul className="mt-4 space-y-2 text-gray-700">
        <li>
          <span className="font-medium text-gray-900">Email: </span>
          <a
            href="mailto:viswaa288@gmail.com"
            className="text-blue-600 hover:underline"
          >
            viswaa288@gmail.com
          </a>
        </li>
        <li>
          <span className="font-medium text-gray-900">LinkedIn: </span>
          <a
            href="https://www.linkedin.com/in/viswaa28/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            linkedin.com/in/viswaa28
          </a>
        </li>
        <li>
          <span className="font-medium text-gray-900">GitHub: </span>
          <span className="text-gray-500">[ your GitHub URL, if you have one ]</span>
        </li>
      </ul>
    </section>
  )
}

export default Contact
