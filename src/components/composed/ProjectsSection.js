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
    body: `Single Page Application built for the Mobile World Congress 2022 - 4YFN Hackathon, which ranked 6/79 for the Front End challenge.`,
    extraText: `The application is a profile creator with form validation entirely built from scratch; it collects user data and generates a profile page with the same information. It contains also an avatar generator (consuming data from Dicebear API).
    It contains three screens (welcome page, form, profile viewer), and uses LocalStorage API to save user's data.
    As mentioned, the application scored very well in the challenge (based on: user stories, code quality, and documentation), winning a participation to the in-person group finale.
    `,
    skills: "React.js, JavaScript, HTML, CSS, React Router, API, Styled Components",
    imgSrc: mwc22,
    altText: "snapshots of MWC22 app in phone, tablet, desktop devices",
    learningsText: `✔ prioritizing features and coding efforts when time is scarce, is really vital
    ✔ writing consistent documentation is essential yet also time-consuming
    ✔ form validation has a steep learning curve, however once you understand one, you got them all
    ✔ accessibility is an important topic for me; it wasn't a requirement in this case but I tried to keep the app accessible
    ✔ it was surprisingly good participating in a hackathon!    
    `,
    demoLink: "https://silviapio.github.io/mwc22",
    codebaseLink: "https://github.com/silviapio/mwc22",
  },
  {
    id: 2,
    title: "Speed Typing Game",
    body: `Simple Speed Typing Game built during the React Bootcamp course on Scrimba, adding extra features I considered useful or necessary.`,
    extraText: `When the user clicks start, they should type in as many words as they can; at the end of the timer, the program counts the valid (English) words inserted and displays the score in words per minute.
    I added some features to the original task: checking if words are valid through an API, making time allowed editable by users, saving the best score in words per minute, the reset/restart button, and some checks to discourage cheating :)
    `,
    skills: "React.js, JavaScript, HTML, CSS, API",
    imgSrc: speedtyping,
    altText: "snapshots of speed typing game in different devices",
    learningsText: `✔ behind a "trivial" application there can be a fair amount of logic, as in this case
    ✔ keeping a usable and consistent UI is not an easy task, even in a simple app
    ✔ adding features that I deem necessary or nice-to-have is a true creative task
    ✔ it was also nice for once, to build something to play with
    `,
    demoLink: "https://silviapio.github.io/speed-typing-game/",
    codebaseLink: "https://github.com/silviapio/speed-typing-game",
  },
  {
    id: 3,
    title: "Portfolio",
    body: `Yeah, this website :)
    I particularly liked the final result, so I figured it earned a place in this section.`,
    extraText: `To be honest, at first I didn't want to include it in here, it felt a bit like an infinite loop.
    But then, I developed it completely from scratch (no templates - minimal dependencies), and I challenged myself with the form validation, the email sending, and a CSS framework I had never used before. 
    It was also my first time deploying with a custom domain.
    I'd love to turn this into an open source project for other developers and add my blog section, so eventually I think it deserves to be included here.`,
    skills: "React.js, JavaScript, HTML, Tailwind CSS, EmailJS",
    imgSrc: portfolio,
    altText: "snapshots of this website in different devices",
    learningsText: `✔ the journey of developing a website at your liking can be extremely enjoyable
    ✔ always get the design (mobile, desktop) ready before coding
    ✔ I prefer to code my own forms rather than use libraries
    ✔ being able to program instead of using templates, it's an extremely powerful tool to make things that you really like 
    ✔ never say "I'm almost done" because that "almost" can easily approach infinity   
    ✔ a developer's portfolio often reflects their personality. As in, could you tell I like colors and writing? ;)
    `,
    demoLink: "",
    codebaseLink: "https://github.com/silviapio/portfolio",
  },
  {
    id: 4,
    title: "Reactube",
    body: `Single Page Application built as last assignment of the IT Academy bootcamp.
    It was built without watching any tutorials.`,
    extraText: `This application is an home-made clone of YouTube, allowing the user to favorite their videos and to keep a record of the last searches and the last videos that were displayed. 
    It consumes data directly from YouTube API and uses LocalStorage API for saving user's data.
    This was my very first time dealing with a React application more complex than a counter or to-do list. I was quite proud of the result, considering the point I was at in my developer's journey!`,
    skills: "React.js, JavaScript, HTML, CSS, React Router, API, Styled Components",
    imgSrc: reactube,
    altText: "snapshots of Reactube in different devices",
    learningsText: `✔ YouTube API has an incredible complexity, though the docs help a lot (this is generally a rule for APIs)
    ✔ writing reusable and clean code greatly reduces the "nightmare feeling" when you have to refactor it later
    ✔ starting to code without a clear idea of a design means complicating the development
    ✔ the logic behind a search app is not as simple as it may seem!  
    `,
    demoLink: "https://reactube-silvia.netlify.app/",
    codebaseLink: "https://github.com/silviapio/r9-reactube",
  },
];

export const ProjectsSection = () => {
  const projectCards = projectsData.map(
    ({ title, body, extraText, skills, imgSrc, altText, learningsText, id, demoLink, codebaseLink }) => (
      <ProjectCard
        key={id}
        id={id}
        title={title}
        body={body}
        extraText={extraText}
        skills={skills}
        imgSrc={imgSrc}
        altText={altText}
        learningsText={learningsText}
        demoLink={demoLink}
        codebaseLink={codebaseLink}
      />
    )
  );

  return (
    <section id="projectsSection" className="flex w-full flex-col items-center bg-dark-slate p-2 sm:p-6 md:px-14">
      <SectionTitle
        titleText="...projects"
        textColor="text-slate-50"
        fontWeight="font-medium"
        extraClass="sm:px-4 lg:px-16 2xl:px-28"
      />
      <div className="flex max-w-7xl flex-col items-stretch md:flex-row md:flex-wrap md:justify-evenly">
        {projectCards}
      </div>
    </section>
  );
};
