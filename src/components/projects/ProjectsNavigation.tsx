'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import { projects } from '@/lib/projects'

import AnimationFadeIn from '../animation/AnimationFadeIn'
export default function ProjectsNavigation() {
  const params = useParams()
  return (
    <AnimationFadeIn>
      <ul className="mb-12 mt-16 flex gap-8 md:mb-16 md:mt-24 lg:gap-12">
        {projects.map((project, index) => (
          <li key={`${project.name}-project-navigation-button`}>
            <Link
              href={`/projects/${index + 1}`}
              className={clsx(
                'text-center text-4xl font-extrabold duration-200 md:text-7xl',
                {
                  'text-brand underline': index + 1 === Number(params.project),
                  'text-primary  hover:text-brand':
                    index + 1 !== Number(params.project),
                }
              )}
            >
              {String(index + 1).padStart(2, '0')}
            </Link>
          </li>
        ))}
      </ul>
    </AnimationFadeIn>
  )
}
