'use client'
import { motion } from 'framer-motion'
export default function SkillBadge({
  skill,
  delay,
}: {
  skill: string
  delay: number
}) {
  return (
    <motion.li
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: delay * 0.05,
        type: 'spring',
      }}
      className="inline min-w-[100px] text-nowrap rounded-2xl border-2 border-brand bg-white px-2 py-1 text-center text-sm font-semibold text-brand shadow-md duration-200 hover:cursor-default hover:bg-brand hover:text-white md:px-3 md:py-2 md:text-xl"
    >
      {skill}
    </motion.li>
  )
}
