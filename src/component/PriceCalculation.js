import React, { useEffect, useState } from "react";

const PriceCalculation = ({ start = 85.5 }) => {
  const [adet, setAdet] = useState(1);
  const [fiyat, setFiyat] = useState(start);
  const [kalinlik, setKalinlik] = useState("ince");
  const [toplamFiyat, setToplamFiyat] = useState(start * fiyat);

  useEffect(() => {
    if (kalinlik === "ince") {
      setToplamFiyat(fiyat * 0.9);
    } else if (kalinlik === "kalin") {
      setToplamFiyat(fiyat * 1.1);
      console.log(toplamFiyat);
    } else {
      setToplamFiyat(fiyat);
    }
  }, [fiyat, kalinlik]);

  return (
    <>
      <select onChange={(e) => setKalinlik(e.target.value)} value={kalinlik}>
        <option selected>Hamur Seç</option>
        <option value={"ince"}>İnce</option>
        <option value={"orta"}>Orta</option>
        <option value={"kalin"}>Kalın</option>
      </select>
    </>
  );
};

export default PriceCalculation;
