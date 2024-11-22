import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useState } from "react";

import css from "./SignInForm.module.css";
import EmailField from "../EmailField/EmailField";
import PasswordField from "../PasswordField/PasswordField";
import { api } from "../../api";
import { Logo } from "../LogoName/Logo";
import { requestSignIn } from "../../services";
import { useNavigate } from "react-router";

const SignInFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required!"),
  password: Yup.string()
    .min(6, "Must contain at least 6 characters")
    .required("Password is required!"),
});
const initialValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    try {
      const userInfo = {
        email: values.email,
        password: values.password,
        name: "User",
      };

      const loggedInUser = await requestSignIn({
        email: userInfo.email,
        password: userInfo.password,
      });
      navigate("/recipes");
    } catch (error) {
      if (error.status === 401) {
        setEmailError("Email or password is invalid");
        setPasswordError("Email or password is invalid");
      }
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={css.wrapper}>
      <Logo className={css.logo} />
      <h1 className={css.title}>Sign in</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SignInFormSchema}
      >
        {({ isValid, dirty }) => {
          const buttonDisabled = !dirty || (!isValid && dirty) || loading;
          return (
            <Form className={css.formContainer}>
              <EmailField className={css.emailField} emailError={emailError} />
              <PasswordField passwordError={passwordError} />
              <button
                type="submit"
                className={`${css.submitButton} ${loading ? css.loading : ""}`}
                // className={css.submitButton}
                disabled={buttonDisabled}
              >
                <span className={css.buttonText}>Log In</span>
                <div className={css.spinner}></div>

                {/* {loading ? <span className={css.spinner} /> : "Log In"} */}
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default SignInForm;
