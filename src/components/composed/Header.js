import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Navbar } from "../units/Navbar";
import { debounce } from "lodash";

export const Header = () => {
  const isTabletOrLarger = useMediaQuery({ query: "(min-width: 640px)" });
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.pageYOffset < 150) {
        setShow(true);
      } else {
        if (window.pageYOffset > lastScrollY) {
          // if scroll down hide the navbar
          setShow(false);
        } else {
          // if scroll up show the navbar
          setShow(true);
        }
      }
    }
    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  const controlNavbarWhenNavigating = e => {
    setTimeout(() => setShow(false), 100);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const debouncedControlNavbar = debounce(controlNavbar, 500, { leading: true, trailing: false });
      window.addEventListener("scroll", debouncedControlNavbar);
      window.addEventListener("hashchange", controlNavbarWhenNavigating);
      // cleanup function
      return () => {
        window.removeEventListener("scroll", debouncedControlNavbar);
        window.removeEventListener("hashchange", controlNavbarWhenNavigating);
      };
    }
    // eslint-disable-next-line
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    setTimeout(() => setShow(true), 50);
  };

  const getVisibilityClass = () => (show ? "" : "invisible");

  return (
    <header
      className={`${getVisibilityClass()} w-full md:px-16 flex justify-between items-center px-6 fixed top-0 z-20 bg-slate-50`}
    >
      <button
        onClick={scrollToTop}
        aria-describedby="scroll to top"
        className="outline-bright-red font-inconsolata text-4xl text-bright-red font-bold tracking-widest my-4"
      >
        {"{silvia}"}
      </button>
      {isTabletOrLarger && <Navbar />}
    </header>
  );
};
