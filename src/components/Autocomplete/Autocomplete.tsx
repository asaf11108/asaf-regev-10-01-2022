import { FC, useCallback, useEffect } from 'react';
import './Autocomplete.scss';
import { useState } from 'react';
import { Autocomplete as MuiAutocomplete, debounce, FormControl, FormHelperText, TextField } from '@mui/material';
import { AutocompleteProps } from './Autocomplete.model';
import SearchIcon from '@mui/icons-material/Search';
import { Option } from "../../interfaces/general";
import { CircularProgress } from '@mui/material';

const Autocomplete: FC<AutocompleteProps> = ({
  onInputChange: handleInputChange,
  onChange: handleChange,
  promiseOptions,
  optionText = 'option',
  option,
  valid = true,
  error,
  ref,
  onBlur
}) => {
  const [options, setOptions] = useState<Option[]>([]);
  const [inputValue, setInputValue] = useState(option?.label || '');
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const _handleInputChange = (query: string): void => {
    setInputValue(query);
    handleInputChange?.(query);
  }

  const getOptionsDelayed = useCallback(
    debounce((query, callback) => {
      (valid && open && query)
        ? Promise.resolve().then(() => setLoading(true)).then(() => promiseOptions(query)).then(callback).finally(() => setLoading(false))
        : callback([]);
    }, 1000),
    [valid, open]
  );

  useEffect(() => {
    getOptionsDelayed(inputValue, (filteredOptions: Option[]) => {
      setOptions(filteredOptions);
    });
  }, [inputValue, getOptionsDelayed]);

  const handleValueChange = (option: Option | null): void => {
    _handleInputChange(option?.label || '');
    option && handleChange(option);
  }

  return (
    <FormControl className='autocomplete'>
      <MuiAutocomplete
        ref={ref}
        onBlur={onBlur}
        value={option}
        onInputChange={(_, query) => _handleInputChange(query)}
        open={open && valid}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        options={options}
        onChange={(_, option) => handleValueChange(option)}
        getOptionLabel={(option) => option.label}
        isOptionEqualToValue={(Option, value) => Option.id === value.id}
        renderInput={params =>
          <TextField
            {...params}
            variant="standard"
            placeholder={`Search ${optionText}`}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <SearchIcon />
              ),
              endAdornment: (
                loading && <CircularProgress size="1em"/>
              ),
            }}
          />}
      />
      {!valid && <FormHelperText error>{error?.message}</FormHelperText>}
    </FormControl>
  );
};

export default Autocomplete;
