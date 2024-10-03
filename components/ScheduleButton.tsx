// components/ScheduleButton.tsx
"use client";
import React from "react";
import { useUser } from "@/app/UserContext";
import LargeForm from "./appointment/LargeForm";

const ScheduleButton = () => {
  const { authUser } = useUser();

  const handleClickSchedule = () => {
    if (authUser) {
      const modal = document.getElementById("my_modal_5") as HTMLDialogElement | null;
      if (modal) modal.showModal();
    } else {
      const modal = document.getElementById("my_modal_1") as HTMLDialogElement | null;
      if (modal) modal.showModal();
    }
  };

  return (
    <>
      <button
        className="btn bg-blue-600 text-white animate-pulse hover:bg-blue-500"
        onClick={handleClickSchedule}
      >
        Schedule meeting
      </button>

      {/* Authenticated User Modal */}
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">Appointment Form</h3>
            <button
              className="btn btn-sm btn-circle btn-ghost"
              onClick={() => {
                const modal = document.getElementById("my_modal_5") as HTMLDialogElement | null;
                if (modal) modal.close();
              }}
            >
              ✕
            </button>
          </div>
          <p className="py-4">Fill out the details below</p>
          <LargeForm />
        </div>
      </dialog>

      {/* Unauthenticated User Modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Login Required</h3>
          <p className="py-4">Please log in to schedule an appointment.</p>
          <div className="modal-action">
            <button
              className="btn"
              onClick={() => {
                const modal = document.getElementById("my_modal_1") as HTMLDialogElement | null;
                if (modal) modal.close();
              }}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ScheduleButton;
