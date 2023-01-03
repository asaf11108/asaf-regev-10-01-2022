import { FC, useEffect, useMemo } from "react";
import { Button, Card, CardContent } from "@mui/material";
import Forecast from "../../components/forecast/forecast";
import {
  FavoriteLocation,
  Location,
} from "../../store/favorite-locations/favorite-locations.model";
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
import { useEffectFn } from "@ngneat/effects-hooks";
import { activeFavoriteLocationsDataSource, loadFavoriteLocation$ } from "../../store-elf/favorite-locations/favorite-locations.effect";
import { favoriteLocationsStore } from "../../store-elf/favorite-locations/favorite-locations.state";
import { selectActiveEntity } from "@ngneat/elf-entities";
import { useObservable } from "@ngneat/react-rxjs";

const Home: FC = () => {
  const [{ favoriteLocation, loading, error }] = useObservable(activeFavoriteLocationsDataSource.data$());

  const loadFavoriteLocation = useEffectFn(loadFavoriteLocation$);

  const [activeLocation] = useObservable(favoriteLocationsStore.pipe(selectActiveEntity()));
  useEffect(() => {
    activeLocation && loadFavoriteLocation(activeLocation)
  }, [activeLocation]);
  
  const {
    setQuery,
    promiseQuery: [response, , loadingState],
  } = useHomeQuery();


  const onLocationSelect: AutocompleteProps<Location>["onSelect"] = (
    location
  ) => {
    loadFavoriteLocation(location);
  };

  const onFavoriteClick = (): void => {
    // dispatch(favoriteLocationsToggleFavorite());
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
          <Autocomplete<Location, Location['key']>
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
        {loading ? (
          <S.Loader>
            <Loader />
          </S.Loader>
        ) : error || !favoriteLocation ? (
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
              <Button disabled={loading} onClick={onFavoriteClick}>
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
