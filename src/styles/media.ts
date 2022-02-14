import { css } from "@emotion/react";
import { mapValues } from "lodash-es";
import { CSSInterpolation } from '@emotion/serialize'
import { fluidRange } from "polished";
import { FluidRangeConfiguration } from "polished/lib/types/fluidRangeConfiguration";

export const BREAKPOINTS = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
}

export const media = mapValues(BREAKPOINTS, val => {
    return (...args: Array<CSSInterpolation>) => css`
        @media (min-width: ${val}px) {
            ${css(...args)};
        }
    `
});

// TODO: implement this funcion by include-media-spread library
export function spread(prop: FluidRangeConfiguration['prop'], fromSize: FluidRangeConfiguration['fromSize'], toSize: FluidRangeConfiguration['toSize']) {
    return fluidRange(
        {
            prop,
            fromSize,
            toSize
        },
        `${BREAKPOINTS.sm}px`,
        `${BREAKPOINTS.xl}px`
    )
}
