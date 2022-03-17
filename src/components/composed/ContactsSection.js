import { SectionTitle } from "../units/SectionTitle";
import { Icon } from "../units/Icon";
import { Button } from "../units/Button";
import { AiTwotoneMail } from "react-icons/ai";
import { SiLinkedin, SiTwitter, SiGithub } from "react-icons/si";

export const ContactSection = ({ openDialogFunction }) => {
  return (
    <section className="w-full flex flex-col items-start p-2 mt-8 sm:mx-12">
      <SectionTitle titleText="...contacts" />
      <div>
        <p className="text-lg mb-2">Which type are you?</p>
        <div className="flex flex-row items-center">
          <Icon className="mt-[1px] w-[18px] h-[18px]">
            <AiTwotoneMail />
          </Icon>
          <p className="ml-2 text-lg">Email:</p>
          <Button
            text="drop me a message"
            bgColor="bg-slate-50"
            textColor="text-dark-slate"
            extraClass="font-semibold"
            onClick={openDialogFunction}
          />
        </div>
        <div className="flex flex-row items-center py-1">
          <Icon>
            <SiLinkedin />
          </Icon>
          <p className="ml-2 text-lg">LinkedIn:</p>
          <a href="#linkedin" className="ml-2 text-lg text-dark-slate font-semibold">
            connect with me
          </a>
        </div>
        <div className="flex flex-row items-center my-2 py-1">
          <Icon>
            <SiGithub />
          </Icon>
          <p className="ml-2 text-lg">GitHub:</p>
          <a href="#linkedin" className="ml-2 text-lg text-dark-slate font-semibold">
            visit my profile
          </a>
        </div>
        <div className="flex flex-row items-center my-2 py-1">
          <Icon>
            <SiTwitter />
          </Icon>
          <p className="ml-2 text-lg">Tech Twitter:</p>
          <a href="#twitter" className="ml-2 text-lg text-dark-slate font-semibold">
            follow me
          </a>
        </div>
      </div>
    </section>
  );
};
