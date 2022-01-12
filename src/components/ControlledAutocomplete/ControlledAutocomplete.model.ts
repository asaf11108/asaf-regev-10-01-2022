import { Location } from '../../store/favorite-location/favorite-location.model';

export interface ControlledAutocompleteProps {
    query: Location['key'];
    handleChange: (key: Location) => void;
}