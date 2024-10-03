import axios from "axios";
import toast from "react-hot-toast";
import * as Yup from 'yup';

interface FormData {
    email: string;
    firstName: string;
    lastName: string;
    password: string,
    phone: string;
    address: string,
  }
  
  export const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(3, "First name must be at least 3 characters")
        .max(50, "First name must be at most 50 characters")
        .required("First name is required"),
        
    lastName: Yup.string()
        .min(3, "Last name must be at least 3 characters")
        .max(50, "Last name must be at most 50 characters")
        .required("Last name is required"),
        
        email: Yup.string()
        .email("Invalid email")
        
        .required("Email is required"),
      
        
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .matches(/^[a-zA-Z0-9]+$/, "Password can only contain alphanumeric characters")
        .required("Password is required"),
        
    address: Yup.string()
        .required("Address is required"),
        
    phone: Yup.string()
        .min(10, "Phone number must be at least 10 characters")
        .max(14, "Phone number must be at most 14 characters")
        .required("Phone number is required"),
});

export const registerUser = async (formData: FormData) => {
    try {
        const response = await axios.post("http://localhost:5000/api/register", formData);
      
        return { success: true, message: response.data.message, data: response.data.response };
    } catch (error: any) {
        if (error.response && error.response.data) {
            toast.error(error.response.data.message || "An unexpected error occurred.",{className:'z-[9999]'});
            return { success: false, message: error.response.data.message || "An unexpected error occurred." };
        } else {
            toast.error("An unexpected error occurred.",{className:'z-[9999]'});
            return { success: false, message: "An unexpected error occurred." };
        }
    }
};