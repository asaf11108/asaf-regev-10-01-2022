import { mapValues } from "lodash-es";

export type Breakpoints = Record<'sm' | 'md' | 'lg' | 'xl', number>;

export const BREAKPOINTS: Breakpoints = {
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
}

export const device = mapValues(BREAKPOINTS, val => {
    return `(min-width: ${val}px)`;
})
