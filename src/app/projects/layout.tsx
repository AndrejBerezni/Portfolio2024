import ProjectsHeading from '@/components/projects/ProjectsHeading'
import ProjectsNavigation from '@/components/projects/ProjectsNavigation'

export default async function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ProjectsHeading />
      <ProjectsNavigation />
      {children}
    </>
  )
}
