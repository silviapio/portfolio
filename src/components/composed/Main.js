import { Hero } from "./Hero";
import { SectionTitle } from "../units/SectionTitle";
import { TextSection } from "./TextSection";
import { SkillsSection } from "./SkillsSection";
import { about } from "../../copy_draft";

export const Main = () => {
  return (
    <main className="flex flex-col m-4 items-start">
      <Hero />
      <section className="my-8 self-center">
        <SectionTitle titleText="...skills" />
        <SkillsSection />
      </section>
      <TextSection titleText="...about" bodyText={about}>
        <p className="px-2 text-bright-red text-lg font-semibold">Why should you want a Junior in your team?</p>
      </TextSection>
    </main>
  );
};
