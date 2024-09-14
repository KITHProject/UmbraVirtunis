'use client';

import { useRef } from 'react';
import { useIsVisible } from '@/hooks/useIsVisible';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Input } from '@/components/ui/input';

export default function NewsletterSection() {
  const ref1 = useRef<HTMLDivElement | null>(null);
  const isVisible1 = useIsVisible(ref1);

  return (
    <section className="z-10 mx-2 mt-20 mb-40   flex flex-col items-center justify-center">
      <div className="container px-4 md:px-6" ref={ref1}>
        <div className="relative flex flex-col items-center justify-center space-y-4 text-center">
          <p className="cosmic-text-shadow text-center text-5xl text-white">
            Join the CRYPTOGAME Universe
          </p>
          <p className="mt-2 max-w-3xl self-center text-3xl text-white">
            Be among the first to explore, battle, and earn in our revolutionary
            blockchain-powered game.
          </p>
          <div className="absolute bottom-0 left-[50%] top-2 -z-10 h-[100%] w-[100%] -translate-x-1/2 transform rounded-full bg-black opacity-60 blur-2xl"></div>
          <div className="w-full max-w-sm space-y-4">
            <form className="mt-4 flex items-center justify-center space-x-4">
              <div className="relative">
                <Input
                  className="w-[200px] max-w-lg flex-1 rounded-none border-gray-600 bg-white bg-opacity-5 text-white backdrop-blur-xl"
                  placeholder="Enter your email"
                  type="email"
                />
                <div className="z-100 pointer-events-none absolute inset-0 before:absolute before:-left-[2px] before:-top-[2px] before:h-2 before:w-2 before:border-l-2 before:border-t-2 before:border-white before:content-[''] after:absolute after:-right-[2px] after:-top-[2px] after:h-2 after:w-2 after:border-r-2 after:border-t-2 after:border-white after:content-['']">
                  <div className="pointer-events-none absolute inset-0 before:absolute before:-bottom-[2px] before:-left-[2px] before:h-2 before:w-2 before:border-b-2 before:border-l-2 before:border-white before:content-[''] after:absolute after:-bottom-[2px] after:-right-[2px] after:h-2 after:w-2 after:border-b-2 after:border-r-2 after:border-white after:content-['']"></div>
                </div>
              </div>
              <Button
                type="submit"
                variant={'secondary'}
                className="rounded-none"
              >
                GET EARLY ACCESS
              </Button>
            </form>
            <p className="text-sm text-zinc-400">
              By signing up, you agree to our{' '}
              <Link className="underline underline-offset-2" href="#">
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
