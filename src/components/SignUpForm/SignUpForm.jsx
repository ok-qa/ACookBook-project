import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useState } from "react";

import css from "./SignUpForm.module.css";
import EmailField from "../EmailField/EmailField";
import PasswordField from "../PasswordField/PasswordField";
import { api } from "../../api";
import { Logo } from "../LogoName/Logo";
import { requestSignIn } from "../../services";
import { useNavigate } from "react-router";

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
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    try {
      const userInfo = {
        email: values.email,
        password: values.password,
        name: "User",
      };
      const response = await api.signUpRequest(userInfo);

      const loggedInUser = await requestSignIn({
        email: userInfo.email,
        password: userInfo.password,
      });
      navigate("/recipes");
    } catch (error) {
      if (error.status === 409) {
        setEmailError("Email already in use");
      }
      console.error(error);
    } finally {
      setLoading(false);
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
          const buttonDisabled = !dirty || (!isValid && dirty) || loading;
          return (
            <Form className={css.formContainer}>
              <EmailField className={css.emailField} emailError={emailError} />
              <PasswordField />
              <PasswordField
                name="confirmPassword"
                placeholder="Repeat your password"
                textLabel="Confirm your password"
              />
              <button
                type="submit"
                className={`${css.submitButton} ${loading ? css.loading : ""}`}
                // className={css.submitButton}
                disabled={buttonDisabled}
              >
                <span className={css.buttonText}>Sign up</span>
                <div className={css.spinner}></div>
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignUpForm;
