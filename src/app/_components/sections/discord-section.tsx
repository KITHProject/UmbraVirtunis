'use client';

import { useRef } from 'react';
import { useIsVisible } from '@/hooks/useIsVisible';
import Image from 'next/image';
import CharactersGroup from '@/assets/group.png';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';

type Props = {
  section3Ref: React.RefObject<HTMLDivElement>
};

export default function DiscordSection({ section3Ref }: Props) {
  const ref1 = useRef<HTMLDivElement | null>(null);
  const isVisible1 = useIsVisible(ref1);

  return (
    <section
      ref={section3Ref}
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
            <Icons.discord className='h-28 w-28 text-white' />
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
          <Button
            variant={'futuristic'}
            className="text-md relative border border-transparent font-thin text-white transition-all duration-300 ease-in-out hover:border-white mt-6"
          >
            <div className="z-10 pointer-events-none absolute inset-0 before:absolute before:-left-[2px] before:-top-[2px] before:h-2 before:w-2 before:border-l-2 before:border-t-2 before:border-white before:content-[''] after:absolute after:-right-[2px] after:-top-[2px] after:h-2 after:w-2 after:border-r-2 after:border-t-2 after:border-white after:content-['']">
              <div className="pointer-events-none absolute inset-0 before:absolute before:-bottom-[2px] before:-left-[2px] before:h-2 before:w-2 before:border-b-2 before:border-l-2 before:border-white before:content-[''] after:absolute after:-bottom-[2px] after:-right-[2px] after:h-2 after:w-2 after:border-b-2 after:border-r-2 after:border-white after:content-['']"></div>
            </div>
            JOIN NOW
          </Button>
        </div>
      </div>
    </section>
  );
}