import ProjectParagraph from '@/components/projects/ProjectParagraph'
import SectionTitle from '@/components/SectionTitle'
import { projects } from '@/lib/projects'

export default function ProjectPage({
  params,
}: {
  params: { project: string }
}) {
  const project = projects[Number(params.project) - 1]
  return (
    <section className="my-8 md:my-12">
      <SectionTitle title={project.name} />

      <ProjectParagraph
        img={project.mainImage}
        imgType="desktop"
        title="about"
        text={project.description}
      />
      <ProjectParagraph
        img={project.mobileImages[0]}
        imgType="mobile"
        text={project.description}
      />
      <ProjectParagraph
        img={project.desktopImages[0]}
        imgType="desktop"
        text={project.description}
      />
      <ProjectParagraph
        img={project.mobileImages[1]}
        imgType="mobile"
        title="results"
        text={project.description}
      />
    </section>
  )
}
