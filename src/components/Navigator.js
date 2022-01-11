import React from "react";
import { Link } from "react-router-dom";

function Navigator() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/home">home</Link>
        </li>
        <li>
          <Link to="/goods">goods</Link>
        </li>
        <li>
          <Link to="/cart">cart</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigator;
