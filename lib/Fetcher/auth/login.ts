import axios from "axios";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { useUser } from "@/app/UserContext";
type Credentials = {
  email: string;
  password: string;
};

export const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const loginUser = async (credentials: Credentials) => {
  console.log("Login credentials:", credentials);

  try {
    const response = await axios.post(
      "http://localhost:5000/api/login",
      credentials,{withCredentials: true}
    );

    if (response.status === 200) {
      const { user, message } = response.data;

      return { success: true, message, userData: user };
    } else {
      return { success: false, message: "Login failed" };
    }
  } catch (error: any) {
    if (error.response && error.response.data) {
      console.error("Login failed:", error.response.data);
      toast.error(error.response.data.message, {
        className: "z-[99999] bg-red-500 text-white p-4 rounded-lg",
      });
      return {
        success: false,
        message: error.response.data.message,
        userData: null,
      };
    } else {
      console.error("An unexpected error occurred:", error);
      toast.error("An unexpected error occurred.", {
        style: { zIndex: 999999 },
      });
      return {
        success: false,
        message: "An unexpected error occurred.",
        userData: null,
      };
    }
  }
};
