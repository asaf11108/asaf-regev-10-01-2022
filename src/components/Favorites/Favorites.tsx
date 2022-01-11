// import { ForecastData } from "./../../components/Forecast/forecast.data";
// import { FavoriteLocation } from "./../../store/favorite-location.interface";
// import Forecast from "./../../components/Forecast/index.vue";
// import { computed, defineComponent } from "vue";
// import { useRouter } from "vue-router";
// import { useStore } from "vuex";

import { FavoriteLocation } from '../../interfaces/favorite-location.interface';
import Forecast from '../Forecast/Forecast';
import { _Forecast } from '../Forecast/forecast.model';
import './Favorites.scss';

// export default defineComponent({
//   name: "Favorites",
//   components: {
//     Forecast,
//   },
//   setup() {
//     const router = useRouter();
//     const store = useStore();


//     const handleForecast = (favoriteLocation: FavoriteLocation): void => {
//       store.dispatch("setActive", favoriteLocation.id);
//       router.push({ name: "Home" });
//     };

//     const mapToForecastComponent = (
//       favoriteLocation: FavoriteLocation
//     ): ForecastData => {
//       return {
//         title: favoriteLocation.locationName,
//         temperature: favoriteLocation.temperature,
//         icon: favoriteLocation.icon,
//       };
//     };

//     return { favoriteLocations, handleForecast, mapToForecastComponent };
//   },
// });

const Favorites: React.FC = () => {
  const favoriteLocations: FavoriteLocation[] = ([] as FavoriteLocation[]).filter(favoriteLocation => favoriteLocation.isFavorite);

  const handleForecast = (favoriteLocation: FavoriteLocation): void => {
    // store.dispatch("setActive", favoriteLocation.id);
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
          <div className="favorites__forecast" onClick={() => handleForecast(favoriteLocation)}>
            <Forecast key={favoriteLocation.key} forecast={mapToForecastComponent(favoriteLocation)} />
          </div>
        )
      }
    </div>
  );
}

export default Favorites;