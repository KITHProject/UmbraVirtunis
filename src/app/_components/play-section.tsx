import { Button } from "@/components/ui/button"

export default function PlaySection() {
  return (
      <section className="flex flex-col items-center mt-20">
        <div className="relative flex justify-center">
            <video
            src="/videos/video (1).mp4"
            autoPlay
            loop
            muted
            playsInline
            className="comic-border w-4/5 rounded-lg shadow-[0_0_25px_5px_rgba(0,0,0,0.4)]"
            />
            <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Button
                className="comic-border h-16 w-48 text-xl"
                variant={"secondary"}
            >
                Play Now
            </Button>
            </div>
        </div>   
      </section>
  )
}
