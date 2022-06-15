import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";
import { HideRoute } from "./ProtectedRoutes";

function Router() {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Dashboard />} />{" "}
          <Route path="/dashboard" element={<Dashboard />} />{" "}
        </Route>{" "}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />{" "}
      </Routes>
    </>
  );
}

export default Router;
