import React from 'react';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Layout from './Layout';
import Requerimientos from './components/Requerimientos';
import Comidas from './components/Comidas';
import Macronutrientes from './components/Macronutrientes';
import Menu from './components/Menu';

function App() {
	return (
		<Layout>
			<Routes>
				<Route element={<Login />} path="/" />
				<Route element={<Requerimientos />} path="/requerimientos" />
				<Route element={<Comidas />} path="/comidas" />
				<Route element={<Macronutrientes />} path="/macronutrientes" />
				<Route element={<Menu />} path="/menu" />
			</Routes>
		</Layout>
	);
}

export default App;
