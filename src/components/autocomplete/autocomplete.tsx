import { FC, useEffect } from "react";
import "./autocomplete.scss";
import { useState } from "react";
import {
  Autocomplete as MuiAutocomplete,
  TextField,
} from "@mui/material";
import { AutocompleteProps } from "./autocomplete.model";
import SearchIcon from "@mui/icons-material/Search";
import { CircularProgress } from "@mui/material";
import { useDebounce } from "use-debounce";
import { usePrevious } from "react-use";
import { get } from "lodash-es";

const Autocomplete: FC<AutocompleteProps> = ({
  options = [],
  loading = false,
  placeholder = "option",
  defaultOption,
  idProp = 'id',
  nameProp = 'name',
  onChange,
  onInputDebounce,
  innerRef,
  valid = true,
  onInput,
  onBlur,
  error
}) => {
  const [inputValue, setInputValue] = useState(get(defaultOption, nameProp, ""));
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState(defaultOption);

  const [inputDebounce] = useDebounce(inputValue, 1000);
  const previousInputDebounce = usePrevious(inputDebounce);

  useEffect(() => {
    previousInputDebounce !== inputDebounce && open && valid && onInputDebounce?.(inputDebounce);
  }, [open, valid, inputDebounce, previousInputDebounce, onInputDebounce]);

  const _onInput: AutocompleteProps['onInput'] = query => {
    setInputValue(query);
    onInput(query);
  }

  const _onChange: AutocompleteProps['onChange'] = option => {
    _onInput(get(option, nameProp, ""));
    if (option) {
      setOption(option);
      onChange(option);
    }
  };

  return (
    <MuiAutocomplete
      className="autocomplete"
      data-testid="autocomplete"
      ref={innerRef}
      onBlur={onBlur}
      defaultValue={defaultOption}
      value={option}
      onInputChange={(_, query) => _onInput(query)}
      open={open && valid}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      options={options}
      onChange={(_, option) => _onChange(option)}
      getOptionLabel={(option) => option[nameProp]}
      isOptionEqualToValue={(option, value) => option[idProp] === value[idProp]}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          fullWidth
          placeholder={placeholder}
          data-testid="auto-input"
          InputProps={{
            ...params.InputProps,
            startAdornment: <SearchIcon />,
            endAdornment: loading && <CircularProgress size="1em" />,
          }}
          error={!valid}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default Autocomplete;
