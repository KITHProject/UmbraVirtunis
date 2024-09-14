'use client';

import { useRef } from 'react';
import { useIsVisible } from '@/hooks/useIsVisible';
import Image from 'next/image';
import CharactersGroup from '@/assets/group.png';
import { Icons } from '@/components/icons';

export default function DiscordSection() {
  const ref1 = useRef<HTMLDivElement | null>(null);
  const isVisible1 = useIsVisible(ref1);

  return (
    <section className="z-10 mx-2 my-20 flex flex-col items-center justify-center">
      <div ref={ref1}>
        <div className="relative">
          <div className="flex w-full justify-center">
            {/* <Image src={CharactersGroup} alt="group" width={1000} height={400}/> */}
            <Image
              src={CharactersGroup}
              alt={'group'}
              width={4000}
              height={4000}
              className="h-full w-full"
            />
          </div>
          <div className="group absolute left-1/2 top-[80%] flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center">
            <Icons.discord className="cosmic-text-shadow h-28 w-28 fill-white group-hover:cursor-pointer group-hover:fill-blue-500" />
            <p className="cosmic-text-shadow text-center text-5xl text-white group-hover:cursor-pointer group-hover:text-blue-500">
              JOIN US ON DISCORD
            </p>
          </div>
          <div className="absolute bottom-0 left-[50%] top-10 -z-10 h-[100%] w-[100%] -translate-x-1/2 transform rounded-full bg-black opacity-60 blur-2xl"></div>
        </div>
        <div className="mt-4 flex flex-col items-center">
          <p className="mx-auto max-w-3xl text-center text-3xl text-white">
            Join our vibrant community on Discord to keep up with everything
            happening in Crypto Game. Connect directly with our team, share your
            ideas, and be the first to know about new features.
          </p>
        </div>
      </div>
    </section>
  );
}
