export const SectionTitle = ({ titleText, textColor, fontWeight = "font-semibold" }) => (
  <h2
    className={`w-full mb-4 font-inconsolata text-4xl text-center sm:text-left ${textColor} ${fontWeight}`}
  >{`{${titleText}} `}</h2>
);
