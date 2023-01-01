import { format } from "date-fns";
import API from "../../api/api";
import { _Forecast } from "../../components/forecast/forecast.model";
import { FavoriteLocation, Location } from '../../store/favorite-locations/favorite-locations.model';
import { favoriteLocationsStore } from "./favorite-locations.state";
import { createEffectFn } from '@ngneat/effects';
import { forkJoin, Observable } from "rxjs";
import { map, tap, switchMap } from "rxjs/operators";
import { createRequestDataSource } from "@ngneat/elf-requests";
import { selectAllEntities, upsertEntities } from "@ngneat/elf-entities";

export const favoriteLocationsDataSource =
  createRequestDataSource({
    data$: () => favoriteLocationsStore.pipe(selectAllEntities()),
    requestKey: 'favoriteLocation',
    dataKey: 'favoriteLocations',
    store: favoriteLocationsStore,
  });

export const loadFavoriteLocation$ = createEffectFn((selectedOption$: Observable<Location>) => {
    return selectedOption$.pipe(
        favoriteLocationsDataSource.trackRequestStatus(),
        switchMap(selectedOption => forkJoin([
            API.getCurrentConditions(selectedOption.key),
            API.getForecasts(selectedOption.key)
        ]).pipe(map(res => ({ selectedOption, res })))),
        map(({ selectedOption, res }) => {
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
        }),
        tap(favoriteLocation => {
            favoriteLocationsStore.update(upsertEntities(favoriteLocation), favoriteLocationsDataSource.setSuccess());
        })
    );
})
