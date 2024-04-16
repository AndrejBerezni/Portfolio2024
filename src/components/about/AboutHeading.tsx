'use client'
import AnimationFadeIn from '../animation/AnimationFadeIn'
export default function AboutHeading() {
  return (
    <AnimationFadeIn>
      <h1 className="mb-2 mt-12 text-4xl font-bold sm:text-7xl md:mb-4 md:mt-24 lg:text-8xl">
        About me<span className="text-brand">.</span>
      </h1>
      <h2 className="border-l-[10px] border-l-brand px-6 py-1 text-lg sm:border-l-[16px] sm:text-xl lg:text-2xl">
        I&apos;m driven by the goal of creating apps that make businesses shine
        and users happy. Each project fuels my passion to bring fresh ideas and
        make a real difference.
      </h2>
    </AnimationFadeIn>
  )
}
