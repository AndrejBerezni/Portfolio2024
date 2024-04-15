'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavbarLink({
  link,
}: {
  link: {
    name: string
    address: string
  }
}) {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <li>
      <Link
        href={link.address}
        className={clsx('font-semibold capitalize ', {
          'text-brand': pathname === link.address,
          'text-primary duration-200  hover:text-brand':
            pathname !== link.address,
        })}
      >
        {link.name}
      </Link>
    </li>
  )
}