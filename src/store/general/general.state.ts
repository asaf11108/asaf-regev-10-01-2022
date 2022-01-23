import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GeneralState, TemperatureMode } from "./general.model";

const initialState = { temperatureMode: 'celsius' } as GeneralState;

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        generalTempratureMode(state, action: PayloadAction<TemperatureMode>) {
            state.temperatureMode = action.payload;
        },
    },
});

