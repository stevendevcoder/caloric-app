import React, { useEffect } from 'react';
import { useAuth } from 'context/authContext';
import { useState } from 'react'
//import { useNavigate } from 'react-router-dom';
import 'styles/pages/Dashboard.scss'
import Loading from 'components/Loading'

export default function Dashboard() {
	const { user, logout, data, getAccountData, loadingData, setLoadingData} = useAuth();

	useEffect(() => {
		getAccountData();
		return () => setLoadingData(false);
	},[loadingData]);

	const handleLogout = async() => {
		await logout();
		console.log('Cerrando sesion');
	};

	if(loadingData) return <Loading />;

	return (
		<div className='dash-container'>
			<h1>Dashboard</h1>
			<h2> 
				Bienvenido {data.nombre}
			</h2>
			<button onClick={handleLogout}>Cerrar sesión</button>
		</div>
	);
}
