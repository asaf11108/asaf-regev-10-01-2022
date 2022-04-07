import { FC } from "react";
import "./controller-autocomplete.scss";
import { ControllerAutocompleteProps } from "./autocomplete.model";
import Autocomplete from "./autocomplete";
import { useController } from "react-hook-form";
import { FormControl, FormHelperText } from "@mui/material";

const ControllerAutocomplete: FC<ControllerAutocompleteProps> = ({
  onChange: handleChange,
  onInputChange: handleInputChange,
  placeholder = "option",
  defaultOption,
  name,
  control,
  options,
  loading
}) => {
  const {
    field: { onChange: handleControlInputChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    defaultValue: defaultOption?.label || "",
    rules: {
      required: {
        value: true,
        message: `Please enter ${placeholder}`,
      },
      pattern: {
        value: /^[a-zA-Z ]+$/,
        message: "Only letters are allowed",
      },
    },
  });

  const _handleInputChange = (query: string) => {
    handleControlInputChange(query);
    handleInputChange(query);
  };

  return (
    <FormControl className="controller-autocomplete">
      <Autocomplete
        innerRef={ref}
        onBlur={onBlur}
        defaultOption={defaultOption}
        onInputChange={_handleInputChange}
        onChange={handleChange}
        placeholder={placeholder}
        valid={!invalid}
        options={options}
        loading={loading}/>
      {invalid && <FormHelperText error>{error?.message}</FormHelperText>}
    </FormControl>
  );
};

export default ControllerAutocomplete;
