import React from "react";
import { Link } from "react-router-dom";
import PriceCalculation from "../component/PriceCalculation";
import Counter from "../component/Counter";

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
      <PriceCalculation />
      <p>Ek Malzemeler</p>
      <p>En fazla 10 malzeme seçebilirsiniz.</p>
      <label>
        <input type="checkbox" />
        Pepperoni
      </label>
      <label>
        <input type="checkbox" />
        Sosis
      </label>
      <label>
        <input type="checkbox" />
        Kanada Jambonu
      </label>
      <label>
        <input type="checkbox" />
        Tavuk Izgara
      </label>
      <label>
        <input type="checkbox" />
        Soğan
      </label>
      <label>
        <input type="checkbox" />
        Domates
      </label>
      <label>
        <input type="checkbox" />
        Mısır
      </label>
      <label>
        <input type="checkbox" />
        Sucuk
      </label>
      <label>
        <input type="checkbox" />
        Jalepeno
      </label>
      <label>
        <input type="checkbox" />
        Sarımsak
      </label>
      <label>
        <input type="checkbox" />
        Biber
      </label>
      <label>
        <input type="checkbox" />
        Sucuk
      </label>
      <label>
        <input type="checkbox" />
        Ananas
      </label>
      <label>
        <input type="checkbox" />
        Kabak
      </label>
      <p>Sipariş Notu</p>
      <input
        type="text"
        placeholder="Siparişine eklemek istediğin bir not var mı?"
      />
      <Counter />
      <button>SİPARİŞ VER</button>
    </>
  );
};

export default OrderPage;
