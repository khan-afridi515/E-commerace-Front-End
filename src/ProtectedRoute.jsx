import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({protection, children}) => {
  return protection ? children : <Navigate to="/login" replace />
}

export default ProtectedRoute;
