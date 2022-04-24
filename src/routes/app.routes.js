import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../context/authContext';
import { ProtectedRoute } from '../components/ProtectedRoute';

import Login from 'pages/auth/Login';
import Layout from 'Layout';
import Requerimientos from 'pages/home/Requerimientos';
import Comidas from 'pages/home/Comidas';
import Macronutrientes from 'pages/home/Macronutrientes';
import Menu from 'pages/home/Menu';
import Settings from 'pages/home/Settings';

import Charts from 'pages/dashboard/Charts';
import Search from 'pages/dashboard/Search';
import SettingsDashboard from 'pages/dashboard/SettingsDashboard';
import {
  AUTH,
  DASHBOARD,
  DASHBOARD_CHARTS,
  DASHBOARD_SEARCH,
  DASHBOARD_SETTINGS,
  HOME,
  HOME_FOOD,
  HOME_MACRO,
  HOME_REQUERIMENTS,
  HOME_SETTINGS,
} from 'constants/route.constants';
import Dashboard from 'pages/dashboard';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route element={<Menu />} path={HOME} />
          <Route element={<Requerimientos />} path={HOME_REQUERIMENTS} />
          <Route element={<Comidas />} path={HOME_FOOD} />
          <Route element={<Macronutrientes />} path={HOME_MACRO} />
          <Route element={<Settings />} path={HOME_SETTINGS} />
          <Route element={<Layout />}>
            <Route element={<Dashboard />} path={DASHBOARD} />
            <Route element={<Charts />} path={DASHBOARD_SEARCH} />
            <Route element={<Search />} path={DASHBOARD_CHARTS} />
            <Route element={<SettingsDashboard />} path={DASHBOARD_SETTINGS} />
          </Route>
        </Route>
        <Route element={<Login />} path={AUTH} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
