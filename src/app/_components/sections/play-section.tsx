'use client';

type Props = {
  section1Ref: React.RefObject<HTMLDivElement>
  section2Ref: React.RefObject<HTMLDivElement>
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void
};

export default function PlaySection({
  section1Ref,
  section2Ref,
  scrollToSection,
}: Props) {
  return (
    <section
      ref={section1Ref}
      className="flex h-[calc(100vh-64px)] flex-col items-center justify-center gap-12"
    >
      <h1 className="cosmic-text-shadow text-center text-6xl text-white">
        BEGIN YOUR JOURNEY
      </h1>
      <div
        onClick={() => scrollToSection(section2Ref)}
        className="mouse cosmic-text-shadow mt-4 cursor-pointer"
      />
    </section>
  );
}
