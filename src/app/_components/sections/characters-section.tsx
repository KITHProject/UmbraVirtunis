"use client";

import { useRef } from "react";
import { useIsVisible } from "@/hooks/useIsVisible";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import orc from "@/assets/orc.png";
import { CardHover } from "@/components/card-hover";

export default function CharactersSection() {
  const ref1 = useRef<HTMLDivElement | null>(null);
  const isVisible = useIsVisible(ref1);

  return (
    <section className="z-10 mx-2 flex h-[calc(100vh)] flex-col items-center justify-center">
      <div ref={ref1}>
        <div
          className={`flex flex-col items-center transition-opacity duration-700 ease-in ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-6xl text-white mt-20">CHARACTERS</p>
          <p className="mt-4 text-4xl text-white text-center max-w-4xl">
            Choose your champion from five unique races in a galaxy on the brink
            of war. Each race brings its own strengths.
          </p>
        </div>
        <div className="mt-16 flex justify-center">
          <Tabs defaultValue="Planet1" className="w-full max-w-[800px] flex flex-col justify-center">
            <TabsList className="justify-center">
              <TabsTrigger value="Planet1" backgroundImage={orc.src}>
                Planet 1
              </TabsTrigger>
              <TabsTrigger value="Planet2" backgroundImage={orc.src}>
                Planet 2
              </TabsTrigger>
              <TabsTrigger value="Planet3" backgroundImage={orc.src}>
                Planet 3
              </TabsTrigger>
            </TabsList>
            <TabsContent value="Planet1">
              <p className="text-white text-center mt-8">Details about Planet 1</p>
              <div>
              <CardHover />
              </div>
            </TabsContent>
            <TabsContent value="Planet2">
              <p className="text-white text-center mt-8">Details about Planet 2</p>
            </TabsContent>
            <TabsContent value="Planet3">
              <p className="text-white text-center mt-8">Details about Planet 3</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
