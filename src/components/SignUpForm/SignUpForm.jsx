import * as Yup from "yup";
import { Formik, Form } from "formik";

import css from "./SignUpForm.module.css";
import EmailField from "../EmailField/EmailField";
import PasswordField from "../PasswordField/PasswordField";
import { api } from "../../api";
import { Logo } from "../LogoName/Logo";

const SignUpFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required!"),
  password: Yup.string()
    .min(6, "Must contain at least 6 characters")
    .required("Password is required!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please, repeat your password"),
});

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const userInfo = {
        email: values.email,
        password: values.password,
        name: "User",
      };
      const response = await api.signUpRequest(userInfo);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={css.wrapper}>
      <Logo className={css.logo} />
      <h1 className={css.title}>Sign up</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SignUpFormSchema}
      >
        {({ isValid, dirty }) => {
          const buttonDisabled = !dirty || (!isValid && dirty);
          return (
            <Form className={css.formContainer}>
              <EmailField className={css.emailField} />
              <PasswordField />
              <PasswordField
                name="confirmPassword"
                placeholder="Repeat your password"
                textLabel="Confirm your password"
              />
              <button
                type="submit"
                className={css.submitButton}
                disabled={buttonDisabled}
              >
                Sign up
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignUpForm;
