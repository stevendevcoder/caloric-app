import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from 'pages/Login';
import Layout from 'Layout';
import Requerimientos from 'pages/Requerimientos';
import Comidas from 'pages/Comidas';
import Macronutrientes from 'pages/Macronutrientes';
import Menu from 'pages/Menu';
import Settings from 'pages/Settings';
import Dashboard from 'pages/Dashboard';

import { AUTH, DASHBOARD, HOME, HOME_FOOD, HOME_MACRO, HOME_MENU, HOME_REQUERIMENTS, HOME_SETTINGS } from 'constants/route.constants';

import { AuthProvider } from '../context/authContext';
import { ProtectedRoute } from '../components/ProtectedRoute';

function App() {
	return (
		<Layout>
			<AuthProvider>
				<Routes>
					<Route element={
						<ProtectedRoute>
							<Dashboard />
							hola
						</ProtectedRoute>
					} path={DASHBOARD} />
					<Route element={
						<ProtectedRoute>
							<Menu/>
						</ProtectedRoute>
					} path={HOME}/>
					<Route element={
							<Login />
					} path={AUTH}/>
					<Route element={
						<ProtectedRoute>
							<Requerimientos />
						</ProtectedRoute>
					} path={HOME_REQUERIMENTS} />
					<Route element={
						<ProtectedRoute>
							<Comidas />
						</ProtectedRoute>
					} path={HOME_FOOD} />
					<Route element={
						<ProtectedRoute>
							<Macronutrientes />
						</ProtectedRoute>
					} path={HOME_MACRO} />
					<Route element={
						<ProtectedRoute>
							<Settings />
						</ProtectedRoute>
					} path={HOME_SETTINGS} />
				</Routes>
			</AuthProvider>
		</Layout>
	);
}

export default App;
