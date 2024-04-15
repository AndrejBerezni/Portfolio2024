import Link from 'next/link'

import GetInTouchLink from './GetInTouchLink'
import NavbarLink from './NavbarLink'

export default function Navbar() {
  const links = [
    {
      name: 'home',
      address: '/',
    },
    {
      name: 'projects',
      address: '/projects',
    },
    {
      name: 'about',
      address: '/about',
    },
  ]

  return (
    <menu className="flex w-full items-center justify-between text-2xl">
      <Link href="/" className="text-2xl font-semibold tracking-wider">
        Andrej<span className="text-brand">B.</span>
      </Link>
      <ul className="hidden gap-8 md:flex">
        {links.map((link) => (
          <NavbarLink key={`${link.name}-navbar-link`} link={link} />
        ))}
      </ul>
      <GetInTouchLink />
    </menu>
  )
}
