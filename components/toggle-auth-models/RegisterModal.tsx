"use client"

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validationSchema as registerValidationSchema, registerUser } from "@/lib/Fetcher/auth/register"; // Register validation
import { toast } from "react-hot-toast";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

const RegisterModal = ({ isOpen, onClose, onSwitchToLogin }: RegisterModalProps) => {
  const handleRegisterSubmit = async (values: any, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    try {
      const response = await registerUser(values);
      if (response.success) {
        onClose();
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
    <Dialog open={isOpen} onOpenChange={onClose}>
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
                  <Field type="text" name="firstName" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
                  <ErrorMessage name="firstName" component="div" className="text-red-600 text-sm" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">
                    Last Name
                  </label>
                  <Field type="text" name="lastName" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
                  <ErrorMessage name="lastName" component="div" className="text-red-600 text-sm" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                  Email
                </label>
                <Field type="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
                <ErrorMessage name="email" component="div" className="text-red-600 text-sm" />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
                  Phone
                </label>
                <Field type="text" name="phone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
                <ErrorMessage name="phone" component="div" className="text-red-600 text-sm" />
              </div>
              <div>
                <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">
                  Address
                </label>
                <Field type="text" name="address" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
                <ErrorMessage name="address" component="div" className="text-red-600 text-sm" />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <Field type="password" name="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
                <ErrorMessage name="password" component="div" className="text-red-600 text-sm" />
              </div>
              <DialogFooter className="flex-col items-stretch sm:flex-row sm:justify-between sm:space-x-2">
                <Button type="submit" disabled={isSubmitting} className="mb-2 sm:mb-0 btn hover:text-white hover:bg-green-400 bg-green-500 text-white">
                  {isSubmitting ? "Creating Account..." : "Create Account"}
                </Button>
                <Button variant="outline" type="button" className=" btn bg-blue-500 text-white hover:text-white hover:bg-blue-400" onClick={onSwitchToLogin}>
                  Already have an account?
                </Button>
              </DialogFooter>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;
