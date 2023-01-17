import { FC } from "react";
import Forecast from "../../components/forecast/forecast";
import { _Forecast } from "../../components/forecast/forecast.model";
import { FavoriteLocation } from "../../store-elf/favorite-locations/favorite-locations.model";
import { useNavigate } from "react-router-dom";
import { useManyTemperatureType } from "../../hooks/temprature-type.hook";
import * as S from "./favorites.style";
import { ListEntrance } from "../../animations/list-entrance";
import { favoriteLocationsStore, updateFavoriteLocationsSetActiveId } from "../../store-elf/favorite-locations/favorite-locations.state";
import { useObservable } from "@ngneat/react-rxjs";
import { selectAllEntities } from "@ngneat/elf-entities";
import { map } from "rxjs";

const Favorites: FC = () => {
  const navigate = useNavigate();
  const [favoriteLocations] = useObservable(favoriteLocationsStore.pipe(
    selectAllEntities(),
    map(favoriteLocations => useManyTemperatureType(favoriteLocations)),
    map(favoriteLocations => favoriteLocations.filter((favoriteLocation) => favoriteLocation.isFavorite))
  ))

  const onLocationClick = (favoriteLocation: FavoriteLocation): void => {
    updateFavoriteLocationsSetActiveId(favoriteLocation.key);
    navigate("/");
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
    <S.Favorites>
      <ListEntrance<FavoriteLocation> list={favoriteLocations} idProp="key">
        {({ item }) => (
          <Forecast
            forecast={mapToForecastComponent(item)}
            onClick={() => onLocationClick(item)}
          />
        )}
      </ListEntrance>
    </S.Favorites>
  );
};

export default Favorites;
