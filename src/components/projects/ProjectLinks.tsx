import Link from 'next/link'
import { LuGithub } from 'react-icons/lu'
import { MdComputer } from 'react-icons/md'

import AnimationFadeIn from '../animation/AnimationFadeIn'

export default function ProjectLinks({
  web,
  github,
}: {
  web: string
  github: string
}) {
  return (
    <AnimationFadeIn styles="flex gap-4 md:gap-8 items-center">
      <Link
        href={web}
        target="_blank"
        className="group flex items-center justify-between gap-4 text-xl font-semibold duration-200 hover:text-brand md:text-3xl"
      >
        <div className="text-2xl duration-700 group-hover:rotate-[-360deg] md:text-5xl">
          <MdComputer />
        </div>
        <p className="duration-500 group-hover:-translate-y-1">Visit page</p>
      </Link>
      <p className="text-3xl md:text-5xl">|</p>
      <Link
        href={github}
        target="_blank"
        className="group flex items-center justify-between gap-4 text-xl font-semibold duration-200 hover:text-brand md:text-3xl"
      >
        <div className="text-2xl duration-700 group-hover:rotate-[360deg] md:text-5xl">
          <LuGithub />
        </div>
        <p className="duration-500 group-hover:-translate-y-1">View code</p>
      </Link>
    </AnimationFadeIn>
  )
}
