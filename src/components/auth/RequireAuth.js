import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuthStateValue } from "../../context/AuthProvider";

function RequireAuth() {
  //   const {auth} =useAuthStateValue();
  const auth = useSelector((state) => state.auth);
  const location = useLocation();
  console.log(auth);
  return !auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

export default RequireAuth;
