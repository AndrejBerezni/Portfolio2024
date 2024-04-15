'use client'
import Link from 'next/link'
import { BsChatTextFill } from 'react-icons/bs'

export default function GetInTouchLink() {
  return (
    <Link
      href="/contact"
      className="relative hidden hover:text-brand md:inline"
    >
      <BsChatTextFill className="peer text-4xl duration-300 hover:scale-110" />
      <p className="absolute left-1/2 top-[120%] -translate-x-1/2 text-nowrap text-lg font-semibold uppercase opacity-0 duration-300 peer-hover:opacity-100">
        Get in touch
      </p>
    </Link>
  )
}
