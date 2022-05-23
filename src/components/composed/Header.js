import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Navbar } from "../units/Navbar";
import { debounce } from "lodash";
import { useScroll } from "../../hooks/useScroll";

export const Header = () => {
  const isTabletOrLarger = useMediaQuery({ query: "(min-width: 640px)" });
  const { showMenu, lastScrollY, controlMenu, hideMenuWhenNavigating, showMenuAfterTimeout } = useScroll(true, 0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const debouncedControlNavbar = debounce(controlMenu, 500, { leading: true, trailing: false });
      window.addEventListener("scroll", debouncedControlNavbar);
      window.addEventListener("hashchange", hideMenuWhenNavigating);
      // cleanup function
      return () => {
        window.removeEventListener("scroll", debouncedControlNavbar);
        window.removeEventListener("hashchange", hideMenuWhenNavigating);
      };
    }
  }, [lastScrollY, controlMenu, hideMenuWhenNavigating]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    showMenuAfterTimeout();
  };

  const getVisibilityClass = () => (showMenu ? "" : "invisible");

  return (
    <header
      className={`${getVisibilityClass()} fixed top-0 z-20 flex w-full items-center justify-between bg-slate-50 px-6 md:px-12 xl:px-20`}
    >
      <button
        onClick={scrollToTop}
        aria-describedby="scroll to top"
        className="my-4 font-inconsolata text-4xl font-bold tracking-widest text-bright-red outline-bright-red"
      >
        {"{silvia}"}
      </button>
      {isTabletOrLarger && <Navbar />}
    </header>
  );
};
