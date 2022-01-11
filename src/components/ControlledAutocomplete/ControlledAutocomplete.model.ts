import { Location } from '../../interfaces/favorite-location.interface';

export interface ControlledAutocompleteProps {
    selected: Location;
    handleChange: (key: string) => void;
}