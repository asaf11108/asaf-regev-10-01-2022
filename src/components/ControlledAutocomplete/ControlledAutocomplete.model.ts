import { Location } from '../../store/favorite-locations/favorite-locations.model';

export interface ControlledAutocompleteProps {
    query: Location['key'];
    handleChange: (key: Location) => void;
}