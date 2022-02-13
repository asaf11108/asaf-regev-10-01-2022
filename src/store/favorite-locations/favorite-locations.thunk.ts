import { createAsyncThunk } from "@reduxjs/toolkit";
import { format } from "date-fns";
import API from "../../api/api";
import { _Forecast } from "../../components/forecast/forecast.model";
import { FavoriteLocation, Location } from "./favorite-locations.model";


export const fetchFavoriteLocation = createAsyncThunk('favoriteLocations/fetchFavoriteLocation', async (selectedOption: Location) => {
    return Promise.all([
        API.getCurrentConditions(selectedOption.key),
        API.getForecasts(selectedOption.key)
    ]).then(res => {
        const currentConditions = res[0][0];
        const forecasts: _Forecast[] = res[1].map(forecast => ({
            title: format(new Date(forecast.Date), "EEE"),
            temperature: `${forecast.Temperature.Minimum.Value}\u00B0C`,
        }));

        return {
            key: selectedOption.key,
            localizedName: selectedOption.localizedName,
            temperature: `${currentConditions.Temperature.Metric.Value}\u00B0C`,
            weatherText: currentConditions.WeatherText,
            icon: currentConditions.WeatherIcon.toString(),
            forecasts,
        } as FavoriteLocation
    });
});