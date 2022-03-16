import { SectionTitle } from "../units/SectionTitle";
import { Button } from "../units/Button";

export const AboutSection = ({ openDialogFunction }) => {
  return (
    <div className="mb-4">
      <SectionTitle titleText="...about" />
      <p className="px-2 sm:text-lg">Economist by university, Front End Developer by passion.</p>
      <p className="px-2 sm:text-lg">
        I recently graduated from a bootcamp, where I discovered the beauty of coding and programming, diving deep into
        JavaScript and React.js. I must say, the journey has been lovely so far, and I'm absolutely motivated to keep
        learning and building amazing things! -Check my projects-
      </p>
      <p className="px-2 whitespace-pre-line sm:text-lg">
        Before this, I've worked for several years in international teams and projects in the pharmaceutical industry. I
        cherish this past work experience as it taught me a lot about how to effectively cooperate and communicate to
        reach results. -Check my LinkedIn-
      </p>
      <p className="px-2 whitespace-pre-line sm:text-lg">
        I've been liking programming so much that now I'm determined to find a job as Junior Developer.
      </p>
      <Button
        text="Why should you want a Junior in your team?"
        textColor="text-bright-red-text"
        bgColor="bg-slate-50"
        extraClass="px-2 font-semibold"
        onClick={openDialogFunction}
      />
    </div>
  );
};

/* export const Button = ({
  onClick,
  text,
  bgColor = "bg-dark-slate",
  textColor = "text-slate-50",
  fontSize = "text-lg",
  extraClass = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-md my-2 mx-1 px-2 py-1 ${fontSize} ${bgColor} ${textColor} ${extraClass}`}
    >
      {text}
    </button>
  );
}; */
