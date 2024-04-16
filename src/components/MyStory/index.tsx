import AnimationFadeIn from '../animation/AnimationFadeIn'
import SectionTitle from '../SectionTitle'

export default function MyStory() {
  return (
    <section className="my-24 md:my-36">
      <SectionTitle title="my story" />
      <AnimationFadeIn>
        <p className="mb-6 mt-8 text-lg md:mt-16 md:text-2xl">
          My journey into IT began in <span className="text-brand">2018</span>,
          starting with tech support and gradually moving up to become a{' '}
          <span className="text-brand">cloud data migration expert</span>. Along
          the way, I&apos;ve always been curious about how things work,
          especially in development. I found that web development really lets me
          flex my creativity and problem-solving skills.
        </p>
      </AnimationFadeIn>
      <AnimationFadeIn>
        <p className="my-6 text-lg md:text-2xl">
          I started out focusing on the{' '}
          <span className="text-brand">front end</span>, but soon realized I
          enjoyed working on all parts of web apps. So, I taught myself{' '}
          <span className="text-brand">back end</span> development too. Learning
          never stops in this field, and I&apos;m always picking up new things
          and getting better at what I already know.
        </p>
      </AnimationFadeIn>
      <AnimationFadeIn>
        <p className="mb-16 mt-6 text-lg md:text-2xl">
          With just over a year of experience in development, I&apos;m excited
          to keep growing as a <span className="text-brand">web developer</span>
          . It&apos;s not just a job for me; it&apos;s what I love doing, and I
          can&apos;t wait to see where it takes me next. 💜
        </p>
      </AnimationFadeIn>
    </section>
  )
}
