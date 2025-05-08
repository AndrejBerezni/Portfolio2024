import HomeExperienceSection from '@/components/home/Experience'
import Hero from '@/components/home/Hero'
import HomeProjectsSection from '@/components/home/Projects'
import ScrollForMore from '@/components/home/ScrollForMore'
import HomeSkillsSection from '@/components/home/Skills'
// import MyStory from '@/components/MyStory'
export default function Home() {
  return (
    <>
      <Hero />
      <ScrollForMore />
      <HomeProjectsSection />
      <HomeSkillsSection />
      <HomeExperienceSection />
      {/* <MyStory /> */}
    </>
  )
}
