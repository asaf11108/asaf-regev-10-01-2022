import { createStore } from '@ngneat/elf';
import { updateEntities, withActiveId, withEntities } from '@ngneat/elf-entities';
import { withRequestsStatus } from '@ngneat/elf-requests';
import { _Forecast,  } from '../../components/forecast/forecast.model';
import { FavoriteLocation } from '../../store/favorite-locations/favorite-locations.model';

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

export function updateFavoriteLocationFavoriteToggle(id: FavoriteLocation['key']) {
  favoriteLocationsStore.update(updateEntities(id, entity => ({ ...entity, isFavorite: !entity.isFavorite })))
}
