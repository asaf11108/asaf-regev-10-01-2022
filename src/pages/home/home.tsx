import { FC, useEffect, useState } from 'react';
import './home.scss';
import ControllerAutocomplete from '../../components/autocomplete/controller-autocomplete';
import { Button, Card, CardContent, Typography } from '@mui/material';
import Forecast from '../../components/forecast/forecast';
import { FavoriteLocation, Location } from "../../store/favorite-locations/favorite-locations.model";
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavoriteLocation } from '../../store/favorite-locations/favorite-locations.thunk';
import { favoriteLocationsActive, favoriteLocationsToggleFavorite } from '../../store/favorite-locations/favorite-locations.action';
import { FavoriteLocationSelectActiveEntity, FavoriteLocationSelectLoading } from '../../store/favorite-locations/favorite-locations.selector';
import { Option } from '../../interfaces/general';
import { AutocompleteProps } from '../../components/autocomplete/autocomplete.model';
import { useForm } from 'react-hook-form';
import API from '../../api/api';
import Favorite from '../../components/favorite/favorite';
import { useOneTemperatureType } from '../../hooks/temprature-type.hook';
import { flow } from 'lodash-es';
import Loader from '../../components/loader/loader';

const Home: FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector(FavoriteLocationSelectLoading);
  const favoriteLocation: FavoriteLocation = flow([
    useSelector,
    useOneTemperatureType,
  ])(FavoriteLocationSelectActiveEntity);
  const { control } = useForm({ mode: 'onChange' });

  const [selectedOption, setSelectedOption] = useState<Location>({
    key: favoriteLocation?.key ?? "215854",
    localizedName: favoriteLocation?.localizedName ?? "Tel Aviv"
  });

  useEffect(() => {
    dispatch(fetchFavoriteLocation(selectedOption));
  }, [dispatch, selectedOption]);


  const handleSelectLocation = (selectedOption: Option): void => {
    const location: Location = { key: selectedOption.id as string, localizedName: selectedOption.label };
    setSelectedOption(location);
    dispatch(favoriteLocationsActive(location.key));
  };

  const handleFavoriteClick = (): void => {
    dispatch(favoriteLocationsToggleFavorite({}));
  }

  const locationToOption = (location: Location): Option => ({ id: location.key, label: location.localizedName })

  const promiseOptions: AutocompleteProps['promiseOptions'] = async (query) => {
    return API.getLocations(query)
      .then<Location[]>(res => res.map(location => ({ key: location.Key, localizedName: location.LocalizedName })))
      .then<Option[]>(res => res.map(locationToOption))
  };


  return (
    <div className="home">
      <Card className="home__autocomplete">
        <CardContent>
          <form>
            <ControllerAutocomplete
              onChange={handleSelectLocation}
              option={locationToOption(selectedOption)}
              promiseOptions={promiseOptions}
              optionText="location"
              name="query"
              control={control}
            />
          </form>
        </CardContent>
      </Card>

      {
          <Card>
            {
              loading
              ? <div className="home__loader"><Loader /></div>
              : favoriteLocation
                && <CardContent>
                      <Typography className="home__title" gutterBottom variant="h5" component="div">
                        <span>
                          <span>{favoriteLocation.localizedName}</span>
                          <span>{favoriteLocation.temperature}</span>
                        </span>
                        <Button disabled={loading} onClick={handleFavoriteClick}>
                          <Favorite isFavorite={favoriteLocation.isFavorite}/>
                        </Button>
                      </Typography>
                      <div className="home__body">
                        <div className="home__body-header">{favoriteLocation.weatherText}</div>
                        <div className="home__forecasts">
                          {
                            favoriteLocation.forecasts.map(forecast => <Forecast key={forecast.title} forecast={forecast} />)
                          }
                        </div>
                      </div>
                    </CardContent>
            }
          </Card>
      }
    </div>
  );
};

export default Home;
