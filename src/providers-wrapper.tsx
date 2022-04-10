import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import { Provider } from 'react-redux';
import { persistor, store } from './store/config';
import { PersistGate } from 'redux-persist/integration/react';
import { MenuContextProvider } from './hooks/menu/menu.provider';

export const providersWrapper = (component: JSX.Element) => (
    <StrictMode>
      <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <PersistGate loading={null} persistor={persistor}>
                <MenuContextProvider>
                  {component}
                </MenuContextProvider>
              </PersistGate>
            </ThemeProvider>
          </Provider>
      </BrowserRouter>
    </StrictMode>
  );
