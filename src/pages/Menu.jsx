import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuth } from '../context/authContext';

function Menu() {
	const { user, logout } = useAuth();
	const navigate = useNavigate();

	const handleLogout = async() => {
		await logout();
		navigate('/auth')
	}

	return (
		<div>
			<h1> 
				Bienvenido {user.email}
			</h1>
			<button onClick={handleLogout}>Cerrar sesión</button>
		</div>
	)
}

export default Menu;
