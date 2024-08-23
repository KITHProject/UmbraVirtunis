import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Image from "next/image"
import image from "../../../public/images/golem-paris.jpeg"
import { Button } from "@/components/ui/button"

export default function InfoSection() {
  return (
    <section className="mt-20 flex flex-col items-center md:flex-row">
      <Image
        src={image.src}
        alt={"logo"}
        width={300}
        height={500}
        className="comic-border h-full w-full"
      />
      <Card className="comic-border w-full bg-white bg-opacity-60 backdrop-blur-xl">
        <CardHeader className="text-center">
          <CardTitle>Are you ready for an adventure?</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p>
            Step into a world where legends come to life. In this unique crypto
            game, you command a powerful Golem on an epic journey filled with
            exploration, challenges, and untold treasures. Traverse ancient
            landscapes, discover hidden secrets, and engage in thrilling
            adventures, all while earning valuable rewards. With every step,
            your Golem grows stronger, unlocking new realms and possibilities.
            Are you ready to walk the path of greatness? Start your adventure
            today and become a part of the future of gaming, where every move
            counts in a world full of endless opportunities.
          </p>
        </CardContent>
        <CardFooter className="flex items-center justify-center">
          <Button>Get Started</Button>
        </CardFooter>
      </Card>
    </section>
  )
}
