import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Image from "next/image"
import image from "../../../public/images/golem-reading.jpeg"
import { Button } from "@/components/ui/button"

export default function LoreSection() {
  return (
    <section className="mt-20 flex flex-col items-center md:flex-row">
      <Card className="comic-border w-full bg-white bg-opacity-60 backdrop-blur-xl">
        <CardHeader className="text-center">
          <CardTitle>
            Unveil the Ancient Lore: The Golem &apos s Odyssey in a Forgotten
            World
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p>
            In a time before time, when the world was young and full of mystery,
            the Golems were forged by ancient beings to protect the balance of
            nature and magic. These stone guardians were left dormant, hidden in
            the depths of forgotten lands, until now. As the bearer of an
            awakened Golem, you are drawn into an epic tale of exploration and
            discovery. Journey through enchanted forests, desolate ruins, and
            majestic mountains as you unravel the secrets of a world on the
            brink of rediscovery. The Golem’s lore is rich with ancient
            prophecies, legendary artifacts, and forgotten powers waiting to be
            unearthed. Will you have the courage to delve into this mythical
            odyssey and write your own chapter in the legend?
          </p>
        </CardContent>
        <CardFooter className="flex items-center justify-center">
          <Button>Read more</Button>
        </CardFooter>
      </Card>
      <Image
        src={image.src}
        alt={"logo"}
        width={300}
        height={500}
        className="comic-border h-full w-full"
      />
    </section>
  )
}
