import { FC } from 'react';
import Forecast from '../../components/Forecast/Forecast';
import { _Forecast } from '../../components/Forecast/forecast.model';
import { FavoriteLocation } from '../../store/favorite-locations/favorite-locations.model';
import './Favorites.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { favoriteLocationsActive } from '../../store/favorite-locations/favorite-locations.action';
import { FavoriteLocationSelectors } from '../../store/favorite-locations/favorite-locations.selector';
import { useManyTemperatureType } from '../../hooks/temprature-type.hook';
import { flow } from 'lodash-es';
import { filter } from 'lodash/fp';

const Favorites: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favoriteLocations: FavoriteLocation[] = flow([
    useSelector,
    useManyTemperatureType,
    filter('isFavorite')
  ])(FavoriteLocationSelectors.selectAll);

  const handleActiveForecast = (favoriteLocation: FavoriteLocation): void => {
    dispatch(favoriteLocationsActive(favoriteLocation.key));
    navigate('/');
  };

  const mapToForecastComponent = (favoriteLocation: FavoriteLocation): _Forecast => {
    return {
      title: favoriteLocation.localizedName,
      temperature: favoriteLocation.temperature,
      icon: favoriteLocation.icon,
    };
  };

  return (
    <div className="favorites">
      {
        favoriteLocations.map(favoriteLocation =>
          <div key={favoriteLocation.key} className="favorites__forecast" onClick={() => handleActiveForecast(favoriteLocation)}>
            <Forecast forecast={mapToForecastComponent(favoriteLocation)} />
          </div>
        )
      }
    </div>
  );
}

export default Favorites;