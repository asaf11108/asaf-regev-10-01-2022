import { css } from "@emotion/react";
import { mapValues } from "lodash-es";
import { CSSInterpolation } from '@emotion/serialize'

export const BREAKPOINTS = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
}

export const media = mapValues(BREAKPOINTS, val => {
    return (...args: Array<CSSInterpolation>) => css`
        @media (min-width: ${val + 'px'}) {
            ${css(...args)};
        }
    `
});
