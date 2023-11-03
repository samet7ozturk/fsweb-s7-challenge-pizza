import React, { useState } from "react";

const Counter = () => {
  const [adet, setAdet] = useState(1);

  const adetArttir = () => {
    setAdet(adet + 1);
  };

  const adetAzalt = () => {
    setAdet(adet - 1);
  };

  return (
    <>
      <button onClick={adetAzalt} className="me-2" id="adet-arttir-btn">
        <i className="fa-solid fa-minus" />
        Azalt
      </button>
      <p>{adet}</p>
      <button onClick={adetArttir} className="me-2" id="adet-arttir-btn">
        <i className="fa-solid fa-plus" />
        Arttır
      </button>
    </>
  );
};

export default Counter;
