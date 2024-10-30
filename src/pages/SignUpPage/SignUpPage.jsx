import { Logo } from "../../components/LogoName/Logo";
import { SignUpForm } from "../../components/SignUpForm/SignUpForm";
import WelcomeSectionImg from "../../components/WelcomeSectionImg/WelcomeSectionImg";
import css from "./SignUpPage.module.css";

export default function SignUpPage() {
  return (
    <div className={css.wrapper}>
      <div className={css.signUpSection}>
        <Logo />

        <SignUpForm />
      </div>
      <div className={css.advSection}>
        <WelcomeSectionImg />
      </div>
    </div>
  );
}
