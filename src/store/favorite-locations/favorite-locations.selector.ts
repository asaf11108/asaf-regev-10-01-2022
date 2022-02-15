import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../config";
import { FavoriteLocation } from "./favorite-locations.model";
import { favoriteLocationsAdapter } from "./favorite-locations.state";

export const FavoriteLocationSelectors = favoriteLocationsAdapter.getSelectors<RootState>(
    state => state.favoriteLocations
);

export const FavoriteLocationSelectEntity = (key: FavoriteLocation['key']) => {
    return createSelector((state: RootState) => state, state => state.favoriteLocations.entities[key]);
}

export const FavoriteLocationSelectActiveEntity = createSelector((state: RootState) => state, state => state.favoriteLocations.entities[state.favoriteLocations.active.key]);

export const FavoriteLocationSelectLoading = createSelector((state: RootState) => state, state => state.favoriteLocations.loading);
export const FavoriteLocationSelectError = createSelector((state: RootState) => state, state => state.favoriteLocations.error);
export const FavoriteLocationSelectActive = createSelector((state: RootState) => state, state => state.favoriteLocations.active);