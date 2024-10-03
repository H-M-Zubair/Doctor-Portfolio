"use client"
import React, { useState } from 'react';
import AppointmentDetailsForm from './First';
import AssessmentForm1 from './second';
import AssessmentForm2 from './third';

interface FormData {
  appointmentDate: string;
  appointmentTime: string;
  email: string;
  address: string;
}

const MyFormComponent: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    appointmentDate: '',
    appointmentTime: '',
    email: '',
    address: '',
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleNextClick = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Handle the final submit
      console.log('Final Data:', formData);
      const modal = document.getElementById("my_modal_5") as HTMLDialogElement | null;
      if (modal) modal.close();
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <AppointmentDetailsForm formData={formData} onInputChange={handleInputChange} />;
      case 2:
        return <AssessmentForm1 formData={formData} onInputChange={handleInputChange} />;
      case 3:
        return <AssessmentForm2 formData={formData} onInputChange={handleInputChange} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full flex justify-center my-10 mt-20">
      <button
        className="btn bg-blue-600 text-white animate-pulse hover:bg-blue-500"
        onClick={() => {
          const modal = document.getElementById("my_modal_5") as HTMLDialogElement | null;
          if (modal) modal.showModal();
        }}
      >
        Schedule meeting
      </button>
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">
              {currentStep === 1
                ? "Step 1: Appointment Details"
                : currentStep === 2
                ? "Step 2: Assessment"
                : "Step 3: Assessment 2"}
            </h3>
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
          {renderStepContent()}
          <div className="flex justify-end gap-2 mt-4">
            {currentStep > 1 && (
              <button
                className="btn"
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                Back
              </button>
            )}
            <button
              className="btn"
              onClick={handleNextClick}
            >
              {currentStep < 3 ? 'Next' : 'Submit'}
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyFormComponent;
