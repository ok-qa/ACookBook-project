import { ErrorMessage, Field, useFormikContext } from "formik";
import css from "./EmailField.module.css";

const EmailField = ({ className, textLabel = "Email" }) => {
  const { errors, touched } = useFormikContext();

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
        className={`${css.inputField} ${
          errors.email && touched.email ? css.inputError : ""
        }`}
      />
      <ErrorMessage name="email" component="span" className={css.span} />
    </div>
  );
};

export default EmailField;
