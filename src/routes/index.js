import React from "react";
import { BrowserRouter, Route, Routes as ReactRoutes } from "react-router-dom";

import Login from "../containers/Login";
import Home from "../containers/Home";
import NavBar from "../components/NavBar";
import Register from "../containers/Register";
import RegisterSensor from "../containers/RegisterSensor";

export default function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" exact element={<Login />}></Route>
        <Route
          path="/home"
          element={
            <NavBar>
              <Home />
            </NavBar>
          }
        ></Route>
        <Route path="/cadastro" exact element={<Register />}></Route>
        <Route
          path="/cadastro-sensor"
          element={
            <NavBar>
              <RegisterSensor />
            </NavBar>
          }
        ></Route>
      </ReactRoutes>
    </BrowserRouter>
  );
}
