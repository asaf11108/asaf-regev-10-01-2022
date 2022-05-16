import { FieldError, UseControllerProps, UseFormRegisterReturn } from "react-hook-form";
import { ControllerProps } from "../../interfaces/general";

interface BaseAutocompleteProps<T> {
    formRegisterReturn?: UseFormRegisterReturn
    options: T[];
    loading?: boolean;
    placeholder?: string;
    defaultOption?: T;
    idProp?: string;
    nameProp?: string;
    inputRules?: UseControllerProps['rules'];
    error?: FieldError;
    onChange: (option: T) => void;
    onInputDebounce?: (query: string) => void;
    onInputFocus?: (option: T) => void;
    onInputBlur?: () => void;
    onInput?: (query: string) => void;
}

export type AutocompleteProps<T> = BaseAutocompleteProps<T>;
