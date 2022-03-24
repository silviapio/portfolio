import profileImg from "../../assets/silvia_cut.png";

export const Hero = () => {
  return (
    <div className="mx-8 mt-10 mb-6 flex max-w-screen-lg flex-col items-center self-center pt-8 sm:mx-12 sm:flex-row">
      <div className="h-auto max-w-[250px] rounded-full">
        <img className="w-full rounded-full" src={profileImg} alt="illustration of Silvia" />
      </div>
      <div className="mt-8 text-center sm:mt-0 sm:ml-8">
        <h1 className="font-inconsolata text-4xl font-semibold text-dark-slate">
          I'm Silvia, <span className="text-bright-red">Front End Developer</span>.
        </h1>
        <h2 className="mt-2 text-2xl md:mt-4 lg:leading-10">
          I love building beautiful and accessible websites.
          <br />
          I'm based in Barcelona, Spain.
        </h2>
      </div>
    </div>
  );
};
