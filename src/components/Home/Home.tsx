import React, { useCallback, useEffect } from 'react';
import './Home.scss';
import { useState } from 'react';
import { getOptionsAsync, Option } from "./helper";
import { Autocomplete, debounce, TextField } from '@mui/material';

const Home: React.FC = () => {
  const [options, setOptions] = useState<Option[]>([]);
  const [inputValue, setInputValue] = React.useState("");
  const getOptionsDelayed = useCallback(
    debounce((text, callback) => {
      setOptions([]);
      getOptionsAsync(text).then(callback);
    }, 200),
    []
  );

  useEffect(() => {
    getOptionsDelayed(inputValue, (filteredOptions: Option[]) => {
      setOptions(filteredOptions);
    });
  }, [inputValue, getOptionsDelayed]);

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.title}
      onInputChange={(e, newInputValue) => setInputValue(newInputValue)}
      renderInput={(params) => <TextField {...params} placeholder="Search location"/>}
    />
  );
};

export default Home;
