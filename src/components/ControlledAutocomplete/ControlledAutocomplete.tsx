import React, { useCallback, useEffect } from 'react';
import './ControlledAutocomplete.scss';
import { useState } from 'react';
import { Autocomplete, CircularProgress, debounce, InputAdornment, TextField } from '@mui/material';
import { getLocations } from '../../api/api.service';
import { Location } from '../../interfaces/favorite-location.interface';
import { ControlledAutocompleteProps } from './ControlledAutocomplete.model';
import SearchIcon from '@mui/icons-material/Search';

const ControlledAutocomplete: React.FC<ControlledAutocompleteProps> = ({ selected, handleChange }) => {
  const [options, setOptions] = useState<Location[]>([]);
  const [inputValue, setInputValue] = React.useState(selected.localizedName);

  const getOptionsDelayed = useCallback(
    debounce((query, callback) => {
      getLocations(query).then(res => res.map(location => ({ key: location.Key, localizedName: location.LocalizedName }))).then(callback);
    }, 1000),
    []
  );

  useEffect(() => {
    getOptionsDelayed(inputValue, (filteredOptions: Location[]) => {
      setOptions(filteredOptions);
    });
  }, [inputValue, getOptionsDelayed]);

  return (
    <div className='autocomplete'>
      <Autocomplete
        options={options}
        getOptionLabel={(option) => option.localizedName}
        defaultValue={selected}
        onInputChange={(_, newInputValue) => setInputValue(newInputValue)}
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

    </div>
  );
};

export default ControlledAutocomplete;
