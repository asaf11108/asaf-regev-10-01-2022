import React from 'react';
import './App.scss';
import Toolbar from './components/Toolbar/Toolbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';

const App: React.FC = () => {
  return (
    <div className="app">
      <Toolbar />

      <div className="app__content-wrapper">
          <div className="app__content">

          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="users/*" element={<Users />} /> */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

          </div>
        </div>
    </div>
  );
}

export default App;
