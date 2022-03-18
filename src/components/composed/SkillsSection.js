import { Skill } from "../units/Skill";
import { SectionTitle } from "../units/SectionTitle";

import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiGit,
  SiReactrouter,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
  SiC,
  SiMysql,
  SiFigma,
} from "react-icons/si";

export const SkillsSection = () => {
  const skillsData = [
    {
      icon: SiJavascript,
      skillText: "JavaScript",
      altText: "JavaScript",
      color: "dark-slate",
      textColor: "text-dark-slate",
      className: "bg-js-yellow font-semibold",
    },
    {
      icon: SiGit,
      skillText: "Git",
      altText: "Git",
      color: "git-red",
      textColor: "text-dark-slate",
      className: "bg-slate-300 font-semibold",
    },
    {
      icon: SiReact,
      skillText: "React.js",
      altText: "React.js",
      color: "react-blue",
      textColor: "text-react-blue",
      className: "bg-dark-slate font-medium",
    },
    {
      icon: SiReactrouter,
      skillText: "React Router",
      altText: "React Router",
      color: "light-slate",
      textColor: "text-slate-50",
      className: "bg-reactrouter-red font-medium",
    },
    {
      icon: SiRedux,
      skillText: "Redux",
      altText: "Redux",
      color: "light-slate",
      textColor: "text-slate-50",
      className: "bg-redux-purple font-medium",
    },
    {
      icon: SiHtml5,
      skillText: "HTML 5",
      altText: "HTML 5",
      color: "html-red",
      textColor: "text-dark-slate",
      className: "bg-slate-300 font-semibold",
    },
    {
      icon: SiCss3,
      skillText: "CSS 3",
      altText: "CSS 3",
      color: "light-slate",
      textColor: "text-slate-50",
      className: "bg-css-blue font-medium",
    },
    {
      icon: SiStyledcomponents,
      skillText: "styled-components",
      altText: "styled-components",
      color: "dark-slate",
      textColor: "text-[#000000]",
      className: "bg-styledcomp-pink font-semibold",
    },
    {
      icon: SiTailwindcss,
      skillText: "Tailwind CSS",
      altText: "Tailwind CSS",
      color: "dark-slate",
      textColor: "text-[#000000]",
      className: "bg-tailwind-blue font-semibold",
    },
    {
      icon: SiC,
      skillText: "C",
      altText: "C",
      color: "c-gray",
      textColor: "text-slate-50",
      className: "bg-dark-slate font-medium",
    },
    {
      icon: SiMysql,
      skillText: "MySQL",
      altText: "MySQL",
      color: "mysql-blue",
      textColor: "text-dark-slate",
      className: "bg-slate-300 font-semibold",
    },
    {
      icon: SiFigma,
      skillText: "Figma",
      altText: "Figma",
      color: "light-slate",
      textColor: "text-slate-50",
      className: "bg-figma-red font-medium",
    },
  ];

  const skills = skillsData.map(({ icon, skillText, altText, color, textColor, className }, index) => (
    <Skill
      key={index}
      skillText={skillText}
      altText={altText}
      color={color}
      textColor={textColor}
      className={className}
    >
      {icon()}
    </Skill>
  ));

  return (
    <section id="skillsSection" className="mt-8 px-4 md:mx-12 2xl:mx-28">
      <SectionTitle titleText="...skills" />
      <div className="flex flex-col">
        <p className="px-2">Here's what I've used so far:</p>
        <div className="flex flex-wrap">{skills}</div>
        <p className="px-2 mt-2">Missing anything? Please reach out and let me know, I'll give it a try!</p>
      </div>
    </section>
  );
};
