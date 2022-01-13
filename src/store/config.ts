import { configureStore } from "@reduxjs/toolkit";
import { favoriteLocationsSlice } from "./favorite-locations/favorite-locations.state";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
    reducer: {
        favoriteLocations: favoriteLocationsSlice.reducer,
    },
});