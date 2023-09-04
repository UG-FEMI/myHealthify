import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
// import { Navigate } from 'react-router-dom';
  
//   const ProtectedRoute = ({ user, Children }) => {
//     if (!user) {
//       return <Navigate to='/Dashboard'/>;
//     }
    
  
//     return Children;
//   };
  
//   export default ProtectedRoute


export default function ProtectedRoute() {
  const auth = { token: true};
  return auth.token ? <Outlet /> : <Navigate to="/Dashboard" />;
}