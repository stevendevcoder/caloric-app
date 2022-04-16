import React, { useState } from 'react';
import 'styles/layout/Header.scss';
import { Link } from 'react-router-dom';

function Header() {
	const [menu, setMenu] = useState(false);

	const openMenuToggle = () => {
		setMenu(!menu);
	};

	return (
		<nav>
			<ul className="links">
				<li>
					<Link to="/comidas">
						<span className='restaurant'></span>
					</Link>
					<div className='description'>Comidas</div>
				</li>
				<li>	
					<Link to="/requerimientos">
						<span className='analytics'></span>
					</Link>
					<div className='description'>Requerimientos</div>
				</li>
				<li>
					<Link to="/macronutrientes">
						<span className='weight-control'></span>
					</Link>
					<div className='description'>Control de peso</div>
				</li>
				<li>
					<Link to="/">
						<h1>Caloric App</h1>
					</Link>
				</li>
				<li className="menu" onClick={openMenuToggle}>
					<span className='menu-logo'></span>
				</li>
				<li>
					<Link to="/menu">
						<span className='home'></span>
					</Link>
					<div className='description'>Home</div>
				</li>
				<li>
					<Link to="/settings">
						<span className='settings'></span>
					</Link>
					<div className='description'>Settings</div>
				</li>
				<li>
					<span className='user'></span>
					<div className='description'>User</div>
				</li>
			</ul>


			<ul className={`menu-toggle${menu ? ' active' : ''}`} >
				<li>
					<Link to="/macronutrientes">
						<span className='restaurant'></span>
						<p>Comidas</p>
					</Link>
				</li>
				<li>	
					<Link to="/requerimientos">
						<span className='analytics'></span>
						<p>Requerimientos</p>
					</Link>
				</li>
				<li>
					<Link to="/comidas">
						<span className='weight-control'></span>
						<p>Control de peso</p>
					</Link>
				</li>
				<li>
					<Link to="/menu">
						<span className='home'></span>
						<p>Home</p>
					</Link>
				</li>
				<li>
					<Link to="/settings">
						<span className='settings'></span>
						<p>Settings</p>
					</Link>
				</li>
				<li>
					<Link to="/">
						<span className='user'></span>
						<p>User</p>
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Header;
