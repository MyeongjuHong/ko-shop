import React from "react";
import { Link } from "react-router-dom";
import Tags from "../components/Tags";
import Card from "../components/Card";
import "../App.css";
// header
// tags
// card => 클릭시 굿즈페이지에
function Home() {
  return (
    <div>
      <h1 className="header">코-숍</h1>
      <Tags />
      <Card />
    </div>
  );
}

export default Home;
