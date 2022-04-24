import React from 'react';
import { useAuth } from 'context/authContext';
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types';

export function ProtectedRoute({children}) {
  const {user, loading} = useAuth();

  if(loading) return <h1>Cargando...</h1>;

  if(!user) return <Navigate to='/auth'></Navigate>;

  return <>{children}</>;
}

ProtectedRoute.propTypes = {
	children: PropTypes.node.isRequired,
};
