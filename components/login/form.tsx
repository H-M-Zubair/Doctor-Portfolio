"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Formik, Field, Form, ErrorMessage } from "formik";

import { loginUser } from "@/lib/Fetcher/auth/login";
import { validationSchema } from "@/lib/Fetcher/auth/login";
import { useUser } from "@/app/UserContext";

interface LoginFormProps {
  onLoginSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);


  const { setAuthUser } = useUser();
  const handleSubmit = async (
    values: { email: string; password: string },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
) => {
    setIsLoading(true);
    try {
        // Send form data to your backend
        const response = await loginUser(values);
        if (response.success === true && response.userData) {
            // document.cookie.split(';').forEach(cookie => console.log(cookie.trim()));
            setAuthUser(response.userData);
            onLoginSuccess();
          toast.success("Login successful Now you can book your appointment",{
            duration: 5000
          });
        } else {
        }
    } catch (error) {
        console.error("Login failed", error);
    } finally {
        setIsLoading(false);
        setSubmitting(false);
    }
};

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="w-full max-w-xs bg-gray-50 p-6 rounded-lg shadow-md">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Field
                  type="email"
                  // id="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600 text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600 text-sm"
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting || isLoading}
                  className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  {isSubmitting || isLoading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
