import { ControllerProps, Option } from "../../interfaces/general";

interface BaseAutocompleteProps {
    onChange: (key: Option) => void;
    onInputDebounce?: (query: string) => void;
    placeholder?: string;
    defaultOption: Option;
    options: Option[];
    loading: boolean;
}

export type AutocompleteProps = BaseAutocompleteProps & ControllerProps;
