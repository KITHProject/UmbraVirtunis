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
import placeholder from '@/assets/placeholder.svg';
import Image from 'next/image';

const carouselItems = [
  {
    title: 'GAME OVERVIEW',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum condimentum est vel mollis. Fusce at erat velit. Duis interdum facilisis tristique.',
    image: placeholder.src,
  },
  {
    title: 'QUESTS',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum condimentum est vel mollis. Fusce at erat velit. Duis interdum facilisis tristique. Vestibulum imperdiet varius est at aliquet. Etiam interdum.',
    image: placeholder.src,
  },
  {
    title: 'GUILDS',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum condimentum est vel mollis. Fusce at erat velit. Vestibulum imperdiet varius est at aliquet. Etiam interdum.',
    image: placeholder.src,
  },

  // Add more items as needed
];

export default function GameOverviewCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative my-20 flex w-full items-center justify-center overflow-hidden text-white">
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
            <CarouselItem key={index} className="w-full px-8 pl-0">
              <div className="grid grid-cols-1 items-center gap-8 p-8 md:grid-cols-5">
                <div className="col-span-3 space-y-6">
                  <h2 className="cosmic-text-shadow text-5xl text-white">
                    {item.title}
                  </h2>
                  <p className="text-2xl text-white">{item.description}</p>
                  <Button
                    variant={'futuristic'}
                    className="text-md relative mt-6 border border-transparent font-thin text-white transition-all duration-300 ease-in-out hover:border-white"
                  >
                    <div className="z-100 pointer-events-none absolute inset-0 before:absolute before:-left-[2px] before:-top-[2px] before:h-2 before:w-2 before:border-l-2 before:border-t-2 before:border-white before:content-[''] after:absolute after:-right-[2px] after:-top-[2px] after:h-2 after:w-2 after:border-r-2 after:border-t-2 after:border-white after:content-['']">
                      <div className="pointer-events-none absolute inset-0 before:absolute before:-bottom-[2px] before:-left-[2px] before:h-2 before:w-2 before:border-b-2 before:border-l-2 before:border-white before:content-[''] after:absolute after:-bottom-[2px] after:-right-[2px] after:h-2 after:w-2 after:border-b-2 after:border-r-2 after:border-white after:content-['']"></div>
                    </div>
                    READ MORE
                  </Button>
                </div>
                <div className="relative col-span-2">
                  <div className="-my-8 flex h-72">
                    <Image src={item.image} alt={'Visual'} fill />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 border-none bg-transparent hover:bg-transparent" />
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 border-none bg-transparent hover:bg-transparent" />
        <CarouselDots />
      </Carousel>
    </div>
  );
}
