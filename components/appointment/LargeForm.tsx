"use client";
import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { FormData, schema } from "@/lib/zodSchema/FormSchemas";
import { zodResolver } from '@hookform/resolvers/zod';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import axios from 'axios';
import { toast } from 'react-hot-toast';

interface LargeFormProps {
  closeAllModals: () => void; // Define the prop type
}
const LargeForm: React.FC<LargeFormProps> = ({ closeAllModals }) => {
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });
  const { reset } = methods;  // Destructure the reset method
  const [step, setStep] = useState(1);
  const onSubmit = async (data: FormData) => {
    try {
      // Log the form data
      console.log("Form Data:", data);
      const response = await axios.post('http://localhost:5000/api/store-patient-form', data,{ withCredentials: true,});
      if (response.status === 201) {
        toast.success("Your meeting schedule request has been sent successfully!", {
          duration: 5000 
        });
        reset();
        setStep(1);
      closeAllModals();
      } else {
        toast.error("Failed to submit the form.");
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      toast.error('An error occurred while submitting the form.');
    }
  };
  const validateStep = async () => {
    const { trigger } = methods;
    if (step === 1) {
      return await trigger('step1');
    }
    if (step === 2) {
      return await trigger('step2');
    }
    if (step === 3) {
      return await trigger('step3');
    }
    return false;
  };
  const nextStep = async () => {
    const isValid = await validateStep();
    if (isValid) {
      setStep(prev => prev + 1);
    }
  };
  const prevStep = () => setStep(prev => prev - 1);
  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      default:
        return null;
    }
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {renderStep()}
        <div className="flex justify-end gap-2 mt-4">
          {step > 1 && <button type="button" className='btn' onClick={prevStep}>Back</button>}
          {step < 3 ? (
            <button className='btn' type="button" onClick={nextStep}>Next</button>
          ) : (
            <button className='btn bg-blue-500 text-white' type="submit">Submit</button>
          )}
        </div>
      </form>
    </FormProvider>
  );
};
export default LargeForm;
