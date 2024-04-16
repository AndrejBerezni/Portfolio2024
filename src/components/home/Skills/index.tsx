import SectionTitle from '@/components/SectionTitle'
import { skills } from '@/lib/skills'

import SkillBadge from './SkillBadge'

export default function HomeSkillsSection() {
  return (
    <section className="my-24 md:my-36">
      <SectionTitle title="skills" />
      <ul className="my-12 flex flex-wrap justify-center gap-4 md:my-16 md:gap-8">
        {skills.map((skill, index) => (
          <SkillBadge
            key={`${skill}-skill-badge`}
            skill={skill}
            delay={index}
          />
        ))}
      </ul>
    </section>
  )
}
