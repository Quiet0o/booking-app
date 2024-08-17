"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CircleUser, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Modal } from "@/components/ui/modals/modal";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  function createLoginModal() {
    return (
      <>
        <Modal isOpen={isEditOpen} setIsOpen={setIsEditOpen} title="">
          <Card className="mx-auto max-w-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Login</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      href="#"
                      className="ml-auto inline-block text-sm underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" variant="destructive" className="w-full">
                  Login
                </Button>
                <Button variant="outline" className="w-full">
                  Login with Google
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="#" className="underline">
                  Sign up
                </Link>
              </div>
            </CardContent>
          </Card>
        </Modal>
      </>
    );
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 flex items-center justify-between bg-white transition-all duration-500 ease-in-out ${
        isScrolled ? "shadow-md pt-5 pb-5 min-h-[7.5rem]" : "min-h-[7rem]"
      }`}
    >
      {createLoginModal()}

      {/* Brand Link */}
      <Link href="/" className="hidden sm:flex items-center gap-2 pl-4 md:pl-6">
        <span className="text-2xl font-semibold text-gray-800">BookApp</span>
      </Link>

      <nav className="md:flex md:flex-1 md:justify-center">
        <div className="flex items-center gap-6 sm:gap-8 rounded-full border px-4 sm:px-6 py-2 sm:py-3 shadow-md">
          <Link href="#">
            {!isScrolled ? "Gdzie" : "Gdziekolwiek"}
            {!isScrolled ? <br /> : <></>}
            {!isScrolled ? (
              <span className="text-xs sm:text-sm font-semibold text-gray-500">
                wyszukaj kierunki
              </span>
            ) : (
              <></>
            )}
          </Link>
          <Separator orientation="vertical" />
          {!isScrolled ? (
            <Link href="#">
              Przyjazd
              <br />
              <span className="text-xs sm:text-sm font-semibold text-gray-500">
                Dodaj daty
              </span>
            </Link>
          ) : (
            <></>
          )}
          {!isScrolled ? <Separator orientation="vertical" /> : <></>}
          {!isScrolled ? (
            <Link href="#">
              Wyjazd
              <br />
              <span className="text-xs sm:text-sm font-semibold text-gray-500">
                Dodaj daty
              </span>
            </Link>
          ) : (
            <></>
          )}
          {isScrolled ? (
            <Button variant="ghost">Dowolny tydzień</Button>
          ) : (
            <></>
          )}
          <Separator orientation="vertical" />
          <Link href="#">
            {!isScrolled ? "Kto" : "Dodaj gości"}
            {!isScrolled ? <br /> : <></>}
            {!isScrolled ? (
              <span className="text-xs sm:text-sm font-semibold text-gray-500">
                Dodaj gości
              </span>
            ) : (
              <></>
            )}
          </Link>
          <Button variant="destructive" className="rounded-full" size="icon">
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
