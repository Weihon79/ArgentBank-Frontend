import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../features/authSlice";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated); 

  return isAuthenticated ? children : <Navigate to="/sign-in" />; 
};

export default PrivateRoute;

