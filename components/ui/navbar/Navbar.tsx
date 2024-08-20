'use client';

import React, { useState, useEffect } from 'react';
import { Menu, Search } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Container from '../Container';
import Image from 'next/image';
import { AuthModals } from '@/components/ui/modals/AuthModals';
import MobileNavBar from './MobileNavBar';

const Navbar = ({
  setLoginModalOpen,
  setRegisterModalOpen,
  isScrolled,
}: {
  setLoginModalOpen: (open: boolean) => void;
  setRegisterModalOpen: (open: boolean) => void;
  isScrolled: boolean;
}) => (
  <header
    className={`fixed w-full z-10 ${
      isScrolled ? 'shadow-md' : 'shadow-sm'
    } bg-white transition-shadow`}
  >
    <div className="border-b">
      <Container>
        <div className="flex justify-between items-center gap-3 md:gap-0 py-2">
          {/* Logo (hidden on mobile) */}
          <Image
            alt="airbnb logo"
            height={32}
            width={102}
            src="/images/logo.png"
            className="hidden md:block cursor-pointer"
          />

          {/* Search Card for desktop */}
          <Card className="w-full md:w-auto cursor-pointer rounded-full border hidden md:flex">
            <CardContent className="p-1 flex items-center justify-between">
              <div className="text-sm font-semibold px-4">Anywhere</div>
              <Separator
                orientation="vertical"
                className="h-6 w-px sm:block mx-2 bg-gray-200"
              />
              <div className="hidden sm:block text-sm font-semibold px-4 text-center flex-1">
                Any week
              </div>
              <Separator
                orientation="vertical"
                className="h-6 w-px sm:block mx-2 bg-gray-200"
              />
              <div className="text-sm pl-4 pr-2 text-gray-600 flex items-center gap-3">
                <div className="hidden sm:block">Add guests</div>
                <Button
                  variant="destructive"
                  size="icon"
                  className="rounded-full p-2"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* User Menu (hidden on mobile) */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="hidden md:block text-sm">
              Airbnb your home
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full p-2 md:p-1 hover:shadow-md"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => {
                    setLoginModalOpen(true);
                    setRegisterModalOpen(false);
                  }}
                >
                  Login
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setRegisterModalOpen(true);
                    setLoginModalOpen(false);
                  }}
                >
                  Sign Up
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </Container>
    </div>
  </header>
);

function MainLayout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState<boolean>(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        setLoginModalOpen={setLoginModalOpen}
        setRegisterModalOpen={setRegisterModalOpen}
        isScrolled={isScrolled}
      />
      <MobileNavBar
        setLoginModalOpen={setLoginModalOpen}
        setRegisterModalOpen={setRegisterModalOpen}
      />
      <AuthModals
        isLoginModalOpen={isLoginModalOpen}
        setLoginModalOpen={setLoginModalOpen}
        isRegisterModalOpen={isRegisterModalOpen}
        setRegisterModalOpen={setRegisterModalOpen}
      />
    </>
  );
}

export default MainLayout;
