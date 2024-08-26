"use client"

import { useRef } from "react"
import { useIsVisible } from "@/hooks/useIsVisible"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import orc from "@/assets/orc.png"
import planet1 from "@/assets/planet1.png"
import planet2 from "@/assets/planet2.png"
import { CardHover } from "@/components/card-hover"
import { Characters } from "@/components/characters"

export default function CharactersSection() {
  const ref1 = useRef<HTMLDivElement | null>(null)
  const isVisible = useIsVisible(ref1)

  return (
    <section className="z-10 mx-2 flex h-[calc(100vh)] flex-col items-center justify-center">
      <div ref={ref1}>
        <div
          className={`flex flex-col items-center transition-opacity duration-700 ease-in ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="mt-20 text-6xl text-white">CHARACTERS</p>
          <p className="mt-4 max-w-4xl text-center text-4xl text-white">
            Choose your champion from five unique races in a galaxy on the brink
            of war. Each race brings its own strengths.
          </p>
        </div>
        <div className="mt-16 flex justify-center">
          <Tabs
            defaultValue="Planet1"
            className="flex w-full max-w-[800px] flex-col justify-center"
          >
            <TabsList className="my-2 justify-center">
              <TabsTrigger
                value="Planet1"
                backgroundImage={planet1.src}
                className="h-40 w-40"
              >
                Planet 1
              </TabsTrigger>
              <TabsTrigger
                value="Planet2"
                backgroundImage={planet2.src}
                className="h-40 w-40"
              >
                Planet 2
              </TabsTrigger>
              <TabsTrigger
                value="Planet3"
                backgroundImage={planet1.src}
                className="h-40 w-40"
              >
                Planet 3
              </TabsTrigger>
            </TabsList>
            <TabsContent value="Planet1">
              <p className="mt-8 text-center text-white">
                Details about Planet 1
              </p>
              <div>
                <CardHover />
              </div>
            </TabsContent>
            <TabsContent value="Planet2">
              <div className="mt-16">
                <Characters />
              </div>
            </TabsContent>
            <TabsContent value="Planet3">
              <p className="mt-8 text-center text-white">
                Details about Planet 3
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
