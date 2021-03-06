import React from 'react';
import { useAuth } from 'context/authContext';
//import { useNavigate } from 'react-router-dom';

export default function Home() {
	const { user, logout } = useAuth();

	console.log(user);

	const handleLogout = async() => {
		await logout();
		console.log('Cerrando sesion');
	};
	return (
		<div>
			<h1>Home</h1>
			<h2> 
				Bienvenido {user.email}
			</h2>
			<button onClick={handleLogout}>Cerrar sesión</button>
		</div>
	);
}
