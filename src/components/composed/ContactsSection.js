import { SectionTitle } from "../units/SectionTitle";
import { Icon } from "../units/Icon";
import { Button } from "../units/Button";
import { AiTwotoneMail } from "react-icons/ai";
import { SiLinkedin, SiTwitter, SiGithub } from "react-icons/si";

export const ContactSection = ({ openDialogFunction }) => {
  return (
    <section id="contactsSection" className="flex flex-col items-start py-2 mt-8 px-4 md:mx-12 2xl:mx-36">
      <SectionTitle titleText="...contacts" />
      <div className="px-2">
        <p className="text-lg mb-1">Let's connect! How, it's totally up to you:</p>
        <div className="flex flex-row items-center">
          <Icon className="mt-[1px] w-[18px] h-[18px]" color="var(--bright-red-text)">
            <AiTwotoneMail />
          </Icon>
          <p className="ml-2 text-lg">Email:</p>
          <Button
            text="drop me a message"
            theme="linkAppearance"
            extraClass="font-semibold"
            onClick={openDialogFunction}
          />
        </div>
        <div className="flex flex-row items-center py-1">
          <Icon color="var(--bright-red-text)">
            <SiLinkedin />
          </Icon>
          <p className="ml-2 text-lg">LinkedIn:</p>
          <a
            href="https://www.linkedin.com/in/silvia-piovesan/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-lg text-bright-red-text font-semibold hover:underline hover:decoration-2 focus:outline-bright-red-text"
          >
            connect with me
          </a>
        </div>
        <div className="flex flex-row items-center my-2 py-1">
          <Icon color="var(--bright-red-text)">
            <SiGithub />
          </Icon>
          <p className="ml-2 text-lg">GitHub:</p>
          <a
            href="https://github.com/silviapio"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-lg text-bright-red-text font-semibold hover:underline hover:decoration-2 focus:outline-bright-red-text"
          >
            visit my profile
          </a>
        </div>
        <div className="flex flex-row items-center my-2 py-1">
          <Icon color="var(--bright-red-text)">
            <SiTwitter />
          </Icon>
          <p className="ml-2 text-lg">Tech Twitter:</p>
          <a
            href="https://twitter.com/silvia_piov"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-lg text-bright-red-text font-semibold hover:underline hover:decoration-2 focus:outline-bright-red-text"
          >
            follow me
          </a>
        </div>
      </div>
    </section>
  );
};
