import { SectionTitle } from "../units/SectionTitle";

export const LastTextSection = () => {
  return (
    <section className="my-8 px-4 sm:mx-12 2xl:mx-24">
      <SectionTitle titleText="...dulcis in fundo" />
      <p className="px-2 sm:text-lg">
        The beauty of web development and programming in general, is that no matter how deep your understanding is or
        what beautiful things you can build, there is always something left to learn. Some topics I'm focusing on at the
        moment: Web Accessibility: this is a very important area for me. There is so much power and information on the
        Internet right now, we simply cannot forget to make everything we build, accessible for everyone. A great
        resource for that is A11Y Project, specifically their accessibility checklist. If you are also interested in
        this, please get in touch either via email or Twitter, and let's change the web together!
      </p>
      <p className="px-2 sm:text-lg">Some Fun facts about me:</p>
      <p className="px-2 sm:text-lg">
        I have done around 2,000 km hiking on the Camino de Santiago 🚶‍♀️ Totally recommended!
      </p>
      <p className="px-2 sm:text-lg">
        I was a swimmer when teenager and I worked as a swimming trainer while studying Economics 🏊🏽
      </p>
      <p className="px-2 sm:text-lg">I'm Italian, and my favorite dish is indeed pizza! 🍕</p>
    </section>
  );
};
