'use client'
import { useState } from 'react'

import Link from 'next/link'

import { links } from '@/lib/links'

import DropDownMenu from './DropDownMenu'
import GetInTouchLink from './GetInTouchLink'
import MenuToggler from './MenuToggler'
import PageLink from '../PageLink'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  return (
    <menu className="relative flex w-full items-center justify-between text-2xl">
      <Link
        href="/"
        className="text-2xl font-semibold tracking-wider text-primary"
      >
        Andrej<span className="text-brand">B.</span>
      </Link>

      {/* On wide screens, we have links displayed */}
      <ul className="hidden gap-8 md:flex">
        {links.slice(0, 3).map((link) => (
          <PageLink key={`${link.name}-navbar-link`} link={link} />
        ))}
      </ul>
      <GetInTouchLink />

      {/* On small screens we have toggler for drop down menu */}
      <MenuToggler
        toggle={() => setMenuOpen((prev) => !prev)}
        open={menuOpen}
      />
      {menuOpen && <DropDownMenu />}
    </menu>
  )
}
