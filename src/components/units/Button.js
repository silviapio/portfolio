export const Button = ({
  onClick,
  text,
  bgColor = "bg-dark-slate",
  textColor = "text-slate-50",
  fontSize = "text-lg",
}) => {
  return (
    <button onClick={onClick} className={`rounded-md my-2 mx-1 px-2 py-1 ${fontSize} ${bgColor} ${textColor}`}>
      {text}
    </button>
  );
};
