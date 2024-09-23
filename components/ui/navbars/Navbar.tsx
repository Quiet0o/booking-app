'use client';

import React, { useState, useEffect } from 'react';
import MobileNavBar from './MobileNavBar';
import TopNavbar from './TopNavbar';
import '@/components/ui/navbars/currentUserInterface';
import { currentUserInterface } from '@/components/ui/navbars/currentUserInterface';
import { AllModals } from '../modals/AllModals';

const Navbar: React.FC<currentUserInterface> = ({ currentUser }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState<boolean>(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsScrolled(window.scrollY > 50);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="hidden md:block">
        <TopNavbar
          setLoginModalOpen={setLoginModalOpen}
          setRegisterModalOpen={setRegisterModalOpen}
          isScrolled={isScrolled}
          currentUser={currentUser}
        />
      </div>

      {/* Show MobileNavBar only on mobile */}
      <div className="block md:hidden">
        <MobileNavBar
          setLoginModalOpen={setLoginModalOpen}
          setRegisterModalOpen={setRegisterModalOpen}
          currentUser={currentUser}
        />
      </div>
      <AllModals
        isLoginModalOpen={isLoginModalOpen}
        setLoginModalOpen={setLoginModalOpen}
        isRegisterModalOpen={isRegisterModalOpen}
        setRegisterModalOpen={setRegisterModalOpen}
      />
    </>
  );
};

export default Navbar;
