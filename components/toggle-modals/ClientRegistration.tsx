"use client"
import React, { useState, useRef } from 'react';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
interface ClientRegistrationProps {
  handleLogin: (userData: object) => void;
}
const ClientRegistration: React.FC<ClientRegistrationProps> = ({ handleLogin }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState<boolean>(false);
  const loginModalRef = useRef<HTMLDialogElement>(null);
  const registerModalRef = useRef<HTMLDialogElement>(null);

  const openLoginModal = () => {
    if (loginModalRef.current) {
      loginModalRef.current.showModal();
      setIsLoginModalOpen(true);
    }
    if (registerModalRef.current) {
      registerModalRef.current.close(); // Ensure the register modal is closed
      setIsRegisterModalOpen(false);
    }
  };

  const closeLoginModal = () => {
    if (loginModalRef.current) {
      loginModalRef.current.close();
      setIsLoginModalOpen(false);
    }
  };

  const openRegisterModal = () => {
    if (registerModalRef.current) {
      registerModalRef.current.showModal();
      setIsRegisterModalOpen(true);
    }
    if (loginModalRef.current) {
      loginModalRef.current.close(); // Ensure the login modal is closed
      setIsLoginModalOpen(false);
    }
  };

  const closeRegisterModal = () => {
    if (registerModalRef.current) {
      registerModalRef.current.close();
      setIsRegisterModalOpen(false);
    }
  };

  return (
    <div className="">
      <button
        className="btn bg-blue-600 hover:bg-blue-500 text-white"
        onClick={() => {
          const alertModal = document.getElementById('my_modal_1') as HTMLDialogElement;
          if (alertModal) {
            alertModal.showModal();
          }
        }}
      >
        Sign in
      </button>

      <dialog id="my_modal_1" className="modal z-50 ">
        <div className="modal-box md:relative">
          <button
            className="absolute top-3 right-3 text-black"
            onClick={() => {
              const alertModal = document.getElementById('my_modal_1') as HTMLDialogElement;
              if (alertModal) {
                alertModal.close();
              }
            }}
          >
            ✕
          </button>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Create an account to schedule your appointment or login if you already have an account</p>
          <div className="modal-action">
            <form method="dialog" className="flex gap-2">
              <button
                type="button"
                className="btn bg-blue-500 text-white"
                onClick={() => {
                  openLoginModal();
                  const alertModal = document.getElementById('my_modal_1') as HTMLDialogElement;
                  if (alertModal) {
                    alertModal.close();
                  }
                }}
              >
                Login
              </button>
              <button
                type="button"
                className="btn bg-green-500 text-white"
                onClick={() => {
                  openRegisterModal();
                  const alertModal = document.getElementById('my_modal_1') as HTMLDialogElement;
                  if (alertModal) {
                    alertModal.close();
                  }
                }}
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </dialog>

      <LoginModal
        modalRef={loginModalRef}
        isOpen={isLoginModalOpen}
        closeModal={closeLoginModal}
        openRegisterModal={openRegisterModal} // Pass the function to open the register modal
      />
      <RegisterModal
        modalRef={registerModalRef}
        isOpen={isRegisterModalOpen}
        closeModal={closeRegisterModal}
        openLoginModal={openLoginModal} // Pass the function to open the login modal
      />
    </div>
  );
};

export default ClientRegistration;
