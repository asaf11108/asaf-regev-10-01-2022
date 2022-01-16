import React, { useEffect, useState } from 'react';
import './Home.scss';
import ControllerAutocomplete from '../../components/ControlledAutocomplete/ControlledAutocomplete';
import { Button, Card, CardContent, CircularProgress, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Forecast from '../../components/Forecast/Forecast';
import { Location } from "../../store/favorite-locations/favorite-locations.model";
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavoriteLocation } from '../../store/favorite-locations/favorite-locations.thunk';
import { favoriteLocationsActive, favoriteLocationsToggleFavorite } from '../../store/favorite-locations/favorite-locations.action';
import { FavoriteLocationSelectActiveEntity, FavoriteLocationSelectLoading } from '../../store/favorite-locations/favorite-locations.selector';
import { Option } from '../../interfaces/general';
import { getLocations } from '../../api/api.service';
import { ControllerAutocompleteProps } from '../../components/ControlledAutocomplete/ControlledAutocomplete.model';
import { useForm } from 'react-hook-form';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector(FavoriteLocationSelectLoading);
  const favoriteLocation = useSelector(FavoriteLocationSelectActiveEntity);
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
    return getLocations(query)
      .then<Location[]>(res => res.map(location => ({ key: location.Key, localizedName: location.LocalizedName })))
      .then<Option[]>(res => res.map(location => ({ id: location.key, label: location.localizedName })))
  };

  return (
    <div className="home">
      <Card className="home__autocomplete home__card">
        <CardContent>
          <form>
            <ControllerAutocomplete
              handleChange={handleSelectLocation}
              query={selectedOption.localizedName}
              promiseOptions={promiseOptions}
              placeholder="Search location"
              name="query"
              control={control}
            />
          </form>
        </CardContent>
      </Card>

      {
          <Card className="home__card">
            {
              loading
              ? <div className="home__loader"><div><CircularProgress /></div></div>
              : favoriteLocation
                && <CardContent>
                      <Typography className="home__title" gutterBottom variant="h5" component="div">
                        <span>
                          <span>{favoriteLocation.localizedName}</span>
                          <span>{favoriteLocation.temperature}&#176;C</span>
                        </span>
                        <Button disabled={loading} onClick={handleFavoriteClick}>
                          {
                            favoriteLocation.isFavorite
                              ? <FavoriteIcon fontSize="inherit" color="error" />
                              : <FavoriteBorderIcon fontSize="inherit" />
                          }
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
