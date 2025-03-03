import Select from "react-select";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { api } from "../../api";
import css from "./AreaSelect.module.css";
import { setAreaId } from "../../store/slices/recipes";

const parseAreasToOptions = (areas) => {
  return areas.map((area) => ({
    value: area._id,
    label: area.name,
  }));
};

export const AreaSelect = () => {
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();

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

  const handleAreaSelect = (option) => {
    const areaId = option ? option.value : null;
    dispatch(setAreaId(areaId));
  };

  return (
    <div className={css.wrapper}>
      <p className={css.header}>Area:</p>
      <Select
        options={options}
        placeholder={"Choose Area"}
        isClearable
        onChange={handleAreaSelect}
      />
    </div>
  );
};
