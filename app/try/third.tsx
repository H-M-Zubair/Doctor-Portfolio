"use client"
import React from 'react';

interface FormData {
    appointmentDate: string;
    appointmentTime: string;
    email: string;
    address: string;
  }
interface AssessmentForm2Props {
  formData: {
    address: string;
  };
  onInputChange: (field: keyof FormData, value: string) => void;
}

const AssessmentForm2: React.FC<AssessmentForm2Props> = ({ formData, onInputChange }) => {
  return (
    <div>
      <label>
        Address:
        <input
          type="text"
          value={formData.address}
          onChange={(e) => onInputChange('address', e.target.value)}
        />
      </label>
    </div>
  );
};

export default AssessmentForm2;
