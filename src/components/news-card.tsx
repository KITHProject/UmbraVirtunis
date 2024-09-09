import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image, { type StaticImageData } from 'next/image';

type Props = {
  props: { title: string; img: StaticImageData; date: string }
};

export default function NewsCard({ props }: Props) {
  const { title, img, date } = props;

  return (
    <Card className="group relative bg-none border border-gray-600 bg-white bg-opacity-5 px-4 shadow-[0_10px_45px_1px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all duration-300 ease-in-out">
      <div className="pointer-events-none absolute inset-0 before:absolute before:-left-[2px] before:-top-[2px] before:h-2 before:w-2 before:border-l-2 before:border-t-2 before:border-white before:content-[''] after:absolute after:-right-[2px] after:-top-[2px] after:h-2 after:w-2 after:border-r-2 after:border-t-2 after:border-white after:content-['']">
        <div className="pointer-events-none absolute inset-0 before:absolute before:-bottom-[2px] before:-left-[2px] before:h-2 before:w-2 before:border-b-2 before:border-l-2 before:border-white before:content-[''] after:absolute after:-bottom-[2px] after:-right-[2px] after:h-2 after:w-2 after:border-b-2 after:border-r-2 after:border-white after:content-['']"></div>
      </div>
      <CardHeader></CardHeader>
      <CardContent className="relative pb-20">
        <div className="overflow-hidden relative">
          <Image
            src={img}
            alt={title}
            width={200}
            height={200}
            className="transition-all duration-300 ease-in-out group-hover:-translate-y-2"
          />
          <div className="absolute bottom-1 left-[50%] h-[20px] w-[30%] -translate-x-1/2 transform bg-black opacity-60 rounded-xl blur-sm transition-all duration-300 ease-in-out group-hover:blur-md group-hover:w-[40%]"></div>
        </div>
      </CardContent>
      <CardFooter className="absolute bottom-0 left-0 right-0 flex flex-col px-4 pb-4">
        <CardTitle className="text-white">{title}</CardTitle>
        <CardDescription className="text-slate-400">{date}</CardDescription>
      </CardFooter>
    </Card>
  );
}