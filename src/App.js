import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Goods from "./pages/Goods";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" exact={true} element={<Home />} />
        <Route path="/goods" exact={true} element={<Goods />} />
        <Route path="/cart" exact={true} element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
