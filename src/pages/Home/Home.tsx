import React, { useEffect, useState } from 'react';
import './Home.scss';
import ControlledAutocomplete from '../../components/ControlledAutocomplete/ControlledAutocomplete';
import { Button, Card, CardContent, CircularProgress, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Forecast from '../../components/Forecast/Forecast';
import { Location } from "../../store/favorite-locations/favorite-locations.model";
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavoriteLocation } from '../../store/favorite-locations/favorite-locations.thunk';
import { favoriteLocationsActive, favoriteLocationsToggleFavorite } from '../../store/favorite-locations/favorite-locations.action';
import { FavoriteLocationSelectActiveEntity, FavoriteLocationSelectLoading } from '../../store/favorite-locations/favorite-locations.selector';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector(FavoriteLocationSelectLoading);
  const favoriteLocation = useSelector(FavoriteLocationSelectActiveEntity);

  const [selectedOption, setSelectedOption] = useState<Location>({
    key: favoriteLocation?.key ?? "215854",
    localizedName: favoriteLocation?.localizedName ?? "Tel Aviv"
  });

  useEffect(() => {
    dispatch(fetchFavoriteLocation(selectedOption));
  }, [dispatch, selectedOption]);


  const handleSelectLocation = (selectedOption: Location): void => {
    setSelectedOption(selectedOption);
    dispatch(favoriteLocationsActive(selectedOption.key));
  };

  function handleFavoriteClick(): void {
    dispatch(favoriteLocationsToggleFavorite({}));
  }

  return (
    <div className="home">
      <Card className="home__autocomplete home__card">
        <CardContent>
          <ControlledAutocomplete handleChange={handleSelectLocation} query={selectedOption.localizedName} />
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
