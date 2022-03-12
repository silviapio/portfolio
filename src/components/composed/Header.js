import { useMediaQuery } from "react-responsive";
import { Navbar } from "../units/Navbar";

export const Header = () => {
  const isTabletOrLarger = useMediaQuery({ query: "(min-width: 640px)" });

  return (
    <header className="flex justify-between p-4 font-bold">
      <h1 className="font-inconsolata text-4xl text-bright-red">{"{silvia}"}</h1>
      {isTabletOrLarger && <Navbar />}
    </header>
  );
};
