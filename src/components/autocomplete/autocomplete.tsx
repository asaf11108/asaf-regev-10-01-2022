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

const Autocomplete = <T extends {}>({
  options = [],
  loading = false,
  placeholder = "option",
  defaultOption,
  idProp = "id",
  nameProp = "name",
  inputRules,
  onChange,
  onInputDebounce,
  onInputFocus,
  onInput,
  onInputBlur,
  formRegisterReturn,
  error
}: AutocompleteProps<T>): ReturnType<FC> => {
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState(defaultOption);

  const { control } = useForm({ mode: 'onChange' });
  const {
    field: { onChange: onFormInput, onBlur: _onInputFormBlur, ref, value: inputValue },
    fieldState: { error: inputError },
  } = useController({
    name: "name",
    control,
    defaultValue: get(defaultOption, nameProp, ""),
    rules: inputRules,
  });
  const [inputDebounce] = useDebounce(inputValue, 1000);
  const previousInputDebounce = usePrevious(inputDebounce);

  useEffect(() => {
    previousInputDebounce !== inputDebounce &&
      open &&
      !inputError &&
      !error &&
      onInputDebounce?.(inputDebounce);
  }, [open, inputError, error, inputDebounce, previousInputDebounce, onInputDebounce]);

  const _onInput: AutocompleteProps<T>["onInput"] = query => {
    onFormInput(query);
    onInput?.(query);
  };

  const _onChange: AutocompleteProps<T>["onChange"] = option => {
    _onInput(get(option, nameProp, ""));
    if (option) {
      setOption(option);
      onChange(option);
    }
  };

  const _onInputBlur: AutocompleteProps<T>["onInputBlur"] = () => {
    _onInputFormBlur();
    setOpen(false);
    onInputBlur?.();
  };

  return (
    <MuiAutocomplete
      defaultValue={defaultOption}
      value={option}
      open={open && !inputError}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      options={options}
      onChange={(_, option) => _onChange(option!)}
      onInputChange={(_, query) => _onInput(query)}
      onBlur={_onInputBlur}
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
          error={!!inputError || !!error}
          helperText={inputError?.message || error?.message}
          onFocus={() => option && onInputFocus?.(option)}
        />
      )}
    />
  );
};

export default Autocomplete;
