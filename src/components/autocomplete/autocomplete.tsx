import { FC, useEffect } from "react";
import { useState } from "react";
import { Autocomplete as MuiAutocomplete, TextField } from "@mui/material";
import { AutocompleteProps } from "./autocomplete.model";
import SearchIcon from "@mui/icons-material/Search";
import { CircularProgress } from "@mui/material";
import { useDebounce } from "use-debounce";
import { usePrevious } from "react-use";
import { get } from "lodash-es";
import { useController, useForm } from "react-hook-form";
import { useAutocompleteInput } from "./autocomplete-input.hook";

const Autocomplete = <T extends {}>({
  options = [],
  loading = false,
  placeholder = "option",
  defaultOption,
  idProp = "id",
  nameProp = "name",
  inputRules,
  onSelect,
  onBlur,
  ref,
  onInputDebounce,
  onInputFocus,
  onInput,
  error
}: AutocompleteProps<T>): ReturnType<FC> => {
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState(defaultOption);

  const inputController = useAutocompleteInput(get(defaultOption, nameProp, ""), inputRules);

  const [inputDebounce] = useDebounce(inputController.field.value, 1000);
  const previousInputDebounce = usePrevious(inputDebounce);

  useEffect(() => {
    previousInputDebounce !== inputDebounce &&
      open &&
      !inputController.fieldState.error &&
      !error &&
      onInputDebounce?.(inputDebounce);
  }, [open, inputController.fieldState.error, error, inputDebounce, previousInputDebounce, onInputDebounce]);

  const _onInput: AutocompleteProps<T>["onInput"] = query => {
    inputController.field.onChange(query);
    onInput?.(query);
  };

  const _onSelect: AutocompleteProps<T>["onSelect"] = option => {
    _onInput(get(option, nameProp, ""));
    if (option) {
      setOption(option);
      onSelect(option);
    }
  };

  const _onBlur: AutocompleteProps<T>["onBlur"] = async event => {
    inputController.field.onBlur();
    setOpen(false);
    onBlur?.(event);
  };

  return (
    <MuiAutocomplete
      ref={ref}
      defaultValue={defaultOption}
      value={option}
      open={open && !inputController.fieldState.error}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      options={options}
      onChange={(_, option) => _onSelect(option!)}
      onInputChange={(_, query) => _onInput(query)}
      onBlur={_onBlur}
      getOptionLabel={(option) => get(option, nameProp, option)}
      isOptionEqualToValue={(option, value) =>
        get(option, idProp, option) === get(value, idProp, value)
      }
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
          error={!!inputController.fieldState.error || !!error}
          helperText={inputController.fieldState.error?.message || error?.message}
          onFocus={() => option && onInputFocus?.(option)}
        />
      )}
    />
  );
};

export default Autocomplete;
