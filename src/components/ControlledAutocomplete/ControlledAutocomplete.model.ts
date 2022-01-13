import { Option } from "../../interfaces/general";

export interface ControlledAutocompleteProps {
    query: string;
    handleChange: (key: Option) => void;
    promiseOptions: (query: string) => Promise<Option[]>;
    placeholder?: string;
}