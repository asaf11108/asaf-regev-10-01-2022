import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generalTemperatureMode } from "../../store/general/general.action";
import { TemperatureType } from "../../store/general/general.model";
import { GeneralTemperatureModeSelect } from "../../store/general/general.selector";

const ToolbarTemperatureMode: FC = () => {
    const dispatch = useDispatch();
    const temperatureMode = useSelector(GeneralTemperatureModeSelect);
    
    const handleTemperatureMode = (
        event: React.MouseEvent<HTMLElement>,
        newMode: TemperatureType,
        ) => {
        newMode && dispatch(generalTemperatureMode(newMode));
      };

    return (
        <ToggleButtonGroup
            size="small"
            value={temperatureMode}
            exclusive
            onChange={handleTemperatureMode}
        >
            <ToggleButton value={TemperatureType.Celsius}>
                &#176;C
            </ToggleButton>
            <ToggleButton value={TemperatureType.Fahrenheit}>
                &#176;F
            </ToggleButton>
        </ToggleButtonGroup>
    );
}

export default ToolbarTemperatureMode;