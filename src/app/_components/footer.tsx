import Link from 'next/link';
import Image from 'next/image';
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitch,
  Twitter,
  Youtube,
} from 'lucide-react';
import Logo from '@/components/logo';
import token from '@/assets/cosmic-shard.png';

export default function Footer() {
  return (
    <footer className="bg-black/80 px-4 py-8 shadow-[0_10px_45px_1px_rgba(0,0,0,0.4)] md:px-8">
      <div className="container mx-auto">
        <div className="mb-8 flex flex-col items-start justify-between md:flex-row">
          <div className="mb-6 md:mb-0">
            <Logo />
            <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <Link href="#" className="text-white hover:text-gray-300">
                Staking
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                News
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                FAQ
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                Whitepaper
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                Contributors
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                Jobs
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                Brand Guidelines
              </Link>
            </div>
          </div>

          <div className="mb-6 flex flex-col items-center md:mb-0">
            <Image src={token.src} alt="UMB Token" width={100} height={100} />
            <div className="text-center text-white">
              <p className="font-bold">UMB Price</p>
              <p className="text-2xl font-bold">$37.31</p>
              <p className="text-red-500">↓ -2.91%</p>
            </div>
          </div>

          <div className="mb-6 text-white md:mb-0">
            <p className="mb-2 font-bold">Available on</p>
            <div className="grid grid-cols-3 gap-4">
              {['Binance', 'Sushi', 'KuCoin', '1inch'].map((exchange) => (
                <Image
                  key={exchange}
                  src={token.src}
                  alt={exchange}
                  width={40}
                  height={40}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between border-t border-white pt-4 text-white md:flex-row">
          <div className="mb-4 text-sm md:mb-0">
            <Link href="#" className="hover:text-gray-300">
              Terms and Conditions
            </Link>
            <Link href="#" className="ml-4 hover:text-gray-300">
              Privacy Policy
            </Link>
            <Link href="#" className="ml-4 hover:text-gray-300">
              GDPR Notice
            </Link>
          </div>
          <div className="mb-4 text-sm md:mb-0">
            Umbra Virtunis © 2024. All rights reserved
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-gray-300">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Youtube size={20} />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Twitch size={20} />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
