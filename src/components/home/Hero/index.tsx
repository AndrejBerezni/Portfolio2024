import HeroImage from './HeroImage'
import HeroText from './HeroText'

export default function Hero() {
  return (
    <section className="mb-[5vh] flex flex-col items-center gap-12 pt-12 sm:min-h-[90vh] lg:flex-row lg:justify-between lg:pt-0">
      <HeroText />
      <HeroImage />
    </section>
  )
}
