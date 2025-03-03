import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestRecipes } from "../../services";
import css from "./RecipesSection.module.css";
import { setRecipes } from "../../store/slices/recipes";
import { RecipeCard } from "../RecipeCard/RecipeCard";

export const RecipesSection = () => {
  const dispatch = useDispatch();

  const recipesStateFilters = useSelector((state) => state.recipes.filters);
  const recipesData = useSelector((state) => state.recipes.data);

  const recipesList = () => {
    const listItems = recipesData.data.map((recipe) => {
      return <RecipeCard recipe={recipe} />;
    });
    return (
      <div className={css.listContainer}>
        <ul className={css.recipesList}>{listItems}</ul>
      </div>
    );
  };

  useEffect(() => {
    const getRecipes = async () => {
      const response = await requestRecipes({}, recipesStateFilters);
      dispatch(setRecipes(response));
    };
    getRecipes();
  }, [recipesStateFilters, dispatch]);

  return (
    <div className={css.wrapper}>
      <p className={css.header}>
        Time to cook something you like. Let's do it together!
      </p>
      {!!recipesData?.data.length && (
        <div className={css.recipesWrapper}>{recipesList()}</div>
      )}
    </div>
  );
};
