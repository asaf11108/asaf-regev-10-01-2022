import { ControllerProps } from "../../interfaces/general";

interface BaseAutocompleteProps<T> {
    options: T[];
    loading?: boolean;
    placeholder?: string;
    defaultOption?: T;
    idProp?: string;
    nameProp?: string;
    onChange: (option: T) => void;
    onInputDebounce?: (query: string) => void;
    onFocus?: (option: T) => void;
}

export type AutocompleteProps<T> = BaseAutocompleteProps<T> & ControllerProps;
