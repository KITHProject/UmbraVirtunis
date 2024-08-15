"use client"
import Image from "next/image"
import image from "../../../public/images/button.png"

export default function PlaySection() {
  const handleClick = () => {
    console.log("Button clicked!")
  }

  return (
    <section className="flex flex-col items-center">
      <div className="relative flex h-[300px] min-w-[400px] max-w-[850px] sm:h-[500px] sm:min-w-[800px]">
        <Image src={image.src} alt="Play Now" layout="fill" objectFit="cover" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <video
            src="/videos/video (1).mp4"
            autoPlay
            loop
            muted
            playsInline
            className="comic-border w-[80%] rounded-lg shadow-[0_0_25px_5px_rgba(0,0,0,0.4)]"
          />
        </div>
        <div className="absolute left-1/2 top-[90%] -translate-x-1/2 -translate-y-1/2 transform">
          <div className="relative flex justify-center transition duration-150 ease-in-out hover:scale-105">
            <Image
              src={image.src}
              alt="Play Now"
              width={200}
              height={200}
              className="cursor-pointer"
              onClick={handleClick}
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <p className="text-outline text-3xl font-bold text-white">
                Play Now
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
