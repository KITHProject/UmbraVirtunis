import Image from "next/image";
import image from "../../../public/images/minion.png";

export default function InformationSection() {
  return (
    <section className="flex flex-col items-center mt-20">
      <div className="flex justify-center text-center">
        <p className="text-7xl font-bold text-white text-outline">
          Develop character by workout!
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-10 place-items-center">
        <div className="flex flex-col justify-center text-left items-center space-y-6">
          <p className="text-3xl font-bold text-white text-outline">
            GOLEM IS A WEB3 RPG LIFESTYLE APP THAT COMBINES GAMING WITH WORKOUT.
          </p>
          <p className="text-3xl font-bold text-white text-outline">
            Earn NFT as you progress and trade them on the market for rewards.
          </p>
        </div>
        <div className="flex justify-center text-center items-center">
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
  );
}
