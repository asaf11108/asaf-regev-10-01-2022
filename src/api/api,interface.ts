import { Forecasts } from './../interfaces/api/forecasts';
import { CurrentConditions } from "../interfaces/api/current-conditions";
import { AutocompleteOption } from '../interfaces/api/autocomplete';

export interface IApiService {
  getLocations(query: string): Promise<AutocompleteOption[]>;
  getCurrentConditions(key: string): Promise<CurrentConditions>;
  getForecasts(key: string): Promise<Forecasts>;
}
