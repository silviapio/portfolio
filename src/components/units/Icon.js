import { IconContext } from "react-icons";

export const Icon = ({ children, color, title, className }) => (
  <IconContext.Provider value={{ color, title, className }}>
    <div>{children}</div>
  </IconContext.Provider>
);
