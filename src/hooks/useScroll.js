import { useState } from "react";

export const useScroll = (showInitially, initialScroll) => {
  const [showMenu, setShowMenu] = useState(showInitially);
  const [lastScrollY, setLastScrollY] = useState(initialScroll);

  const controlMenu = () => {
    if (typeof window !== "undefined") {
      if (window.pageYOffset < 150) {
        setShowMenu(true);
      } else {
        if (window.pageYOffset > lastScrollY) {
          // if scroll down hide the menu
          setShowMenu(false);
        } else {
          // if scroll up show the navbar
          setShowMenu(true);
        }
      }
    }
    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  const hideMenuWhenNavigating = e => {
    setTimeout(() => setShowMenu(false), 100);
  };

  const showMenuAfterTimeout = () => {
    setTimeout(() => setShowMenu(true), 50);
  };

  return { showMenu, lastScrollY, controlMenu, hideMenuWhenNavigating, showMenuAfterTimeout };
};
