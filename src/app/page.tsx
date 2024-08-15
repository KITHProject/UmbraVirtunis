import StatsSection from "./_components/stats-section"
import PlaySection from "./_components/play-section"
import InfoSection from "./_components/info-section"
import LoreSection from "./_components/lore-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <PlaySection />
      <StatsSection />
      <InfoSection />
      <LoreSection />
    </div>
  )
}
