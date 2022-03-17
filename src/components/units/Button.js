export const Button = ({
  disabled,
  onClick,
  onMouseDown,
  text,
  bgColor = "bg-dark-slate",
  textColor = "text-slate-50",
  fontSize = "text-lg",
  padding = "px-2 py-1",
  extraClass = "",
}) => {
  const bgClass = disabled ? "bg-gray-500" : bgColor;
  const pointer = disabled && "cursor-not-allowed";
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      onMouseDown={onMouseDown}
      className={`rounded-md my-2 mx-1 outline-current focus:outline-1 focus:drop-shadow-md hover:drop-shadow-md ${padding} ${fontSize} ${bgClass} ${textColor} ${pointer} ${extraClass}`}
    >
      {text}
    </button>
  );
};
