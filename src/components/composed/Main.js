import { useState } from "react";
import { Hero } from "./Hero";
import { SectionTitle } from "../units/SectionTitle";
import { AboutSection } from "./AboutSection";
import { SkillsSection } from "./SkillsSection";
import { Modal } from "./Modal";
import { ProjectsSection } from "./ProjectsSection";
import { ContactSection } from "./ContactsSection";
import { LastTextSection } from "./LastTextSection";

export const Main = () => {
  const [isJuniorDevModalOpen, setIsJuniorDevModalOpen] = useState(false);

  const openJuniorDevModal = () => {
    setIsJuniorDevModalOpen(true);
  };

  const handleJuniorDevClose = () => {
    setIsJuniorDevModalOpen(false);
  };

  return (
    <main className="flex flex-col m-4 items-start">
      {isJuniorDevModalOpen && <Modal handleClose={handleJuniorDevClose} />}
      <Hero />
      <section className="my-8 self-center">
        <SectionTitle titleText="...skills" />
        <SkillsSection />
      </section>
      <AboutSection openDialogFunction={openJuniorDevModal} />
      <ProjectsSection />
      <ContactSection />
      <LastTextSection />
    </main>
  );
};
