import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";
import { Provider } from "react-redux";
import { persistor, store } from "./store/config";
import { PersistGate } from "redux-persist/integration/react";
import { MenuProvider } from "./providers/menu/menu.provider";
import { SnackbarProvider } from "./providers/snackbar/snackbar.provider";

export const providersWrapper = (component: JSX.Element) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
          <ThemeProvider theme={theme}>
            <SnackbarProvider>
              <MenuProvider>
                {component}
              </MenuProvider>
            </SnackbarProvider>
          </ThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
