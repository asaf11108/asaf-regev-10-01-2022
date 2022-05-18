import { ChangeHandler, FieldError, UseControllerProps } from "react-hook-form";
import { ControllerProps } from "../../interfaces/general";

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
    control?: ControllerProps;
}

export type AutocompleteProps<T> = BaseAutocompleteProps<T>;
