import React, { useCallback, useEffect } from 'react';
import './ControlledAutocomplete.scss';
import { useState } from 'react';
import { Autocomplete, debounce, FormControl, FormHelperText, TextField } from '@mui/material';
import { ControllerAutocompleteProps } from './ControllerAutocomplete.model';
import SearchIcon from '@mui/icons-material/Search';
import { Option } from "../../interfaces/general";
import { useController } from 'react-hook-form';
import { CircularProgress } from '@mui/material';

const ControllerAutocomplete: React.FC<ControllerAutocompleteProps> = ({ query, handleChange, promiseOptions, placeholder = 'Search option', control, name }) => {
  const [options, setOptions] = useState<Option[]>([]);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    defaultValue: query,
    rules: {
      required: {
        value: true,
        message: 'Please enter location'
      },
      pattern: {
        value: /^[a-zA-Z ]+$/,
        message: 'Only letters are allowed'
      }
    }
  });

  const getOptionsDelayed = useCallback(
    debounce((query, callback) => {
      (!invalid && open)
        ? Promise.resolve().then(() => setLoading(true)).then(() => promiseOptions(query)).then(callback).finally(() => setLoading(false))
        : callback([]);
    }, 1000),
    [invalid, open]
  );

  useEffect(() => {
    getOptionsDelayed(value, (filteredOptions: Option[]) => {
      setOptions(filteredOptions);
    });
  }, [value, getOptionsDelayed]);

  const handleAutocomleteChange = (option: Option | null): void => {
    onChange(option?.label || '');
    option && handleChange(option);
  }

  return (
    <FormControl className='autocomplete'>
      <Autocomplete
        ref={ref}
        onBlur={onBlur}
        value={value}
        onInputChange={(_, query) => onChange(query)}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        options={options}
        onChange={(_, option) => handleAutocomleteChange(option)}
        renderInput={params =>
          <TextField
            {...params}
            variant="standard"
            placeholder={placeholder}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <SearchIcon />
              ),
              endAdornment: (
                loading && <CircularProgress size="1rem"/>
              ),
            }}
          />}
      />
      {invalid && <FormHelperText error>{error?.message}</FormHelperText>}
    </FormControl>
  );
};

export default ControllerAutocomplete;