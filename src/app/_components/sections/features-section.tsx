'use client';

import { useRef } from 'react';
import { useIsVisible } from '@/hooks/useIsVisible';
import { Coins, Sword, Users } from 'lucide-react';

type Props = {
  section4Ref: React.RefObject<HTMLDivElement>
};

export default function FeaturesSection({ section4Ref }: Props) {
  const ref1 = useRef<HTMLDivElement | null>(null);
  const isVisible1 = useIsVisible(ref1);

  return (
    <section
      ref={section4Ref}
      className="z-10 mx-2 flex h-[calc(100vh)] flex-col items-center justify-center"
    >
     
      <div className="container px-4 md:px-6 relative" ref={ref1}>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">
              Game Features
        </h2>
        <div className="-z-10 absolute top-10 bottom-0 left-[50%] h-[100%] w-[100%] -translate-x-1/2 transform rounded-full bg-black opacity-60 blur-2xl"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
          <div className="flex flex-col items-center text-center ">
            <Sword className="h-12 w-12 mb-4 " />
            <h3 className="text-xl font-bold mb-2">Epic Battles</h3>
            <p className="text-zinc-200">Engage in thrilling combat with alien creatures and rival factions.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Coins className="h-12 w-12 mb-4 " />
            <h3 className="text-xl font-bold mb-2">Crypto Rewards</h3>
            <p className="text-zinc-200">Earn and trade in-game assets as NFTs on the blockchain.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Users className="h-12 w-12 mb-4 " />
            <h3 className="text-xl font-bold mb-2">Multiplayer Quests</h3>
            <p className="text-zinc-200">Team up with friends to tackle challenging missions across the galaxy.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
