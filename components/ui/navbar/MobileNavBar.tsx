'use client';

import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Search, Heart, User } from 'lucide-react';

interface MobileNavBarProps {
  setLoginModalOpen: (open: boolean) => void;
  setRegisterModalOpen: (open: boolean) => void;
}

const MobileNavBar: React.FC<MobileNavBarProps> = ({
  setLoginModalOpen,
  setRegisterModalOpen,
}) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-10 bg-white border-t md:hidden">
      <div className="flex justify-between items-center px-6 py-2">
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
    </nav>
  );
};

export default MobileNavBar;
