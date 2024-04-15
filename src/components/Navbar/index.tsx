'use client'
import { useState } from 'react'

import Link from 'next/link'

import GetInTouchLink from './GetInTouchLink'
import MenuToggler from './MenuToggler'
import NavbarLink from './NavbarLink'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

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
      <Link
        href="/"
        className="text-2xl font-semibold tracking-wider text-primary"
      >
        Andrej<span className="text-brand">B.</span>
      </Link>

      {/* On wide screens, we have links displayed */}
      <ul className="hidden gap-8 md:flex">
        {links.map((link) => (
          <NavbarLink key={`${link.name}-navbar-link`} link={link} />
        ))}
      </ul>
      <GetInTouchLink />

      {/* On small screens we have toggler for drop down menu */}
      <MenuToggler
        toggle={() => setMenuOpen((prev) => !prev)}
        open={menuOpen}
      />
    </menu>
  )
}
