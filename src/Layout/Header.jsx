import React from 'react';
import 'styles/layout/Header.scss';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<nav>
			<Link to="/">
				<h1>Caloric App</h1>
			</Link>
			<ul>
				<li>
					<Link to="/menu">Menú</Link>
				</li>
				<li>
					<Link to="/requerimientos">Mis Requerimientos</Link>
				</li>
				<li>
					<Link to="/comidas">Comidas</Link>
				</li>
				<li>
					<Link to="/macronutrientes">Macronutrientes</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Header;
