"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validationSchema as loginValidationSchema, loginUser } from "@/lib/Fetcher/auth/login"; // Login validation
import { validationSchema as registerValidationSchema, registerUser } from "@/lib/Fetcher/auth/register"; // Register validation
import toast from "react-hot-toast";
import { useUser } from "@/app/UserContext"; // User context for authentication

const ClientRegistration = () => {
  const [isInitialModalOpen, setIsInitialModalOpen] = useState(true);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const { setAuthUser } = useUser(); // Context to store user info

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsInitialModalOpen(false);
    setIsRegisterModalOpen(false);
  };

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
    setIsInitialModalOpen(false);
    setIsLoginModalOpen(false);
  };

  const closeModals = () => {
    setIsInitialModalOpen(false);
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(false);
  };

  // Handle Login Form Submission
  const handleLoginSubmit = async (values: { email: string; password: string }, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    try {
      const response = await loginUser(values);
      if (response.success === true && response.userData) {
        setAuthUser(response.userData);
        closeModals();
        toast.success("Login successful! Now you can book your appointment.", { duration: 5000 });
      } else {
        toast.error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred during login.");
    } finally {
      setSubmitting(false);
    }
  };

  // Handle Register Form Submission
  const handleRegisterSubmit = async (values: any, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    try {
      const response = await registerUser(values);
      if (response.success) {
        closeModals();
        toast.success("Registration successful! Please log in.", { className: "z-[9999]" });
      } else {
        toast.error(response.message || "Registration failed.", { className: "z-[9999]" });
      }
    } catch (error) {
      toast.error("An unexpected error occurred during registration.", { className: "z-[9999]" });
      console.error("Registration error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {/* Main Button to trigger the initial modal */}
      <Button variant="outline" onClick={() => setIsInitialModalOpen(true)} className="bg-blue-600 text-white">
        Get Started
      </Button>

      {/* Initial Modal */}
      <Dialog open={isInitialModalOpen} onOpenChange={setIsInitialModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Hello!</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <h3 className="font-bold text-lg">Create an account to schedule your appointment or login if you already have an account</h3>
          </div>
          <DialogFooter className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:justify-between sm:space-x-4">
            <Button onClick={openLoginModal}>Login</Button>
            <Button variant="outline" onClick={openRegisterModal}>
              Register
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Login Modal */}
      <Dialog open={isLoginModalOpen} onOpenChange={setIsLoginModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Login</DialogTitle>
          </DialogHeader>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginValidationSchema}
            onSubmit={handleLoginSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-600 text-sm" />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                  <ErrorMessage name="password" component="div" className="text-red-600 text-sm" />
                </div>
                <DialogFooter className="flex-col items-stretch sm:flex-row sm:justify-between sm:space-x-2">
                  <Button type="submit" disabled={isSubmitting} className="mb-2 sm:mb-0">
                    {isSubmitting ? "Submitting..." : "Login"}
                  </Button>
                  <Button variant="outline" type="button" onClick={openRegisterModal}>
                    Need an account?
                  </Button>
                </DialogFooter>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>

      {/* Register Modal */}
      <Dialog open={isRegisterModalOpen} onOpenChange={setIsRegisterModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Register</DialogTitle>
          </DialogHeader>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              address: "",
              password: "",
            }}
            validationSchema={registerValidationSchema}
            onSubmit={handleRegisterSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:justify-around md:space-x-4">
                  <div>
                    <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">
                      First Name
                    </label>
                    <Field
                      type="text"
                      name="firstName"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                    <ErrorMessage name="firstName" component="div" className="text-red-600 text-sm" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">
                      Last Name
                    </label>
                    <Field
                      type="text"
                      name="lastName"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                    <ErrorMessage name="lastName" component="div" className="text-red-600 text-sm" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-600 text-sm" />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
                    Phone
                  </label>
                  <Field
                    type="text"
                    name="phone"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                  <ErrorMessage name="phone" component="div" className="text-red-600 text-sm" />
                </div>
                <div>
                  <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">
                    Address
                  </label>
                  <Field
                    type="text"
                    name="address"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                  <ErrorMessage name="address" component="div" className="text-red-600 text-sm" />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                  <ErrorMessage name="password" component="div" className="text-red-600 text-sm" />
                </div>
                <DialogFooter className="flex-col items-stretch sm:flex-row sm:justify-between sm:space-x-2">
                  <Button type="submit" disabled={isSubmitting} className="mb-2 sm:mb-0">
                    {isSubmitting ? "Creating Account..." : "Create Account"}
                  </Button>
                  <Button variant="outline" type="button" onClick={openLoginModal}>
                    Already have an account?
                  </Button>
                </DialogFooter>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ClientRegistration;
