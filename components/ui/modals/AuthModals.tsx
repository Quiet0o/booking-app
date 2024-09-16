import { Dispatch, SetStateAction } from 'react';
import { LoginModal } from './LoginModal';
import { RegisterModal } from './RegisterModal';

interface AuthModalsProps {
  isLoginModalOpen: boolean;
  setLoginModalOpen: Dispatch<SetStateAction<boolean>>;
  isRegisterModalOpen: boolean;
  setRegisterModalOpen: Dispatch<SetStateAction<boolean>>;
}

export function AuthModals({
  isLoginModalOpen,
  setLoginModalOpen,
  isRegisterModalOpen,
  setRegisterModalOpen,
}: AuthModalsProps) {
  return (
    <>
      <LoginModal
        isOpen={isLoginModalOpen}
        isModalVisible={setLoginModalOpen}
        onSwitchToRegister={() => {
          setLoginModalOpen(false);
          setRegisterModalOpen(true);
        }}
      />
      <RegisterModal
        isOpen={isRegisterModalOpen}
        isModalVisible={setRegisterModalOpen}
        onSwitchToLogin={() => {
          setRegisterModalOpen(false);
          setLoginModalOpen(true);
        }}
      />
    </>
  );
}
