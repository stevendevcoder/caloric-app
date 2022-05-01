import React from 'react';
import { useAuth } from 'context/authContext';
import { Navigate, Outlet } from 'react-router-dom';
import Loading from '../components/Loading';

export function ProtectedRoute() {
  const { user, loading } = useAuth();

  if (loading) {
    console.log(loading);
    return <Loading></Loading>;
  }
  if (!user) return <Navigate to="/auth"></Navigate>;

  return <Outlet />;
}
