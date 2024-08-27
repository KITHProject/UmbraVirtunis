'use client';

import { useRef } from 'react';
import { useIsVisible } from '@/hooks/useIsVisible';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import planet1 from '@/assets/planet1.png';
import { Characters } from '@/components/characters';

export default function CharactersSection() {
  const ref1 = useRef<HTMLDivElement | null>(null);
  const isVisible = useIsVisible(ref1);

  return (
    <section className="z-10 mx-2 flex min-h-[calc(100vh)] flex-col items-center text-center">
      <div ref={ref1}>
        <div
          className={`flex flex-col transition-opacity duration-700 ease-in ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="mt-16 text-5xl text-white">CHARACTERS</p>
          <p className="mt-2 text-3xl text-white">
            Choose your champion from five unique races in a galaxy on the brink
            of war. Each race brings its own strengths.
          </p>
        </div>
        <div className="mt-12 flex max-w-7xl justify-center">
          <Tabs
            defaultValue="Planet1"
            className="my-12 flex w-full flex-col justify-center"
          >
            <TabsList className="mx-12 mt-8 h-0 justify-center gap-8">
              <TabsTrigger
                value="Planet1"
                backgroundImage={planet1.src}
                className="h-28 w-28"
              >
                Planet 1
              </TabsTrigger>
              <TabsTrigger
                value="Planet2"
                backgroundImage={planet1.src}
                className="h-28 w-28"
              >
                Planet 2
              </TabsTrigger>
              <TabsTrigger
                value="Planet3"
                backgroundImage={planet1.src}
                className="h-28 w-28"
              >
                Planet 3
              </TabsTrigger>
            </TabsList>
            <TabsContent value="Planet1">
              <div className="mt-20">
                <Characters />
              </div>
            </TabsContent>
            <TabsContent value="Planet2">
              <div className="mt-20">
                <Characters />
              </div>
            </TabsContent>
            <TabsContent value="Planet3">
              <div className="mt-20">
                <Characters />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
