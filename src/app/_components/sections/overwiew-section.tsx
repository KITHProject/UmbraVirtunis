import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const carouselItems = [
  {
    title: 'GAME OVERVIEW',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum condimentum est vel mollis. Fusce at erat velit. Duis interdum facilisis tristique.',
    image: '/overview1.png',
  },
  {
    title: 'QUESTS',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum condimentum est vel mollis. Fusce at erat velit. Duis interdum facilisis tristique. Vestibulum imperdiet varius est at aliquet. Etiam interdum.',
    image: '/overview2.png',
  },
  {
    title: 'GUILDS',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum condimentum est vel mollis. Fusce at erat velit. Vestibulum imperdiet varius est at aliquet. Etiam interdum.',
    image: '/overview3.png',
  },
  // Add more items as needed
];

export default function GameOverviewCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative my-8 md:my-20 flex w-full items-center justify-center overflow-hidden text-white">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
          watchDrag: false,
        }}
        className="w-full"
        setApi={(api) => {
          api?.on('select', () => {
            setCurrentSlide(api.selectedScrollSnap());
          });
        }}
      >
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem key={index} className="w-full pl-4  md:pl-8 sm:pr-4">
              <div className="flex flex-col md:grid md:grid-cols-5 items-center gap-4 md:gap-6 p-4 md:p-8">
                <div className="w-full md:col-span-3 space-y-4 md:space-y-6">
                  <h2 className="cosmic-text-shadow text-3xl md:text-5xl text-white">
                    {item.title}
                  </h2>
                  <p className="text-base md:text-2xl text-white">{item.description}</p>
                  <Button
                    variant="futuristic"
                    className="text-sm md:text-md relative mt-4 md:mt-6 border border-transparent font-thin text-white transition-all duration-300 ease-in-out hover:border-white  md:w-auto"
                  >
                    <div className="z-100 pointer-events-none absolute inset-0 before:absolute before:-left-[2px] before:-top-[2px] before:h-2 before:w-2 before:border-l-2 before:border-t-2 before:border-white before:content-[''] after:absolute after:-right-[2px] after:-top-[2px] after:h-2 after:w-2 after:border-r-2 after:border-t-2 after:border-white after:content-['']">
                      <div className="pointer-events-none absolute inset-0 before:absolute before:-bottom-[2px] before:-left-[2px] before:h-2 before:w-2 before:border-b-2 before:border-l-2 before:border-white before:content-[''] after:absolute after:-bottom-[2px] after:-right-[2px] after:h-2 after:w-2 after:border-b-2 after:border-r-2 after:border-white after:content-['']"></div>
                    </div>
                    READ MORE
                  </Button>
                </div>
                <div className="relative w-full md:col-span-2 aspect-[3/2] overflow-hidden rounded-lg shadow-[0_0px_10px_5px_rgba(0,0,0,0.4)] mt-4 md:mt-0">
                  <Image
                    src={item.image}
                    alt={`Overview of ${item.title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-1 top-1/2 -translate-y-1/2 border-none bg-transparent hover:bg-transparent max-sm:hidden" />
        <CarouselNext className="absolute -right-1 top-1/2 -translate-y-1/2 border-none bg-transparent hover:bg-transparent max-sm:hidden" />
        <CarouselDots />
      </Carousel>
    </div>
  );
}