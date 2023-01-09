import { AutocompleteOption } from '../../api/interfaces/autocomplete';
import { _Forecast } from "../../components/forecast/forecast.model";
import { ISOString } from '../../interfaces/general';

type LocationResponse = Pick<AutocompleteOption, 'Key' | 'LocalizedName'>;

export type Location = Record<Uncapitalize<keyof LocationResponse>, string>;

export interface FavoriteLocation extends Location {
  weatherText: string;
  temperature: string;
  icon: string;
  forecasts: _Forecast[];
  isFavorite: boolean;
  searchedDate: ISOString;
}
