import { FC, useState } from 'react';
import './App.scss';
import Toolbar from './components/Toolbar/Toolbar';
import apiKeyInterceptor from './interceptors/api-key.interceptor';
import errorInterceptor from './interceptors/erros.interceptor';
import { Snackbar } from '@mui/material';
import { useFirstMountState } from 'react-use';
import AppRouting from './AppRouting';

const App: FC = () => {
  const [open, setOpen] = useState(false);
  const isFirstMount = useFirstMountState();

  if (isFirstMount) {
    apiKeyInterceptor();
    errorInterceptor(setOpen);
  }

  return (
    <div className="app">
      <Toolbar />

      <div className="app__content-wrapper">
        <div className="app__content">

        <AppRouting />

        </div>
      </div>

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={5000}
        message="Unable to retrieve data. Switched to mock data."
      />
    </div>
  );
}

export default App;
