import { AutocompleteOption } from './api/autocomplete';
import { _Forecast } from "../components/Forecast/forecast.model";

type LocationResponse = Pick<AutocompleteOption, 'Key' | 'LocalizedName'>;

export type Location = Record<Uncapitalize<keyof LocationResponse>, string>;

export interface FavoriteLocation extends Location {
  weatherText: string;
  temperature: number;
  icon: string;
  forecasts: _Forecast[];
  isFavorite: boolean;
}
