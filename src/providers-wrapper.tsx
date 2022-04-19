import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { Provider } from "react-redux";
import { persistor, store } from "./store/config";
import { PersistGate } from "redux-persist/integration/react";
import { MenuProvider } from "./providers/menu/menu.provider";
import { LocaleProvider } from "./providers/locale/locale.provider";
import { SnackbarProvider } from "./providers/snackbar/snackbar.provider";

export const providersWrapper = (component: JSX.Element) => (
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <LocaleProvider>
            <ThemeProvider theme={theme}>
              <SnackbarProvider>
                <MenuProvider>
                  {component}
                </MenuProvider>
              </SnackbarProvider>
            </ThemeProvider>
          </LocaleProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
