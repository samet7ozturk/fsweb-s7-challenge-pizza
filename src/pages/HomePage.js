import React from "react";
import { Link } from "react-router-dom";
import svg1 from "../Assets/adv-aseets/icons/1.svg";
import svg2 from "../Assets/adv-aseets/icons/2.svg";
import svg3 from "../Assets/adv-aseets/icons/3.svg";
import svg4 from "../Assets/adv-aseets/icons/4.svg";
import svg5 from "../Assets/adv-aseets/icons/5.svg";
import svg6 from "../Assets/adv-aseets/icons/6.svg";

import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="homepage-header">
        <h1>Teknolojik Yemekler</h1>
        <p>fırsatı kaçırma</p>
        <h2>KOD ACIKTIRIR</h2>
        <h2>PİZZA DOYURUR</h2>
        <Link to="/order-page" className="order-button1">
          ACIKTIM
        </Link>
      </div>

      <div className="homepage-navbar">
        <img src={svg1} />
        YENİ! Kore
        <img src={svg2} />
        Pizza
        <img src={svg3} />
        Burger
        <img src={svg4} />
        Kızartmalar
        <img src={svg5} />
        Fast Food
        <img src={svg6} />
        Gazlı İçecek
      </div>

      <div className="homepage-parent-div">
        <div className="homepage-div1">
          <h1>Özel</h1>
          <h1>Lezzetus</h1>
          <p>Position Absolute Acı Burger</p>
          <Link to="/order-page" className="order-button2">
            SİPARİŞ VER
          </Link>
        </div>

        <div className="homepage-div2">
          <div className="homepage-div3">
            <h1>Özel</h1>
            <h1>Lezzetus</h1>
            <p>Position Absolute Acı Burger</p>
            <Link to="/order-page" className="order-button2">
              SİPARİŞ VER
            </Link>
          </div>

          <div className="homepage-div4">
            <h1>Özel</h1>
            <h1>Lezzetus</h1>
            <p>Position Absolute Acı Burger</p>
            <Link to="/order-page" className="order-button2">
              SİPARİŞ VER
            </Link>
          </div>
        </div>
      </div>

      <div className="homepage-footer"></div>
    </>
  );
};

export default HomePage;
