import React from "react";
import { BrowserRouter, Route, Routes as ReactRoutes } from "react-router-dom";

import Login from "../containers/Login";
import Home from "../containers/Home";
import NavBar from "../components/NavBar";

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
      </ReactRoutes>
    </BrowserRouter>
  );
}
