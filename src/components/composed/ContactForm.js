import React, { useState } from "react";
import { InputText } from "../units/InputText";
import { Button } from "../units/Button";
//import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [inputErrors, setInputErrors] = useState(
    new Map([
      ["user_name", { error: true, visible: false }],
      ["user_email", { error: true, visible: false }],
      ["message", { error: true, visible: false }],
    ])
  );

  const handleInputChange = e => {
    setFormData(prevData => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const isEmailInputOk = str => {
    /* checks the email against a simple regex (contains at least one character before the "@" and anything but a space before and after the "." in the domain part)
     */
    const simpleRegex = /(.+)@(.+){2,}\.(.+){2,}/;
    return simpleRegex.test(str);
  };

  const checkOnBlur = e => {
    const field = e.target.name;
    if (field === "user_email") {
      const updatedErrors = new Map(inputErrors);
      if (!formData[field]) {
        updatedErrors.set(field, { error: true, visible: true });
        setInputErrors(updatedErrors);
        return;
      }
      const trimmedStr = formData.user_email.trim();
      const isValid = isEmailInputOk(trimmedStr);
      updatedErrors.set(field, { error: !isValid, visible: !isValid });
      setInputErrors(updatedErrors);
    } else if (field === "user_name" || field === "message") {
      const isFieldEmpty = formData[field] === "";
      const updatedErrors = new Map(inputErrors);
      if (isFieldEmpty) {
        updatedErrors.set(field, { error: true, visible: true });
      } else {
        updatedErrors.set(field, { error: false, visible: false });
      }
      setInputErrors(updatedErrors);
    }
  };

  const formHasError = () => {
    let errorFound = false;
    const updatedErrors = new Map(inputErrors);
    inputErrors.forEach((value, key) => {
      if (value.error) {
        errorFound = true;
        updatedErrors.set(key, { error: true, visible: true });
      }
    });
    setInputErrors(updatedErrors);
    return errorFound;
  };

  const hasError = id => inputErrors.get(id).error && inputErrors.get(id).visible;

  const handleSubmit = e => {
    e.preventDefault();
    const errorFound = formHasError();
    if (errorFound) {
      return;
    } else {
      console.log(formData);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div>
          <InputText
            type="text"
            id="user_name"
            value={formData.user_name}
            labelText="*Your name:"
            placeholderText="Jane Doe"
            messageText="error: name is required"
            hasError={hasError("user_name")}
            onBlur={checkOnBlur}
            onChange={handleInputChange}
          />
          <InputText
            type="text"
            id="user_email"
            value={formData.user_email}
            labelText="*Your email:"
            placeholderText="janedoe@email.com"
            messageText="error: please enter a valid email"
            hasError={hasError("user_email")}
            onBlur={checkOnBlur}
            onChange={handleInputChange}
          />
          <InputText
            type="textarea"
            id="message"
            value={formData.message}
            labelText="*Your message:"
            placeholderText="Tell me why you want to get in touch!"
            messageText="error: message is required"
            hasError={hasError("message")}
            onBlur={checkOnBlur}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <Button text="Reset Form" onClick={() => console.log("cancel")} />
          <Button text="Save Data" onClick={handleSubmit} />
        </div>
      </form>
    </>
  );
};
