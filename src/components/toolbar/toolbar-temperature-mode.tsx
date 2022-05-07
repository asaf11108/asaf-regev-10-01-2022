import { VFC, MouseEvent } from "react";
import { ToggleButtonGroup } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { generalTemperatureMode } from "../../store/general/general.action";
import { TemperatureType } from "../../store/general/general.model";
import { GeneralTemperatureModeSelect } from "../../store/general/general.selector";
import { ToolbarTemperatureModeProps } from "./toolbar-temperature-mode.model";
import * as S from "./toolbar-temperature-mode.style";

const ToolbarTemperatureMode: VFC<ToolbarTemperatureModeProps> = ({ style }) => {
    const dispatch = useDispatch();
    const temperatureMode = useSelector(GeneralTemperatureModeSelect);
    
    const onTemperatureModeChange = (
        event: MouseEvent<HTMLElement>,
        newMode: TemperatureType,
        ) => {
        newMode && dispatch(generalTemperatureMode(newMode));
      };

    return (
        <ToggleButtonGroup
            className="temperature-toggle"
            style={style}
            size="small"
            value={temperatureMode}
            exclusive
            onChange={onTemperatureModeChange}
        >
            <S.ToggleButton value={TemperatureType.Celsius}>
                &#176;C
            </S.ToggleButton>
            <S.ToggleButton value={TemperatureType.Fahrenheit}>
                &#176;F
            </S.ToggleButton>
        </ToggleButtonGroup>
    );
}

export default ToolbarTemperatureMode;