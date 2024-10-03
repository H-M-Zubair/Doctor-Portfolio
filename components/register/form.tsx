import React, { useState } from "react";
import { useRouter } from "next/router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { validationSchema } from "@/lib/Fetcher/auth/register"; // Import the Yup validation schema
import { registerUser } from "@/lib/Fetcher/auth/register"; // Import your API function
import toast from "react-hot-toast";

// Define the interface for the props
interface IRegisterFormProps {
  onRegisterSuccess?: () => void; // Optional prop for handling successful registration
}

interface IRegisterFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  password: string;
}

const RegisterForm: React.FC<IRegisterFormProps> = ({ onRegisterSuccess }) => {
  const initialValues: IRegisterFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  };

  const [form, setForm] = useState<IRegisterFormValues>(initialValues);

  const handleSubmit = async (
    values: IRegisterFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      const response = await registerUser(values);
      if (response.success) {
        setForm(initialValues)
        toast.success(response.message || "Registration successful.",{className:'z-[9999]'});
        if (onRegisterSuccess) {
          onRegisterSuccess();
        }
      } else {
        toast.error(response.message || "Registration failed.",{className:'z-[9999]'});
      }
    } catch (error) {
      toast.error("An unexpected error occurred.",{className:'z-[9999]'});
      console.error("Unexpected error during registration:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4 md:space-y-6 p-4">
              <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:justify-around md:space-x-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    First Name
                  </label>
                  <Field
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="John"
                    className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Last Name
                  </label>
                  <Field
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Doe"
                    className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Email
                </label>
                <Field
                  type="email"
                  name="email"
                  // id="email"
                  placeholder="name@company.com"
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Phone Number
                </label>
                <Field
                  type="text"
                  name="phone"
                  // id="phone"
                  placeholder="123-456-7890"
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Address
                </label>
                <Field
                  type="text"
                  name="address"
                  id="address"
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  // id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                {isSubmitting ? "Creating Account..." : "Create an Account"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </main>
  );
};

export default RegisterForm;
