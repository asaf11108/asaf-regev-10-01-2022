import { VFC, useEffect, useMemo } from "react";
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
import useHomeForm, { CONTROLLER_LOCATION_INPUT_RULES, CONTROLLER_NAME_LOCATION, HOME_FORM_REG_EXP } from "./home-form.hook";
import useHomeQuery from "./home-query.hook";
import Autocomplete from "../../components/autocomplete/autocomplete";
import { AutocompleteProps } from "../../components/autocomplete/autocomplete.model";
import * as S from "./home.style";

const Home: VFC = () => {
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
  const form = useHomeForm();

  useEffect(() => {
    dispatch(fetchFavoriteLocation(activeLocation));
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
            control={form.controls[CONTROLLER_NAME_LOCATION]}
            onSelect={onLocationSelect}
            onInputDebounce={setQuery}
            onInputFocus={option => setQuery(option.localizedName)}
            defaultOption={activeLocation}
            options={options}
            loading={loadingState === "pending"}
            placeholder="Search location"
            idProp="key"
            nameProp="localizedName"
            inputRules={CONTROLLER_LOCATION_INPUT_RULES}
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
