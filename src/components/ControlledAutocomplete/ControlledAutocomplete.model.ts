import { Location } from '../../store/favorite-location/favorite-location.model';

export interface ControlledAutocompleteProps {
    selected: Location;
    handleChange: (key: Location) => void;
}