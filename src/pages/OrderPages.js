import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PriceCalculation from "../component/PriceCalculation";
import Counter from "../component/Counter";

const OrderPage = () => {
  const [kalinlik, setKalinlik] = useState("");
  const [boyut, setBoyut] = useState("");
  const [checked, setChecked] = useState({
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
    checkbox7: false,
    checkbox8: false,
    checkbox9: false,
    checkbox10: false,
    checkbox11: false,
    checkbox12: false,
    checkbox13: false,
    checkbox14: false,
    checkbox15: false,
    checkbox16: false,
    checkbox17: false,
  });
  const history = useHistory();

  const handleSizeChange = (selectedSize) => {
    setBoyut(selectedSize);
  };

  const handleCheckboxChange = (checkboxName) => {
    const newChecked = { ...checked };
    let count = Object.values(checked).filter((isChecked) => isChecked).length;

    if (newChecked[checkboxName]) {
      newChecked[checkboxName] = false;
      setChecked(newChecked);
    } else {
      if (count < 10) {
        newChecked[checkboxName] = true;
        setChecked(newChecked);
      }
    }
  };

  const selectedCount = Object.values(checked).filter(
    (isChecked) => isChecked
  ).length;
  console.log("Seçilen ek malzeme sayısı:", selectedCount);

  const handleOrder = () => {
    history.push("/success-page");
  };

  return (
    <>
      <h1>Teknolojik Yemekler</h1>
      <p>
        <Link to="/">Ana Sayfa</Link>Seçenekler
        <Link to="/order-page">Sipariş Oluştur</Link>
      </p>

      <select title="Pizzanızı Seçin">
        <option value="PAAP">Position Absolute Acı Pizza</option>
        <option value="P">Pizza 2</option>
        <option value="Pi">Pizza 3</option>
        <option value="Piz">Pizza 4</option>
      </select>

      <p>Pizza Adı</p>
      <h2>Pizza Fiyatı</h2>
      <p>4.9</p>
      <p>(200)</p>
      <p>Pizza Açıklaması</p>
      <p>Boyut Seç *</p>

      <label>
        <input
          type="radio"
          name="size"
          value="küçük"
          checked={boyut === "küçük"}
          onChange={() => handleSizeChange("küçük")}
        />
        Küçük
      </label>
      <label>
        <input
          type="radio"
          name="size"
          value="orta"
          checked={boyut === "orta"}
          onChange={() => handleSizeChange("orta")}
        />
        Orta
      </label>
      <label>
        <input
          type="radio"
          name="size"
          value="büyük"
          checked={boyut === "büyük"}
          onChange={() => handleSizeChange("büyük")}
        />
        Büyük
      </label>

      <p>Hamur Seç *</p>
      <select onChange={(e) => setKalinlik(e.target.value)} value={kalinlik}>
        <option value={"ince"}>İnce</option>
        <option value={"orta"}>Orta</option>
        <option value={"kalin"}>Kalın</option>
      </select>

      <p>Ek Malzemeler</p>
      <p>En fazla 10 malzeme seçebilirsiniz.</p>

      <label>
        <input
          type="checkbox"
          checked={checked.checkbox4}
          onChange={() => handleCheckboxChange("checkbox4")}
        />
        Pepperoni
      </label>

      <label>
        <input
          type="checkbox"
          checked={checked.checkbox5}
          onChange={() => handleCheckboxChange("checkbox5")}
        />
        Sosis
      </label>

      <label>
        <input
          type="checkbox"
          checked={checked.checkbox6}
          onChange={() => handleCheckboxChange("checkbox6")}
        />
        Kanada Jambonu
      </label>

      <label>
        <input
          type="checkbox"
          checked={checked.checkbox7}
          onChange={() => handleCheckboxChange("checkbox7")}
        />
        Tavuk Izgara
      </label>

      <label>
        <input
          type="checkbox"
          checked={checked.checkbox8}
          onChange={() => handleCheckboxChange("checkbox8")}
        />
        Soğan
      </label>

      <label>
        <input
          type="checkbox"
          checked={checked.checkbox9}
          onChange={() => handleCheckboxChange("checkbox9")}
        />
        Domates
      </label>

      <label>
        <input
          type="checkbox"
          checked={checked.checkbox10}
          onChange={() => handleCheckboxChange("checkbox10")}
        />
        Mısır
      </label>

      <label>
        <input
          type="checkbox"
          checked={checked.checkbox11}
          onChange={() => handleCheckboxChange("checkbox11")}
        />
        Sucuk
      </label>

      <label>
        <input
          type="checkbox"
          checked={checked.checkbox12}
          onChange={() => handleCheckboxChange("checkbox12")}
        />
        Jalepeno
      </label>

      <label>
        <input
          type="checkbox"
          checked={checked.checkbox13}
          onChange={() => handleCheckboxChange("checkbox13")}
        />
        Sarımsak
      </label>

      <label>
        <input
          type="checkbox"
          checked={checked.checkbox14}
          onChange={() => handleCheckboxChange("checkbox14")}
        />
        Biber
      </label>

      <label>
        <input
          type="checkbox"
          checked={checked.checkbox15}
          onChange={() => handleCheckboxChange("checkbox15")}
        />
        Sucuk
      </label>

      <label>
        <input
          type="checkbox"
          checked={checked.checkbox16}
          onChange={() => handleCheckboxChange("checkbox16")}
        />
        Ananas
      </label>

      <label>
        <input
          type="checkbox"
          checked={checked.checkbox}
          onChange={() => handleCheckboxChange("checkbox")}
        />
        Kabak
      </label>

      <p>Sipariş Notu</p>
      <input
        type="text"
        placeholder="Siparişine eklemek istediğin bir not var mı?"
      />

      <PriceCalculation
        boyut={boyut}
        kalinlik={kalinlik}
        ekMalzeme={selectedCount}
      />

      <div>
        Sipariş Toplamı Seçimler Toplam
        <button onClick={handleOrder}>SİPARİŞ VER</button>
      </div>
    </>
  );
};

export default OrderPage;
