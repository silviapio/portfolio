import profileImg from "../../assets/silvia_cut.png";

export const Hero = () => {
  return (
    <div className="max-w-screen-lg flex flex-col items-center self-center mt-10 mb-6 mx-8 sm:flex-row sm:mx-12 pt-8">
      <div className="rounded-full max-w-[250px] h-auto rounded-full">
        <img className="rounded-full w-full" src={profileImg} alt="illustration of Silvia" loading="lazy" />
      </div>
      <div className="text-center mt-8 sm:mt-0 sm:ml-8">
        <h1 className="text-4xl text-dark-slate font-inconsolata font-semibold">
          I'm Silvia, <span className="text-bright-red">Front End Developer</span>.
        </h1>
        <h2 className="text-2xl">
          I love building beautiful and accessible websites.
          <br />
          I'm based in Barcelona, Spain.
        </h2>
      </div>
    </div>
  );
};
