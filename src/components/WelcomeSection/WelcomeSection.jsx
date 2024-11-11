import { Link } from "react-router-dom";
import { Logo } from "../LogoName/Logo";
import clsx from "clsx";

import css from "./WelcomeSection.module.css";

export const WelcomeSection = () => {
  const isSignUpDisabled = false;
  const isSignInDisabled = false;

  return (
    <div className={css.wrapper}>
      <Logo className={css.logo} />
      <h2 className={css.subTitle}>Best recipes for any occasions</h2>
      <h1 className={css.mainTitle}>Welcome to your best food assistant</h1>

      <ul className={css.btnGroup}>
        <li>
          <Link
            to="/signup"
            className={clsx(
              css.button,
              css.signUp,
              !isSignUpDisabled && css.signUpHover,
              isSignUpDisabled && css.signUpDisabled
            )}
          >
            Start cooking
          </Link>
        </li>
        <li>
          <Link
            to="/signin"
            className={clsx(
              css.button,
              css.signIn,
              !isSignInDisabled && css.signInHover,
              isSignInDisabled && css.signInDisabled
            )}
          >
            Sign in
          </Link>
        </li>
      </ul>
    </div>
  );
};
