import InformationSection from "./_components/information-section"
import PlaySection from "./_components/play-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <PlaySection/>
      <InformationSection/>
    </div>
  )
}
