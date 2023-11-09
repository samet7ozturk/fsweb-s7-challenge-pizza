import React, { useEffect, useState } from "react";

import "./PriceCalculation.css";

const PriceCalculation = ({ order }) => {
  const [adet, setAdet] = useState(1);
  const [toplamFiyat, setToplamFiyat] = useState(0);

  let ekMalzemeFiyati = order.addedMaterial() * 5 * adet;

  const adetArttir = () => {
    setAdet(adet + 1);
  };

  const adetAzalt = () => {
    setAdet(adet - 1);
  };

  useEffect(() => {
    if (order.boyut === "küçük" && order.kalinlik === "ince") {
      setToplamFiyat((adet * order.fiyat * 0.6 + ekMalzemeFiyati).toFixed(2));
    } else if (order.boyut === "küçük" && order.kalinlik === "orta") {
      setToplamFiyat((adet * order.fiyat * 0.7 + ekMalzemeFiyati).toFixed(2));
    } else if (order.boyut === "küçük" && order.kalinlik === "kalin") {
      setToplamFiyat((adet * order.fiyat * 0.8 + ekMalzemeFiyati).toFixed(2));
    } else if (order.boyut === "orta" && order.kalinlik === "ince") {
      setToplamFiyat((adet * order.fiyat * 0.9 + ekMalzemeFiyati).toFixed(2));
    } else if (order.boyut === "orta" && order.kalinlik === "orta") {
      setToplamFiyat((adet * order.fiyat * 1 + ekMalzemeFiyati).toFixed(2));
    } else if (order.boyut === "orta" && order.kalinlik === "kalin") {
      setToplamFiyat((adet * order.fiyat * 1.1 + ekMalzemeFiyati).toFixed(2));
    } else if (order.boyut === "büyük" && order.kalinlik === "ince") {
      setToplamFiyat((adet * order.fiyat * 1.2 + ekMalzemeFiyati).toFixed(2));
    } else if (order.boyut === "büyük" && order.kalinlik === "orta") {
      setToplamFiyat((adet * order.fiyat * 1.3 + ekMalzemeFiyati).toFixed(2));
    } else if (order.boyut === "büyük" && order.kalinlik === "kalin") {
      setToplamFiyat((adet * order.fiyat * 1.4 + ekMalzemeFiyati).toFixed(2));
    }
  }, [adet, order, ekMalzemeFiyati]);

  return (
    <>
      <div className="summary">
        <div className="pricecalculation-button">
          <button
            className="pricecalculation-button1"
            type="button"
            onClick={adetAzalt}
          >
            -
          </button>
          <p>{adet}</p>
          <button
            className="pricecalculation-button2"
            type="button"
            onClick={adetArttir}
          >
            +
          </button>
        </div>
        <div className="pricecalculation-summary">
          <h2>Sipariş Toplamı</h2>
          <div className="pricecalculation-secim">
            <div>Seçimler</div>
            <div>{ekMalzemeFiyati}</div>
          </div>
          <div className="pricecalculation-secim">
            <div>Toplam</div>
            <div>{toplamFiyat}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceCalculation;
