'use client';

import { useRef } from 'react';
import { useIsVisible } from '@/hooks/useIsVisible';
import YouTubeEmbed from '@/components/youtube-embed';

type Props = {
  section2Ref: React.RefObject<HTMLDivElement>;
};

export default function InformationSection({ section2Ref }: Props) {
  const ref1 = useRef<HTMLDivElement | null>(null);
  const isVisible1 = useIsVisible(ref1);

  return (
    <section
      ref={section2Ref}
      className="z-10 mx-2 flex h-[calc(100vh)] flex-col items-center justify-center"
    >
      <div ref={ref1}>
        <div
          className={`flex flex-col items-center transition-opacity duration-700 ease-in ${
            isVisible1 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="cosmic-text-shadow text-5xl text-white">JOIN NOW &</p>
          <p className="cosmic-text-shadow text-5xl text-white">
            START WORKOUT
          </p>
          <YouTubeEmbed videoId="2Gg6Seob5Mg" />
        </div>
      </div>
    </section>
  );
}
