// import { api } from "../../api";
import { RecipesSection } from "../../components/RecipesSection/RecipesSection";
import { SideBarSection } from "../../components/SideBarSection/SideBarSection";
import css from "./MainRecipesPage.module.css";

const MainRecipesPage = () => {
  return (
    <div className={css.container}>
      <SideBarSection />
      <RecipesSection />
    </div>
  );
};

export default MainRecipesPage;
