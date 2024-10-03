"use client"
import React from 'react';

interface FormData {
    appointmentDate: string;
    appointmentTime: string;
    email: string;
    address: string;
  }
interface AssessmentForm1Props {
  formData: {
    email: string;
  };
  onInputChange: (field: keyof FormData, value: string) => void;
}

const AssessmentForm1: React.FC<AssessmentForm1Props> = ({ formData, onInputChange }) => {
  return (
    <div>
      <label>
        Email:
        <input
          type="email"
          value={formData.email}
          onChange={(e) => onInputChange('email', e.target.value)}
        />
      </label>
    </div>
  );
};

export default AssessmentForm1;
