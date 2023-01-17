import { createStore, setProp, withProps } from "@ngneat/elf";
import { GeneralState, TemperatureType } from "./general.model";

const initialState: GeneralState = { temperatureType: TemperatureType.Celsius };

export const generalStore = createStore({name: 'general' }, withProps<GeneralState>(initialState));

export function updateGeneralTemperatureType(temperatureType: TemperatureType) {
    generalStore.update(setProp('temperatureType', temperatureType));
}