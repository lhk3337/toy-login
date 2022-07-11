import React from "react";
import Login from "./login";
import Register from "./register";
import Home from "./home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default Routers;
