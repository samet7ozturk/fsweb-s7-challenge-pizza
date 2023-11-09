import React from "react";
import { Link } from "react-router-dom";

import "./SuccessPage.css";

const SuccessPage = () => {
  return (
    <main>
      <div className="successpage-link">
        <Link to="/">Teknolojik Yemekler</Link>
      </div>
      <div data-cy="success-page">
        <h2>TEBRİKLER! </h2>
        <h2>SİPARİŞİNİZ ALINDI!</h2>
      </div>
    </main>
  );
};

export default SuccessPage;
