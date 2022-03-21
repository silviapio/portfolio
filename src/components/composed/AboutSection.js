import { SectionTitle } from "../units/SectionTitle";
import { Button } from "../units/Button";

export const AboutSection = ({ openDialogFunction }) => {
  return (
    <section id="aboutSection" className="mt-10 mb-8 px-4 md:mx-12 2xl:mx-28">
      <SectionTitle titleText="...about" />
      <p className="px-2 sm:text-lg">Economist by university, Front End Developer by passion.</p>
      <p className="px-2 sm:text-lg">
        I recently graduated from a bootcamp, focusing on JavaScript and React, where I discovered the beauty of coding
        and programming, diving deep into JavaScript and React.js. The journey has been lovely so far and what started
        casually as "I'll study a bit of this and let's see" turned quickly into a passion.
      </p>
      <p className="px-2 whitespace-pre-line sm:text-lg">
        Before this, I've worked for several years in international teams and projects in the pharmaceutical industry. I
        cherish this past work experience as it taught me a lot about how to effectively cooperate and communicate to
        reach results. Check{" "}
        <a
          href="https://www.linkedin.com/in/silvia-piovesan/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-bright-red-text font-semibold hover:underline hover:decoration-2 focus:outline-dark-slate"
        >
          my LinkedIn
        </a>{" "}
        to know more.
      </p>
      <details>
        <summary className="mt-3 pl-2 sm:text-lg font-semibold cursor-pointer hover:underline">
          I'm currently learning...
        </summary>
        <ul className="ml-10 sm:text-lg list-disc">
          <li>Advanced JavaScript and React... Yeah, this never ends ;)</li>
          <li>Testing, as it's clear to me the importance it has in building solid applications</li>
          <li>
            Foundations of computer science: as Economics graduate, I love understanding why things add up, so I figured
            some programming theory wouldn't hurt. I'm taking CS50x, Harvard's course for CS majors
          </li>
          <li>
            Web accessibility: this is becoming an essential area for me. There is so much power and information on the
            Internet right now, we simply cannot forget to make everything we build, accessible for everyone.
          </li>
        </ul>
      </details>
      <details>
        <summary className="mt-3 pl-2 sm:text-lg font-semibold cursor-pointer hover:underline">
          My philosophy is...
        </summary>
        <ul className="ml-10 sm:text-lg list-disc">
          <li>
            Problem solving: the essence of programming, in my opinion. Break the problem into smaller ones, have clear
            the input you're receiving and the output you want to serve
          </li>
          <li>
            Investigating: I want to understand how things work "under the hood", and I don't reuse pieces of code I
            don't understand
          </li>
          <li>
            Improving: as I progress with learning and I get more and more exposed to other people's code, I try to
            refactor and improve my own code
          </li>
          <li>
            Documenting and explaining: I enjoy keeping notes of what I learn, and also helping others to understand
            concepts I have already clear. It puts my learning at 10x speed
          </li>
          <li>
            Accessibility and beauty: as developers, it's our responsibility to create universally usable applications
            because if it doesn't come from us, then from whom? And, while we're at it, let's make our corner of the
            Internet just a little bit more awesome (quoting Kevin Powell)!
          </li>
        </ul>
      </details>
      <p className="mt-4 px-2 whitespace-pre-line sm:text-lg font-semibold">TL;DR</p>
      <p className="mt-3 px-2 whitespace-pre-line sm:text-lg">
        Deciding to change career was a good call. I've been truly enjoying being a developer and therefore I'm looking
        for a job as junior Front End Developer. Not sure you need a Junior in your team?
      </p>
      <Button
        text="Click to discover why you should hire a Junior Dev"
        theme="linkAppearance"
        extraClass="font-semibold m-0"
        padding="p-1"
        onClick={openDialogFunction}
      />
    </section>
  );
};
