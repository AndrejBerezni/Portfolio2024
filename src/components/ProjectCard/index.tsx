import Image from 'next/image'
import Link from 'next/link'
import { IoMdArrowRoundUp } from 'react-icons/io'

import { IProject } from '@/lib/interfaces'

export default function ProjectCard({
  project,
  link,
}: {
  project: IProject
  link: string
}) {
  return (
    <article>
      <div className="group my-4 flex items-center justify-center rounded-md border-4 border-gray-400 bg-gray-400 p-4 duration-500 hover:border-brand hover:shadow-md md:p-8">
        <Image
          src={project.mainImage}
          alt="project image"
          width={1200}
          height={625}
          className="group-hover:translateY-2 rounded-lg duration-500"
        />
      </div>
      <Link href={link} className="group flex w-fit items-center gap-4">
        <h3 className="mb-2 text-xl font-bold tracking-wide md:text-3xl xl:text-5xl">
          {project.name}
        </h3>
        <div className="rounded-full border-4 border-brand text-brand duration-200 group-hover:bg-brand group-hover:text-white">
          <IoMdArrowRoundUp className="rotate-45 text-xl md:text-3xl xl:text-4xl" />
        </div>
      </Link>

      <p className="text-lg text-secondary md:text-xl xl:text-2xl">
        {project.shortDescription}
      </p>
    </article>
  )
}
