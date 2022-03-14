import { IconContext } from "react-icons";

export const Icon = ({ children, color, altText: title }) => (
  <IconContext.Provider value={{ color, title }}>
    <div>{children}</div>
  </IconContext.Provider>
);
