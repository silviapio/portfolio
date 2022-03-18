import { useState, useRef } from "react";
import { Dialog } from "@headlessui/react";
import { Icon } from "../units/Icon";
import { HiOutlineLightBulb } from "react-icons/hi";

export const Modal = ({ handleClose }) => {
  let [isOpen, setIsOpen] = useState(true);
  let closeButtonRef = useRef(null);

  const close = () => {
    setIsOpen(false);
    handleClose();
  };

  const bulletPoints = ["point 1", "point 2", "point 3", "point 4"];

  const listItems = bulletPoints.map((item, index) => (
    <li key={index} className="flex flex-row items-start">
      <Icon className="mt-1 mr-2" color="var(--bright-red)" title="light-bulb">
        <HiOutlineLightBulb />
      </Icon>
      <p>{item}</p>
    </li>
  ));

  return (
    /* Use `initialFocus` to force initial focus to a specific ref. */
    <Dialog initialFocus={closeButtonRef} open={isOpen} onClose={close} className="fixed z-30 inset-0 overflow-y-auto">
      <Dialog.Overlay className="fixed h-[120%] inset-0 bg-slate-800 opacity-90" />
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col bg-slate-200 z-20 p-6 rounded-lg shadow-inner">
          <Dialog.Title className="font-inconsolata text-xl text-bright-red font-semibold">
            Here's why you should hire a Junior Dev (like me):
          </Dialog.Title>
          <ul>{listItems}</ul>

          <button
            className="self-end mt-2 px-2 py-1 border-2 border-bright-red rounded-md text-bright-red font-semibold max-w-[120px]"
            ref={closeButtonRef}
            onClick={close}
          >
            OK! Got it :)
          </button>
        </div>
      </div>
    </Dialog>
  );
};
