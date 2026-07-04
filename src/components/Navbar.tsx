const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4">
        <a href="#hero" className="font-semibold text-gray-900">
          Viswa
        </a>
        <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-600">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-gray-900">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
