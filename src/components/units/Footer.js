import { Icon } from "./Icon";
import { HiHeart } from "react-icons/hi";
import { BiCopyright } from "react-icons/bi";

export const Footer = () => (
  <div className="flex flex-row justify-center items-center mt-auto font-inconsolata text-bright-red-text font-semibold">
    <p>coded with</p>

    <Icon className="mx-1">
      <HiHeart />
    </Icon>

    <p>by Silvia. v1.0.0 </p>

    <Icon className="mx-1">
      <BiCopyright />
    </Icon>
    <p>2022</p>
  </div>
);
