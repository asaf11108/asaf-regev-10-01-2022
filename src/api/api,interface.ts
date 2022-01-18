import { AutocompleteOption } from "./interfaces/autocomplete";
import { CurrentConditions } from "./interfaces/current-conditions";
import { Forecasts } from "./interfaces/forecasts";

export interface IApiService {
    getLocations(query: string): Promise<AutocompleteOption[]>;
    getCurrentConditions(key: string): Promise<CurrentConditions>;
    getForecasts(key: string): Promise<Forecasts['DailyForecasts']>;
}