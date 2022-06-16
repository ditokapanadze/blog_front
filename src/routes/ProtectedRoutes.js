import React from "react";
import useAuth from "../auth/useAuth";
import { Outlet, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function ProtectedRoutes() {
  const location = useLocation();

  const auth = useAuth();

  switch (auth) {
    case true:
      // if (location.pathname === "/register" || location.pathname === "/login") {
      //   return <Navigate to="/dashboard" />;
      // } else {
      //   return <Outlet />;
      // }
      return <Outlet />;
    case false:
      console.log("test");
      localStorage.removeItem("authToken");
      return <Navigate to="/login" />;
    default:
      return;
  }
}

export default ProtectedRoutes;
