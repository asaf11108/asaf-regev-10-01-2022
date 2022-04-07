import { Ref } from "react";
import { Control, FieldError, FieldValues, Noop } from "react-hook-form";
import { Option } from "../../interfaces/general";

interface BaseAutocompleteProps {
    onChange: (key: Option) => void;
    onInputChange: (query: string) => void;
    placeholder?: string;
    option: Option;
    options: Option[];
    loading: boolean;
}

export interface AutocompleteProps extends BaseAutocompleteProps {
    valid?: boolean;
    innerRef?: Ref<any>;
    onBlur?: Noop;
}

export interface ControllerAutocompleteProps extends BaseAutocompleteProps {
    control: Control<FieldValues, object>;
    name: string;
}