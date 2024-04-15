import AnimationFadeIn from '../../animation/AnimationFadeIn'
import CallForActionButtons from '../../CallForActionButtons'

export default function HeroText() {
  return (
    <AnimationFadeIn>
      <p className="mb-4 text-xl text-secondary md:mb-6 md:text-3xl">
        Hi, I&apos;m Andrej 👋🏻
      </p>
      <p className="text-5xl font-extrabold tracking-wider text-primary max-[325px]:text-4xl md:text-7xl 2xl:text-8xl">
        <span className="text-brand">Full</span>stack
      </p>
      <p className="mb-4 text-5xl font-extrabold tracking-wider text-primary max-[325px]:text-4xl md:mb-6 md:text-7xl 2xl:text-8xl">
        Developer
      </p>
      <p className="mb-4 text-xl text-secondary md:mb-6 md:text-3xl lg:max-w-[80%]">
        I&apos;m a fullstack developer based in Portugal, eager to contribute to
        your team in delivering innovative solutions that exceed expectations.
      </p>
      <CallForActionButtons />
    </AnimationFadeIn>
  )
}
