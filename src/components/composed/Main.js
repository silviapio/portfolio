import { Hero } from "./Hero";
import { SectionTitle } from "../units/SectionTitle";
import { Section } from "./Section";
import { SkillsSection } from "./SkillsSection";
import { about } from "../../assets/copy_draft";

export const Main = () => {
  return (
    <main className="flex flex-col m-4 items-start">
      <Hero />
      <section className="my-8 self-center">
        <SectionTitle titleText="skills" />
        <SkillsSection />
      </section>
      <Section titleText="about" bodyText={about} />
    </main>
  );
};
