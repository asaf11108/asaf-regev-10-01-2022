import { createTheme } from "@mui/material/styles";
import { rem } from "polished";

export const theme = createTheme({
  breakpoints: {
    values: {
      sm: Number(rem(600)),
      md: Number(rem(960)),
      lg: Number(rem(1280)),
      xl: Number(rem(1920)),
    },
    unit: 'em'
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
