import React from 'react';
import './App.scss';
import Toolbar from './components/Toolbar/Toolbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Favorites from './pages/Favorites/Favorites';
import { httpInterceptor } from './interceptors/http.interceptor';
import { Snackbar } from '@mui/material';

const App: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  //TODO: performance issue
  httpInterceptor(setOpen);

  return (
    <div className="app">
      <Toolbar />

      <div className="app__content-wrapper">
        <div className="app__content">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

        </div>
      </div>

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={5000}
        message="Unable to retrieve data. Switched to mock data."
      />
    </div>
  );
}

export default App;
