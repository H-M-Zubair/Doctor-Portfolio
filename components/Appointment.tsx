"use client";
import React, { useState } from "react";
import { useUser } from "@/app/UserContext";
import LargeForm from "./appointment/LargeForm";
import { Button } from "./ui/button";
import InitialModal from "./toggle-auth-models/AlertModal";
import LoginModal from "./toggle-auth-models/LoginModal"; // Importing Login Modal
import RegisterModal from "./toggle-auth-models/RegisterModal"; // Importing Register Modal
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

function Appointment() {
  const [isInitialModalOpen, setIsInitialModalOpen] = useState(false);
  const [isAuthenticatedModalOpen, setAuthenticatedModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const { authUser, setAuthUser } = useUser(); // Assuming setAuthUser is part of your UserContext
  const closeModal = () => setAuthenticatedModalOpen(false);
  const handleClickSchedule = () => {
    if (authUser) {
      console.log("function is called");
      setAuthenticatedModalOpen(true); // This should correspond to the Shadcn dialog
    } else {
      setIsInitialModalOpen(true); // This corresponds to your initial modal
    }
  };

  const closeAllModals = () => {
    setIsInitialModalOpen(false);
    setAuthenticatedModalOpen(false);
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(false);
  };

  const openLoginModal = () => {
    closeAllModals();
    setIsLoginModalOpen(true);
  };

  const openRegisterModal = () => {
    closeAllModals();
    setIsRegisterModalOpen(true);
  };

  return (
    <main>
      <div id="booking" className="my-10 px-4 sm:px-6 lg:px-8">
        <div className="mt-16 max-w-3xl mx-auto">
          <h1 className="text-center font-bold text-4xl text-gray-900 mb-6">
            Book an Appointment
          </h1>
          <p className="text-center md:text-lg">
            Welcome! I am your partner in mental well-being. Let&apos;s work
            together to address your concerns and explore tailored treatment
            options that fit your unique needs. Scheduling an appointment with
            me means setting aside a dedicated time for us to connect in a
            private and supportive setting. Take the first step towards a
            healthier, happier you—book your consultation today and let&apos;s
            embark on this journey towards better mental health together.
          </p>

          <div className="w-full flex justify-center my-10">
            <Button
              className="btn bg-blue-600 text-white animate-pulse hover:bg-blue-500"
              onClick={handleClickSchedule}
            >
              Schedule meeting
            </Button>

            <InitialModal
              isOpen={isInitialModalOpen}
              onClose={closeAllModals}
              onLoginClick={openLoginModal}
              onRegisterClick={openRegisterModal}
            />

            {/* Authenticated User Modal */}
            {isAuthenticatedModalOpen && (
              <div>
                <Dialog
                  open={isAuthenticatedModalOpen}
                  onOpenChange={setAuthenticatedModalOpen}
                >
                  <DialogTrigger>Open</DialogTrigger>
                  <DialogContent className="max-w-full max-h-[90vh] overflow-auto p-4 md:max-w-3xl rounded-lg bg-white">
                    <h1 className="text-center font-bold text-lg">
                      Appointment Form
                    </h1>
                    <LargeForm closeAllModals={closeAllModals} />
                  </DialogContent>
                </Dialog>
              </div>
            )}
            {isLoginModalOpen && (
              <LoginModal
                isOpen={isLoginModalOpen}
                onClose={closeAllModals}
                onSwitchToRegister={openRegisterModal} // Providing required prop
                setAuthUser={setAuthUser} // Providing required prop
              />
            )}
            {isRegisterModalOpen && (
              <RegisterModal
                isOpen={isRegisterModalOpen}
                onClose={closeAllModals}
                onSwitchToLogin={openLoginModal} // Providing required prop
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Appointment;
