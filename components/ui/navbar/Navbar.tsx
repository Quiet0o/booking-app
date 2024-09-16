'use client';

import React, { useState, useEffect } from 'react';
import { AuthModals } from '@/components/ui/modals/AuthModals';
import MobileNavBar from './MobileNavBar';
import TopNavbar from './TopNavbar';
import '@/components/ui/navbar/currentUserInterface';
import { currentUserInterface } from '@/components/ui/navbar/currentUserInterface';

const Navbar: React.FC<currentUserInterface> = ({ currentUser }) => {
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
          currentUser={currentUser}
          setRegisterModalOpen={setRegisterModalOpen}
        />
      </div>

      <AuthModals
        isLoginModalOpen={isLoginModalOpen}
        setLoginModalOpen={setLoginModalOpen}
        isRegisterModalOpen={isRegisterModalOpen}
        setRegisterModalOpen={setRegisterModalOpen}
      />
    </>
  );
};

export default Navbar;
