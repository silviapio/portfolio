import { SectionTitle } from "../units/SectionTitle";
import { Button } from "../units/Button";

export const AboutSection = ({ openDialogFunction }) => {
  return (
    <section id="aboutSection" className="mt-10 mb-4 px-4 md:mx-12 2xl:mx-28">
      <SectionTitle titleText="...about" />
      <p className="px-2 sm:text-lg">(placeholder text, copy is in progress!)</p>
      <p className="px-2 sm:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Nibh praesent tristique magna sit. Elit at imperdiet dui accumsan sit. Aenean euismod elementum
        nisi quis eleifend quam adipiscing vitae proin.
      </p>
      <p className="px-2 whitespace-pre-line sm:text-lg">
        Lacinia at quis risus sed vulputate odio ut. Facilisi cras fermentum odio eu. Neque gravida in fermentum et
        sollicitudin ac orci phasellus egestas. Bibendum est ultricies integer quis auctor elit sed. Viverra vitae
        congue eu consequat ac felis donec. Eget nunc lobortis mattis aliquam.
      </p>
      <p className="px-2 whitespace-pre-line sm:text-lg">
        Suspendisse interdum consectetur libero id faucibus nisl. Vel eros donec ac odio tempor orci dapibus.
      </p>
      <div className="px-2 flex items-center">
        <p className="text-lg text-bright-red-text font-medium">You need a Junior in your team!</p>
        <Button
          text=">> click here to check why <<"
          theme="linkAppearance"
          extraClass="font-semibold"
          padding="p-1"
          onClick={openDialogFunction}
        />
      </div>
    </section>
  );
};
