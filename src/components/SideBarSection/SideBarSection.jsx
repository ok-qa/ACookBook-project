// import AddRecipeBtn from "../AddRecipeBtn/AddRecipeBtn";
// import { AreaSelect } from "../AreaSelect/AreaSelect";
// import { CategorySelect } from "../CategorySelect/CategorySelect";
// import { CookingTimeSelect } from "../CookingTimeSelect/CookingTimeSelect";
import { Logo } from "../LogoName/Logo";
import css from "./SideBarSection.module.css";

export const SideBarSection = () => {
  return (
    <div className={css.wrapper}>
      <Logo />
      {/* <AreaSelect />
      <CategorySelect />
      <CookingTimeSelect />
      <AddRecipeBtn /> */}
    </div>
  );
};
