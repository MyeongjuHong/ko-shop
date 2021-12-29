import { React, useState, useEffect } from "react";
import { BrowserRouter, Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Goods from "./pages/Goods";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <Link to="/">home</Link>
      <Link to="/goods">goods</Link>
      <Link to="/cart">cart</Link>
      <Router>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/goods" exact={true} element={<Goods />} />
        <Route path="/cart" exact={true} element={<Cart />} />
      </Router>
    </div>
  );
}

export default App;
