import css from "./RecipeCard.module.css";

export const RecipeCard = ({ recipe }) => {
  return (
    <li className={css.recipeItem}>
      {/* <a href="#" className={css.recipeItemLink}> */}
      <div className={css.recipeItemThumb}>
        <img
          className={css.recipeImg}
          src={recipe.img}
          alt="Recipe image"
          width="200"
          height="160"
        />
        <div className={css.overlay}>
          <p className={css.overlayText}>{recipe.description}</p>
        </div>
      </div>
      <div className={css.card}>
        <h2 className={css.title}>{recipe.title}</h2>
        {/* <p className={css.text}>App</p> */}
      </div>

      {/* </a> */}
    </li>
  );
};
