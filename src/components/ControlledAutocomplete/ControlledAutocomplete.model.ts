import { Location } from '../../interfaces/location';

export interface ControlledAutocompleteProps {
    selected: Location;
    handleChange: (key: string) => void;
}