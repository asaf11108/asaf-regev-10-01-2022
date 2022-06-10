import { createTheme } from "@mui/material/styles";
import { mapValues } from "lodash-es";
import { em } from "polished";

const BREAKPOINTS = {
  sm: em(608),
  md: em(960),
  lg: em(1280),
  xl: em(1920),
}

export const theme = createTheme({
  breakpoints: {
    values: mapValues(BREAKPOINTS, x => parseInt(x)),
    unit: 'em' // em media query: https://zellwk.com/blog/media-query-units/ss
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.6)",
        }
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          position: 'relative'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          paddingRight: 0
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          position: 'absolute',
          top: '95%'
        }
      }
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          paddingLeft: '1em',
          paddingRight: '1em',
          minHeight: em('54px'),
          [`@media (min-width: ${BREAKPOINTS.sm})`]: {
            paddingLeft: em('24px'),
            paddingRight: em('24px'),
            minHeight: em('64px')
          }
        }
      }
    }
  }
});

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
  }
}
