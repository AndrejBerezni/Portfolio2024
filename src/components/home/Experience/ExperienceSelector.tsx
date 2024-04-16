import clsx from 'clsx'

import { experience } from '@/lib/experience'

export default function ExperienceSelector({
  showExperience,
  currentSlide,
}: {
  showExperience: (exp: number) => void
  currentSlide: number
}) {
  return (
    <ul className="hidden flex-col md:flex">
      {experience.map((exp, index) => (
        <li
          key={`${exp.position}-exp-selector-item`}
          onClick={() => showExperience(index)}
          className={clsx(
            'border-l-4 px-4 py-4 text-2xl font-semibold tracking-wide hover:cursor-pointer',
            {
              'border-l-brand text-brand': currentSlide === index,
            }
          )}
        >
          {exp.company}
        </li>
      ))}
    </ul>
  )
}
