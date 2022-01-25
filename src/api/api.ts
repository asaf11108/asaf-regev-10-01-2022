import { getMockCurrentConditions, getMockForecasts, getMockLocations } from "./api-mock.service";
import { getCurrentConditions, getForecasts, getLocations } from "./api.service";
import { AutocompleteOption } from "./interfaces/autocomplete";
import { CurrentConditions } from "./interfaces/current-conditions";
import { Forecasts } from "./interfaces/forecasts";

export interface IApiService {
    getLocations(query: string): Promise<AutocompleteOption[]>;
    getCurrentConditions(key: string): Promise<CurrentConditions>;
    getForecasts(key: string): Promise<Forecasts['DailyForecasts']>;
}

const API: IApiService = process.env.REACT_APP_PRODUCTION === 'true'
  ? ({
    getLocations,
    getCurrentConditions,
    getForecasts
  })
  : ({
    getLocations: getMockLocations,
    getCurrentConditions: getMockCurrentConditions,
    getForecasts: getMockForecasts
  });

export default API;
