import { useState, useRef } from "react";
import { Dialog } from "@headlessui/react";
import { Icon } from "../units/Icon";
import { Button } from "../units/Button";
import { HiOutlineLightBulb } from "react-icons/hi";

export const JuniorDevDialog = ({ handleClose }) => {
  let [isOpen, setIsOpen] = useState(true);

  const topRef = useRef(null);

  const close = () => {
    setIsOpen(false);
    handleClose();
  };

  const bulletPoints1 = [
    "they're used to learning, and they typically love it!",
    "they know they are not experts (yet), and they are not afraid to ask questions",
    `you can "raise" your future Mid and Senior Devs`,
  ];

  const bulletPoints2 = [
    "they're not afraid of change, and they proved it",
    "they have business knowledge, and they understand responsibility, ownership and collaboration",
    "they are more balanced professionals, easy to mentor and to work with. We all know that frameworks can be learned more quickly than empathy!",
  ];

  const renderListItems = list =>
    list.map((item, index) => (
      <li key={index} className="flex flex-row items-start">
        <Icon className="mt-1 mr-2" color="var(--bright-red-text)" title="light-bulb">
          <HiOutlineLightBulb />
        </Icon>
        <p>{item}</p>
      </li>
    ));

  const listItems1 = renderListItems(bulletPoints1);
  const listItems2 = renderListItems(bulletPoints2);

  return (
    <Dialog
      open={isOpen}
      onClose={close}
      initialFocus={topRef}
      className="fixed z-30 inset-0 overflow-y-auto flex items-center sm:items-start justify-center"
    >
      <Dialog.Overlay className="fixed h-[120%] inset-0 bg-slate-800 opacity-90" />
      <div className="flex items-center justify-center min-h-screen max-h-screen sm:max-w-2xl md:max-w-3xl xl:max-w-4xl">
        <div
          ref={topRef}
          className="flex flex-col max-h-screen overflow-y-auto bg-slate-50 z-20 p-4 pl-5 sm:p-6 rounded-lg shadow-inner"
        >
          <Dialog.Title className="font-inconsolata text-lg text-bright-red-text font-semibold">
            Here's why you should hire a Junior Dev (like me):
          </Dialog.Title>
          <ul>{listItems1}</ul>
          <p className="font-inconsolata text-lg text-bright-red-text font-semibold">
            Some bonus points if they're also career changers (yeah... Like me!):
          </p>
          <ul>{listItems2}</ul>
          <p className="mt-2">Let's have a chat, I will show you the evidence :)</p>
          <Button text="Got it" theme="redOutline" onClick={close} extraClass="max-w-[120px] self-center" />
        </div>
      </div>
    </Dialog>
  );
};
