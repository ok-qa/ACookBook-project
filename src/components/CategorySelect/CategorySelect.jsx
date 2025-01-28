import { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import css from "./CategorySelect.module.css";
import { api } from "../../api";

const parseCategoriesToOptions = (categories) => {
  return categories.map((category) => ({
    value: category._id,
    label: category.name,
  }));
};

export const CategorySelect = () => {
  const [options, setOptions] = useState([]);
  const animatedComponents = makeAnimated();
  useEffect(() => {
    const getCategories = async () => {
      const {
        data: { data: categories },
      } = await api.getCategoriesRequest();
      const parsedOptions = parseCategoriesToOptions(categories);
      const options = parsedOptions.sort((a, b) =>
        a.label.localeCompare(b.label)
      );
      setOptions(options);
    };
    try {
      getCategories();
    } catch (err) {
      console.error(err);
    }
  }, []);
  return (
    <div className={css.wrapper}>
      <p className={css.header}>Category:</p>
      <Select
        options={options}
        placeholder={"Choose Category"}
        isMulti
        Clearable
        components={animatedComponents}
        onChange={(option) => {
          console.log("chosen option: ", option);
        }}
      />
    </div>
  );
};
