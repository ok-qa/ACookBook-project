import { WelcomeSection } from "../../components/WelcomeSection/WelcomeSection";
import WelcomeSectionImg from "../../components/WelcomeSectionImg/WelcomeSectionImg";

export const HomePage = () => {
  return (
    <div className={css.container}>
      <WelcomeSection />
      <WelcomeSectionImg />
    </div>
  );
};
