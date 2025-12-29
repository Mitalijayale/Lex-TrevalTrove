// import { useContext } from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import { AuthContext } from '../../context/AuthContext';

// const AdminRoute = () => {
//     const auth = useContext(AuthContext);

//     if (!auth || !auth.token) {
//         return <Navigate to="/login" />;
//     }

//     return auth.role === 'admin' ? <Outlet /> : <Navigate to="/login" />;
// }

// export default AdminRoute;

import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const AdminRoute = () => {
  const auth = useContext(AuthContext);

  // Not logged in → admin login
  if (!auth?.token) {
    return <Navigate to="/admin/login" replace />;
  }

  // Logged in but NOT admin → home
  if (auth.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  // Admin allowed
  return <Outlet />;
};

export default AdminRoute;