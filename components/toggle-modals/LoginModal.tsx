"use client"
import React from 'react';
import LoginForm from '../login/form';
import toast from 'react-hot-toast';

interface LoginModalProps {
  modalRef: React.RefObject<HTMLDialogElement>;
  isOpen: boolean;
  closeModal: () => void;
  openRegisterModal: () => void;
}


const LoginModal: React.FC<LoginModalProps> = ({ modalRef, closeModal, openRegisterModal }) => {
  const handleLoginSuccess=()=>{

    closeModal();
  }
  return (
    <dialog id="my_modal_3" className="modal" ref={modalRef}>
      <div className="modal-box">
        <form method="dialog">
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={closeModal}
          >
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Login</h3>
        <LoginForm onLoginSuccess={handleLoginSuccess} />
        <h3 className='my-2'>
          If you don&apos;t have an account, please{" "}
          <span
            className='text-green-600 cursor-pointer'
            onClick={() => {
              closeModal(); // Close the login modal first
              openRegisterModal(); // Open the register modal
            }}
          >
            register
          </span>
        </h3>
      </div>
    </dialog>
  );
};

export default LoginModal;
