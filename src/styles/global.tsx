import { Global } from "@emotion/react";
import { VFC } from "react";
import { CardStyle } from "./components/card";
import { TextfieldStyle } from "./components/textfield";
import { GeneralStyle } from "./general";

export const GlobalStyle: VFC = () => {
    return (
        <>
            <Global styles={GeneralStyle} />

            <Global styles={TextfieldStyle} />
            <Global styles={CardStyle} />
        </>
    )
}
