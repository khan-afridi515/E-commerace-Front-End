import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
  const protect = localStorage.getItem('token');
  return protect ? children : <Navigate to="/login" replace />
}

export default ProtectedRoute;
