import { Global } from "@emotion/react";
import { FC } from "react";
import { CssBaseline } from "@mui/material";
import { GeneralStyle } from "./general";

export const GlobalStyle: FC = () => {
    return (
        <>
            <Global styles={GeneralStyle} />
            <CssBaseline />
        </>
    )
}
