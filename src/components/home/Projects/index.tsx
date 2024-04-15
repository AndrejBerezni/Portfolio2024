import AnimationFadeIn from '@/components/animation/AnimationFadeIn'
import ProjectCard from '@/components/ProjectCard'
import SectionTitle from '@/components/SectionTitle'
import { projects } from '@/lib/projects'

export default function HomeProjectsSection() {
  return (
    <section className="my-8">
      <SectionTitle title="projects" />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <AnimationFadeIn key={`${project.name}-home-project-card`}>
            <ProjectCard project={project} />
          </AnimationFadeIn>
        ))}
      </div>
    </section>
  )
}
