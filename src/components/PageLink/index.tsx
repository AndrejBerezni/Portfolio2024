'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function PageLink({
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
        className={clsx('text-nowrap font-semibold capitalize tracking-wide', {
          'text-brand': pathname === link.address,
          'text-secondary duration-200  hover:text-brand':
            pathname !== link.address,
        })}
      >
        {link.name}
      </Link>
    </li>
  )
}
