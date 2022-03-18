export const Button = ({
  disabled,
  onClick,
  onMouseDown,
  text,
  fontSize = "text-lg",
  padding = "px-2 py-1",
  extraClass = "",
  theme = "dark",
}) => {
  const themes = {
    red: {
      bgColor: "bg-bright-red-bg",
      textColor: "text-slate-50",
      hover: "hover:bg-bright-red-hover hover:drop-shadow-md",
      focus: "focus:bg-bright-red-hover focus:drop-shadow-md",
      border: "",
    },
    redOutline: {
      bgColor: "bg-slate-50",
      textColor: "text-bright-red-text",
      hover: "hover:bg-white hover:drop-shadow-md",
      focus: "focus:bg-white focus:drop-shadow-md",
      border: "border-2 border-bright-red-text",
    },
    dark: {
      bgColor: "bg-dark-slate",
      textColor: "text-slate-50",
      hover: "hover:bg-slate-900 hover:drop-shadow-lg",
      focus: "focus:bg-slate-900 focus:drop-shadow-lg",
      border: "",
    },
    darkOutline: {
      bgColor: "bg-slate-50",
      textColor: "text-dark-slate",
      hover: "hover:bg-white hover:drop-shadow-md hover:text-slate-900",
      focus: "focus:bg-white focus:drop-shadow-md hover:text-slate-900",
      border: "border-2 border-dark-slate",
    },
    linkAppearance: {
      bgColor: "bg-transparent",
      textColor: "text-bright-red-text",
      hover: "hover:underline hover:decoration-2",
      focus: "",
      border: "",
    },
  };

  const { bgColor, textColor, hover, focus, border } = themes[theme];

  const bgClass = disabled ? "bg-gray-500" : bgColor;
  const pointer = disabled && "cursor-not-allowed";
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      onMouseDown={onMouseDown}
      className={`rounded-md my-2 mx-1 outline-current focus:outline-1 ${padding} ${fontSize} ${bgClass} ${textColor} ${hover} ${focus} ${border} ${pointer} ${extraClass}`}
    >
      {text}
    </button>
  );
};
