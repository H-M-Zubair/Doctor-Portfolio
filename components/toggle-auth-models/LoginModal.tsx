"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {
  validationSchema as loginValidationSchema,
  loginUser,
} from "@/lib/Fetcher/auth/login"; // Login validation
import { toast } from "react-hot-toast";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToRegister: () => void;
  setAuthUser: (userData: any) => void;
}

const LoginModal = ({
  isOpen,
  onClose,
  onSwitchToRegister,
  setAuthUser,
}: LoginModalProps) => {
  const handleLoginSubmit = async (
    values: { email: string; password: string },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      const response = await loginUser(values);
      if (response.success === true && response.userData) {
        setAuthUser(response.userData);
        onClose();
        toast.success("Login successful! Now you can book your appointment.", {
          duration: 5000,
        });
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
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
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
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
                  name="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600 text-sm"
                />
              </div>
              <DialogFooter className="flex-col items-stretch sm:flex-row  sm:space-x-2">
              <Button
  type="submit"
  disabled={isSubmitting}
  className={`mb-2 sm:mb-0 btn ${
    isSubmitting ? 'bg-white text-blue-600' : 'bg-blue-600 hover:bg-blue-500 text-white'
  } flex items-center justify-center transition-colors duration-200`}
>
  {isSubmitting ? (
    <>
      <div className="flex items-center">
        <span className="loading loading-spinner text-blue-600 mr-2"></span>
        <span className="text-blue-600">Loading...</span>
      </div>
    </>
  ) : (
    <span>Login</span>
  )}
</Button>


                <Button
                  variant="outline"
                  className="btn bg-green-500 hover:bg-green-400 hover:text-white text-white"
                  type="button"
                  onClick={onSwitchToRegister}
                >
                  Need an account?
                </Button>
              </DialogFooter>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
