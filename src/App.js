import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Header } from "./components/composed/Header";
import { Main } from "./components/composed/Main";
import { Footer } from "./components/units/Footer";
import { BurgerMenu } from "./components/units/BurgerMenu";

export const App = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 639px)" });

  useEffect(() => {
    const menuWrap = document.querySelector(".bm-menu-wrap");
    if (menuWrap) {
      menuWrap.setAttribute("aria-hidden", true);
    }
  }, []);

  return (
    <div className="flex flex-col h-full">
      {isMobile && <BurgerMenu />}
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
