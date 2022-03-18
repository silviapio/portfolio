import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Hero } from "./Hero";
import { AboutSection } from "./AboutSection";
import { SkillsSection } from "./SkillsSection";
import { Modal } from "./Modal";
import { ProjectsSection } from "./ProjectsSection";
import { ContactSection } from "./ContactsSection";
import { LastTextSection } from "./LastTextSection";
import { BurgerMenu } from "../units/BurgerMenu";
import { ContactDialog } from "./ContactDialog";

export const Main = () => {
  const [isJuniorDevModalOpen, setIsJuniorDevModalOpen] = useState(false);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  const isTabletOrLarger = useMediaQuery({ query: "(min-width: 640px)" });
  const [showBurger, setShowBurger] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlBurger = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the burger
        setShowBurger(false);
      } else {
        // if scroll up show the burger
        setShowBurger(true);
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlBurger);
      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlBurger);
      };
    }
    // eslint-disable-next-line
  }, [lastScrollY]);

  useEffect(() => {
    /* sets aria-hidden to hide burger menu content on loading */
    const menuWrap = document.querySelector(".bm-menu-wrap");
    if (menuWrap) {
      menuWrap.setAttribute("aria-hidden", true);
    }
  }, []);

  const getVisibilityClass = () => (showBurger ? "" : "invisible");

  const openJuniorDevModal = () => {
    setIsJuniorDevModalOpen(true);
  };

  const openContactDialog = () => {
    setIsContactDialogOpen(true);
  };

  const handleJuniorDevClose = () => {
    setIsJuniorDevModalOpen(false);
  };

  const handleContactDialogClose = () => {
    setIsContactDialogOpen(false);
  };

  return (
    <main className="flex flex-col mt-16 py-4 items-start">
      {isTabletOrLarger ? null : isContactDialogOpen || isJuniorDevModalOpen ? null : (
        <div className={getVisibilityClass()}>
          <BurgerMenu />
        </div>
      )}
      {isJuniorDevModalOpen && <Modal handleClose={handleJuniorDevClose} />}
      {isContactDialogOpen && <ContactDialog handleClose={handleContactDialogClose} />}
      <Hero />
      <SkillsSection />
      <AboutSection openDialogFunction={openJuniorDevModal} />
      <ProjectsSection />
      <ContactSection openDialogFunction={openContactDialog} />
      <LastTextSection />
    </main>
  );
};
