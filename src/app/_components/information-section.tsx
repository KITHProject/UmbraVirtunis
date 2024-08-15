import Image from "next/image"
import image from "../../../public/images/minion.png"

export default function InformationSection() {
  return (
    <section className="mt-20 flex flex-col items-center">
      <div className="flex justify-center text-center">
        <p className="text-outline text-7xl font-bold text-white">
          Develop character by workout!
        </p>
      </div>
      <div className="mt-10 grid grid-cols-2 place-items-center gap-4">
        <div className="flex flex-col items-center justify-center space-y-6 text-left">
          <p className="text-outline text-3xl font-bold text-white">
            GOLEM IS A WEB3 RPG LIFESTYLE APP THAT COMBINES GAMING WITH WORKOUT.
          </p>
          <p className="text-outline text-3xl font-bold text-white">
            Earn NFT as you progress and trade them on the market for rewards.
          </p>
        </div>
        <div className="flex items-center justify-center text-center">
          <Image
            src={image.src}
            alt="logo"
            width={400}
            height={400}
            className="comic-border rounded-lg shadow-[0_0_25px_5px_rgba(0,0,0,0.4)]"
          />
        </div>
      </div>
    </section>
  )
}
