import { Icon } from "./Icon";

export const Skill = ({ children, skillText, altText, color, textColor, className }) => {
  const iconColor = `var(--${color})`;
  return (
    <div className={`m-2 flex items-center justify-center rounded py-1 px-2 ${className}`}>
      <Icon children={children} color={iconColor} title={altText} />
      <p className={`ml-2 ${textColor}`}>{skillText}</p>
    </div>
  );
};
