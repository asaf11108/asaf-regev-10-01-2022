import React from 'react';
import './Home.scss';
import ControlledAutocomplete from '../ControlledAutocomplete/ControlledAutocomplete';
import { getCurrentConditions, getForecasts, getLocations } from '../../api/api.service';
import { useQueries, useQuery, useQueryClient, UseQueryResult } from 'react-query';
import { Location } from '../../interfaces/location';
import { format } from 'date-fns';
import { Forecast as IForecast } from '../../interfaces/forecast';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { FavoriteLocation } from '../../interfaces/favorite-location.interface';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Home: React.FC = () => {
  const queryClient = useQueryClient()

  //  const query = useQuery(['locations', selectedOption.key], () => getLocations(''))

  //  // Mutations
  //  const mutation = useMutation(postTodo, {
  //    onSuccess: () => {
  //      // Invalidate and refetch
  //      queryClient.invalidateQueries('todos')
  //    },
  //  })

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

  const FavoriteLocationQuery = (selectedOption: Location): UseQueryResult<FavoriteLocation> => {
    return useQuery(['FavoriteData', selectedOption.key], () => Promise.all([
      getCurrentConditions(selectedOption.key),
      getForecasts(selectedOption.key)
    ]).then(res => {
      const currentConditions = res[0][0];
      const forecasts: IForecast[] = res[1].map((forecast) => ({
        title: format(new Date(forecast.Date), "EEE"),
        temperature: forecast.Temperature.Minimum.Value,
      }));

      return {
        id: selectedOption.key,
        locationName: selectedOption.localizedName,
        temperature: currentConditions.Temperature.Metric.Value,
        weatherText: currentConditions.WeatherText,
        icon: currentConditions.WeatherIcon.toString(),
        forecasts,
      }
    })
    );
  };

  const favoriteLocation = FavoriteLocationQuery(selectedOption);

  return (
    <div className="home">
      <Card className="home__autocomplete home__card">
        <CardContent>
          <ControlledAutocomplete handleChange={() => { }} selected={selectedOption} />
        </CardContent>
      </Card>

      {
        favoriteLocation.data &&
        <Card className="home__card">
          <CardContent>
            <Typography className="home__title" gutterBottom variant="h5" component="div">
              <span>
                <span>{favoriteLocation.data.locationName}</span>
                <span>{favoriteLocation.data.temperature}&#176;C</span>
              </span>
              <Button disabled={favoriteLocation.isLoading} onClick={() => { }}>
                {
                  favoriteLocation.data.isFavorite ?
                    <FavoriteIcon fontSize="inherit" color="error" /> :
                    <FavoriteBorderIcon fontSize="inherit" />
                }
              </Button>
            </Typography>
            <div className="home__body">
          <div className="home__body-header">{favoriteLocation.data.weatherText}</div>
        {/* <div class="home__forecasts">
          <Forecast v-for="forecast in favoriteLocation.forecasts" :key="forecast.title" :forecastProp="forecast"></Forecast>
      </div> */}
            </div>
          </CardContent>
        </Card>
      }

      {/* <div>
        {JSON.stringify()}
      </div> */}

      {/* <div className="home__card card" v-if="favoriteLocation">

      <h5 className="home__title card-title">
        <span>
          <span>{{favoriteLocation.locationName}}</span>
          <span>{{favoriteLocation.temperature}}&#176;C</span>
        </span>
        <button className="btn btn-primary" :disabled="selectLoading"
          @click="handleFavorite(favoriteLocation.id, !favoriteLocation.isFavorite)">
          {{ favoriteLocation.isFavorite ? 'Remove from favorites' : 'Add to favorites' }}
        </button>
      </h5>

      <div className="home__body card-body">
        <div>
          <h1 className="home__body-header">{{favoriteLocation.weatherText}}</h1>
        </div>
        <div className="home__forecasts">
          <Forecast v-for="forecast in favoriteLocation.forecasts" :key="forecast.title" :forecastProp="forecast"></Forecast>
        </div>
      </div>

  </div> */}
    </div>
  );
};

export default Home;
