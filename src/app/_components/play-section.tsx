"use client"

import HyperText from "@/components/magicui/hyper-text"

type Props = {
  section1Ref: React.RefObject<HTMLDivElement>
  section2Ref: React.RefObject<HTMLDivElement>
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void
}

export default function PlaySection({
  section1Ref,
  section2Ref,
  scrollToSection,
}: Props) {
  return (
    <section
      ref={section1Ref}
      className="flex h-[calc(100vh-120px)] flex-col items-center justify-center"
    >
      <HyperText
        className="text-6xl text-white dark:text-white"
        text="START EXPLORING"
        duration={1500}
      />
      <div
        onClick={() => scrollToSection(section2Ref)}
        className="mouse mt-4 cursor-pointer"
      />
    </section>
  )
}
