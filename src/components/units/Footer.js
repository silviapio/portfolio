import { Icon } from "./Icon";
import { HiHeart } from "react-icons/hi";
import { AiOutlineCopyright } from "react-icons/ai";

export const Footer = () => (
  <div className="mt-auto flex flex-row items-center justify-center font-inconsolata font-semibold text-bright-red-text md:text-lg">
    <p>coded with</p>

    <Icon className="mx-1">
      <HiHeart />
    </Icon>

    <p>by Silvia</p>

    <Icon className="mx-1">
      <AiOutlineCopyright />
    </Icon>
    <p>2022 v1.2.3</p>
  </div>
);
