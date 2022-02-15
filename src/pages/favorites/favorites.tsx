import { FC } from 'react';
import Forecast from '../../components/forecast/forecast';
import { _Forecast } from '../../components/forecast/forecast.model';
import { FavoriteLocation } from '../../store/favorite-locations/favorite-locations.model';
import './favorites.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { favoriteLocationsActive } from '../../store/favorite-locations/favorite-locations.action';
import { FavoriteLocationSelectors } from '../../store/favorite-locations/favorite-locations.selector';
import { useManyTemperatureType } from '../../hooks/temprature-type.hook';
import { flow } from 'lodash-es';
import { filter } from 'lodash/fp';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ANIMATION_DELAY } from './favorites.config';

const Favorites: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favoriteLocations: FavoriteLocation[] = flow([
    useSelector,
    useManyTemperatureType,
    filter('isFavorite')
  ])(FavoriteLocationSelectors.selectAll);

  const handleActiveForecast = (favoriteLocation: FavoriteLocation): void => {
    dispatch(favoriteLocationsActive(favoriteLocation));
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
    <TransitionGroup className="favorites">
      {favoriteLocations.map((favoriteLocation, index) =>
        <CSSTransition
          classNames="favorites__forecast"
          key={favoriteLocation.key}
          timeout={ANIMATION_DELAY * (index + 1)}
          appear>
          <div
            className="favorites__forecast"
            style={{ transitionDelay: `${ANIMATION_DELAY * index}ms`,  }}
            onClick={() => handleActiveForecast(favoriteLocation)}>
            <Forecast forecast={mapToForecastComponent(favoriteLocation)} />
          </div>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
}

export default Favorites;