'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CircleUser, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { LoginModal } from '../modals/LoginModal';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 flex items-center justify-between bg-white transition-all duration-500 ease-in-out ${
        isScrolled ? 'shadow-md pt-5 pb-5 min-h-[7.5rem]' : 'min-h-[7rem]'
      }`}
    >
      {LoginModal({
        isOpen: isEditOpen,
        setIsOpen: setIsEditOpen,
      })}

      {/* Brand Link */}
      <Link href="/" className="hidden sm:flex items-center gap-2 pl-4 md:pl-6">
        <span className="text-2xl font-semibold text-gray-800">BookApp</span>
      </Link>

      <nav className="md:flex md:flex-1 md:justify-center">
        <div className="flex items-center gap-6 sm:gap-8 rounded-full border px-4 sm:px-6 py-2 sm:py-3 shadow-md">
          <Link href="/">
            {!isScrolled ? 'Gdzie' : 'Gdziekolwiek'}
            {!isScrolled && (
              <span className="text-xs sm:text-sm font-semibold text-gray-500">
                wyszukaj kierunki
              </span>
            )}
          </Link>
          <Separator orientation="vertical" />
          {!isScrolled && (
            <>
              <Link href="/">
                Przyjazd
                <br />
                <span className="text-xs sm:text-sm font-semibold text-gray-500">
                  Dodaj daty
                </span>
              </Link>
              <Separator orientation="vertical" />
              <Link href="/">
                Wyjazd
                <br />
                <span className="text-xs sm:text-sm font-semibold text-gray-500">
                  Dodaj daty
                </span>
              </Link>
            </>
          )}
          {isScrolled && <Button variant="ghost">Dowolny tydzień</Button>}
          <Separator orientation="vertical" />
          <Link href="/">
            {!isScrolled ? 'Kto' : 'Dodaj gości'}
            {!isScrolled && (
              <span className="text-xs sm:text-sm font-semibold text-gray-500">
                Dodaj gości
              </span>
            )}
          </Link>
          <Button
            variant="destructive"
            className="rounded-full"
            size="icon"
            type="button"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </nav>
      <div className="hidden sm:flex items-center gap-4 pr-4 md:pr-6">
        <Button variant="link">Wynajmij swój dom na Airbnb</Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <CircleUser className="h-8 w-8" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <button
                onClick={() => {
                  setIsEditOpen(true);
                }}
                className="w-full justify-start flex rounded-md p-2 transition-all duration-75 hover:bg-neutral-100"
                type="button"
              >
                Login
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
