"use client"
import React, { useState } from "react";
import InitialModal from "./AlertModal";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import { useUser } from "@/app/UserContext"; // User context for authentication
import { Button } from "../ui/button";

const ClientRegistration = () => {
  const [isInitialModalOpen, setIsInitialModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const { setAuthUser } = useUser(); // Context to store user info

  const openLoginModal = () => {
    setIsInitialModalOpen(false);
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const openRegisterModal = () => {
    setIsInitialModalOpen(false);
    
    setIsRegisterModalOpen(true);
  };

  const closeAllModals = () => {
    setIsInitialModalOpen(false);
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(false);
  };

  const openInitialModal = () => {
    setIsInitialModalOpen(true);
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(false);
  }

  return (
    <div>
        <Button className=" btn bg-blue-600 hover:bg-blue-500 " onClick={openInitialModal}>Sign in</Button>
      <InitialModal
        isOpen={isInitialModalOpen}
        onClose={closeAllModals}
        onLoginClick={openLoginModal}
        onRegisterClick={openRegisterModal}
      />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={closeAllModals}
        onSwitchToRegister={openRegisterModal}
        setAuthUser={setAuthUser}
      />
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={closeAllModals}
        onSwitchToLogin={openLoginModal}
      />
    </div>
  );
};

export default ClientRegistration;
