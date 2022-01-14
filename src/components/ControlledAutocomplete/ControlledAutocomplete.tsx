import React, { useCallback, useEffect } from 'react';
import './ControlledAutocomplete.scss';
import { useState } from 'react';
import { Autocomplete, debounce, FormControl, FormHelperText, TextField } from '@mui/material';
import { ControlledAutocompleteProps } from './ControlledAutocomplete.model';
import SearchIcon from '@mui/icons-material/Search';
import { Option } from "../../interfaces/general";

//TODO: implement this with form hook and rxjs
const ControlledAutocomplete: React.FC<ControlledAutocompleteProps> = ({ query, handleChange, promiseOptions, placeholder = 'Search option' }) => {
  const [options, setOptions] = useState<Option[]>([]);
  const [inputValue, setInputValue] = React.useState(query);
  const [value, setValue] = React.useState<Option | null>({ id: '', label: query });
  const [valid, setValid] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const regex = /^[a-zA-Z ]+$/;
  const isValid = (query: string): boolean => !!query.length && regex.test(query);

  const getOptionsDelayed = useCallback(
    debounce((query, callback) => {
      (valid && open)
        ? promiseOptions(query).then(callback)
        : callback([]);
    }, 1000),
    [valid, open]
  );

  useEffect(() => {
    getOptionsDelayed(inputValue, (filteredOptions: Option[]) => {
      setOptions(filteredOptions);
    });
  }, [inputValue, getOptionsDelayed]);

  const handleInputChange = (query: string): void => {
    setValid(isValid(query));
    setInputValue(query);
  }

  const handleAutocomleteChange = (option: Option | null): void => {
    setValue(option);
    option && handleChange(option);
  }

  return (
    <div className='autocomplete'>
      <FormControl>
          <Autocomplete
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          value={value}
          options={options}
          getOptionLabel={(option) => option.label}
          onInputChange={(_, newInputValue) => handleInputChange(newInputValue)}
          onChange={(_, option) => handleAutocomleteChange(option)}
          isOptionEqualToValue={(Option, value) => Option.label === value.label}
          renderInput={(params) =>
            <TextField
              {...params}
              variant="standard"
              placeholder={placeholder}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <SearchIcon />
                )
              }}
            />}
        />
        {!valid && <FormHelperText error>Invalid input</FormHelperText>}
      </FormControl>

    </div>
  );
};

export default ControlledAutocomplete;
