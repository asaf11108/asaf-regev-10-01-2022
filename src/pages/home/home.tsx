import { VFC, useEffect, useMemo, useState, useCallback } from 'react';
import './home.scss';
import { Button, Card, CardContent, Typography } from '@mui/material';
import Forecast from '../../components/forecast/forecast';
import { FavoriteLocation, Location } from "../../store/favorite-locations/favorite-locations.model";
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavoriteLocation } from '../../store/favorite-locations/favorite-locations.thunk';
import { favoriteLocationsActive, favoriteLocationsToggleFavorite } from '../../store/favorite-locations/favorite-locations.action';
import { FavoriteLocationSelectActive, FavoriteLocationSelectActiveEntity, FavoriteLocationSelectError, FavoriteLocationSelectLoading } from '../../store/favorite-locations/favorite-locations.selector';
import { Option } from '../../interfaces/general';
import { AutocompleteProps } from '../../components/autocomplete/autocomplete.model';
import { useForm } from 'react-hook-form';
import API from '../../api/api';
import Favorite from '../../components/favorite/favorite';
import { useOneTemperatureType } from '../../hooks/temprature-type.hook';
import { flow } from 'lodash-es';
import Loader from '../../components/loader/loader';
import Autocomplete from '../../components/autocomplete/autocomplete';
import usePromise from 'react-use-promise';
import { AutocompleteOption } from '../../api/interfaces/autocomplete';

const Home: VFC = () => {
  const dispatch = useDispatch();
  const loadingLocation = useSelector(FavoriteLocationSelectLoading);
  const errorLocation = useSelector(FavoriteLocationSelectError);
  const favoriteLocation: FavoriteLocation = flow([
    useSelector,
    useOneTemperatureType,
  ])(FavoriteLocationSelectActiveEntity);
  const { control } = useForm({ mode: 'onChange' });

  const activeLocation = useSelector(FavoriteLocationSelectActive);

  const [query, setQuery] = useState<string>(activeLocation.localizedName);
  const [response, error, loadingState] = usePromise<AutocompleteOption[]>(
    () => API.getLocations(query),
    [query]
  );

  const locationToOption = (location: Location): Option => ({ id: location.key, label: location.localizedName });

  useEffect(() => {
    dispatch(fetchFavoriteLocation(activeLocation));
  }, [dispatch, activeLocation]);

  const handleSelectLocation = (selectedOption: Option): void => {
    const location: Location = { key: selectedOption.id as string, localizedName: selectedOption.label };
    dispatch(favoriteLocationsActive(location));
  };

  const handleFavoriteClick = (): void => {
    dispatch(favoriteLocationsToggleFavorite());
  }

  const handleInputChange = (query: string) => {
      setQuery(query);
    };

  const options = useMemo<Option[]>(() => {
    return (response || [])
    .map<Location>(location => ({ key: location.Key, localizedName: location.LocalizedName }))
    .map(locationToOption);
  }, [response])

  return (
    <div className="home">
      <Card className="home__autocomplete">
        <CardContent>
          <form>
            <Autocomplete
              onChange={handleSelectLocation}
              onInputChange={handleInputChange}
              option={locationToOption(activeLocation)}
              options={options}
              loading={loadingState === 'pending'}
              optionText="location"
            />
          </form>
        </CardContent>
      </Card>

        <Card>
          {loadingLocation
            ? <div className="home__loader"><Loader /></div>
            : errorLocation
              ? <Typography className="home__error" variant="h1" component="div">NO DATA</Typography>
              : favoriteLocation
              && <CardContent>
                <Typography className="home__title" gutterBottom variant="h5" component="div">
                  <span>
                    <span data-testid="localized-name">{favoriteLocation.localizedName}</span>
                    <span>{favoriteLocation.temperature}</span>
                  </span>
                  <Button disabled={loadingLocation} onClick={handleFavoriteClick}>
                    <Favorite isFavorite={favoriteLocation.isFavorite} />
                  </Button>
                </Typography>
                <div className="home__body">
                  <div className="home__body-header">{favoriteLocation.weatherText}</div>
                  <div className="home__forecasts">
                    {favoriteLocation.forecasts.map(forecast => <Forecast key={forecast.title} forecast={forecast} />)}
                  </div>
                </div>
              </CardContent>}
        </Card>
    </div>
  );
};

export default Home;
