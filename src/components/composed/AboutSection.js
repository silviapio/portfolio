import { SectionTitle } from "../units/SectionTitle";
import { Button } from "../units/Button";

export const AboutSection = ({ openDialogFunction }) => {
  return (
    <section id="aboutSection" className="mt-10 mb-8 px-4 sm:mx-4 md:mx-12 lg:mx-24 2xl:mx-36">
      <SectionTitle titleText="...about" />
      <p className="px-2 sm:text-lg">Economist by university, Developer by passion.</p>
      <p className="px-2 sm:text-lg">
        In 2022 I graduated from a bootcamp, where I discovered the beauty of coding and programming. I started working
        for a software company shortly afterwards as Front-End Engineer, diving deep in JS, TS and React. The journey
        has been lovely so far, and what started casually as "I'll study a bit of this and let's see" turned quickly
        into a passion.
      </p>
      <p className="whitespace-pre-line px-2 sm:text-lg">
        Before this, I've worked for several years in international teams and projects in the pharmaceutical industry. I
        cherish this past work experience as it taught me a lot about how to effectively cooperate and communicate to
        reach results. Check{" "}
        <a
          href="https://www.linkedin.com/in/silvia-piovesan/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold text-bright-red-text hover:underline hover:decoration-2 focus:outline-bright-red-text"
        >
          my LinkedIn
        </a>{" "}
        to know more.
      </p>
      <details>
        <summary className="mt-3 max-w-fit cursor-pointer px-2 font-semibold hover:underline sm:text-lg">
          I'm currently learning...
        </summary>
        <ul className="ml-10 list-disc sm:text-lg">
          <li>JavaScript, TypeScript and React... Yeah, this never ends ;)</li>
          <li>Testing, as it's clear to me the importance it has in building solid applications.</li>
          <li>
            Foundations of computer science: as Economics graduate, I love understanding why things add up, so I figured
            some programming theory wouldn't hurt.
          </li>
          <li>
            Web accessibility: this is becoming an essential area for me. There is so much power and information on the
            Internet right now, we simply cannot forget to make everything we build accessible for everyone.
          </li>
        </ul>
      </details>
      <details>
        <summary className="mt-3 max-w-fit cursor-pointer px-2 font-semibold hover:underline sm:text-lg">
          My philosophy is...
        </summary>
        <ul className="ml-10 list-disc sm:text-lg">
          <li>
            Divide and conquer: break the problem into smaller ones, have clear the input you're receiving and the
            output you want to serve.
          </li>
          <li>
            Investigate: I want to understand how things work "under the hood", and I don't reuse pieces of code I don't
            understand.
          </li>
          <li>
            Improve: as I progress with learning and I get more and more exposed to other people's code, I try to
            improve my own code, and leave it cleaner.
          </li>
          <li>
            Teach to learn: I enjoy helping others to understand concepts I have already clear. It puts my learning at
            10x speed.
          </li>
          <li>
            Make it accessible and usable: it's our responsibility to create universally usable applications and to make
            our corner of the Internet just a little bit more awesome (quoting the great Kevin Powell)!
          </li>
        </ul>
      </details>
      <p className="mt-4 whitespace-pre-line px-2 font-semibold sm:text-lg">TL;DR</p>
      <p className="mt-1 whitespace-pre-line px-2 sm:text-lg">
        Deciding to change career was a good call. I've been truly enjoying being a developer: I love learning and
        building something every day!
      </p>
      <p className="mt-1 whitespace-pre-line px-2 sm:text-lg">
        {`I'm just a tiny step ahead of fellow career changers looking for their first developer job, but I'll always advocate for junior career changers.
        Check below my arguments' list for hiring a Junior Developer - if you are trying to break into tech, it's all yours :)`}
      </p>
      <Button
        text="Click to discover why you should hire a Junior Developer"
        theme="linkAppearance"
        extraClass="font-semibold m-0"
        padding="p-1"
        onClick={openDialogFunction}
      />
    </section>
  );
};
