import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../config";

export const GeneralTempratureModeSelect = createSelector((state: RootState) => state, state => state.general.temperatureMode);
