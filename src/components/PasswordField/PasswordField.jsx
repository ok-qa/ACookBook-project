import { ErrorMessage, Field, useFormikContext } from "formik";
import { useState } from "react";

import iconSprite from "../../assets/icons/symbol-defs.svg";
import css from "./PasswordField.module.css";

const PasswordField = ({
  className,
  name = "password",
  textLabel = "Password",
  placeholder = "Enter your password",
  passwordError,
}) => {
  const { errors, touched } = useFormikContext();
  const errorStyle =
    (errors[name] && touched[name]) || passwordError ? css.inputError : "";

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
          className={`${css.inputField} ${errorStyle}`}
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
      {passwordError && <div className={css.errorMessage}>{passwordError}</div>}
    </div>
  );
};

export default PasswordField;
