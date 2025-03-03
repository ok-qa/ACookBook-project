import Select from "react-select";

import css from "./CookingTimeSelect.module.css";
import { useDispatch } from "react-redux";
import { setCookingTime } from "../../store/slices/recipes";

const options = [
  { value: "15", label: "up to 15 minutes" },
  { value: "30", label: "up to 30 minutes" },
  { value: "45", label: "up to 45 minutes" },
  { value: "60", label: "up to 60 minutes" },
  { value: "90", label: "up to 90 minutes" },
  { value: "120", label: "up to 120 minutes" },
];

export const CookingTimeSelect = () => {
  const dispatch = useDispatch();
  const handleCookingTimeSelect = (option) => {
    const cookingTime = option ? option.value : null;
    dispatch(setCookingTime(cookingTime));
  };
  return (
    <div className={css.wrapper}>
      <p className={css.header}>Cooking Time:</p>
      <Select
        options={options}
        placeholder={"Choose Time"}
        isClearable
        onChange={handleCookingTimeSelect}
      />
    </div>
  );
};
