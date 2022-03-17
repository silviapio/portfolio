import { Icon } from "./Icon";
import { BiError } from "react-icons/bi";

export const InputText = ({
  id,
  value,
  labelText,
  placeholderText,
  messageText,
  onChange,
  onBlur,
  type,
  className,
  hasError,
}) => {
  const inputField = type => {
    if (type === "text") {
      return (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          placeholder={placeholderText}
          onBlur={onBlur}
          onChange={onChange}
          className={`rounded px-2 py-1 focus:outline-dark-slate ${hasError && "focus:outline-bright-red-text"}`}
        />
      );
    } else if (type === "textarea") {
      return (
        <textarea
          id={id}
          name={id}
          type={type}
          value={value}
          placeholder={placeholderText}
          onBlur={onBlur}
          onChange={onChange}
          className={`rounded min-h-[120px] px-2 py-1 focus:outline-dark-slate ${
            hasError && "focus:outline-bright-red-text"
          }`}
        />
      );
    }
  };

  return (
    <div className="flex flex-col my-2 text-dark-slate">
      <label className="font-semibold" htmlFor={id}>
        {labelText}
      </label>
      {inputField(type)}
      <div className={`${hasError ? "" : "hidden"} flex items-center text-bright-red-text`}>
        <Icon title="error">
          <BiError />
        </Icon>
        <small className={`ml-1 text-base`}>{messageText}</small>
      </div>
    </div>
  );
};
