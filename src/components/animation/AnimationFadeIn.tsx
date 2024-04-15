'use client'
import { motion } from 'framer-motion'
export default function AnimationFadeIn({
  children,
  styles,
}: {
  children: React.ReactNode
  styles?: string
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 2,
        type: 'spring',
      }}
      viewport={{
        once: true,
      }}
      className={styles}
    >
      {children}
    </motion.div>
  )
}
