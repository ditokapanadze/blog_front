import React from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { toast, ToastContainer } from "react-toastify";
import { toastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "./routes/Router";

function App() {
  return (
    <>
      <div className="">
        {" "}
        <BrowserRouter>
          {" "}
          <Header /> <Router />
        </BrowserRouter>
      </div>
      <ToastContainer />{" "}
    </>
  );
}

export default App;
