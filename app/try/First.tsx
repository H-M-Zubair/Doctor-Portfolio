"use client"
import React from 'react';

interface FormData {
    appointmentDate: string;
    appointmentTime: string;
    email: string;
    address: string;
  }
interface AppointmentDetailsFormProps {
  formData: {
    appointmentDate: string;
    appointmentTime: string;
  };
  onInputChange: (field: keyof FormData, value: string) => void;
}

const AppointmentDetailsForm: React.FC<AppointmentDetailsFormProps> = ({ formData, onInputChange }) => {
  return (
    <div>
      <label>
        Appointment Date:
        <input
          type="date"
          value={formData.appointmentDate}
          onChange={(e) => onInputChange('appointmentDate', e.target.value)}
        />
      </label>
      <label>
        Appointment Time:
        <input
          type="time"
          value={formData.appointmentTime}
          onChange={(e) => onInputChange('appointmentTime', e.target.value)}
        />
      </label>
    </div>
  );
};

export default AppointmentDetailsForm;
