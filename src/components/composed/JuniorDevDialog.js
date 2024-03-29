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
      className="fixed inset-0 z-30 flex items-center justify-center overflow-y-auto sm:items-start"
    >
      <Dialog.Overlay className="fixed inset-0 h-[120%] bg-slate-800 opacity-90" />
      <div className="flex max-h-screen min-h-screen items-center justify-center sm:max-w-2xl md:max-w-3xl xl:max-w-4xl">
        <div
          ref={topRef}
          className="z-20 flex max-h-screen flex-col overflow-y-auto rounded-lg bg-slate-50 p-4 pl-5 shadow-inner sm:p-6"
        >
          <Dialog.Title className="font-inconsolata text-lg font-semibold text-bright-red-text">
            Here's why you should hire a Junior Dev:
          </Dialog.Title>
          <ul>{listItems1}</ul>
          <p className="font-inconsolata text-lg font-semibold text-bright-red-text">
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
