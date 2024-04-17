'use client'
import AnimationFadeIn from '../animation/AnimationFadeIn'

export default function ProjectsHeading() {
  return (
    <AnimationFadeIn>
      <h1 className="mb-2 mt-12 text-4xl font-bold md:mb-4 md:mt-24 md:text-7xl lg:text-8xl">
        My <span className="text-brand">Best</span> Creations
      </h1>
      <h2 className="border-l-[10px] border-l-brand px-6 py-1 text-lg sm:border-l-[16px] sm:text-xl lg:text-2xl">
        Each project is a canvas for creativity and user-centered design. I aim
        to bring fresh ideas to life, ensuring every app resonates with users
        and makes a real difference.
      </h2>
    </AnimationFadeIn>
  )
}
