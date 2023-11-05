import React from "react";
import { Link } from "react-router-dom";

import "./SuccessPage.css";

const HomePage = () => {
  return (
    <div>
      <h1>Teknolojik Yemekler</h1>
      <p>fırsatı kaçırma</p>
      <h2>KOD ACIKTIRIR</h2>
      <h2>PİZZA DOYURUR</h2>
      <Link to="/order-page">ACIKTIM</Link>
    </div>
  );
};

export default HomePage;
