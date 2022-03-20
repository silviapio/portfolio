export const ProjectCard = ({ imgSrc, altText, title, body, skills, learningsText, demoLink, codebaseLink }) => {
  return (
    <div className="flex flex-col bg-slate-50 rounded-md m-4 py-2 px-3 max-w-md md:max-w-lg 2xl:max-w-xl">
      <h3 className="my-2 text-2xl text-bright-red-text font-semibold font-inconsolata">{title}</h3>
      <img src={imgSrc} alt={altText} className="rounded" loading="lazy" />
      <p className="font-medium whitespace-pre-line mt-2">{body}</p>
      <p className="text-lg text-bright-red-text font-medium mt-2">{`Built with ${skills}`}</p>
      {learningsText && (
        <details className="my-2 font-medium text-dark-slate whitespace-pre-line">
          <summary className="my-2 font-semibold cursor-pointer">See my learnings</summary>
          {learningsText}
        </details>
      )}
      <div className="flex justify-end mt-auto">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dark-slate text-slate-50 hover:bg-slate-900 hover:drop-shadow-lg hover:underline focus:underline focus:bg-slate-900 focus:drop-shadow-lg focus:outline-1 outline-current rounded-md my-2 mx-1 px-3 py-2 text-lg hover:cursor-pointer"
          >
            demo
          </a>
        )}
        {codebaseLink && (
          <a
            href={codebaseLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-50 text-dark-slate font-semibold hover:bg-white hover:drop-shadow-md hover:text-slate-900 hover:underline focus:underline focus:bg-white focus:drop-shadow-md hover:text-slate-900 border-2 border-dark-slate focus:outline-1 outline-current rounded-md my-2 mx-1 px-2 pt-[6px] pb-1 text-lg hover:cursor-pointer"
          >
            codebase
          </a>
        )}
      </div>
    </div>
  );
};
