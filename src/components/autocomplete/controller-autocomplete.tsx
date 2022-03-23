import { FC } from "react";
import "./controller-autocomplete.scss";
import { ControllerAutocompleteProps } from "./autocomplete.model";
import Autocomplete from "./autocomplete";
import { useController } from "react-hook-form";
import { FormControl, FormHelperText } from "@mui/material";

const ControllerAutocomplete: FC<ControllerAutocompleteProps> = ({
  onChange: handleChange,
  promiseOptions,
  optionText = "option",
  option,
  name,
  control,
}) => {
  const {
    field: { onChange: handleInputChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    defaultValue: option?.label || "",
    rules: {
      required: {
        value: true,
        message: `Please enter ${optionText}`,
      },
      pattern: {
        value: /^[a-zA-Z ]+$/,
        message: "Only letters are allowed",
      },
    },
  });

  return (
    <FormControl className="controller-autocomplete">
      <Autocomplete
        innerRef={ref}
        onBlur={onBlur}
        option={option}
        onInputChange={handleInputChange}
        onChange={handleChange}
        promiseOptions={promiseOptions}
        optionText={optionText}
        valid={!invalid}
      />
      {invalid && <FormHelperText error>{error?.message}</FormHelperText>}
    </FormControl>
  );
};

export default ControllerAutocomplete;
