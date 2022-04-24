import React from 'react';
import { useAuth } from 'context/authContext';
import { Navigate, Outlet } from 'react-router-dom';

export function ProtectedRoute() {
  const {user, loading} = useAuth();

  if(loading) return <h1>Cargando...</h1>;

  if(!user) return <Navigate to='/auth'></Navigate>;

  return <Outlet/>;
}
