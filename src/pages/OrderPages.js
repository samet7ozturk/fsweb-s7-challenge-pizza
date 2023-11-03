import React from "react";
import { Link } from "react-router-dom";

const OrderPage = () => {
  return (
    <>
      <h1>Teknolojik Yemekler</h1>
      <p>
        <Link to="/">Ana Sayfa</Link>Seçenekler
        <Link to="/order-page">Sipariş Oluştur</Link>
      </p>

      <select>
        <option selected>Pizzanızı Seçin</option>
        <option value="PAAP">Position Absolute Acı Pizza</option>
        <option value="P">Pizza 2</option>
        <option value="Pi">Pizza 3</option>
        <option value="Piz">Pizza 4</option>
      </select>
      <p>Pizza Adı</p>
      <h2>Pizza Fiyatı</h2>
      <p>Pizza Açıklaması</p>
      <p>Boyut Seç</p>
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <select>
        <option selected>Hamur Seç</option>
        <option value="ince">İnce</option>
        <option value="orta">Orta</option>
        <option value="kalin">Kalın</option>
      </select>
      <p>Ek Malzemeler</p>
      <p>En fazla 10 malzeme seçebilirsiniz.</p>
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <p>Sipariş Notu</p>
      <input
        type="text"
        placeholder="Siparişine eklemek istediğin bir not var mı?"
      />
      <button>SİPARİŞ VER</button>
    </>
  );
};

export default OrderPage;
