import React, {  useId } from 'react';
import 'styles/layout/Header.scss';
import {  Link, NavLink } from 'react-router-dom';
import { sidebarData } from 'constants/sidebar.constants';
import PropTypes from 'prop-types';
import { DASHBOARD } from 'constants/route.constants';
function SquareMenu({data}){
	return <NavLink to={data.route} className="sidebar__square">
		{data.icon}
		<span className='sidebar__square--name'>{data.name}</span>
	</NavLink>;
}
SquareMenu.propTypes = {
	data: PropTypes.shape({
		icon: PropTypes.node.isRequired, 
		name: PropTypes.string.isRequired, 
		route: PropTypes.string.isRequired
	})
};
function Header() {
	return (
		<nav className='sidebar' >
			<Link to={DASHBOARD}><img src="https://www.crearlogogratisonline.com/images/crearlogogratis_1024x1024_01.png" className='sidebar__image'  /></Link>
			<ul className='sidebar__menu'>{sidebarData.map(({icon, name, route}) => {
				const keyId = useId();
				return <SquareMenu data={{icon, name, route}} key={keyId}/>;
			})}</ul>
			<img src="https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg" alt="" className="sidebar__image" />
		</nav>
	);
}

export default Header;

