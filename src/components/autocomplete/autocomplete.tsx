import { FC, useEffect } from "react";
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

const Autocomplete = <T extends any>({
  options = [],
  loading = false,
  placeholder = "option",
  defaultOption,
  idProp = 'id',
  nameProp = 'name',
  onChange,
  onInputDebounce,
  onFocus,
  innerRef,
  valid = true,
  onInput,
  onBlur,
  error
}: AutocompleteProps<T>): ReturnType<FC> => {
  const [inputValue, setInputValue] = useState(get(defaultOption, nameProp, ''));
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState(defaultOption);

  const [inputDebounce] = useDebounce(inputValue, 1000);
  const previousInputDebounce = usePrevious(inputDebounce);

  useEffect(() => {
    previousInputDebounce !== inputDebounce && open && valid && onInputDebounce?.(inputDebounce);
  }, [open, valid, inputDebounce, previousInputDebounce, onInputDebounce]);

  const _onInput: AutocompleteProps<T>['onInput'] = query => {
    setInputValue(query);
    onInput(query);
  }

  const _onChange: AutocompleteProps<T>['onChange'] = option => {
    _onInput(get(option, nameProp, ''));
    if (option) {
      setOption(option);
      onChange(option);
    }
  };

  const _onBlur: AutocompleteProps<T>['onBlur'] = () => {
    setOpen(false);
    onBlur();
  };

  return (
    <MuiAutocomplete
      ref={innerRef}
      onBlur={_onBlur}
      defaultValue={defaultOption}
      value={option}
      onInputChange={(_, query) => _onInput(query)}
      open={open && valid}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      options={options}
      onChange={(_, option) => _onChange(option!)}
      getOptionLabel={(option) => get(option, nameProp, option)}
      isOptionEqualToValue={(option, value) => get(option, idProp, option) === get(value, idProp, value)}
      renderInput={(params) => (
        <TextField
          {...params}
          data-testid="autocomplete-textfield"
          variant="standard"
          fullWidth
          placeholder={placeholder}
          InputProps={{
            ...params.InputProps,
            startAdornment: <SearchIcon />,
            endAdornment: loading && <CircularProgress size="1em" />,
          }}
          error={!valid}
          helperText={error?.message}
          onFocus={() => option && onFocus?.(option)}
        />
      )}
    />
  );
};

export default Autocomplete;
