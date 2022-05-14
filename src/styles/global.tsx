import { Global } from "@emotion/react";
import { FC } from "react";
import { GeneralStyle } from "./general";

export const GlobalStyle: FC = () => {
    return (
        <>
            <Global styles={GeneralStyle} />
        </>
    )
}
