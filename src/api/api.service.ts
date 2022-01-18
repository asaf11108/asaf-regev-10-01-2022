import { CurrentConditions } from './interfaces/current-conditions';
import { getMockCurrentConditions, getMockForecasts, getMockLocations } from "./api-mock.service";
import { Forecasts } from './interfaces/forecasts';
import { AutocompleteOption } from './interfaces/autocomplete';
import axios from 'axios';

const HTTP_PREFIX = "https://cors-anywhere.herokuapp.com/";
const ENDPOINT = "http://dataservice.accuweather.com/";

export async function getLocations(query: string): Promise<AutocompleteOption[]> {
  return axios.get<AutocompleteOption[]>(
    `${HTTP_PREFIX}${ENDPOINT}locations/v1/cities/autocomplete`,
    {
      params: { q: encodeURIComponent(query) }
    }
  )
    .then((res) => res.data)
    .catch(() => {
      return getMockLocations(query);
    });
}

export async function getCurrentConditions(key: string): Promise<CurrentConditions> {
  return axios.get<CurrentConditions>(
    `${HTTP_PREFIX}${ENDPOINT}currentconditions/v1/${key}`
  )
    .then((res) => res.data)
    .catch(() => {
      return getMockCurrentConditions(key);
    });
}

export async function getForecasts(key: string): Promise<Forecasts['DailyForecasts']> {
  return axios.get(
    `${HTTP_PREFIX}${ENDPOINT}forecasts/v1/daily/5day/${key}`,
    {
      params: { metric: true }
    }
  )
    .then((res) => res.data)
    .then((res) => res.DailyForecasts)
    .catch(() => {
      return getMockForecasts(key);
    });
}
