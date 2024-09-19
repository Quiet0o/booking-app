'use client';

import { CircleUserRound, Menu, Search } from 'lucide-react';
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
import { User } from '@prisma/client';
import { signOut } from 'next-auth/react';
import Categories from './Categories';

interface TopNavBarProps {
  setLoginModalOpen: (open: boolean) => void;
  setRegisterModalOpen: (open: boolean) => void;
  isScrolled: boolean;
  currentUser?: User | null;
}

const TopNavbar: React.FC<TopNavBarProps> = ({
  setLoginModalOpen,
  setRegisterModalOpen,
  isScrolled,
  currentUser,
}) => {
  return (
    <>
      <header
        className={`fixed w-full z-10 ${
          isScrolled ? 'shadow-md' : 'shadow-sm'
        } bg-white transition-shadow`}
      >
        <div className="border-b">
          <Container>
            <div className="relative w-full flex justify-between items-center gap-3 md:gap-0 py-2">
              {/* Logo (hidden on mobile) */}
              <div className="flex-1">
                <Image
                  alt="airbnb logo"
                  height={32}
                  width={102}
                  src="/images/logo.png"
                  className="hidden md:block cursor-pointer"
                />
              </div>

              {/* Centered Search Card for desktop */}
              <Card className="absolute left-1/2 transform -translate-x-1/2 w-full md:w-auto cursor-pointer rounded-full border hidden md:flex">
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
              <div className="flex-1 hidden md:flex justify-end items-center gap-3">
                <Button variant="ghost" className="hidden md:block text-sm">
                  Airbnb your home
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="rounded-full py-2 px-3 flex items-center gap-3 border-gray-300 hover:shadow-md transition"
                    >
                      <Menu className="h-5 w-5" />
                      {/* User icon */}
                      <CircleUserRound className="w-7 h-7 bg-gray-200 rounded-full" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {currentUser ? (
                      <>
                        <DropdownMenuItem
                          className="cursor-pointer"
                          onClick={() => {
                            console.log('account');
                          }}
                        >
                          Account
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="cursor-pointer"
                          onClick={() => {
                            signOut();
                          }}
                        >
                          Logout
                        </DropdownMenuItem>
                      </>
                    ) : (
                      <>
                        <DropdownMenuItem
                          className="cursor-pointer"
                          onClick={() => {
                            setLoginModalOpen(true);
                            setRegisterModalOpen(false);
                          }}
                        >
                          Login
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="cursor-pointer"
                          onClick={() => {
                            setRegisterModalOpen(true);
                            setLoginModalOpen(false);
                          }}
                        >
                          Sign Up
                        </DropdownMenuItem>
                      </>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <Categories />
          </Container>
        </div>
      </header>
    </>
  );
};

export default TopNavbar;
