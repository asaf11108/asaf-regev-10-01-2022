import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pick } from "lodash-es";
import { FavoriteLocation, Location } from "./favorite-locations.model";
import { fetchFavoriteLocation } from "./favorite-locations.thunk";

const DEAFUALT_LOCATION: Location = {
    key: '215854',
    localizedName: 'Tel Aviv'
};

export const favoriteLocationsAdapter = createEntityAdapter<FavoriteLocation>({
    selectId: (favoriteLocation) => favoriteLocation.key,
});

export const favoriteLocationsSlice = createSlice({
    name: 'favoriteLocation',
    initialState: favoriteLocationsAdapter.getInitialState({
        loading: false,
        error: null as any,
        active: DEAFUALT_LOCATION
    }),
    reducers: {
        favoriteLocationsLoading(state, { payload }: PayloadAction<boolean>) {
            state.loading = payload;
        },
        favoriteLocationsActive(state, { payload }: PayloadAction<Location | FavoriteLocation>) {
            state.active = pick(payload,'key', 'localizedName');
        },
        favoriteLocationsToggleFavorite(state) {
            favoriteLocationsAdapter.updateOne(state, { id: state.active.key, changes: { isFavorite: !state.entities[state.active.key]?.isFavorite } });
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFavoriteLocation.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchFavoriteLocation.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            favoriteLocationsAdapter.upsertOne(state, action.payload);
        });
        builder.addCase(fetchFavoriteLocation.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

