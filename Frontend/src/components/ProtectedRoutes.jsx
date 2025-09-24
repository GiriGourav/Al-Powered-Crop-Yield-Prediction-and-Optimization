import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../storage/useAuthStorage";

const ProtectedRoutes = ({ children }) => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoutes;