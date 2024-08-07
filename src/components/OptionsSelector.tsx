import React from "react";
import { Select } from "evergreen-ui";
import { Options } from "../types";

export const OptionsSelector = ({
  min,
  max,
  selectedValue,
  updateKey,
  label,
  setNewGameOptions,
}: {
  min: number;
  max: number;
  selectedValue: number;
  updateKey: string;
  label: string;
  setNewGameOptions: React.Dispatch<React.SetStateAction<Options>>;
}) => {
  const options = [];

  for (let i = min; i <= max; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>,
    );
  }

  return (
    <div>
      <div>{label}</div>
      <Select
        value={selectedValue}
        maxWidth={"fit-content"}
        onChange={(e) =>
          setNewGameOptions((state) => {
            return {
              ...state,
              [updateKey]: Number(e.target.value),
            };
          })
        }
      >
        {options}
      </Select>
    </div>
  );
};
