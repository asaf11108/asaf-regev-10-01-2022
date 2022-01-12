import { createAsyncThunk } from "@reduxjs/toolkit";
import { format } from "date-fns";
import { getCurrentConditions, getForecasts } from "../../api/api.service";
import { _Forecast } from "../../components/Forecast/forecast.model";
import { FavoriteLocation, Location } from "./favorite-location.model";


export const fetchFavoriteLocation = createAsyncThunk('favoriteLocations/fetchFavoriteLocation', async (selectedOption: Location) => {
    return await Promise.all([
        getCurrentConditions(selectedOption.key),
        getForecasts(selectedOption.key)
    ]).then(res => {
        const currentConditions = res[0][0];
        const forecasts: _Forecast[] = res[1].map(forecast => ({
            title: format(new Date(forecast.Date), "EEE"),
            temperature: forecast.Temperature.Minimum.Value,
        }));

        return {
            key: selectedOption.key,
            localizedName: selectedOption.localizedName,
            temperature: currentConditions.Temperature.Metric.Value,
            weatherText: currentConditions.WeatherText,
            icon: currentConditions.WeatherIcon.toString(),
            forecasts,
        } as FavoriteLocation
    });
});