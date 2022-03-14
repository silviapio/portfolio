import { SectionTitle } from "../units/SectionTitle";

export const TextSection = ({ titleText, bodyText, children }) => {
  return (
    <div>
      <SectionTitle titleText={titleText} />
      <p className="px-2 whitespace-pre-line sm:text-lg">{bodyText}</p>
      {children}
    </div>
  );
};
