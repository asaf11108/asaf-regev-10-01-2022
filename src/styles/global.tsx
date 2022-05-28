import { Global } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { VFC } from "react";
import { GeneralStyle } from "./general";

export const GlobalStyle: VFC = () => {
    return (
        <>
            <Global styles={GeneralStyle} />
            <CssBaseline />
        </>
    )
}
