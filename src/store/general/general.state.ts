import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GeneralState, TemperatureType } from "./general.model";

const initialState = { temperatureType: 'celsius' } as GeneralState;

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        generalTemperatureMode(state, action: PayloadAction<TemperatureType>) {
            state.temperatureType = action.payload;
        },
    },
});

