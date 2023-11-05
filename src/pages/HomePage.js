import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Svg1 } from "../Assets/adv-aseets/icons/1.svg";
import { ReactComponent as Svg2 } from "../Assets/adv-aseets/icons/2.svg";

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
        <Svg1 />
        YENİ! Kore
        <Svg2 />
        Pizza Burger Kızartmalar Fast Food Gazlı İçecek
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
