import React from 'react';
import PropTypes from 'prop-types';
// import Header from './Header';

function Layout({ children }) {
	return (
		<div>
			{/*<Header />*/}
			{children}
		</div>
	);
}

export default Layout;

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};
