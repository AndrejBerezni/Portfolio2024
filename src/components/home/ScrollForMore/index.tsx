'use client'
import { useState, useEffect, useMemo } from 'react'

import { motion } from 'framer-motion'
import { SlArrowDown } from 'react-icons/sl'

export default function ScrollForMore() {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  //using useMemo in order not to have this array recreated on every render
  const elements = useMemo(
    () => Array.from({ length: 8 }, (value, index) => index),
    []
  )

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    // calling this function to have component visible on first render, otherwise it would be visible only on first scroll
    toggleVisibility()

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }
  }
  return (
    <>
      {isVisible && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.2,
          }}
          className="fixed bottom-6 right-6 lg:right-1/2"
        >
          {elements.map((el) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 0,
              }}
              animate={{
                opacity: [(el + 1) * 0.125, 0],
                y: 10,
              }}
              transition={{
                delay: el * 0.1,
                duration: 0.8,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0.8,
              }}
              className={`-mt-3 text-xl text-brand md:text-3xl`}
              key={`scroll-for-more-el-${el}`}
            >
              <SlArrowDown />
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  )
}
