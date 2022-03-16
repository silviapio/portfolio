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
        />
      );
    }
  };

  const displayError = hasError ? "" : "hidden";

  return (
    <div>
      <label htmlFor={id}>{labelText}</label>
      {inputField(type)}
      <small className={`${displayError}`}>{messageText}</small>
    </div>
  );
};
