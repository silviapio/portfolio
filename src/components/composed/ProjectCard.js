export const ProjectCard = ({ imgSrc, altText, title, body, skills }) => {
  return (
    <div className="flex flex-col bg-slate-50 rounded-md my-4 p-2">
      <img src={imgSrc} alt={altText} />
      <h3 className="text-2xl text-bright-red-text font-semibold font-inconsolata">{title}</h3>
      <p className="font-medium">{body}</p>
      <p className="text-bright-red-text font-semibold">{skills}</p>
      <div className="flex">
        <button>demo</button>
        <button>codebase</button>
      </div>
    </div>
  );
};
