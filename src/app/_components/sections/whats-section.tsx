'use client';

import { useIsVisible } from '@/hooks/useIsVisible';
import { useRef } from 'react';

export default function WhatsSection() {
  const ref1 = useRef<HTMLDivElement | null>(null);
  const isVisible1 = useIsVisible(ref1);

  return (
    <section className="z-10 mx-2 flex h-[calc(100vh)] flex-col items-center">
      <div ref={ref1}>
        <div
          className={`flex flex-col items-center transition-opacity duration-700 ease-in ${
            isVisible1 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="mt-48 text-6xl text-white">WHAT&apos;S</p>
          <p className="text-6xl text-white">CRYPTO GAME</p>
        </div>
        <div
          className={`mt-32 grid grid-cols-5 gap-4 duration-700 ease-in ${
            isVisible1 ? 'opacity-100' : 'opacity-0'
          }`}
        ></div>
      </div>
    </section>
  );
}
