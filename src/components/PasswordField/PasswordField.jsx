import { ErrorMessage, Field, useFormikContext } from "formik";
import { useState } from "react";

import iconSprite from "../../assets/icons/symbol-defs.svg";
import css from "./PasswordField.module.css";

const PasswordField = ({
  className,
  name = "password",
  textLabel = "Password",
  placeholder = "Enter your password",
}) => {
  const { errors, touched } = useFormikContext();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`${className} ${css.passwordField}`}>
      {!!textLabel && (
        <label htmlFor="password" className={css.label}>
          {textLabel}
        </label>
      )}
      <div className={css.inputContainer}>
        <Field
          type={showPassword ? "text" : "password"}
          id="password"
          name={name}
          placeholder={placeholder}
          className={`${css.inputField} ${
            errors[name] && touched[name] ? css.inputError : ""
          }`}
        />
        <button
          className={`${css.showPasswordBtn} ${css.showPasswordTablet}`}
          type="button"
          onClick={handleClickShowPassword}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <svg className={css.icon}>
              <use href={`${iconSprite}#icon-eye`}></use>
            </svg>
          ) : (
            <svg className={css.icon}>
              <use href={`${iconSprite}#icon-eye-off`}></use>
            </svg>
          )}
        </button>
      </div>
      <ErrorMessage name={name} component="span" className={css.span} />
    </div>
  );
};

export default PasswordField;
