import AnimationFadeIn from '../animation/AnimationFadeIn'

export default function SectionTitle({ title }: { title: string }) {
  return (
    <AnimationFadeIn>
      <h2 className="my-4 text-3xl font-extrabold capitalize max-[325px]:text-4xl md:text-6xl 2xl:text-7xl">
        {title}
        <span className="text-brand">.</span>
      </h2>
    </AnimationFadeIn>
  )
}
