import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { favoriteLocationsSlice } from "./favorite-locations/favorite-locations.state";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export type RootState = ReturnType<typeof store.getState>;

const rootReducer = combineReducers({
    favoriteLocations: favoriteLocationsSlice.reducer,
});

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);