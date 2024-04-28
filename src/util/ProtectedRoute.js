// ProtectedRoute.js
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const ProtectedRoute = ({ children, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    // If there is no logged in user, redirect to the login page
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
