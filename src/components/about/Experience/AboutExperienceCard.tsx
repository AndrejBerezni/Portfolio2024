'use client'
import { useRef } from 'react'

import { useScroll, motion, useTransform } from 'framer-motion'
import { FaCheck } from 'react-icons/fa6'

import { IExperience } from '@/lib/interfaces'

export default function AboutExperienceCard({
  experience,
  order,
}: {
  experience: IExperience
  order: number
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div className="grid w-full grid-cols-5 gap-8 md:min-h-[400px]">
      <div className="col-span-1 flex h-full w-1/3 flex-1 flex-col items-center">
        <h4 className="text-3xl font-extrabold md:text-6xl">
          {order.toString().padStart(2, '0')}
        </h4>
        {order !== 1 && (
          <motion.div
            initial={{
              scaleY: 0,
            }}
            style={{ scaleY }}
            className="h-full w-[2px] origin-top bg-brand md:w-[5px]"
          ></motion.div>
        )}
      </div>
      <div className="relative col-span-4 flex h-full flex-col">
        <h4 className="text-sm text-brand md:text-lg">{experience.position}</h4>
        <h4 className="mb-8 text-xl font-extrabold md:text-4xl">
          {experience.company}
        </h4>
        <ul className="mb-12">
          {experience.description.map((desc, index) => (
            <motion.li
              initial={{
                y: 50,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                type: 'spring',
                delay: index * 0.2,
                duration: 1,
              }}
              key={`${desc}-about-exp-desc`}
              className="mb-4 flex gap-4 text-secondary md:text-xl"
            >
              <div>
                <FaCheck className="text-xl text-brand md:text-2xl" />
              </div>
              <p>{desc}</p>
            </motion.li>
          ))}
        </ul>
        {/* empty div that takes remainder of space, which triggers progress line animation when enters viewport */}
        <div className="absolute bottom-0 h-1/2 w-full" ref={ref}></div>
      </div>
    </div>
  )
}
