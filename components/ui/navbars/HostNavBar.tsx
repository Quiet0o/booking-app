'use client';

import Link from 'next/link';
import { Button } from '../button';
import Image from 'next/image';
import { HomeIcon } from 'lucide-react';

const HostNavBar = () => {
  return (
    <header className="sticky flex justify-center items-center top-0 z-50 bg-white">
      <nav className="container mx-auto px-14">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-rose-500 text-2xl font-bold">
              <Image
                src="/images/airbnb-icon.svg"
                alt="airbnb logo"
                width={30}
                height={30}
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lm:hidden flex justify-between items-center">
            <p className="mr-4 ext-lg font-semibold">Ready to Airbnb it?</p>
            <Button
              size="lg"
              className="w-48 bg-gradient-to-r from-[#E61E4D] to-[#D70466] text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity duration-200"
            >
              <HomeIcon className="mr-2" />
              <p className="text-lg leading-6 font-semibold">Airbnb Setup</p>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HostNavBar;
