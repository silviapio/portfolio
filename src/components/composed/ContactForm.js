import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { InputText } from "../units/InputText";
import { Button } from "../units/Button";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

export const ContactForm = ({ closeFunction }) => {
  const isTabletOrLarger = useMediaQuery({ query: "(min-width: 640px)" });

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
    "g-recaptcha-response": "",
  });

  const [inputErrors, setInputErrors] = useState(
    new Map([
      ["user_name", { error: true, visible: false }],
      ["user_email", { error: true, visible: false }],
      ["message", { error: true, visible: false }],
    ])
  );

  const [recaptchaOK, setRecaptchaOK] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [responseReceived, setResponseReceived] = useState("");

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
      setShowLoader(true);
      emailjs
        .send(
          "default_service",
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          formData,
          process.env.REACT_APP_EMAILJS_USER_ID
        )
        .then(
          result => {
            setShowLoader(false);
            setResponseReceived("OK");
          },
          error => {
            setShowLoader(false);
            setResponseReceived("ERROR");
          }
        );
    }
  };

  const onReCAPTCHAChange = value => {
    if (!value) {
      setRecaptchaOK(false);
    } else {
      setRecaptchaOK(true);
      setFormData(prevData => ({
        ...prevData,
        "g-recaptcha-response": value,
      }));
    }
  };

  const siteKeyRecaptcha = process.env.REACT_APP_RECAPTCHA;

  const renderUI = () => {
    if (showLoader) {
      return (
        <div className="animate-pulse">
          <p className="text-dark-slate font-semibold tracking-wider">...sending email...</p>
        </div>
      );
    } else if (responseReceived) {
      const messageText =
        responseReceived === "OK"
          ? `(｡◕‿◕｡)
          Congratulations! Your email was sent. 
          You'll hear from me soon.`
          : `
          ¯\\_(ツ)_/¯
          Ooops, there was an error in your request. 
          Please try again or connect on LinkedIn/Twitter!
          `;
      return (
        <div className="flex flex-col justify-center">
          <p className="text-slate tracking-wide whitespace-pre-line text-center">{messageText}</p>
          <div className="flex justify-center mt-4">
            <Button text="close" onClick={closeFunction} theme="redOutline" extraClass="font-semibold" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col justify-center">
          <form onSubmit={handleSubmit}>
            <div>
              <InputText
                type="text"
                id="user_name"
                value={formData.user_name}
                labelText="Your name*"
                placeholderText="Jane Doe"
                messageText="name is required"
                hasError={hasError("user_name")}
                onBlur={checkOnBlur}
                onChange={handleInputChange}
              />
              <InputText
                type="text"
                id="user_email"
                value={formData.user_email}
                labelText="Your email*"
                placeholderText="janedoe@email.com"
                messageText="please enter a valid email"
                hasError={hasError("user_email")}
                onBlur={checkOnBlur}
                onChange={handleInputChange}
              />
              <InputText
                type="textarea"
                id="message"
                value={formData.message}
                labelText="Your message*"
                placeholderText="Tell me something about you :)"
                messageText="message is required"
                hasError={hasError("message")}
                onBlur={checkOnBlur}
                onChange={handleInputChange}
              />
            </div>
          </form>
          <p className="mt-2 font-semibold">Your human being condition*</p>
          {siteKeyRecaptcha ? (
            <ReCAPTCHA
              sitekey={siteKeyRecaptcha}
              onChange={onReCAPTCHAChange}
              size={isTabletOrLarger ? "normal" : "compact"}
            />
          ) : (
            <p className="w-2/3 text-slate tracking-wide whitespace-pre-line text-center">
              ¯\\_(ツ)_/¯ Ooops, there was an error. Please try again or connect on LinkedIn/Twitter!
            </p>
          )}
          <div className="self-end mt-2">
            <Button
              text="cancel"
              onClick={closeFunction}
              onMouseDown={e => e.preventDefault()} // prevents onBlur check to fire when canceling
              theme="dark"
              extraClass="font-semibold"
            />
            <Button
              disabled={!recaptchaOK}
              text="send message"
              onClick={handleSubmit}
              theme="red"
              extraClass="font-semibold"
            />
          </div>
        </div>
      );
    }
  };

  return renderUI();
};
