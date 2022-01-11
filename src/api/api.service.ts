import { CurrentConditions } from './interfaces/current-conditions';
import { getMockCurrentConditions, getMockForecasts, getMockLocations } from "./api.mock.service";
import { Forecasts } from './interfaces/forecasts';
import { AutocompleteOption } from './interfaces/autocomplete';
// import { MatSnackBar } from '@angular/material/snack-bar';

const API_KEY = "gRf4KNnswLuVm8mG3puAI1GUOGeJTu1v";
const HTTP_PREFIX = "https://cors-anywhere.herokuapp.com/";
const ENDPOINT = "http://dataservice.accuweather.com/";
const BAD_REQUEST = " Unable to retrieve data. Switched to mock data.";

export function getLocations(query: string): Promise<AutocompleteOption[]> {
  return fetch(
    `${HTTP_PREFIX}${ENDPOINT
    }locations/v1/cities/autocomplete?apikey=${API_KEY
    }&q=${encodeURIComponent(query)}`
  )
    .then((res) => res.json() as Promise<AutocompleteOption[]>)
    .catch(() => {
      handleError();
      return getMockLocations(query);
    });
}

export function getCurrentConditions(key: string): Promise<CurrentConditions> {
  return fetch(
    `${HTTP_PREFIX}${ENDPOINT}currentconditions/v1/${key}?apikey=${API_KEY}`
  )
    .then((res) => res.json() as Promise<CurrentConditions>)
    .catch(() => {
      handleError();
      return getMockCurrentConditions(key);
    });
}

export function getForecasts(key: string): Promise<Forecasts['DailyForecasts']> {
  return fetch(
    `${HTTP_PREFIX}${ENDPOINT}forecasts/v1/daily/5day/${key}?apikey=${API_KEY}&metric=true`
  )
    .then((res) => res.json())
    .then((res) => res.DailyForecasts)
    .catch(() => {
      handleError();
      return getMockForecasts(key);
    });
}

function handleError(): void {
  // _snackBar.open(BAD_REQUEST, '', { duration: 2000 });
  // favoriteLocationsStore.setError(BAD_REQUEST);
}
