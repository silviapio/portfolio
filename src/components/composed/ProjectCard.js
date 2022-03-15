import { Button } from "../units/Button";

export const ProjectCard = ({ imgSrc, altText, title, body, skills, learningsText }) => {
  return (
    <div className="flex flex-col bg-slate-50 rounded-md my-4 p-2">
      <img src={imgSrc} alt={altText} />
      <h3 className="text-2xl text-bright-red-text font-semibold font-inconsolata">{title}</h3>
      <p className="font-medium">{body}</p>
      <p className="text-lg text-bright-red-text font-semibold font-inconsolata">{skills}</p>
      {learningsText && (
        <details>
          <summary className="my-2 font-semibold">What I've learned</summary>
          {learningsText}
        </details>
      )}
      <div className="flex justify-end">
        <Button text="demo" />
        <Button text="codebase" />
      </div>
    </div>
  );
};
