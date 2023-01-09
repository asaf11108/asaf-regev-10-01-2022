import { FC } from "react";
import Forecast from "../../components/forecast/forecast";
import { _Forecast } from "../../components/forecast/forecast.model";
import { FavoriteLocation } from "../../store-elf/favorite-locations/favorite-locations.model";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { favoriteLocationsActive } from "../../store/favorite-locations/favorite-locations.action";
import { FavoriteLocationSelectors } from "../../store/favorite-locations/favorite-locations.selector";
import { useManyTemperatureType } from "../../hooks/temprature-type.hook";
import { flow } from "lodash-es";
import { filter } from "lodash/fp";
import * as S from "./favorites.style";
import { ListEntrance } from "../../animations/list-entrance";

const Favorites: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favoriteLocations: FavoriteLocation[] = flow([
    useSelector,
    useManyTemperatureType,
    filter("isFavorite"),
  ])(FavoriteLocationSelectors.selectAll);

  const onLocationClick = (favoriteLocation: FavoriteLocation): void => {
    dispatch(favoriteLocationsActive(favoriteLocation));
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
