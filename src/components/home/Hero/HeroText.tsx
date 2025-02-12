'use client'
import { motion } from 'framer-motion'

import AnimationFadeIn from '../../animation/AnimationFadeIn'
import CallForActionButtons from '../../CallForActionButtons'

export default function HeroText() {
  return (
    <AnimationFadeIn>
      <p className="mb-4 text-xl text-secondary md:mb-6 md:text-3xl">
        Hi, I&apos;m Andrej 👋🏻
      </p>
      <p className="text-5xl font-extrabold tracking-wider text-primary max-[325px]:text-4xl md:text-7xl 2xl:text-8xl">
        Software
      </p>
      <motion.p
        initial={{
          rotateX: 0,
        }}
        animate={{
          rotateX: 360,
          color: ['#24262F', '#6E06F2', '#24262F'],
        }}
        transition={{
          delay: 2,
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
          repeatDelay: 3,
        }}
        className="mb-4 text-5xl font-extrabold tracking-wider text-primary max-[325px]:text-4xl md:mb-6 md:text-7xl 2xl:text-8xl"
      >
        Developer
      </motion.p>
      <p className="mb-4 text-xl text-secondary md:mb-6 md:text-3xl lg:max-w-[80%]">
        I&apos;m a software developer based in Portugal, eager to contribute to
        your team in delivering innovative solutions that exceed expectations.
      </p>
      <CallForActionButtons />
    </AnimationFadeIn>
  )
}
