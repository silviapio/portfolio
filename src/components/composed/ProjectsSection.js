import { ProjectCard } from "./ProjectCard";
import { SectionTitle } from "../units/SectionTitle";
import image from "../../assets/placeholder.png";

const projectsData = [
  {
    title: "Reactube",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aliquid placeat? Beatae nam porro dolore. Deleniti magnam ad quae nesciunt.",
    skills: "JavaScript, HTML, CSS, React.js",
    imgSrc: image,
    altText: "snippets of website in different devices",
    learningsText: `This was my very first React complex project.
    It was difficult at first, but then got more entertaining.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aliquid placeat? Beatae nam porro dolore. Deleniti magnam ad quae nesciunt.
    `,
  },
  {
    title: "MWC22",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aliquid placeat? Beatae nam porro dolore. Deleniti magnam ad quae nesciunt.",
    skills: "JavaScript, HTML, CSS, React.js",
    imgSrc: image,
    altText: "snippets of website in different devices",
  },
  {
    title: "Speed Typing Game",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aliquid placeat? Beatae nam porro dolore. Deleniti magnam ad quae nesciunt.",
    skills: "JavaScript, HTML, CSS, React.js",
    imgSrc: image,
    altText: "snippets of website in different devices",
  },
  {
    title: "Portfolio",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aliquid placeat? Beatae nam porro dolore. Deleniti magnam ad quae nesciunt.",
    skills: "JavaScript, HTML, CSS, React.js",
    imgSrc: image,
    altText: "snippets of website in different devices",
  },
];

/*imgSrc, altText, title, body, skills*/

export const ProjectsSection = () => {
  const projectCards = projectsData.map(({ title, body, skills, imgSrc, altText, learningsText }, index) => (
    <ProjectCard
      key={index}
      title={title}
      body={body}
      skills={skills}
      imgSrc={imgSrc}
      altText={altText}
      learningsText={learningsText}
    />
  ));
  return (
    <div className="mx-[-1rem] mb-4 p-6 bg-dark-slate">
      <SectionTitle titleText="...projects" textColor="text-slate-50" fontWeight="font-medium" />
      {projectCards}
    </div>
  );
};
