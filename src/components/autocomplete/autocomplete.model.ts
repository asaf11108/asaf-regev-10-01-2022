import { FieldError, RefCallBack, UseControllerProps, UseFormRegisterReturn } from "react-hook-form";

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
    controlRef?: RefCallBack;
}

export type AutocompleteProps<T> = BaseAutocompleteProps<T> & Partial<UseFormRegisterReturn>;
