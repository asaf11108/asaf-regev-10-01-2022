import { ControllerProps, Option } from "../../interfaces/general";

interface BaseAutocompleteProps {
    options: Option[];
    loading?: boolean;
    placeholder?: string;
    defaultOption?: Option;
    onChange: (key: Option) => void;
    onInputDebounce?: (query: string) => void;
}

export type AutocompleteProps = BaseAutocompleteProps & ControllerProps;
