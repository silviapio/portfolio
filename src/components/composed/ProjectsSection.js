import { ProjectCard } from "./ProjectCard";
import { SectionTitle } from "../units/SectionTitle";
import mwc22 from "../../assets/mwc22.png";
import reactube from "../../assets/reactube.png";
import speedtyping from "../../assets/speedtyping.png";
import portfolio from "../../assets/portfolio.png";

const projectsData = [
  {
    id: 1,
    title: "MWC22-4YFN Hackathon",
    body: `Single Page Application built for the Mobile World Congress 2022 - 4YFN Hackathon. 
    It's a profile creator with form validation and avatar generator (consuming data from Dicebear API), built with React.js and React Router to help navigate through the screens (welcome page, form, profile viewer), and using LocalStorage API for data.
    This application ranked 6/79 for the Front End challenge, winning a partecipation to the in-person group finale.`,
    skills: "React.js, JavaScript, HTML, CSS, React Router, API rest, Styled Components",
    imgSrc: mwc22,
    altText: "snapshots of MWC22 app in phone, tablet, desktop devices",
    learningsText: `This was my first time participating in a hackathon, and therefore building and deploying something from scratch only in a few days, and yet it was surprisingly good.
    My learnings:
    ✔️ prioritizing features and coding efforts when time is scarce, is really essential
    ✔️ writing consistent documentation is essential but also time-consuming
    ✔️ form validation has a steep learning curve, but once you understand one, you got them all
    ✔️ accessibility is an important topic for me, but still often overlooked    
    `,
  },
  {
    id: 2,
    title: "Reactube",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aliquid placeat? Beatae nam porro dolore. Deleniti magnam ad quae nesciunt.",
    skills: "JavaScript, HTML, CSS, React.js",
    imgSrc: reactube,
    altText: "snippets of website in different devices",
    learningsText: `This was my very first React complex project.
    It was difficult at first, but then got more entertaining.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aliquid placeat? Beatae nam porro dolore. Deleniti magnam ad quae nesciunt.
    `,
  },
  {
    id: 3,
    title: "Speed Typing Game",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aliquid placeat? Beatae nam porro dolore. Deleniti magnam ad quae nesciunt.",
    skills: "JavaScript, HTML, CSS, React.js",
    imgSrc: speedtyping,
    altText: "snippets of website in different devices",
  },
  {
    id: 4,
    title: "Portfolio",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aliquid placeat? Beatae nam porro dolore. Deleniti magnam ad quae nesciunt.",
    skills: "JavaScript, HTML, CSS, React.js",
    imgSrc: portfolio,
    altText: "snippets of website in different devices",
  },
];

export const ProjectsSection = () => {
  const projectCards = projectsData.map(({ title, body, skills, imgSrc, altText, learningsText, id }) => (
    <ProjectCard
      key={id}
      id={id}
      title={title}
      body={body}
      skills={skills}
      imgSrc={imgSrc}
      altText={altText}
      learningsText={learningsText}
    />
  ));

  return (
    <section id="projectsSection" className="w-full flex flex-col items-center p-6 sm:px-14 bg-dark-slate">
      <SectionTitle titleText="...projects" textColor="text-slate-50" fontWeight="font-medium" extraClass="2xl:px-16" />
      <div className="flex flex-col items-stretch md:flex-row md:flex-wrap md:justify-evenly">{projectCards}</div>
    </section>
  );
};
