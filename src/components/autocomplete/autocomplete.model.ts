import { ChangeHandler, FieldError, UseControllerProps } from "react-hook-form";
import { ControllerProps, ID } from "../../interfaces/general";
import { Merge } from "type-fest";
import { AutocompleteProps as MuiAutocompleteProps } from "@mui/material";

interface BaseAutocompleteProps<T> {
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

export type AutocompleteProps<T> = Merge<
    Omit<MuiAutocompleteProps<T, false, false, false>, 'renderInput'>,
    BaseAutocompleteProps<T> &
    Partial<ControllerProps<T, ID>>
>;
