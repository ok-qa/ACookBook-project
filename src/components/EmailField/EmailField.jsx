import { ErrorMessage, Field, useFormikContext } from "formik";
import css from "./EmailField.module.css";

const EmailField = ({ className, textLabel = "Email", emailError }) => {
  const { errors, touched } = useFormikContext();
  const errorStyle =
    (errors.email && touched.email) || emailError ? css.inputError : "";

  return (
    <div className={`${className} ${css.emailField}`}>
      {!!textLabel && (
        <label htmlFor="email" className={css.label}>
          {textLabel}
        </label>
      )}
      <Field
        type="text"
        id="email"
        name="email"
        placeholder="Enter your email"
        className={`${css.inputField} ${errorStyle}`}
      />
      <ErrorMessage name="email" component="span" className={css.span} />
      {emailError && <div className={css.errorMessage}>{emailError}</div>}
    </div>
  );
};
export default EmailField;
