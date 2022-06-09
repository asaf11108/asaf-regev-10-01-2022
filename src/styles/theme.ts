import { createTheme } from "@mui/material/styles";
import { em } from "polished";

export const theme = createTheme({
  breakpoints: {
    values: {
      sm: parseInt(em(600)),
      md: parseInt(em(960)),
      lg: parseInt(em(1280)),
      xl: parseInt(em(1920)),
    },
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
          backgroundColor: "rgba(255, 255, 255, 0.6)"
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
    }
  }
});

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
  }
}
