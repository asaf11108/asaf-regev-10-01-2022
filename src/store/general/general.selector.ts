import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../config";

export const GeneralTemperatureModeSelect = createSelector((state: RootState) => state, state => state.general.temperatureType);

// export const GeneralTemperatureSelect = temperature => createSelector((state: RootState) => state, state => state.general.temperatureType);
