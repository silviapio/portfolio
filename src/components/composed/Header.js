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
    // eslint-disable-next-line
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    showMenuAfterTimeout();
  };

  const getVisibilityClass = () => (showMenu ? "" : "invisible");

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
