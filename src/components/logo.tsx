import Link from 'next/link';
import LOGO from '@/assets/logo.png';
import Image from 'next/image';

function Logo() {
  return ( <Link href='/' className='flex items-center justify-center gap-2'><Image src={LOGO} alt="Umbra Virtunis logo" width={900} height={900} className='h-12 w-12'/><span className="text-2xl font-bold text-white">Umbra Virtunis</span></Link>);
}

export default Logo;