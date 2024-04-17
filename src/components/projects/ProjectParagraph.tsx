import clsx from 'clsx'
import Image from 'next/image'

import AnimationFadeIn from '../animation/AnimationFadeIn'

export default function ProjectParagraph({
  img,
  imgType,
  title,
  text,
}: {
  img: string
  imgType: 'desktop' | 'mobile'
  title?: string
  text: string
}) {
  return (
    <div
      className={clsx('flex flex-col gap-4', {
        'my-12 lg:gap-12 lg:odd:flex-row lg:even:flex-row-reverse':
          imgType === 'desktop',
        'my-12 md:gap-12 md:odd:flex-row md:even:flex-row-reverse':
          imgType === 'mobile',
      })}
    >
      <AnimationFadeIn
        styles={clsx('flex w-full justify-center', {
          'lg:w-1/2': imgType === 'desktop',
          'md:w-1/2': imgType === 'mobile',
        })}
      >
        <Image
          src={img}
          alt="project-main-image"
          width={imgType === 'desktop' ? 1200 : 400}
          height={imgType === 'desktop' ? 625 : 800}
          className={clsx('rounded-xl border-2 border-brand shadow-md', {
            'w-full': imgType === 'desktop',
            'max-h-[400px] w-auto md:max-h-[800px]': imgType === 'mobile',
          })}
        />
      </AnimationFadeIn>
      <AnimationFadeIn
        styles={clsx('flex w-full flex-col justify-center', {
          'lg:mt-2 lg:w-1/2 self-start': imgType === 'desktop',
          'md:mt-2 md:w-1/2': imgType === 'mobile',
        })}
      >
        {title && (
          <h2 className="text-3xl font-extrabold capitalize md:text-5xl">
            {title}
          </h2>
        )}
        <p className="mt-2 text-lg text-secondary md:text-2xl">{text}</p>
      </AnimationFadeIn>
    </div>
  )
}
