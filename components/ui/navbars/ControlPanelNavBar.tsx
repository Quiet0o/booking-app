'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function ControlPanelNavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-rose-500 text-2xl font-bold">
              airbnb
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="/host/homes">Today</NavLink>
            <NavLink href="/host/calendar">Calendar</NavLink>
            <NavLink href="/host/inbox">Inbox</NavLink>
            <NavLink href="/host/insights">Insights</NavLink>
            <NavLink href="/host/menu">Menu</NavLink>
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Account</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <MobileNavLink href="/host/homes">Today</MobileNavLink>
              <MobileNavLink href="/host/calendar">Calendar</MobileNavLink>
              <MobileNavLink href="/host/inbox">Inbox</MobileNavLink>
              <MobileNavLink href="/host/insights">Insights</MobileNavLink>
              <MobileNavLink href="/host/menu">Menu</MobileNavLink>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <User className="h-10 w-10 rounded-full" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium">User Name</div>
                  <div className="text-sm font-medium text-gray-500">
                    user@example.com
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <MobileNavLink href="/profile">Profile</MobileNavLink>
                <MobileNavLink href="/account">Account</MobileNavLink>
                <MobileNavLink href="/logout">Log out</MobileNavLink>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-gray-700 hover:text-rose-500 px-3 py-2 rounded-md text-sm font-medium"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-gray-700 hover:text-rose-500 block px-3 py-2 rounded-md text-base font-medium"
    >
      {children}
    </Link>
  );
}
