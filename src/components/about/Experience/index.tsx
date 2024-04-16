import SectionTitle from '@/components/SectionTitle'
import { experience } from '@/lib/experience'

import AboutExperienceCard from './AboutExperienceCard'

export default function AboutExperienceSection() {
  return (
    <section className="my-24 md:my-36">
      <SectionTitle title="my experience" />
      <div className="mt-12 flex flex-col gap-2 px-4 md:mt-16">
        {experience.map((exp, index) => (
          <AboutExperienceCard
            key={`${exp.position}-about-exp-card`}
            experience={exp}
            order={experience.length - index}
          />
        ))}
      </div>
    </section>
  )
}
