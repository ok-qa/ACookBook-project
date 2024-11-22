import { Logo } from "../../components/LogoName/Logo";
import SignInForm from "../../components/SignInForm/SignInForm";
import WelcomeSectionImg from "../../components/WelcomeSectionImg/WelcomeSectionImg";

import css from "./SignInPage.module.css";

export default function SignInPage() {
  return (
    <div className={css.container}>
      <SignInForm />
      <WelcomeSectionImg />
    </div>
  );
}
