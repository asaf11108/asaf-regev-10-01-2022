import { createStore, withProps } from '@ngneat/elf';
import { withActiveId, withEntities } from '@ngneat/elf-entities';
import { withRequestsStatus } from '@ngneat/elf-requests';
import { _Forecast } from '../../components/forecast/forecast.model';
import { FavoriteLocation } from '../../store/favorite-locations/favorite-locations.model';

export const favoriteLocationsStore = createStore(
  { name: 'favoriteLocation',  },
  withProps({ loading: false, error: null as any }),
  withEntities<FavoriteLocation, 'key'>({ idKey: 'key' }),
  withActiveId(),
  withRequestsStatus()
);
