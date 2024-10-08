'use client';

import { useRef } from 'react';
import { useIsVisible } from '@/hooks/useIsVisible';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import planet1 from '@/assets/planet1.png';
import planet2 from '@/assets/planet2.png';
import planet3 from '@/assets/planet3.png';
import { Characters } from '@/components/characters';
import {
  arrayOfCharacters1,
  arrayOfCharacters2,
  arrayOfCharacters3,
} from '@/constants/characters';

export default function CharactersSection() {
  const ref1 = useRef<HTMLDivElement | null>(null);
  const isVisible = useIsVisible(ref1);

  return (
    <section className="z-10 mx-2 flex min-h-screen flex-col items-center text-center">
      <div
        ref={ref1}
        className={`mt-16 md:mt-32 transition-opacity duration-700 ease-in ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className={'flex flex-col'}>
          <p className="cosmic-text-shadow text-3xl md:text-5xl text-white">CHARACTERS</p>
          <p className="mt-2 max-w-3xl self-center text-lg md:text-3xl text-white">
            Choose your champion from five unique races in a galaxy on the brink
            of war. Each race brings its own strengths.
          </p>
        </div>
        <div className="mt-8 md:mt-12 flex max-w-7xl justify-center">
          <Tabs
            defaultValue="Planet1"
            className="my-6 md:my-12 flex w-full flex-col justify-center"
          >
            <TabsList className="mx-4 md:mx-12 mt-4 md:mt-8 h-auto justify-center gap-4 md:gap-8">
              <TabsTrigger
                value="Planet1"
                backgroundImage={planet1.src}
                className="h-16 w-16 md:h-28 md:w-28"
              >
                Planet 1
              </TabsTrigger>
              <TabsTrigger
                value="Planet2"
                backgroundImage={planet2.src}
                className="h-16 w-16 md:h-28 md:w-28"
              >
                Planet 2
              </TabsTrigger>
              <TabsTrigger
                value="Planet3"
                backgroundImage={planet3.src}
                className="h-16 w-16 md:h-28 md:w-28"
              >
                Planet 3
              </TabsTrigger>
            </TabsList>
            <TabsContent value="Planet1">
              <div className="mt-8 md:mt-20">
                <Characters
                  arrayOfCharacters={arrayOfCharacters1}
                  defaultValue="human"
                />
              </div>
            </TabsContent>
            <TabsContent value="Planet2">
              <div className="mt-8 md:mt-20">
                <Characters
                  arrayOfCharacters={arrayOfCharacters2}
                  defaultValue="ninja"
                />
              </div>
            </TabsContent>
            <TabsContent value="Planet3">
              <div className="mt-8 md:mt-20">
                <Characters
                  arrayOfCharacters={arrayOfCharacters3}
                  defaultValue="dragon"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}