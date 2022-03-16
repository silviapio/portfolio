import { Button } from "../units/Button";

export const ProjectCard = ({ imgSrc, altText, title, body, skills, learningsText }) => {
  return (
    <div className="flex flex-col bg-slate-50 rounded-md m-4 py-2 px-3 max-w-lg md:w-1/2">
      <img src={imgSrc} alt={altText} />
      <h3 className="mt-2 text-2xl text-bright-red-text font-semibold font-inconsolata">{title}</h3>
      <p className="font-medium whitespace-pre-line">{body}</p>
      <p className="text-lg text-bright-red-text font-semibold">{skills}</p>
      {learningsText && (
        <details className="my-2 font-medium whitespace-pre-line">
          <summary className="my-2 font-semibold">See my learnings</summary>
          {learningsText}
        </details>
      )}
      <div className="flex justify-end mt-auto">
        <Button text="demo" />
        <Button text="codebase" />
      </div>
    </div>
  );
};
