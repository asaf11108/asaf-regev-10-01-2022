import { createStore } from '@ngneat/elf';
import { setActiveId, updateEntities, withActiveId, withEntities } from '@ngneat/elf-entities';
import { withRequestsStatus } from '@ngneat/elf-requests';
import { _Forecast,  } from '../../components/forecast/forecast.model';
import { FavoriteLocation } from './favorite-locations.model';

export const DEAFUALT_LOCATION: FavoriteLocation = {
  key: '215854',
  localizedName: 'Tel Aviv',
  forecasts: [],
  isFavorite: false,
  icon: '',
  searchedDate: new Date().toISOString(),
  temperature: '',
  weatherText: ''
};

export const favoriteLocationsStore = createStore(
  { name: 'favoriteLocation',  },
  withEntities<FavoriteLocation, 'key'>({ idKey: 'key', initialValue: [DEAFUALT_LOCATION] }),
  withActiveId(DEAFUALT_LOCATION.key),
  withRequestsStatus()
);

export function updateFavoriteLocationsFavoriteToggle(key: FavoriteLocation['key']) {
  favoriteLocationsStore.update(updateEntities(key, entity => ({ ...entity, isFavorite: !entity.isFavorite })));
}

export function updateFavoriteLocationsSetActiveId(key: FavoriteLocation['key']) {
  favoriteLocationsStore.update(setActiveId(key));
}
