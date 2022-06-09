import { ChangeHandler, FieldError, UseControllerProps } from "react-hook-form";
import { ControllerProps } from "../../interfaces/general";
import { AutocompleteProps as MuiAutocompleteProps } from '@mui/material';
import { Merge } from "type-fest";

interface BaseAutocompleteProps<T, Val> {
    options: T[];
    loading?: boolean;
    placeholder?: string;
    defaultOption?: T;
    idProp?: string;
    nameProp?: string;
    inputRules?: UseControllerProps['rules'];
    error?: FieldError;
    onSelect: (option: T) => void;
    onInputDebounce?: (query: string) => void;
    onInputFocus?: (option: T) => void;
    onInput?: (query: string) => void;
    onBlur?: ChangeHandler;
}

export type AutocompleteProps<T, Val = any> = Merge<
    Omit<MuiAutocompleteProps<T, false, false, false>, 'renderInput'>,
    BaseAutocompleteProps<T, Val> &
    Partial<ControllerProps<T, Val>>
>;
