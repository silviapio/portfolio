export const Button = ({
  onClick,
  text,
  bgColor = "bg-dark-slate",
  textColor = "text-slate-50",
  fontSize = "text-lg",
  padding = "px-2 py-1",
  extraClass = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-md my-2 mx-1 ${padding} ${fontSize} ${bgColor} ${textColor} ${extraClass}`}
    >
      {text}
    </button>
  );
};
