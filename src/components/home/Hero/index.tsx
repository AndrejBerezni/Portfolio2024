import HeroImage from './HeroImage'
import HeroText from './HeroText'

export default function Hero() {
  return (
    <section className="8 flex flex-col items-center justify-between gap-12 py-12 md:py-24 lg:flex-row">
      <HeroText />
      <HeroImage />
    </section>
  )
}
