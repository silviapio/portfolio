import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Navbar } from "../units/Navbar";
import { BurgerMenu } from "../units/BurgerMenu";

export const Header = () => {
  const isTabletOrLarger = useMediaQuery({ query: "(min-width: 640px)" });
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
        console.log("scrolling down");
      } else {
        // if scroll up show the navbar
        setShow(true);
        console.log("scrolling up");
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    const menuWrap = document.querySelector(".bm-menu-wrap");
    if (menuWrap) {
      menuWrap.setAttribute("aria-hidden", true);
    }
  }, []);

  const getVisibilityClass = () => (show ? "" : "invisible");

  return (
    <header className={`${getVisibilityClass()} flex justify-between px-4 font-bold sticky top-0 z-20 bg-slate-50/75`}>
      <p className="font-inconsolata text-4xl text-bright-red my-4">{"{silvia}"}</p>
      {isTabletOrLarger ? <Navbar /> : <BurgerMenu />}
    </header>
  );
};
