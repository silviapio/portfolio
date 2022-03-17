import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { ContactForm } from "./ContactForm";

export const ContactDialog = ({ handleClose }) => {
  let [isOpen, setIsOpen] = useState(true);

  const close = () => {
    setIsOpen(false);
    handleClose();
  };

  return (
    <Dialog open={isOpen} onClose={close} className="fixed z-30 inset-0 overflow-y-auto">
      <Dialog.Overlay className="fixed h-[120%] mt-[-40px] mb-[-40px] inset-0 bg-slate-800 opacity-90" />
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-10/12 sm:w-2/3 md:w-1/2 lg:w-5/12 flex flex-col bg-slate-200 z-20 p-6 rounded-lg shadow-inner">
          <Dialog.Title className="mb-2 font-inconsolata text-2xl text-bright-red font-semibold">
            Let's get in touch!
          </Dialog.Title>
          <ContactForm closeFunction={close} />
        </div>
      </div>
    </Dialog>
  );
};
