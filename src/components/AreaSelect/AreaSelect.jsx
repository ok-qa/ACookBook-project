import Select from "react-select";
import { useEffect, useState } from "react";
import { api } from "../../api";
import css from "./AreaSelect.module.css";

const parseAreasToOptions = (areas) => {
  return areas.map((area) => ({
    value: area._id,
    label: area.name,
  }));
};

export const AreaSelect = () => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const getAreas = async () => {
      const {
        data: { data: areas },
      } = await api.getAreasRequest();
      const parsedOptions = parseAreasToOptions(areas);
      const options = parsedOptions.sort((a, b) =>
        a.label.localeCompare(b.label)
      );
      setOptions(options);
    };
    try {
      getAreas();
    } catch (err) {
      console.error(err);
    }
  }, []);
  return (
    <div className={css.wrapper}>
      <p className={css.header}>Area:</p>
      <Select
        options={options}
        placeholder={"Choose Area"}
        isClearable
        onChange={(option) => {
          console.log("chosen option: ", option);
        }}
      />
    </div>
  );
};
