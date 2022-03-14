import { useState } from "react";
import { Hero } from "./Hero";
import { SectionTitle } from "../units/SectionTitle";
import { TextSection } from "./TextSection";
import { SkillsSection } from "./SkillsSection";
import { Modal } from "./Modal";
import { about } from "../../copy_draft";

export const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="flex flex-col m-4 items-start">
      {isModalOpen && <Modal handleClose={handleClose} />}
      <Hero />
      <section className="my-8 self-center">
        <SectionTitle titleText="...skills" />
        <SkillsSection />
      </section>
      <TextSection titleText="...about" bodyText={about}>
        <button className="px-2 text-bright-red text-lg font-semibold" onClick={openModal}>
          Why should you want a Junior in your team?
        </button>
      </TextSection>
    </main>
  );
};
