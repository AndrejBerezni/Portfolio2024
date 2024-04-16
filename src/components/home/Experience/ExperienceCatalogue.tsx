'use client'
import { useState } from 'react'

import { experience } from '@/lib/experience'

import ExperienceCard from './ExperienceCard'
import ExperienceCatalogueButtons from './ExperienceCatalogueButtons'
import ExperienceSelector from './ExperienceSelector'
export default function ExperienceCatalogue() {
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  const selectSlide = (exp: number) => {
    exp >= 0 && exp < experience.length
      ? setCurrentSlide(exp)
      : setCurrentSlide(0)
  }

  const changeSlide = (direction: 'right' | 'left') => {
    if (direction === 'right' && currentSlide < experience.length - 1) {
      setCurrentSlide((prev) => prev + 1)
    } else if (direction === 'left' && currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1)
    }
    return
  }

  return (
    <div className="my-12 flex w-full flex-col gap-2 md:flex-row md:gap-24">
      <ExperienceSelector
        showExperience={selectSlide}
        currentSlide={currentSlide}
      />
      {experience.map((exp, index) => (
        <ExperienceCard
          key={`${exp.position}-exp-card`}
          experience={exp}
          currentSlide={currentSlide}
          index={index}
        />
      ))}
      <ExperienceCatalogueButtons
        changeSlide={changeSlide}
        currentSlide={currentSlide}
        maxSlide={experience.length - 1}
      />
    </div>
  )
}
