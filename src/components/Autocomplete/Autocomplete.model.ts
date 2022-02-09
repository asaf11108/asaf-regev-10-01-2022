import { Ref } from "react";
import { Control, FieldError, FieldValues, Noop } from "react-hook-form";
import { Option } from "../../interfaces/general";

interface BaseAutocompleteProps {
    onChange: (key: Option) => void;
    promiseOptions: (query: string) => Promise<Option[]>;
    optionText?: string;
    option: Option;
}

export interface AutocompleteProps extends BaseAutocompleteProps {
    valid?: boolean;
    error?: FieldError;
    innerRef?: Ref<any>;
    onInputChange?: (query: string) => void;
    onBlur?: Noop;
}

export interface ControllerAutocompleteProps extends BaseAutocompleteProps {
    control: Control<FieldValues, object>;
    name: string;
}