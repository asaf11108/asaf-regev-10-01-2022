import React, { useCallback, useEffect } from 'react';
import './ControlledAutocomplete.scss';
import { useState } from 'react';
import { Autocomplete, debounce, FormControl, FormHelperText, TextField } from '@mui/material';
import { getLocations } from '../../api/api.service';
import { Location } from '../../store/favorite-locations/favorite-locations.model';
import { ControlledAutocompleteProps } from './ControlledAutocomplete.model';
import SearchIcon from '@mui/icons-material/Search';

const ControlledAutocomplete: React.FC<ControlledAutocompleteProps> = ({ query, handleChange }) => {
  const [options, setOptions] = useState<Location[]>([]);
  const [inputValue, setInputValue] = React.useState(query);
  const [value, setValue] = React.useState<Location | null>({ key: '', localizedName: query });
  const [valid, setValid] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const regex = /^[a-zA-Z ]+$/;
  const isValid = (query: string): boolean => !!query.length && regex.test(query);

  const getOptionsDelayed = useCallback(
    debounce((query, callback) => {
      console.log(value, inputValue);
      (valid && open)
        ? getLocations(query).then(res => res.map(location => ({ key: location.Key, localizedName: location.LocalizedName }))).then(callback)
        : callback([]);
    }, 1000),
    [valid, open]
  );

  useEffect(() => {
    getOptionsDelayed(inputValue, (filteredOptions: Location[]) => {
      setOptions(filteredOptions);
    });
  }, [inputValue, getOptionsDelayed]);

  const handleInputChange = (query: string): void => {
    setValid(isValid(query));
    setInputValue(query);
  }

  const handleAutocomleteChange = (location: Location | null): void => {
    setValue(location);
    location && handleChange(location);
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
          getOptionLabel={(option) => option.localizedName}
          onInputChange={(_, newInputValue) => handleInputChange(newInputValue)}
          onChange={(_, location) => handleAutocomleteChange(location)}
          isOptionEqualToValue={(Option, value) => Option.localizedName === value.localizedName}
          renderInput={(params) =>
            <TextField
              {...params}
              variant="standard"
              placeholder="Search location"
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
