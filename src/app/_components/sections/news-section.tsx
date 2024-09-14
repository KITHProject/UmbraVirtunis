'use client';

import { useRef } from 'react';
import { useIsVisible } from '@/hooks/useIsVisible';
import NewsCard from '@/components/news-card';
import Image from '@/assets/cosmic-shard.png';
import { Button } from '@/components/ui/button';

const news = [
  { id: 1, title: 'New discord', img: Image, date: '10/09/2024' },
  { id: 2, title: 'Event', img: Image, date: '10/09/2024' },
  { id: 3, title: 'Tournament', img: Image, date: '10/09/2024' },
  { id: 4, title: 'VIP Program', img: Image, date: '10/09/2024' },
];
const updates = [
  { id: 1, title: 'New patch 4', img: Image, date: '10/09/2024' },
  { id: 2, title: 'New patch 3', img: Image, date: '10/09/2024' },
  { id: 3, title: 'New patch 2', img: Image, date: '10/09/2024' },
  { id: 4, title: 'New patch 1', img: Image, date: '10/09/2024' },
];

export default function NewsSection() {
  const ref1 = useRef<HTMLDivElement | null>(null);
  const isVisible1 = useIsVisible(ref1);

  return (
    <section className="z-10 mx-2 flex my-10 md:my-20 flex-col items-center justify-center">
      <div className="container relative px-4 md:px-6" ref={ref1}>
        <h2 className="cosmic-text-shadow mb-6 md:mb-8 text-center text-2xl md:text-3xl lg:text-5xl tracking-tighter text-white">
          LATEST NEWS & UPDATES
        </h2>
        <div className="flex flex-col items-center justify-center">
          <div className="relative mb-4 flex w-full items-center justify-center">
            <div className="flex w-full max-w-4xl items-center">
              <div className="h-[2px] flex-grow bg-white"></div>
              <p className="z-10 mx-2 bg-transparent px-4 text-xl md:text-2xl text-white">
                News
              </p>
              <div className="h-[2px] flex-grow bg-white"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {news.map((item) => (
              <NewsCard props={item} key={item.id} />
            ))}
          </div>
          <Button
            variant={'futuristic'}
            className="text-sm md:text-md relative mt-6 border border-transparent font-thin text-white transition-all duration-300 ease-in-out hover:border-white sm:w-auto"
          >
            <div className="z-100 pointer-events-none absolute inset-0 before:absolute before:-left-[2px] before:-top-[2px] before:h-2 before:w-2 before:border-l-2 before:border-t-2 before:border-white before:content-[''] after:absolute after:-right-[2px] after:-top-[2px] after:h-2 after:w-2 after:border-r-2 after:border-t-2 after:border-white after:content-['']">
              <div className="pointer-events-none absolute inset-0 before:absolute before:-bottom-[2px] before:-left-[2px] before:h-2 before:w-2 before:border-b-2 before:border-l-2 before:border-white before:content-[''] after:absolute after:-bottom-[2px] after:-right-[2px] after:h-2 after:w-2 after:border-b-2 after:border-r-2 after:border-white after:content-['']"></div>
            </div>
            READ MORE
          </Button>
        </div>
        <div className="mt-10 md:mt-12 flex flex-col items-center justify-center">
          <div className="relative mb-4 flex w-full items-center justify-center">
            <div className="flex w-full max-w-4xl items-center">
              <div className="h-[2px] flex-grow bg-white"></div>
              <p className="z-10 mx-2 bg-transparent px-4 text-xl md:text-2xl text-white">
                Patch notes
              </p>
              <div className="h-[2px] flex-grow bg-white"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {updates.map((item) => (
              <NewsCard props={item} key={item.id} />
            ))}
          </div>
          <Button
            variant={'futuristic'}
            className="text-sm md:text-md relative mt-6 border border-transparent font-thin text-white transition-all duration-300 ease-in-out hover:border-white  sm:w-auto"
          >
            <div className="z-100 pointer-events-none absolute inset-0 before:absolute before:-left-[2px] before:-top-[2px] before:h-2 before:w-2 before:border-l-2 before:border-t-2 before:border-white before:content-[''] after:absolute after:-right-[2px] after:-top-[2px] after:h-2 after:w-2 after:border-r-2 after:border-t-2 after:border-white after:content-['']">
              <div className="pointer-events-none absolute inset-0 before:absolute before:-bottom-[2px] before:-left-[2px] before:h-2 before:w-2 before:border-b-2 before:border-l-2 before:border-white before:content-[''] after:absolute after:-bottom-[2px] after:-right-[2px] after:h-2 after:w-2 after:border-b-2 after:border-r-2 after:border-white after:content-['']"></div>
            </div>
            READ MORE
          </Button>
        </div>
      </div>
    </section>
  );
}