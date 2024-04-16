import Hero from '@/components/home/Hero'
import HomeProjectsSection from '@/components/home/Projects'
import ScrollForMore from '@/components/home/ScrollForMore'
import HomeSkillsSection from '@/components/home/Skills'
export default function Home() {
  return (
    <>
      <Hero />
      <HomeProjectsSection />
      <HomeSkillsSection />
      <ScrollForMore />
    </>
  )
}
