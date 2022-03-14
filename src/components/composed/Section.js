import { SectionTitle } from "../units/SectionTitle";

export const Section = ({ titleText, bodyText }) => {
  return (
    <div>
      <SectionTitle titleText={titleText} />
      <p className="whitespace-pre-line">{bodyText}</p>
    </div>
  );
};
