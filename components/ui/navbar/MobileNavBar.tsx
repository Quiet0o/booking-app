'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Menu, Search, User } from 'lucide-react';
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
  const viewportHeight = window.innerHeight;

  return (
    <nav
      style={{ height: `${viewportHeight}px` }}
      className="fixed bottom-0 left-0 right-0 z-10 bg-white border-t md:hidden"
    >
      <div
        className="flex flex-col"
        style={{ minHeight: '100vh', overflow: 'auto' }}
      >
        {/* Search Section */}
        <div className="flex-grow flex flex-col px-4 pt-4 border-b">
          {' '}
          {/* Adjust pt for top padding */}
          <div className="flex items-center rounded-lg shadow-md bg-white p-4">
            <Button variant="ghost" size="icon" className="mr-2">
              <Search className="h-6 w-6" />
            </Button>
            <div className="flex flex-col text-sm font-semibold">
              <div className="mb-1">Where to?</div>
              <div className="flex text-gray-600">
                <span className="mr-1">Anywhere</span>
                <span className="mx-1">•</span>
                <span className="mr-1">Any week</span>
                <span className="mx-1">•</span>
                <span>Add guests</span>
              </div>
            </div>
          </div>
        </div>

        {/* User Menu */}
        <div className="flex justify-between items-center px-6 py-2 border-t">
          <Button variant="ghost" size="icon">
            <Search className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Heart className="h-6 w-6" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-6 w-6" />
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
    </nav>
  );
};

export default MobileNavBar;
