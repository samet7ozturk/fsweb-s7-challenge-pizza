import React, { useEffect, useState } from "react";

const PriceCalculation = ({
  boyut,
  kalinlik,
  ekMalzeme,
  start = 85.5,
  adet = 1,
}) => {
  const [fiyat, setFiyat] = useState(start);
  const [toplamFiyat, setToplamFiyat] = useState(0);

  let ekMalzemeSayisi = ekMalzeme * 5;

  useEffect(() => {
    if (boyut === "küçük" && kalinlik == "ince") {
      setToplamFiyat((adet * fiyat * 0.6 + ekMalzemeSayisi).toFixed(2));
    } else if (boyut === "küçük" && kalinlik === "orta") {
      setToplamFiyat((adet * fiyat * 0.7 + ekMalzemeSayisi).toFixed(2));
    } else if (boyut === "küçük" && kalinlik === "kalin") {
      setToplamFiyat((adet * fiyat * 0.8 + ekMalzemeSayisi).toFixed(2));
    } else if (boyut === "orta" && kalinlik === "ince") {
      setToplamFiyat((adet * fiyat * 0.9 + ekMalzemeSayisi).toFixed(2));
    } else if (boyut === "orta" && kalinlik === "orta") {
      setToplamFiyat((adet * fiyat * 1 + ekMalzemeSayisi).toFixed(2));
    } else if (boyut === "orta" && kalinlik === "kalin") {
      setToplamFiyat((adet * fiyat * 1.1 + ekMalzemeSayisi).toFixed(2));
    } else if (boyut === "büyük" && kalinlik === "ince") {
      setToplamFiyat((adet * fiyat * 1.2 + ekMalzemeSayisi).toFixed(2));
    } else if (boyut === "büyük" && kalinlik === "orta") {
      setToplamFiyat((adet * fiyat * 1.3 + ekMalzemeSayisi).toFixed(2));
    } else if (boyut === "büyük" && kalinlik === "kalin") {
      setToplamFiyat((adet * fiyat * 1.4 + ekMalzemeSayisi).toFixed(2));
    }
  }, [boyut, kalinlik, ekMalzemeSayisi]);

  return <>{toplamFiyat}</>;
};

export default PriceCalculation;
