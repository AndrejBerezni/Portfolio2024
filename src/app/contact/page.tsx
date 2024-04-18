import Link from 'next/link'
import { LuMail, LuLinkedin } from 'react-icons/lu'

import AnimationFadeIn from '@/components/animation/AnimationFadeIn'
import HeroImage from '@/components/home/Hero/HeroImage'
import SectionTitle from '@/components/SectionTitle'

export default function ContactPage() {
  return (
    <section className="mb-12 mt-6 flex flex-col items-center gap-12 md:m-0 md:min-h-screen md:flex-row md:justify-between">
      <AnimationFadeIn styles="flex flex-col gap-6">
        <SectionTitle title="get in touch" />
        <p className="-mt-6 text-secondary md:max-w-[70%] md:text-xl">
          Interested in partnering or collaborating? Drop me an email or message
          me on LinkedIn, and I&apos;ll respond promptly.
        </p>
        <div className="flex gap-8 self-center text-3xl md:self-start">
          <Link
            href="mailto:berezniandrej@gmailcom"
            className="duration-200 hover:scale-105 hover:text-brand"
          >
            <LuMail />
          </Link>
          <Link
            href="https://www.linkedin.com/in/andrej-berezni"
            target="_blank"
            className="duration-200 hover:scale-105 hover:text-brand"
          >
            <LuLinkedin />
          </Link>
        </div>
      </AnimationFadeIn>
      <HeroImage />
    </section>
  )
}
