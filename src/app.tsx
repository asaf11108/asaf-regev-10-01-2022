import { VFC, useState } from 'react';
import './app.scss';
import Toolbar from './components/toolbar/toolbar';
import apiKeyInterceptor from './interceptors/api-key.interceptor';
import errorInterceptor from './interceptors/erros.interceptor';
import { Snackbar } from '@mui/material';
import { useFirstMountState } from 'react-use';
import AppRouting from './app-routing';
import { useSnackbar } from './providers/snackbar/snackbar.hook';

const App: VFC = () => {
  const isFirstMount = useFirstMountState();
  const openSnackbar = useSnackbar();

  if (isFirstMount) {
    apiKeyInterceptor();
    errorInterceptor(openSnackbar);
  }

  return (
    <div className="app">
      <Toolbar />

      <div className="app__content-wrapper">
        <div className="app__content">

          <AppRouting />

        </div>
      </div>

    </div>
  );
}

export default App;
