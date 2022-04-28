import React from 'react';
import { useAuth } from 'context/authContext';
import { useState } from 'react'
//import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
	const { user, logout, data} = useAuth();

	console.log(data)

	const handleLogout = async() => {
		await logout();
		console.log('Cerrando sesion');
	};
	return (
		<div>
			<h1>Dashboard</h1>
			<h2> 
				Bienvenido {data.estatura}
			</h2>
			<button onClick={handleLogout}>Cerrar sesión</button>
		</div>
	);
}
