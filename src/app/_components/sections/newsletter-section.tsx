'use client';

import { useRef } from 'react';
import { useIsVisible } from '@/hooks/useIsVisible';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Input } from '@/components/ui/input';

type Props = {
  section4Ref: React.RefObject<HTMLDivElement>
};

export default function NewsletterSection({ section4Ref }: Props) {
  const ref1 = useRef<HTMLDivElement | null>(null);
  const isVisible1 = useIsVisible(ref1);

  return (
    <section
      ref={section4Ref}
      className="z-10 mx-2 flex h-[calc(100vh)] flex-col items-center justify-center"
    >
      <div className="container px-4 md:px-6" ref={ref1}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center relative">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Join the CRYPTOGAME Universe
            </h2>
            <p className="mx-auto max-w-[600px] text-zinc-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Be among the first to explore, battle, and earn in our
              revolutionary blockchain-powered game.
            </p>
          </div>
          <div className="-z-10 absolute top-10 bottom-0 left-[50%] h-[100%] w-[100%] -translate-x-1/2 transform rounded-full bg-black opacity-60 blur-2xl"></div>

          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2 items-center justify-center">
              <div className='relative'>
                <Input
                  className="max-w-lg flex-1  text-white rounded-none border-gray-600 bg-white bg-opacity-5 backdrop-blur-xl w-[200px]"
                  placeholder="Enter your email"
                  type="email"
                />
                <div className="z-100 pointer-events-none absolute inset-0 before:absolute before:-left-[2px] before:-top-[2px] before:h-2 before:w-2 before:border-l-2 before:border-t-2 before:border-white before:content-[''] after:absolute after:-right-[2px] after:-top-[2px] after:h-2 after:w-2 after:border-r-2 after:border-t-2 after:border-white after:content-['']">
                  <div className="pointer-events-none absolute inset-0 before:absolute before:-bottom-[2px] before:-left-[2px] before:h-2 before:w-2 before:border-b-2 before:border-l-2 before:border-white before:content-[''] after:absolute after:-bottom-[2px] after:-right-[2px] after:h-2 after:w-2 after:border-b-2 after:border-r-2 after:border-white after:content-['']"></div>
                </div>
              </div>
              <Button type="submit" variant={'secondary'}>Get Early Access</Button>
            </form>
            <p className="text-xs text-zinc-400">
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
