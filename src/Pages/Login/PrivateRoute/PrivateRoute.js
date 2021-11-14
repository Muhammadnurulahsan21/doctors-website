import { CircularProgress } from "@mui/material";
import React from "react";
import { useLocation, Navigate } from "react-router";
import useAuth from "./../../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <CircularProgress  sx={{ mt: 40 }}  />;
  }

  if (!user.email) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};
export default PrivateRoute;
