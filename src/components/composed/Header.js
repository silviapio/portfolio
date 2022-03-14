import { useMediaQuery } from "react-responsive";
import { Navbar } from "../units/Navbar";

export const Header = () => {
  const isTabletOrLarger = useMediaQuery({ query: "(min-width: 640px)" });

  return (
    <header className="flex justify-between p-4 font-bold sticky top-0 z-10 bg-slate-100/75">
      <p className="font-inconsolata text-4xl text-bright-red">{"{silvia}"}</p>
      {isTabletOrLarger && <Navbar />}
    </header>
  );
};
