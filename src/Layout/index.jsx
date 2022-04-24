import React from 'react';
import Sidebar from './Sidebar';
import 'styles/layout/Index.scss';
import { Outlet } from 'react-router-dom';
function Layout() {
	return (
		<div className='app__container'>
			<Sidebar />
			<Outlet/>
		</div>
	);
}

export default Layout;

