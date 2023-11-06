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
          <span>ACIKTIM</span>
        </Link>
      </div>

      <div className="homepage-navbar">
        <div className="svg">
          <img src={svg1} />
          YENİ! Kore
        </div>
        <div className="svg">
          <img src={svg2} />
          Pizza
        </div>
        <div className="svg">
          <img src={svg3} />
          Burger
        </div>
        <div className="svg">
          <img src={svg4} />
          Kızartmalar
        </div>
        <div className="svg">
          <img src={svg5} />
          Fast Food
        </div>
        <div className="svg">
          <img src={svg6} />
          Gazlı İçecek
        </div>
      </div>

      <div className="homepage-background">
        <div className="homepage-parent-div1">
          <div className="homepage-div1 flex1">
            <h1>Özel</h1>
            <h1>Lezzetus</h1>
            <p>Position Absolute Acı Burger</p>
            <Link to="/order-page" className="order-button2">
              SİPARİŞ VER
            </Link>
          </div>

          <div className="homepage-div2 flex2">
            <div className="homepage-div3">
              <h1>Hackathlon</h1>
              <h1>Burger Menü</h1>
              <Link to="/order-page" className="order-button2">
                SİPARİŞ VER
              </Link>
            </div>

            <div className="homepage-div4">
              <h1>Çoooook hızlı</h1>
              <h1>npm gibi kurye</h1>
              <Link to="/order-page" className="order-button2">
                SİPARİŞ VER
              </Link>
            </div>
          </div>
        </div>

        <div className="centertext">
          <p>en çok paketlenen menüler</p>
          <h1>Acıktıran Kodlara Doyuran Lezzetler</h1>
        </div>

        <div className="homepage-navbar">
          <div className="svg">
            <img src={svg1} />
            YENİ! Kore
          </div>
          <div className="svg">
            <img src={svg2} />
            Pizza
          </div>
          <div className="svg">
            <img src={svg3} />
            Burger
          </div>
          <div className="svg">
            <img src={svg4} />
            Kızartmalar
          </div>
          <div className="svg">
            <img src={svg5} />
            Fast Food
          </div>
          <div className="svg">
            <img src={svg6} />
            Gazlı İçecek
          </div>
        </div>

        <div className="homepage-parent-div2">
          <div className="homepage-div5">
            <div className="homepage-div5-2">
              <img src={require("../Assets/adv-aseets/food-1.png")} />
            </div>
            <div className="homepage-div5-2">
              <h2>Terminal Pizza</h2>
            </div>
            <div className="homepage-div5-3">
              <p>4.9</p>
              <p>(200)</p>
              <h2>60₺</h2>
            </div>
          </div>

          <div className="homepage-div6">
            <div className="homepage-div5-2">
              <img src={require("../Assets/adv-aseets/food-2.png")} />
            </div>
            <div className="homepage-div5-2">
              <h2>Position Absolute Acı Pizza</h2>
            </div>
            <div className="homepage-div5-3">
              <p>4.9</p>
              <p>(928)</p>
              <h2>85₺</h2>
            </div>
          </div>

          <div className="homepage-div7">
            <div className="homepage-div5-2">
              <img src={require("../Assets/adv-aseets/food-3.png")} />
            </div>
            <div className="homepage-div5-2">
              <h2>useEffect Tavuklu Burger</h2>
            </div>
            <div className="homepage-div5-3">
              <p>4.9</p>
              <p>(462)</p>
              <h2>75₺</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="homepage-footer">
        <div className="homepage-footer1">
          <div>
            <h1>Teknolojik</h1>
            <h1>Yemekler</h1>
            <div className="homepage-icon">
              <img src={require("../Assets/adv-aseets/icons/icon-1.png")} />
              <p>341 Londonderry Road, Istanbul Türkiye</p>
            </div>
            <div className="homepage-icon">
              <img src={require("../Assets/adv-aseets/icons/icon-2.png")} />
              <p>aciktim@teknolojikyemekler.com</p>
            </div>
            <div className="homepage-icon">
              <img src={require("../Assets/adv-aseets/icons/icon-3.png")} />
              <p>+90 216 123 45 67</p>
            </div>
          </div>
          <div>
            <h3>Sıccacık Menuler</h3>
            <p>Terminal Pizza</p>
            <p>5 Kişilik Hackathlon Pizza</p>
            <p>useEffect Tavuklu Pizza</p>
            <p>Beyaz Console Frosty</p>
            <p>Testler Geçti Mutlu Burger</p>
            <p>Position Absolute Acı Burger</p>
          </div>
        </div>
        <div className="homepage-footer2">
          <div className="homepage-ins">
            <h3>Instagram</h3>
          </div>
          <div className="homepage-footer-img">
            <img src={require("../Assets/adv-aseets/insta/li-0.png")} />
            <img src={require("../Assets/adv-aseets/insta/li-1.png")} />
            <img src={require("../Assets/adv-aseets/insta/li-2.png")} />
            <img src={require("../Assets/adv-aseets/insta/li-3.png")} />
            <img src={require("../Assets/adv-aseets/insta/li-4.png")} />
            <img src={require("../Assets/adv-aseets/insta/li-5.png")} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
