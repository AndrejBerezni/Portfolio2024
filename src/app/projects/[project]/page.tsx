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
    </section>
  )
}
