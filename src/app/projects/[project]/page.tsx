import Image from 'next/image'

import AnimationFadeIn from '@/components/animation/AnimationFadeIn'
import ProjectLinks from '@/components/projects/ProjectLinks'
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
      <div className="mb-16 flex w-full flex-col justify-between md:mb-24 md:flex-row">
        <SectionTitle title={project.name} />{' '}
        <ProjectLinks web={project.pageLink} github={project.ghLink} />
      </div>
      <AnimationFadeIn styles="w-full flex justify-center">
        <Image
          src={project.mainImage}
          width={1200}
          height={625}
          alt={`${project.name}-project-page-main-image`}
          className="h-auto w-full rounded-xl border-2 border-brand shadow-md"
        />
      </AnimationFadeIn>

      <ProjectParagraph
        img={project.mobileImages[0]}
        imgType="mobile"
        title="about"
        text={project.description}
      />
      <ProjectParagraph
        img={project.desktopImages[0]}
        imgType="desktop"
        title="features"
        list={project.features}
      />
      <ProjectParagraph
        img={project.mobileImages[1]}
        imgType="mobile"
        title="stack"
        list={project.stack}
      />
    </section>
  )
}
