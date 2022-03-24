export const SectionTitle = ({ titleText, textColor, fontWeight = "font-medium", extraClass = "" }) => (
  <h2
    className={`w-full mb-4 font-inconsolata text-4xl text-center sm:text-left sm:px-2 ${textColor} ${fontWeight} ${extraClass}`}
  >{`{${titleText}} `}</h2>
);
