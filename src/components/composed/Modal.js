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

  const bulletPoints = [
    "you can teach them best practices",
    "if they come from other industries, they already know how to work in teams and how a company functions",
    "you can teach them best practices",
    "if they come from other industries, they already know how to work in teams and how a company functions",
  ];

  const listItems = bulletPoints.map((item, index) => (
    <li className="flex flex-row items-start">
      <Icon key={index} className="mt-1 mr-2" color="var(--bright-red)" altText="light-bulb">
        <HiOutlineLightBulb />
      </Icon>
      <p>{item}</p>
    </li>
  ));

  return (
    /* Use `initialFocus` to force initial focus to a specific ref. */
    <Dialog initialFocus={closeButtonRef} open={isOpen} onClose={close} className="fixed z-10 inset-0 overflow-y-auto">
      <Dialog.Overlay className="fixed inset-0 bg-slate-800 opacity-90" />
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col bg-slate-200 z-20 p-6 rounded-lg shadow-inner">
          <Dialog.Title className="font-inconsolata text-xl text-bright-red font-semibold">
            Here's why you should hire a Junior Dev:
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
