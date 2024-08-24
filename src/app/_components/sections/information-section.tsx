"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/components/ui/carousel"
import Image from "next/image"
import { useRef } from "react"
import human from "@/assets/human.png"
import elf from "@/assets/elf.png"
import orc from "@/assets/orc.png"
import { useIsVisible } from "@/hooks/useIsVisible"

type Props = {
  section2Ref: React.RefObject<HTMLDivElement>
}

const arrayOfImages = [
  {
    src: orc,
    alt: "Orc",
  },
  {
    src: human,
    alt: "Human",
  },
  {
    src: elf,
    alt: "Elf",
  },
]

export default function InformationSection({ section2Ref }: Props) {
  const ref1 = useRef<HTMLDivElement | null>(null)
  const isVisible1 = useIsVisible(ref1)

  return (
    <section
      ref={section2Ref}
      className="z-10 mx-2 flex h-[calc(100vh)] flex-col items-center"
    >
      <div ref={ref1}>
        <div
          className={`flex flex-col items-center transition-opacity duration-700 ease-in ${
            isVisible1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="mt-48 text-6xl text-white">JOIN NOW &</p>
          <p className="text-6xl text-white">START WORKOUT</p>
        </div>
        <div
          className={`mt-32 grid grid-cols-5 gap-4 duration-700 ease-in ${
            isVisible1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="col-span-3">
            <p className="text-6xl text-white">TEXT</p>
          </div>
          <div className="col-span-2">
            <Carousel
              className="max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-5xl"
              opts={{ align: "start", loop: false }}
              slidesPerGroup={1}
            >
              <CarouselContent className="-ml-2">
                {arrayOfImages.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={2000}
                        height={2000}
                        className="h-full w-full"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselDots />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}
