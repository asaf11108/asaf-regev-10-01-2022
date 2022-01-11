import React from 'react';
import './App.scss';
import Toolbar from './components/Toolbar/Toolbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Favorites from './components/Favorites/Favorites';

const App: React.FC = () => {
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
    </div>
  );
}

export default App;
