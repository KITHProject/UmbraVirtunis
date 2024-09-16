'use client';

import { useRef } from 'react';
import InformationSection from './_components/sections/information-section';
import PlaySection from './_components/sections/play-section';
import CharactersSection from './_components/sections/characters-section';
import DiscordSection from './_components/sections/discord-section';
import NewsletterSection from './_components/sections/newsletter-section';
import OverviewSection from './_components/sections/overwiew-section';
import NewsSection from './_components/sections/news-section';

export default function HomePage() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <PlaySection
        section1Ref={section1Ref}
        section2Ref={section2Ref}
        scrollToSection={scrollToSection}
      />
      <InformationSection section2Ref={section2Ref} />
      <CharactersSection />
      <OverviewSection />
      {/* <FeaturesSection/> */}
      <DiscordSection />
      <NewsSection />
      <NewsletterSection />
    </div>
  );
}
