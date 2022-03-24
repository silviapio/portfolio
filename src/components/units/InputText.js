import { Icon } from "./Icon";
import { HiOutlineExclamation } from "react-icons/hi";

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
          className={`min-h-[120px] rounded px-2 py-1 focus:outline-dark-slate ${
            hasError && "focus:outline-bright-red-text"
          }`}
        />
      );
    }
  };

  return (
    <div className="my-2 flex flex-col text-dark-slate">
      <label className="font-semibold" htmlFor={id}>
        {labelText}
      </label>
      {inputField(type)}
      <div className={`${hasError ? "" : "hidden"} flex items-center text-bright-red-text`}>
        <Icon title="error" className="mt-0.5">
          <HiOutlineExclamation />
        </Icon>
        <small className={`ml-1 text-base`}>{messageText}</small>
      </div>
    </div>
  );
};
