"use client"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface InitialModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

const InitialModal = ({ isOpen, onClose, onLoginClick, onRegisterClick }: InitialModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Hello!</DialogTitle>
        </DialogHeader>
        <div className="py-4">
        <p className="py-4">Create an account to schedule your appointment or login if you already have an account</p>

        </div>
        <DialogFooter className="flex flex-col space-y-4 sm:flex-row sm:space-y-0  sm:space-x-4">
          <Button  className="btn bg-blue-500 hover:bg-blue-400 text-white" onClick={onLoginClick}>Login</Button>
          <Button variant="outline"  className="btn bg-green-500 hover:bg-green-400 hover:text-white text-white" onClick={onRegisterClick}>
            Register
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default InitialModal;
