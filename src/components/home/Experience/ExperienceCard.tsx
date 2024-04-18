'use client'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { FaCheck } from 'react-icons/fa6'

import { IExperience } from '@/lib/interfaces'

export default function ExperienceCard({
  experience,
  currentSlide,
  index,
}: {
  experience: IExperience
  currentSlide: number
  index: number
}) {
  return (
    <article
      className={clsx('px-2 md:mb-12', {
        hidden: currentSlide !== index,
        inline: currentSlide === index,
      })}
    >
      <h3 className="text-xl font-semibold md:text-3xl">
        {experience.position}{' '}
        <span className="text-nowrap text-brand">@ {experience.company}</span>
      </h3>
      <p className="mb-6 text-sm md:text-lg">
        {experience.startDate} - {experience.endDate}
      </p>
      {experience.description.map((desc, index) => (
        <motion.div
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
          key={desc}
          className="mb-4 flex items-center gap-8 text-secondary md:text-xl"
        >
          <div>
            <FaCheck className="text-xl text-brand md:text-2xl" />
          </div>
          <p>{desc}</p>
        </motion.div>
      ))}
    </article>
  )
}
