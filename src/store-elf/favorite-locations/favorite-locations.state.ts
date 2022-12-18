import { createStore, setProp, setProps, withProps } from '@ngneat/elf';
import { upsertEntities, withActiveId, withEntities } from '@ngneat/elf-entities';
import { format } from 'date-fns';
import API from '../../api/api';
import { _Forecast } from '../../components/forecast/forecast.model';
import { FavoriteLocation, Location } from '../../store/favorite-locations/favorite-locations.model';

const favoriteLocationsStore = createStore(
  { name: 'favoriteLocation',  },
  withProps({ loading: false, error: null as any }),
  withEntities<FavoriteLocation, 'key'>({ idKey: 'key' }),
  withActiveId()
);

export function fetchFavoriteLocation(selectedOption: Location) {
    favoriteLocationsStore.update(setProp('loading', true));
    return Promise.all([
        API.getCurrentConditions(selectedOption.key),
        API.getForecasts(selectedOption.key)
    ]).then(res => {
        const currentConditions = res[0][0];
        const forecasts: _Forecast[] = res[1].map(forecast => ({
            title: format(new Date(forecast.Date), "EEE"),
            temperature: `${forecast.Temperature.Minimum.Value}\u00B0C`,
        }));

        return {
            key: selectedOption.key,
            localizedName: selectedOption.localizedName,
            temperature: `${currentConditions.Temperature.Metric.Value}\u00B0C`,
            weatherText: currentConditions.WeatherText,
            icon: currentConditions.WeatherIcon.toString(),
            forecasts,
            searchedDate: new Date().toISOString()
        } as FavoriteLocation;
    }).then(favoriteLocation => {
        favoriteLocationsStore.update(
            upsertEntities([favoriteLocation]),
            setProps({ loading: false, error: null }),
        );
    }).catch(() => {
        favoriteLocationsStore.update(
            setProps({ loading: false, error: true }),
        );
    });
}