import profileImg from "../../assets/silvia_cut.png";

export const Hero = () => {
  return (
    <div className="max-w-screen-lg flex flex-col items-center self-center my-4 sm:flex-row sm:px-8">
      <div className="rounded-full max-w-[250px] h-auto rounded-full">
        <img className="rounded-full w-full" src={profileImg} alt="silvia's sketch" />
      </div>
      <div className="text-center mt-8 sm:mt-0 sm:ml-8">
        <h1 className="text-4xl text-dark-slate font-inconsolata font-semibold">
          I'm Silvia, <span className="text-bright-red">Front End Developer</span>.
        </h1>
        <h4 className="text-2xl">
          I love building beautiful and accessible websites.
          <br />
          I'm based in Barcelona, Spain.
        </h4>
      </div>
    </div>
  );
};
