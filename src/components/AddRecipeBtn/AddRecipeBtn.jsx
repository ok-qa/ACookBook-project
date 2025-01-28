import styles from "./AddRecipeBtn.module.css";
import { FaPlus } from "react-icons/fa6";

const AddRecipeBtn = ({ openRecipeModal }) => {
  return (
    <>
      <button type="button" className={styles.addBtn} onClick={openRecipeModal}>
        <FaPlus className={styles.iconPlus} />
        Add your recipe
      </button>
    </>
  );
};

export default AddRecipeBtn;
