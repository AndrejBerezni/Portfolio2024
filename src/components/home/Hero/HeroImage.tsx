'use client'
import Image from 'next/image'

import AnimationFadeIn from '../../animation/AnimationFadeIn'
export default function HeroImage() {
  return (
    <AnimationFadeIn styles="flex aspect-square h-[200px] w-[200px] items-center justify-center rounded-full border-2 border-brand shadow-md sm:h-[400px] sm:w-[400px] xl:h-[540px] xl:w-[540px]">
      <Image
        src="/andrej.png"
        alt="photo of andrej berezni"
        width={500}
        height={500}
        className="h-[170px] w-[170px] rounded-full opacity-0 transition-opacity duration-1000 sm:h-[340px] sm:w-[340px] xl:h-[450px] xl:w-[450px]"
        onLoadingComplete={(image) => image.classList.remove('opacity-0')}
      />
    </AnimationFadeIn>
  )
}
