import { FC, useCallback, useEffect } from "react";
import "./autocomplete.scss";
import { useState } from "react";
import {
  Autocomplete as MuiAutocomplete,
  debounce,
  TextField,
} from "@mui/material";
import { AutocompleteProps } from "./autocomplete.model";
import SearchIcon from "@mui/icons-material/Search";
import { Option } from "../../interfaces/general";
import { CircularProgress } from "@mui/material";

const Autocomplete: FC<AutocompleteProps> = ({
  onInputChange: handleInputChange,
  onChange: handleChange,
  optionText = "option",
  option,
  valid = true,
  innerRef,
  onBlur,
  options = [],
  loading = false
}) => {
  const [inputValue, setInputValue] = useState(option?.label || "");
  const [open, setOpen] = useState(false);

  const getOptionsDelayed = useCallback(
    debounce((query) => {
      if (valid && open && query) {
        handleInputChange(query)
      }
    }, 1000),
    [valid, open]
  );

  useEffect(() => {
    getOptionsDelayed(inputValue);
  }, [inputValue, getOptionsDelayed]);

  const handleValueChange = (option: Option | null): void => {
    setInputValue(option?.label || "");
    option && handleChange(option);
  };

  return (
    <MuiAutocomplete
      className="autocomplete"
      data-testid="autocomplete"
      ref={innerRef}
      onBlur={onBlur}
      value={option}
      onInputChange={(_, query) => setInputValue(query)}
      open={open && valid}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      options={options}
      onChange={(_, option) => handleValueChange(option)}
      getOptionLabel={(option) => option.label}
      isOptionEqualToValue={(Option, value) => Option.id === value.id}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          placeholder={`Search ${optionText}`}
          data-testid="auto-input"
          InputProps={{
            ...params.InputProps,
            startAdornment: <SearchIcon />,
            endAdornment: loading && <CircularProgress size="1em" />,
          }}
        />
      )}
    />
  );
};

export default Autocomplete;
