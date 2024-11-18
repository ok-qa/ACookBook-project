import { NavLink } from "react-router-dom";
import css from "./Logo.module.css";

export const Logo = () => {
  return (
    <div className={css.logo}>
      <NavLink to="/">aCookBook</NavLink>
    </div>
  );
};
