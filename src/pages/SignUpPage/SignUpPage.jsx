import { LogoName } from "../../components/LogoName/LogoName";
import WelcomeSectionImg from "../../components/WelcomeSectionImg/WelcomeSectionImg";

import css from "./SignUpPage.module.css";

export default function SignUpPage() {
  console.log("Welcome to SignUp");
  return (
    <div className={css.wrapper}>
      <div className={css.signUpSection}>
        <LogoName />
        {/* <SignUpForm /> */}
      </div>
      <div className={css.advSection}>
        <WelcomeSectionImg />
      </div>
    </div>
  );
}
