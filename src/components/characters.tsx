import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import human from "@/assets/human-man-full.png"
import orc from "@/assets/orc-man-full.png"
import dwarf from "@/assets/dwarf-man-full.png"
import HumanAvatar from "@/assets/human-man-avatar.png"
import OrcAvatar from "@/assets/orc-man-avatar.png"
import DwarfAvatar from "@/assets/dwarf-man-avatar.png"
import Image from "next/image"

const arrayOfCharacters = [
  {
    name: "Human",
    avatar: HumanAvatar,
    image: human,
    description: "Details about Human",
    value: "human",
  },
  {
    name: "Orc",
    avatar: OrcAvatar,
    image: orc,
    description: "Details about Orc",
    value: "orc",
  },
  {
    name: "Dwarf",
    avatar: DwarfAvatar,
    image: dwarf,
    description: "Details about Dwarf",
    value: "dwarf",
  },
]

export function Characters() {
  return (
    <div className="w-full">
      <Tabs
        defaultValue="orc"
        className="flex w-full max-w-[800px] flex-col justify-center"
      >
        <TabsList className="my-2 justify-center">
          {arrayOfCharacters.map((character) => (
            <TabsTrigger
              key={character.name}
              value={character.value}
              backgroundImage={character.avatar.src}
              className="h-16 w-16 rounded-xl border-2"
            ></TabsTrigger>
          ))}
        </TabsList>

        {arrayOfCharacters.map((character) => (
          <TabsContent key={character.name} value={character.value}>
            <div className="mt-8 grid gap-12 sm:grid-cols-2">
              <Image
                src={character.image}
                alt={character.name}
                width={400}
                height={400}
                className="drop-shadow-[-10px_5px_rgba(0,0,0,0.25)]"
              />
              <div className="relative flex w-full flex-col border border-gray-600 bg-black/70 p-2 shadow-[0_10px_45px_1px_rgba(0,0,0,0.4)]">
                <div className="z-100 pointer-events-none absolute inset-0 before:absolute before:-left-[2px] before:-top-[2px] before:h-2 before:w-2 before:border-l-2 before:border-t-2 before:border-white before:content-[''] after:absolute after:-right-[2px] after:-top-[2px] after:h-2 after:w-2 after:border-r-2 after:border-t-2 after:border-white after:content-['']">
                  <div className="pointer-events-none absolute inset-0 before:absolute before:-bottom-[2px] before:-left-[2px] before:h-2 before:w-2 before:border-b-2 before:border-l-2 before:border-white before:content-[''] after:absolute after:-bottom-[2px] after:-right-[2px] after:h-2 after:w-2 after:border-b-2 after:border-r-2 after:border-white after:content-['']"></div>
                </div>
                <p className="mx-auto my-2 border-b text-center text-xl text-white">
                  {character.name}
                </p>
                <p className="text-xl text-white">{character.description}</p>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
