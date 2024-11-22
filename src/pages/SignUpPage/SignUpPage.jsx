// import { Logo } from "../../components/LogoName/Logo";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import WelcomeSectionImg from "../../components/WelcomeSectionImg/WelcomeSectionImg";
import css from "./SignUpPage.module.css";

export default function SignUpPage() {
  return (
    <div className={css.container}>
      {/* <div className={css.signUpWrapper}> */}

      <SignUpForm />
      {/* </div> */}
      {/* <div className={css.welcomeImg}> */}
      <WelcomeSectionImg />
      {/* </div> */}
    </div>
  );
}
