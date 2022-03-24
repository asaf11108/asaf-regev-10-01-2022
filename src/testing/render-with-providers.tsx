import { ThemeProvider } from "@emotion/react";
import { render, unmountComponentAtNode } from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { MenuContextProvider } from "../hooks/menu/menu.provider";
import { persistor, store } from "../store/config";
import theme from "../theme";

export const renderWithProviders = (element: React.FunctionComponentElement<any> | React.FunctionComponentElement<any>[]) => {
  const div = document.createElement("div");
  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <MenuContextProvider>
            {element}
          </MenuContextProvider>
        </PersistGate>
      </ThemeProvider>
    </Provider>,
    div
  );
  unmountComponentAtNode(div);
};
