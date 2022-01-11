import React, { useCallback, useEffect } from 'react';
import './ControlledAutocomplete.scss';
import { useState } from 'react';
import { Autocomplete, debounce, FormControl, FormHelperText, TextField } from '@mui/material';
import { getLocations } from '../../api/api.service';
import { Location } from '../../interfaces/favorite-location.interface';
import { ControlledAutocompleteProps } from './ControlledAutocomplete.model';
import SearchIcon from '@mui/icons-material/Search';

const ControlledAutocomplete: React.FC<ControlledAutocompleteProps> = ({ selected, handleChange }) => {
  const [options, setOptions] = useState<Location[]>([]);
  const [inputValue, setInputValue] = React.useState(selected.localizedName);
  const [valid, setValid] = React.useState(true);
  const regex = /^[a-zA-Z ]+$/;
  const isValid = (query: string): boolean => !!query.length && regex.test(query);

  const getOptionsDelayed = useCallback(
    debounce((query, callback) => {
      if (isValid(query)) {
        getLocations(query).then(res => res.map(location => ({ key: location.Key, localizedName: location.LocalizedName }))).then(callback);
      } else {
        callback([]);
      }
    }, 1000),
    []
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

  return (
    <div className='autocomplete'>
      <FormControl>
        <Autocomplete
          options={options}
          getOptionLabel={(option) => option.localizedName}
          defaultValue={selected}
          onInputChange={(_, newInputValue) => handleInputChange(newInputValue)}
          onChange={(_, location) => location && handleChange(location.key)}
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
