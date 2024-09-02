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
      className="z-10 mx-2 flex h-[calc(100vh)] flex-col items-center justify-center"
    >
      <div ref={ref1} className='relative mt-24'>
        <div
          className={`flex flex-col items-center bg-black/20 shadow-[0_0_5px_10px_rgba(0,0,0,0.2)] rounded-full transition-opacity max-w-3xl  duration-700 ease-in ${
            isVisible1 ? 'opacity-100' : 'opacity-0'
          }`}
        >


          <Icons.discord className='h-28 w-28' />
          <p className="text-5xl text-white">JOIN US ON DISCORD</p>
          <p className="text-white text-3xl text-center mx-auto">
            Join our vibrant community on Discord to keep up with everything
            happening in Crypto Game. Connect directly with our team, share your
            ideas, and be the first to know about new features.
          </p>
          <Button
            variant={'futuristic'}
            className="text-md relative border border-transparent font-thin text-white transition-all duration-300 ease-in-out hover:border-white mt-2"
          >
            <div className="z-100 pointer-events-none absolute inset-0 before:absolute before:-left-[2px] before:-top-[2px] before:h-2 before:w-2 before:border-l-2 before:border-t-2 before:border-white before:content-[''] after:absolute after:-right-[2px] after:-top-[2px] after:h-2 after:w-2 after:border-r-2 after:border-t-2 after:border-white after:content-['']">
              <div className="pointer-events-none absolute inset-0 before:absolute before:-bottom-[2px] before:-left-[2px] before:h-2 before:w-2 before:border-b-2 before:border-l-2 before:border-white before:content-[''] after:absolute after:-bottom-[2px] after:-right-[2px] after:h-2 after:w-2 after:border-b-2 after:border-r-2 after:border-white after:content-['']"></div>
            </div>
        JOIN NOW
          </Button>
        </div>
      </div>{' '}
      <div className="flex w-full justify-center absolute -z-10">
        <Image src={CharactersGroup} alt="group" width={500} height={500} className='w-3/4'></Image>
      </div>
    </section>
  );
}
