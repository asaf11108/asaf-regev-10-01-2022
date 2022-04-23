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
}

export type AutocompleteProps<T = any> = BaseAutocompleteProps<T> & ControllerProps;
