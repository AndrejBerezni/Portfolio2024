import Link from 'next/link'

import { inter } from '@/app/fonts'
export default function CallForActionButtons() {
  return (
    <div className="flex items-center gap-4 text-lg font-semibold max-[375px]:text-base xl:text-xl">
      <Link
        href="/contact"
        className={`${inter.className} rounded-xl bg-brand px-4 py-2 text-center text-white duration-200 hover:opacity-80 xl:px-5 xl:py-3`}
      >
        Get In Touch
      </Link>
      <Link
        href="/projects/1"
        className={`${inter.className} rounded-xl border-[1px] border-primary bg-background px-4 py-2 text-center text-primary duration-200 hover:bg-primary hover:text-white xl:px-5 xl:py-3`}
      >
        Browse Projects
      </Link>
    </div>
  )
}
