    import React from "react";
import { BrowserRouter, Route, Routes as ReactRoutes } from "react-router-dom";

import Login from "../containers/Login";
import Home from "../containers/Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" exact element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </ReactRoutes>
    </BrowserRouter>
  );
}
