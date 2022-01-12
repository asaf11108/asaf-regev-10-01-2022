import React, { useEffect, useState } from 'react';
import './Home.scss';
import ControlledAutocomplete from '../../components/ControlledAutocomplete/ControlledAutocomplete';
import { Button, Card, CardContent, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Forecast from '../../components/Forecast/Forecast';
import { _Forecast } from '../../components/Forecast/forecast.model';
import { Location } from "../../store/favorite-location/favorite-location.model";
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavoriteLocation } from '../../store/favorite-location/favorite-locations.thunk';
import { FavoriteLocationSelectLoading, FavoriteLocationSelectActiveEntity, favoriteLocationsToggleFavorite } from '../../store/favorite-location/favorite-location.state';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  let loading = useSelector(FavoriteLocationSelectLoading);
  const favoriteLocation = useSelector(FavoriteLocationSelectActiveEntity);

  const [selectedOption, setSelectedOption] = useState<Location>({
    key: favoriteLocation?.key ?? "215854",
    localizedName: favoriteLocation?.localizedName ?? "Tel Aviv"
  });

  useEffect(() => {
    dispatch(fetchFavoriteLocation(selectedOption));
  }, [selectedOption]);


  const handleSelectLocation = (selectedOption: Location): void => {
    setSelectedOption(selectedOption);
  };

  const handleFavoriteClick = (): void => {
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
        favoriteLocation &&
        <Card className="home__card">
          <CardContent>
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
                  favoriteLocation.forecasts.map((forecast, i) => <Forecast key={i} forecast={forecast} />)
                }
              </div>
            </div>
          </CardContent>
        </Card>
      }
    </div>
  );
};

export default Home;
