import { configureStore, createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";
import { FavoriteLocation } from "./favorite-location.model";
import { fetchFavoriteLocation } from "./favorite-locations.thunk";

const favoriteLocationsAdapter = createEntityAdapter<FavoriteLocation>({
    selectId: (favoriteLocation) => favoriteLocation.key,
});

const favoriteLocationsSlice = createSlice({
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

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
    reducer: {
        favoriteLocations: favoriteLocationsSlice.reducer,
    },
});


export const FavoriteLocationSelectors = favoriteLocationsAdapter.getSelectors<RootState>(
    state => state.favoriteLocations
);

export const FavoriteLocationSelectEntity = (key: FavoriteLocation['key']) => {
    return createSelector((state: RootState) => state, state => state.favoriteLocations.entities[key]);
}

export const FavoriteLocationSelectActiveEntity = createSelector((state: RootState) => state, state => state.favoriteLocations.entities[state.favoriteLocations.active]);

export const FavoriteLocationSelectLoading = createSelector((state: RootState) => state, state => state.favoriteLocations.loading);

export const {
    favoriteLocationsLoading,
    favoriteLocationsActive,
    favoriteLocationsToggleFavorite
} = favoriteLocationsSlice.actions

