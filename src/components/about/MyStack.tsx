'use client'
import { motion } from 'framer-motion'
import { LuStar } from 'react-icons/lu'

import { skills } from '@/lib/skills'

import AnimationFadeIn from '../animation/AnimationFadeIn'

export default function MyStack() {
  return (
    <AnimationFadeIn styles="my-12 w-full md:my-16">
      <h3 className="my-4 text-lg font-extrabold capitalize md:text-3xl 2xl:text-4xl">
        My Stack<span className="text-brand">.</span>
      </h3>
      <div className="flex h-[200px] flex-col justify-around overflow-x-hidden rounded-2xl bg-gray-400 py-4 shadow-md md:h-[400px]">
        <ul className="flex items-center gap-8">
          {skills.slice(0, Math.floor(skills.length / 3)).map((skill) => (
            <motion.li
              initial={{
                x: -400,
              }}
              animate={{
                x: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: 'mirror',
              }}
              key={`${skill}-mystack-item`}
              className="flex items-center gap-8 text-nowrap tracking-wide"
            >
              <div className="text-2xl text-brand md:text-5xl">
                <LuStar />
              </div>
              <p className="rounded-full bg-primary px-4 py-1 text-lg text-gray-400 md:px-6 md:py-2 md:text-3xl">
                {skill}
              </p>
            </motion.li>
          ))}
        </ul>
        <ul className="flex items-center gap-8">
          {skills
            .slice(
              Math.floor(skills.length / 3),
              Math.floor(skills.length / 3) * 2
            )
            .map((skill) => (
              <motion.li
                initial={{
                  x: 0,
                }}
                animate={{
                  x: -400,
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: 'mirror',
                }}
                key={`${skill}-mystack-item`}
                className="flex items-center gap-8 text-nowrap tracking-wide"
              >
                <div className="text-2xl text-brand md:text-5xl">
                  <LuStar />
                </div>
                <p className="rounded-full bg-primary px-4 py-1 text-lg text-gray-400 md:px-6 md:py-2 md:text-3xl">
                  {skill}
                </p>
              </motion.li>
            ))}
        </ul>
        <ul className="flex items-center gap-8">
          {skills
            .slice(Math.floor(skills.length / 3) * 2, skills.length)
            .map((skill) => (
              <motion.li
                initial={{
                  x: -400,
                }}
                animate={{
                  x: 0,
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: 'mirror',
                }}
                key={`${skill}-mystack-item`}
                className="flex items-center gap-8 text-nowrap tracking-wide"
              >
                <div className="text-2xl text-brand md:text-5xl">
                  <LuStar />
                </div>
                <p className="rounded-full bg-primary px-4 py-1 text-lg text-gray-400 md:px-6 md:py-2 md:text-3xl">
                  {skill}
                </p>
              </motion.li>
            ))}
        </ul>
      </div>
    </AnimationFadeIn>
  )
}
