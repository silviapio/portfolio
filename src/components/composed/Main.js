import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { debounce } from "lodash";
import { useScroll } from "../../hooks/useScroll";
import { Hero } from "./Hero";
import { AboutSection } from "./AboutSection";
import { SkillsSection } from "./SkillsSection";
import { JuniorDevDialog } from "./JuniorDevDialog";
import { ProjectsSection } from "./ProjectsSection";
import { ContactSection } from "./ContactsSection";
import { LastTextSection } from "./LastTextSection";
import { BurgerMenu } from "../units/BurgerMenu";
import { ContactDialog } from "./ContactDialog";

export const Main = () => {
  const [isJuniorDevModalOpen, setIsJuniorDevModalOpen] = useState(false);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  const isTabletOrLarger = useMediaQuery({ query: "(min-width: 640px)" });

  const { showMenu, lastScrollY, controlMenu, hideMenuWhenNavigating } = useScroll(true, 0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const debouncedControlBurger = debounce(controlMenu, 500, { leading: true, trailing: false });
      window.addEventListener("scroll", debouncedControlBurger);
      window.addEventListener("hashchange", hideMenuWhenNavigating);
      // cleanup function
      return () => {
        window.removeEventListener("scroll", debouncedControlBurger);
        window.addEventListener("hashchange", hideMenuWhenNavigating);
      };
    }
  }, [lastScrollY, controlMenu, hideMenuWhenNavigating]);

  useEffect(() => {
    /* sets aria-hidden to hide burger menu content on loading */
    const menuWrap = document.querySelector(".bm-menu-wrap");
    if (menuWrap) {
      menuWrap.setAttribute("aria-hidden", true);
    }
  }, []);

  const getVisibilityClass = () => (showMenu ? "" : "invisible");

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
    <main className="mt-[72px] flex flex-col items-start text-dark-slate">
      {isTabletOrLarger ? null : isContactDialogOpen || isJuniorDevModalOpen ? null : (
        <div className={getVisibilityClass()}>
          <BurgerMenu isVisible={showMenu} />
        </div>
      )}
      {isJuniorDevModalOpen && <JuniorDevDialog handleClose={handleJuniorDevClose} />}
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
