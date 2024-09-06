'use client'
import Image from 'next/image'

import AnimationFadeIn from '../../animation/AnimationFadeIn'
export default function HeroImage() {
  return (
    <AnimationFadeIn styles="flex aspect-square items-center justify-center rounded-full sm:min-h-[400px] sm:min-w-[400px] xl:min-h-[540px] xl:min-w-[540px] my-12">
      <Image
        src="/andrej.png"
        alt="photo of andrej berezni"
        width={500}
        height={500}
        className="z-10 aspect-square h-[204px] w-[204px] rounded-full opacity-0 ring-1 ring-brand ring-offset-[2rem] transition-opacity duration-1000 sm:h-[340px] sm:w-[340px] xl:h-[450px] xl:w-[450px]"
        onLoadingComplete={(image) => image.classList.remove('opacity-0')}
      />
    </AnimationFadeIn>
  )
}
