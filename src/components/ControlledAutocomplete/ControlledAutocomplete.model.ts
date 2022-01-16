import { Control, FieldValues } from "react-hook-form";
import { Option } from "../../interfaces/general";

export interface ControllerAutocompleteProps {
    query: string;
    handleChange: (key: Option) => void;
    promiseOptions: (query: string) => Promise<Option[]>;
    placeholder?: string;
    control: Control<FieldValues, object>;
    name: string;
}