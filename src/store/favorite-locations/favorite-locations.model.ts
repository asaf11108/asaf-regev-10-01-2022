import { AutocompleteOption } from '../../api/interfaces/autocomplete';
import { _Forecast } from "../../components/forecast/forecast.model";

type LocationResponse = Pick<AutocompleteOption, 'Key' | 'LocalizedName'>;

export type Location = Record<Uncapitalize<keyof LocationResponse>, string>;

export interface FavoriteLocation extends Location {
  weatherText: string;
  temperature: string;
  icon: string;
  forecasts: _Forecast[];
  isFavorite: boolean;
}
