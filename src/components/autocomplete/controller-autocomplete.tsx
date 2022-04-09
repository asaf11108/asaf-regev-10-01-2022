import { FC } from "react";
import "./controller-autocomplete.scss";
import { AutocompleteProps } from "./autocomplete.model";
import Autocomplete from "./autocomplete";
import { FormControl, FormHelperText } from "@mui/material";

const ControllerAutocomplete: FC<AutocompleteProps> = props => {

  return (
    <FormControl className="controller-autocomplete">
      <Autocomplete
        {...props}/>
      {!props.valid && <FormHelperText error>{props.error?.message}</FormHelperText>}
    </FormControl>
  );
};

export default ControllerAutocomplete;
