'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function PageLink({
  link,
  onClick,
}: {
  link: {
    name: string
    address: string
  }
  onClick?: () => void
}) {
  const pathname = usePathname()
  return (
    <li onClick={onClick}>
      <Link
        href={link.address}
        className={clsx('text-nowrap font-semibold capitalize tracking-wide', {
          'text-brand': pathname.startsWith(link.address),
          'text-secondary duration-200  hover:text-brand':
            pathname !== link.address,
        })}
      >
        {link.name}
      </Link>
    </li>
  )
}
