import { DollarSign, Star, Users } from "lucide-react"

export default function StatsSection() {
  return (
    <section className="mt-12 flex flex-col items-center">
      <div className="grid grid-cols-3 gap-4">
        <div className="comic-border flex items-center justify-between gap-2 bg-white bg-opacity-60 p-8 px-4 backdrop-blur-xl">
          <div className="mx-2 text-3xl">
            <p className="text-lg">Players</p>
            <p> 1000+ </p>
          </div>
          <Users size={48} />
        </div>
        <div className="comic-border flex items-center justify-between gap-2 bg-white bg-opacity-60 p-8 px-4 backdrop-blur-xl">
          <div className="mx-2 text-3xl">
            <p className="text-lg">NFTs</p>
            <p> 100+ </p>
          </div>
          <Star size={48} />
        </div>
        <div className="comic-border flex items-center justify-between gap-2 bg-white bg-opacity-60 p-8 px-4 backdrop-blur-xl">
          <div className="mx-2 text-3xl">
            <p className="text-lg"> Transactions/Day</p>
            <p> 1000+ </p>
          </div>
          <DollarSign size={48} />
        </div>
      </div>
    </section>
  )
}
