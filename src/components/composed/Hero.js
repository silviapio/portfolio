import profileImg from "../../assets/silvia_cut.png";

const classes = {
  imgContainer: "rounded-full w-5/12 h-auto rounded-full float-right",
  img: "rounded-full max-w-full",
  textContainer: "",
  h2: "text-5xl text-dark-slate",
};

export const Hero = () => {
  return (
    <div className="max-w-screen-lg flex flex-col items-center sm:flex-row-reverse">
      <div className="rounded-full max-w-[250px] h-auto rounded-full">
        <img className="rounded-full w-full" src={profileImg} alt="silvia's sketch" />
      </div>
      <div className="text-center mt-8 sm:mt-0 sm:mr-8">
        <h2 className="text-4xl text-dark-slate font-inconsolata font-semibold">
          I'm Silvia, <span className="text-bright-red">Front End Developer</span>.
        </h2>
        <h4 className="text-2xl">
          I love building beautiful and accessible websites.
          <br />
          I'm based in Barcelona, Spain.
        </h4>
      </div>
    </div>
  );
};
