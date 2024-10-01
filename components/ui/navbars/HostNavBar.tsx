'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '../button';
import Image from 'next/image';
import { HomeIcon } from 'lucide-react';

const HostNavBar = () => {
  const [showText, setShowText] = useState(false);
  const [sroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);

      if (window.scrollY <= sroll) {
        setShowText(true); // Show text when scrolled page up
      } else {
        setShowText(false); // Hide text when scrolled down
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sroll]);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="container mx-auto px-4 lg:px-14">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo - centered on mobile, left-aligned on desktop */}
          <div className="flex-1 flex justify-start">
            <Link href="/">
              <Image
                src="/images/airbnb-icon.svg"
                alt="airbnb logo"
                width={30}
                height={30}
              />
            </Link>
          </div>

          {/* Desktop: Ready to Airbnb it? text and button */}
          <div className="hidden lg:flex items-center">
            <p className="mr-4 text-lg font-semibold">Ready to Airbnb it?</p>
            <Button
              size="lg"
              className="w-48 bg-gradient-to-r from-[#E61E4D] to-[#D70466] text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity duration-200"
            >
              <HomeIcon className="mr-2" />
              <span className="text-lg leading-6 font-semibold">
                Airbnb Setup
              </span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile: Fixed bottom button with text when at the top */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        {showText && (
          <p className="text-center mb-2 text-lg font-semibold">
            Ready to Airbnb it?
          </p>
        )}
        <Button
          size="lg"
          className="w-full bg-gradient-to-r from-[#FF385C] to-[#BD1E59] text-white font-semibold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity duration-200"
        >
          <HomeIcon className="mr-2" />
          <span className="text-lg leading-6 font-semibold">Airbnb Setup</span>
        </Button>
      </div>
    </header>
  );
};

export default HostNavBar;
