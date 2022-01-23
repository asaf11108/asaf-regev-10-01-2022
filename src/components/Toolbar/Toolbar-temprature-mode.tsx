import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { FC, useState } from "react";

const ToolbarTempratureMode: FC = () => {
    const [alignment, setAlignment] = useState('celsius');

    const handleTempratureMode = (
        event: React.MouseEvent<HTMLElement>,
        newMode: string,
      ) => {
        setAlignment(newMode);
      };

    return (
        <ToggleButtonGroup
            size="small"
            value={alignment}
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