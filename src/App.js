import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Header } from "./components/composed/Header";
import { Main } from "./components/composed/Main";
import { Footer } from "./components/units/Footer";
import { BurgerMenu } from "./components/units/BurgerMenu";
import { consoleSurprise } from "./assets/consoleSurprise";

export const App = () => {
  consoleSurprise();

  return (
    <div className="flex flex-col h-full">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
