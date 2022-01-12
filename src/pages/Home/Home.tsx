import React, { useEffect } from 'react';
import './Home.scss';
import ControlledAutocomplete from '../../components/ControlledAutocomplete/ControlledAutocomplete';
import { getCurrentConditions, getForecasts, getLocations } from '../../api/api.service';
import { format } from 'date-fns';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { FavoriteLocation } from '../../store/favorite-location/favorite-location.model';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Forecast from '../../components/Forecast/Forecast';
import { _Forecast } from '../../components/Forecast/forecast.model';
import { Location } from "../../store/favorite-location/favorite-location.model";
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavoriteLocation } from '../../store/favorite-location/favorite-locations.thunk';
import { favoriteLocationSelectors, RootState, SelectFavoriteLocationEntity } from '../../store/favorite-location/favorite-location.state';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  let favoriteLocation: FavoriteLocation | undefined = undefined;

  // const store = useStore();
  // const selectLoading = computed<boolean>(() => store.getters.selectLoading);
  // const favoriteLocation = computed<FavoriteLocation>(
  //   () => store.getters.selectActiveEntity
  // );
  // const selectedOption = {
  //   key: favoriteLocation.value.id ?? "215854",
  //   localizedName: favoriteLocation.value.locationName ?? "Tel Aviv",
  // };
  const selectedOption = {
    key: "215854",
    localizedName: "Tel Aviv",
  };
  
  const FetchLocation = (selectedOption: Location) => {
    dispatch(fetchFavoriteLocation(selectedOption));
    return useSelector((state: RootState) => SelectFavoriteLocationEntity(selectedOption.key)(state));
  };

  useEffect(() => {
    favoriteLocation = FetchLocation(selectedOption);
  }, []);


  return (
    <div className="home">
      <Card className="home__autocomplete home__card">
        <CardContent>
          <ControlledAutocomplete handleChange={FetchLocation} selected={selectedOption} />
        </CardContent>
      </Card>

      {/* {
        favoriteLocation &&
        <Card className="home__card">
          <CardContent>
            <Typography className="home__title" gutterBottom variant="h5" component="div">
              <span>
                <span>{favoriteLocation.localizedName}</span>
                <span>{favoriteLocation.temperature}&#176;C</span>
              </span>
              <Button disabled={favoriteLocation.isLoading} onClick={() => { }}>
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
      } */}
    </div>
  );
};

export default Home;
