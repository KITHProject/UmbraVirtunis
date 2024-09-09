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
  props: {title: string, img: StaticImageData,date: string}
};

function NewsCard({props}: Props) {

  const {title, img,date} = props;

  return ( <Card className='relative bg-none border border-gray-600 bg-white bg-opacity-5 px-4 shadow-[0_10px_45px_1px_rgba(0,0,0,0.4)] backdrop-blur-xl '>
    <div className="z-100 pointer-events-none absolute inset-0 before:absolute before:-left-[2px] before:-top-[2px] before:h-2 before:w-2 before:border-l-2 before:border-t-2 before:border-white before:content-[''] after:absolute after:-right-[2px] after:-top-[2px] after:h-2 after:w-2 after:border-r-2 after:border-t-2 after:border-white after:content-['']">
      <div className="pointer-events-none absolute inset-0 before:absolute before:-bottom-[2px] before:-left-[2px] before:h-2 before:w-2 before:border-b-2 before:border-l-2 before:border-white before:content-[''] after:absolute after:-bottom-[2px] after:-right-[2px] after:h-2 after:w-2 after:border-b-2 after:border-r-2 after:border-white after:content-['']"></div>
    </div>
    <CardHeader>
    </CardHeader>
    <CardContent>
      <Image src={img} alt={title} width={200} height={200}/>
    </CardContent>
    <CardFooter className='flex flex-col'>
      <CardTitle className='text-white'>{title}</CardTitle>
      <CardDescription className='text-slate-400'>{date}</CardDescription>
    </CardFooter>
  </Card>
  );
}

export default NewsCard;