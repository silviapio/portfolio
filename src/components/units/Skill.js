import { Icon } from "./Icon";

export const Skill = ({ children, skillText, altText, color, textColor, className }) => {
  const iconColor = `var(--${color})`;
  return (
    <div className={`flex justify-center items-center py-1 px-2 m-2 rounded drop-shadow-md ${className}`}>
      <Icon children={children} color={iconColor} title={altText} />
      <p className={`ml-2 ${textColor}`}>{skillText}</p>
    </div>
  );
};
