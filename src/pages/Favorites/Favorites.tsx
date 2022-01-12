// import { ForecastData } from "./../../components/Forecast/forecast.data";
// import { FavoriteLocation } from "./../../store/favorite-location.interface";
// import Forecast from "./../../components/Forecast/index.vue";
// import { computed, defineComponent } from "vue";
// import { useRouter } from "vue-router";
// import { useStore } from "vuex";

import Forecast from '../../components/Forecast/Forecast';
import { _Forecast } from '../../components/Forecast/forecast.model';
import { FavoriteLocation } from '../../store/favorite-location/favorite-location.model';
import { favoriteLocationsActive, FavoriteLocationSelectors } from '../../store/favorite-location/favorite-location.state';
import './Favorites.scss';
import { useDispatch, useSelector } from 'react-redux';

const Favorites: React.FC = () => {
  const dispatch = useDispatch();
  const favoriteLocations: FavoriteLocation[] = useSelector(FavoriteLocationSelectors.selectAll).filter(favoriteLocation => favoriteLocation.isFavorite);

  const handleActiveForecast = (favoriteLocation: FavoriteLocation): void => {
    dispatch(favoriteLocationsActive(favoriteLocation.key));
    // router.push({ name: "Home" });
  };

  const mapToForecastComponent = (
    favoriteLocation: FavoriteLocation
  ): _Forecast => {
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
          <div className="favorites__forecast" onClick={() => handleActiveForecast(favoriteLocation)}>
            <Forecast key={favoriteLocation.key} forecast={mapToForecastComponent(favoriteLocation)} />
          </div>
        )
      }
    </div>
  );
}

export default Favorites;