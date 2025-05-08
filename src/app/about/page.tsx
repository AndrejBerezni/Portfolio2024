import AboutHeading from '@/components/about/AboutHeading'
import AboutExperienceSection from '@/components/about/Experience'
import MyStack from '@/components/about/MyStack'
import MyStory from '@/components/MyStory'

export default function AboutPage() {
  return (
    <>
      <AboutHeading />
      <MyStack />
      {/* <MyStory /> */}
      <AboutExperienceSection />
    </>
  )
}
