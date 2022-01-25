import { FavoriteLocation } from './../store/favorite-locations/favorite-locations.model';
import { GeneralTemperatureModeSelect } from './../store/general/general.selector';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { TemperatureType } from '../store/general/general.model';
import { round } from 'lodash-es';

const calcTemprature = (temperature: string): string => {
    return `${round(Number(temperature.replace(/[^0-9.]*/g, '')) * 9/5 + 32)}\u00B0F`; // calculation to fahrenheit and round to 1 digits precision
}

const useTemperatureType = (favoriteLocations: FavoriteLocation[]) => {
    const temperatureType = useSelector(GeneralTemperatureModeSelect);

    return useMemo(() => {
        let _favoriteLocations = favoriteLocations;
        if (temperatureType === TemperatureType.Fahrenheit) {
            _favoriteLocations = favoriteLocations.map(favoriteLocation => ({
                ...favoriteLocation,
                temperature: calcTemprature(favoriteLocation.temperature),
                forecasts: favoriteLocation.forecasts.map(forecast => ({
                    ...forecast,
                    temperature: calcTemprature(forecast.temperature)
                }))
            }))
        }
        return _favoriteLocations;
    }, [favoriteLocations, temperatureType]);
}

export const useOneTemperatureType = (favoriteLocation: FavoriteLocation) => {
    const favoriteLocations = useMemo(() => {
      return [favoriteLocation];
    }, [favoriteLocation])

    return useTemperatureType(favoriteLocations)[0];
};

export const useManyTemperatureType = (favoriteLocations: FavoriteLocation[]) => {
    return useTemperatureType(favoriteLocations);
};
