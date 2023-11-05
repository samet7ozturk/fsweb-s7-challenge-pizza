import React, { useEffect, useState } from "react";

const PriceCalculation = ({ boyut, kalinlik, ekMalzeme, start = 85.5 }) => {
  const [fiyat, setFiyat] = useState(start);
  const [adet, setAdet] = useState(1);
  const [toplamFiyat, setToplamFiyat] = useState(0);

  let ekMalzemeFiyati = ekMalzeme * 5 * adet;

  const adetArttir = () => {
    setAdet(adet + 1);
  };

  const adetAzalt = () => {
    setAdet(adet - 1);
  };

  useEffect(() => {
    if (boyut === "küçük" && kalinlik === "ince") {
      setToplamFiyat((adet * fiyat * 0.6 + ekMalzemeFiyati).toFixed(2));
    } else if (boyut === "küçük" && kalinlik === "orta") {
      setToplamFiyat((adet * fiyat * 0.7 + ekMalzemeFiyati).toFixed(2));
    } else if (boyut === "küçük" && kalinlik === "kalin") {
      setToplamFiyat((adet * fiyat * 0.8 + ekMalzemeFiyati).toFixed(2));
    } else if (boyut === "orta" && kalinlik === "ince") {
      setToplamFiyat((adet * fiyat * 0.9 + ekMalzemeFiyati).toFixed(2));
    } else if (boyut === "orta" && kalinlik === "orta") {
      setToplamFiyat((adet * fiyat * 1 + ekMalzemeFiyati).toFixed(2));
    } else if (boyut === "orta" && kalinlik === "kalin") {
      setToplamFiyat((adet * fiyat * 1.1 + ekMalzemeFiyati).toFixed(2));
    } else if (boyut === "büyük" && kalinlik === "ince") {
      setToplamFiyat((adet * fiyat * 1.2 + ekMalzemeFiyati).toFixed(2));
    } else if (boyut === "büyük" && kalinlik === "orta") {
      setToplamFiyat((adet * fiyat * 1.3 + ekMalzemeFiyati).toFixed(2));
    } else if (boyut === "büyük" && kalinlik === "kalin") {
      setToplamFiyat((adet * fiyat * 1.4 + ekMalzemeFiyati).toFixed(2));
    }
  }, [adet, boyut, kalinlik, ekMalzemeFiyati]);

  return (
    <>
      <div>
        <button onClick={adetAzalt}>
          <i className="fa-solid fa-minus" />
          Azalt
        </button>
        <p>{adet}</p>
        <button onClick={adetArttir}>
          <i className="fa-solid fa-plus" />
          Arttır
        </button>
      </div>
      <div>
        <h2>Sipariş Toplamı</h2>
        Seçimler{ekMalzemeFiyati}
        Toplam{toplamFiyat}
      </div>
    </>
  );
};

export default PriceCalculation;
