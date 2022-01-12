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
        active: null as FavoriteLocation['key'] | null
    }),
    reducers: {
        favoriteLocationsLoading(state, action) {
            state.loading = action.payload;
        },
        favoriteLocationsActive(state, action) {
            state.active = action.payload;
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


export const favoriteLocationSelectors = favoriteLocationsAdapter.getSelectors<RootState>(
    state => state.favoriteLocations
);

export const FavoriteLocationSelectEntity = (key: FavoriteLocation['key']) => {
    return createSelector((state: RootState) => state, state => state.favoriteLocations.entities[key]);
}

export const FavoriteLocationSelectLoading = createSelector((state: RootState) => state, state => state.favoriteLocations.loading);

export const {
    favoriteLocationsLoading,
    favoriteLocationsActive
} = favoriteLocationsSlice.actions

