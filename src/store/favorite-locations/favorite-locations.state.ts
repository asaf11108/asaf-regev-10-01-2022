import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { FavoriteLocation } from "./favorite-locations.model";
import { fetchFavoriteLocation } from "./favorite-locations.thunk";

export const favoriteLocationsAdapter = createEntityAdapter<FavoriteLocation>({
    selectId: (favoriteLocation) => favoriteLocation.key,
});

export const favoriteLocationsSlice = createSlice({
    name: 'favoriteLocation',
    initialState: favoriteLocationsAdapter.getInitialState({
        loading: false,
        error: null as any,
        active: '215854' as FavoriteLocation['key']
    }),
    reducers: {
        favoriteLocationsLoading(state, action) {
            state.loading = action.payload;
        },
        favoriteLocationsActive(state, action) {
            state.active = action.payload;
        },
        favoriteLocationsToggleFavorite(state, action) {
            favoriteLocationsAdapter.updateOne(state, { id: state.active, changes: { isFavorite: !state.entities[state.active]?.isFavorite } });
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFavoriteLocation.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchFavoriteLocation.fulfilled, (state, action) => {
            state.loading = false;
            favoriteLocationsAdapter.upsertOne(state, action.payload);
        });
        builder.addCase(fetchFavoriteLocation.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

