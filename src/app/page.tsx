"use client"

import { useRef } from "react"
import InformationSection from "./_components/information-section"
import PlaySection from "./_components/play-section"
import InfoSection from "./_components/info-section"
import LoreSection from "./_components/lore-section"

export default function HomePage() {
  const section1Ref = useRef<HTMLDivElement>(null)
  const section2Ref = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col items-center">
      <PlaySection
        section1Ref={section1Ref}
        section2Ref={section2Ref}
        scrollToSection={scrollToSection}
      />
      <InformationSection section2Ref={section2Ref} />
    </div>
  )
}
