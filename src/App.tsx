import React from 'react';
import './App.scss';
import Toolbar from './components/Toolbar/Toolbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Favorites from './pages/Favorites/Favorites';
import apiKeyInterceptor from './interceptors/api-key.interceptor';
import errorInterceptor from './interceptors/erros.interceptor';
import { Snackbar } from '@mui/material';
import { useFirstMountState } from 'react-use';
import History from './pages/History/History';

const App: React.FC = () => {
  const [open, setOpen] = React.useState(false);
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

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/history" element={<History />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

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
