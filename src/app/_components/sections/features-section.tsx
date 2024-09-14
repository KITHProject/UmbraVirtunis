'use client';

import { useRef } from 'react';
import { useIsVisible } from '@/hooks/useIsVisible';
import { Coins, Sword, Users } from 'lucide-react';

export default function FeaturesSection() {
  const ref1 = useRef<HTMLDivElement | null>(null);
  const isVisible1 = useIsVisible(ref1);

  return (
    <section className="z-10 mx-2 flex h-[calc(100vh)] flex-col items-center justify-center">
      <div className="container relative px-4 md:px-6" ref={ref1}>
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
          Game Features
        </h2>
        <div className="absolute bottom-0 left-[50%] top-10 -z-10 h-[100%] w-[100%] -translate-x-1/2 transform rounded-full bg-black opacity-60 blur-2xl"></div>
        <div className="grid grid-cols-1 gap-8 text-white md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <Sword className="mb-4 h-12 w-12" />
            <h3 className="mb-2 text-xl font-bold">Epic Battles</h3>
            <p className="text-zinc-200">
              Engage in thrilling combat with alien creatures and rival
              factions.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Coins className="mb-4 h-12 w-12" />
            <h3 className="mb-2 text-xl font-bold">Crypto Rewards</h3>
            <p className="text-zinc-200">
              Earn and trade in-game assets as NFTs on the blockchain.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Users className="mb-4 h-12 w-12" />
            <h3 className="mb-2 text-xl font-bold">Multiplayer Quests</h3>
            <p className="text-zinc-200">
              Team up with friends to tackle challenging missions across the
              galaxy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
