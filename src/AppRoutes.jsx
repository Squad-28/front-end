import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import PerfilPage from './pages/PerfilPage/index';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/Perfil" element={<PerfilPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
