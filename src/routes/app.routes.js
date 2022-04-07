import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from 'pages/Login';
import Layout from 'Layout';
import Requerimientos from 'pages/Requerimientos';
import Comidas from 'pages/Comidas';
import Macronutrientes from 'pages/Macronutrientes';
import Menu from 'pages/Menu';
import { HOME, HOME_FOOD, HOME_MACRO, HOME_MENU, HOME_REQUERIMENTS } from 'constants/route.constants';

function App() {
	return (
		<Layout>
			<Routes>
				<Route element={<Login />} path={HOME} />
				<Route element={<Requerimientos />} path={HOME_REQUERIMENTS} />
				<Route element={<Comidas />} path={HOME_FOOD} />
				<Route element={<Macronutrientes />} path={HOME_MACRO} />
				<Route element={<Menu />} path={HOME_MENU} />
			</Routes>
		</Layout>
	);
}

export default App;
