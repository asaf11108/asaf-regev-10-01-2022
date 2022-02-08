import { FC, lazy, Suspense, useState } from 'react';
import './App.scss';
import Toolbar from './components/Toolbar/Toolbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import apiKeyInterceptor from './interceptors/api-key.interceptor';
import errorInterceptor from './interceptors/erros.interceptor';
import { Snackbar } from '@mui/material';
import { useFirstMountState } from 'react-use';
import Loader from './components/Loader/Loader';

const Home = lazy(() => import('./pages/Home/Home'));
const History = lazy(() => import('./pages/History/History'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites'));

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

          <Routes>
            <Route path="/" element={
              <Suspense fallback={<div style={{ margin: 'auto' }}><Loader color='white' /></div>}>
                <Home />
              </Suspense>
            } />
            <Route path="/favorites" element={
              <Suspense fallback={<div style={{ margin: 'auto' }}><Loader color='white' /></div>}>
                <Favorites />
              </Suspense>
            } />
            <Route path="/history" element={
              <Suspense fallback={<div style={{ margin: 'auto' }}><Loader color='white' /></div>}>
                <History />
              </Suspense>
            } />
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
