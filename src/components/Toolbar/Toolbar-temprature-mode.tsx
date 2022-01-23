import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generalTempratureMode } from "../../store/general/general.action";
import { TemperatureMode } from "../../store/general/general.model";
import { GeneralTempratureModeSelect } from "../../store/general/general.selector";

const ToolbarTempratureMode: FC = () => {
    const dispatch = useDispatch();
    const tempratureMode = useSelector(GeneralTempratureModeSelect);

    const handleTempratureMode = (
        event: React.MouseEvent<HTMLElement>,
        newMode: TemperatureMode,
      ) => {
        dispatch(generalTempratureMode(newMode));
      };

    return (
        <ToggleButtonGroup
            size="small"
            value={tempratureMode}
            exclusive
            onChange={handleTempratureMode}
        >
            <ToggleButton value="celsius">
                &#176;C
            </ToggleButton>
            <ToggleButton value="fahrenheit">
                &#176;F
            </ToggleButton>
        </ToggleButtonGroup>
    );
}

export default ToolbarTempratureMode;