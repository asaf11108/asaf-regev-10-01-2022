import { FC, useEffect, useState } from 'react';
import './Home.scss';
import ControllerAutocomplete from '../../components/ControllerAutocomplete/ControllerAutocomplete';
import { Button, Card, CardContent, CircularProgress, Typography } from '@mui/material';
import Forecast from '../../components/Forecast/Forecast';
import { FavoriteLocation, Location } from "../../store/favorite-locations/favorite-locations.model";
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavoriteLocation } from '../../store/favorite-locations/favorite-locations.thunk';
import { favoriteLocationsActive, favoriteLocationsToggleFavorite } from '../../store/favorite-locations/favorite-locations.action';
import { FavoriteLocationSelectActiveEntity, FavoriteLocationSelectLoading } from '../../store/favorite-locations/favorite-locations.selector';
import { Option } from '../../interfaces/general';
import { ControllerAutocompleteProps } from '../../components/ControllerAutocomplete/ControllerAutocomplete.model';
import { useForm } from 'react-hook-form';
import API from '../../api/api';
import Favorite from '../../components/Favorite/Favorite';
import { useOneTemperatureType } from '../../hooks/temprature-type.hook';
import { flow } from 'lodash-es';

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

  const promiseOptions: ControllerAutocompleteProps['promiseOptions'] = async (query) => {
    return API.getLocations(query)
      .then<Location[]>(res => res.map(location => ({ key: location.Key, localizedName: location.LocalizedName })))
      .then<Option[]>(res => res.map(location => ({ id: location.key, label: location.localizedName })))
  };

  return (
    <div className="home">
      <Card className="home__autocomplete">
        <CardContent>
          <form>
            <ControllerAutocomplete
              handleChange={handleSelectLocation}
              query={selectedOption.localizedName}
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
              ? <div className="home__loader"><div><CircularProgress /></div></div>
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
