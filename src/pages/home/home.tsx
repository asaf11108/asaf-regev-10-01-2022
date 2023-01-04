import { FC, useEffect, useMemo } from "react";
import { Button, Card, CardContent } from "@mui/material";
import Forecast from "../../components/forecast/forecast";
import {
  FavoriteLocation,
  Location,
} from "../../store/favorite-locations/favorite-locations.model";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavoriteLocation } from "../../store/favorite-locations/favorite-locations.thunk";
import {
  favoriteLocationsActive,
  favoriteLocationsToggleFavorite,
} from "../../store/favorite-locations/favorite-locations.action";
import {
  FavoriteLocationSelectActive,
  FavoriteLocationSelectActiveEntity,
  FavoriteLocationSelectError,
  FavoriteLocationSelectLoading,
} from "../../store/favorite-locations/favorite-locations.selector";
import Favorite from "../../components/favorite/favorite";
import { useOneTemperatureType } from "../../hooks/temprature-type.hook";
import { flow } from "lodash-es";
import Loader from "../../components/loader/loader";
import { CONTROLLER_LOCATION_INPUT_RULES, HOME_FORM_REG_EXP } from "./home-form.hook";
import useHomeQuery from "./home-query.hook";
import Autocomplete from "../../components/autocomplete/autocomplete";
import { AutocompleteProps } from "../../components/autocomplete/autocomplete.model";
import * as S from "./home.style";

const Home: FC = () => {
  const dispatch = useDispatch();
  const loadingLocation = useSelector(FavoriteLocationSelectLoading);
  const errorLocation = useSelector(FavoriteLocationSelectError);
  const favoriteLocation: FavoriteLocation = flow([
    useSelector,
    useOneTemperatureType,
  ])(FavoriteLocationSelectActiveEntity);

  const activeLocation = useSelector(FavoriteLocationSelectActive);
  
  const {
    setQuery,
    promiseQuery: [response, , loadingState],
  } = useHomeQuery();

  useEffect(() => {
    dispatch(fetchFavoriteLocation(activeLocation) as any);
  }, [dispatch, activeLocation]);

  const onLocationSelect: AutocompleteProps<Location>["onSelect"] = (
    location
  ) => {
    dispatch(favoriteLocationsActive(location));
  };

  const onFavoriteClick = (): void => {
    dispatch(favoriteLocationsToggleFavorite());
  };

  const options = useMemo<Location[]>(() => {
    return (response || [])
      .filter((location) => HOME_FORM_REG_EXP.test(location.LocalizedName))
      .map<Location>((location) => ({
        key: location.Key,
        localizedName: location.LocalizedName,
      }));
  }, [response]);

  return (
    <S.Home>
      <S.AutocompleteCard>
        <CardContent>
          <Autocomplete<Location>
            idProp="key"
            nameProp="localizedName"
            placeholder="Search location"
            inputRules={CONTROLLER_LOCATION_INPUT_RULES}
            loading={loadingState === "pending"}
            defaultOption={activeLocation}
            options={options}
            onSelect={onLocationSelect}
            onInputDebounce={setQuery}
            onInputFocus={option => setQuery(option.localizedName)}
          />
        </CardContent>
      </S.AutocompleteCard>

      <Card>
        {loadingLocation ? (
          <S.Loader>
            <Loader />
          </S.Loader>
        ) : errorLocation || !favoriteLocation ? (
          <S.ErrorTypography variant="h1">NO DATA</S.ErrorTypography>
        ) : (
          <CardContent>
            <S.TitleTypography gutterBottom variant="h5">
              <span>
                <span data-testid="localized-name">
                  {favoriteLocation.localizedName}
                </span>
                <span>{favoriteLocation.temperature}</span>
              </span>
              <Button disabled={loadingLocation} onClick={onFavoriteClick}>
                <Favorite isFavorite={favoriteLocation.isFavorite} />
              </Button>
            </S.TitleTypography>
            <S.Body>
              <S.BodyHeader>{favoriteLocation.weatherText}</S.BodyHeader>
              <S.Forecasts>
                {favoriteLocation.forecasts.map((forecast) => (
                  <Forecast key={forecast.title} forecast={forecast} />
                ))}
              </S.Forecasts>
            </S.Body>
          </CardContent>
        )}
      </Card>
    </S.Home>
  );
};

export default Home;
