import InformationSection from "./_components/information-section"
import PlaySection from "./_components/play-section"

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <PlaySection />
      <InformationSection />
    </div>
  )
}
