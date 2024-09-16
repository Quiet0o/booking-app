'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Search, User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface MobileNavBarProps {
  setLoginModalOpen: (open: boolean) => void;
  setRegisterModalOpen: (open: boolean) => void;
}

const MobileNavBar: React.FC<MobileNavBarProps> = ({
  setLoginModalOpen,
  setRegisterModalOpen,
}) => {
  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 bg-white z-50"
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
      >
        <div className="flex items-center rounded-full shadow-md p-4 pt-5 mx-4 mt-2">
          <Button variant="ghost" size="icon" className="mr-2">
            <Search className="h-6 w-6" />
          </Button>
          <div className="flex flex-col text-sm font-semibold">
            <div className="mb-1">Where to?</div>
            <div className="flex text-gray-600">
              <span className="mr-1 text-xs">Anywhere</span>
              <span className="mx-1 text-xs">•</span>
              <span className="mr-1 text-xs">Any week</span>
              <span className="mx-1 text-xs">•</span>
              <span className="mx-1 text-xs">Add guests</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Section */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t z-50">
        <div className="flex justify-around items-center px-6 py-2">
          <Button
            variant="ghost"
            size="icon"
            className="flex flex-col items-center hover:bg-inherit"
          >
            <Search className="h-6 w-6" />
            <span className="text-xs mt-1">Search</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="flex flex-col items-center hover:bg-inherit"
          >
            <Heart className="h-6 w-6" />
            <span className="text-xs mt-1">Favorites</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="flex flex-col items-center hover:bg-inherit"
              >
                <User className="h-6 w-6" />
                <span className="text-xs mt-1">Account</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
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
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
};

export default MobileNavBar;
