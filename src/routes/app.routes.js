import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from 'Layout';
import Dashboard from 'pages/dashboard';
import SettingsDashboard from 'pages/dashboard/SettingsDashboard';
import Search from 'pages/dashboard/Search';
import Charts from 'pages/dashboard/Charts';
import {  AUTH_LOGIN, DASHBOARD, DASHBOARD_CHARTS, DASHBOARD_SEARCH, DASHBOARD_SETTINGS, HOME, HOME_FOOD, HOME_MACRO, HOME_MENU, HOME_REQUERIMENTS } from 'constants/route.constants';
import Login from 'pages/Home/Login';
import Comidas from 'pages/Home/Comidas';
import Menu from 'pages/Home/Menu';
import Macronutrientes from 'pages/Home/Macronutrientes';
import Requerimientos from 'pages/Home/Requerimientos';
import Home from 'pages/Home';

function App() {
	return (
		<Routes>
			<Route element={<Login />} path={AUTH_LOGIN} />
			<Route element={<Comidas />} path={HOME_FOOD} />
			<Route element={<Menu />} path={HOME_MENU} />
			<Route element={<Macronutrientes />} path={HOME_MACRO} />
			<Route element={<Requerimientos />} path={HOME_REQUERIMENTS} />
			<Route element={<Home/>} path={HOME}/>
			<Route element={<Layout/>}>
				<Route element={<Dashboard/>} path={DASHBOARD}/>
				<Route element={<Charts/>} path={DASHBOARD_SEARCH}/>
				<Route element={<Search/>} path={DASHBOARD_CHARTS}/>
				<Route element={<SettingsDashboard/>} path={DASHBOARD_SETTINGS}/>
			</Route>
		</Routes>
	);
}

export default App;
