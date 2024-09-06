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
    <section
      className="z-10 mt-10 mx-2 flex h-[calc(100vh+120px)] flex-col items-center justify-center"
    >
      <div ref={ref1}>
        <div className='relative'>
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
          <div className='absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center'>
            <Icons.discord className='h-28 w-28 fill-white hover:fill-blue-500 hover:cursor-pointer' />
            <p className="text-5xl text-white  text-center">JOIN US ON DISCORD</p>
          </div>
          <div className="-z-10 absolute top-10 bottom-0 left-[50%] h-[100%] w-[100%] -translate-x-1/2 transform rounded-full bg-black opacity-60 blur-2xl"></div>
        </div>
        <div className="mt-4 flex flex-col items-center">
          <p className="text-white text-3xl text-center mx-auto max-w-3xl">
            Join our vibrant community on Discord to keep up with everything
            happening in Crypto Game. Connect directly with our team, share your
            ideas, and be the first to know about new features.
          </p>
        </div>
      </div>
    </section>
  );
}