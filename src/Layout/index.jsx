import Header from './Header';
import React from 'react';
import PropTypes from 'prop-types';
const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
};

export default Layout;

Layout.propTypes = {
	children: PropTypes.node
};