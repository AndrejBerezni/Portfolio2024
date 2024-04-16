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
      className={clsx('mb-12 px-2', {
        hidden: currentSlide !== index,
        inline: currentSlide === index,
      })}
    >
      <h3 className="text-xl font-semibold md:text-3xl">
        {experience.position}{' '}
        <span className="text-brand">@ {experience.company}</span>
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
          className="mb-4 flex items-center gap-8 text-xl text-secondary"
        >
          <div>
            <FaCheck className="text-2xl text-brand" />
          </div>
          <p>{desc}</p>
        </motion.div>
      ))}
    </article>
  )
}
