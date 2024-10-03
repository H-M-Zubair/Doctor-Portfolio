import React from 'react';
import RegisterForm from '../register/form';

interface RegisterModalProps {
  modalRef: React.RefObject<HTMLDialogElement>;
  isOpen: boolean;
  closeModal: () => void;
  openLoginModal: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ modalRef, closeModal, openLoginModal }) => {
  return (
    <dialog id="my_modal_4" className="modal" ref={modalRef}>
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
        <h3 className="font-bold text-lg">Register</h3>
        <RegisterForm onRegisterSuccess={openLoginModal}/>
        <h3 className='my-2'>
          Already have an account?{" "}
          <span
            className='text-blue-600 cursor-pointer'
            onClick={() => {
              closeModal(); // Close the register modal
              openLoginModal(); // Open the login modal
            }}
          >
            Login here
          </span>
        </h3>
      </div>
    </dialog>
  );
};

export default RegisterModal;
