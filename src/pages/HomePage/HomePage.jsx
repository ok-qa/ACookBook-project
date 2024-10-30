import { WelcomeSection } from "../../components/WelcomeSection/WelcomeSection";
import WelcomeSectionImg from "../../components/WelcomeSectionImg/WelcomeSectionImg";

import css from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <div className={css.container}>
      <WelcomeSection />
      <WelcomeSectionImg />
    </div>
  );
};
