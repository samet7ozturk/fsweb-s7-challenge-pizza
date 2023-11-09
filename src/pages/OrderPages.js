import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PriceCalculation from "../component/PriceCalculation";
import Material from "../component/Material";
import { useEffect } from "react";
import axios from "axios";
import * as Yup from "yup";

import png from "../Assets/adv-aseets/adv-form-banner.png";
import "./OrderPage.css";

const initialData = {
  fiyat: 85.5,
  boyut: "",
  kalinlik: "",
  positionAbsolute: {
    Pepperoni: false,
    Sosis: false,
    "Kanada Jambonu": false,
    "Tavuk Izgara": false,
    Soğan: false,
    Domates: false,
    Mısır: false,
    Sucuk: false,
    Jalepeno: false,
    Sarımsak: false,
    Biber: false,
    Ananas: false,
    Kabak: false,
  },
  addedMaterial: function () {
    return Object.keys(this.positionAbsolute).filter(
      (key) => this.positionAbsolute[key]
    ).length;
  },
};

console.log(initialData.addedMaterial());

const OrderPage = () => {
  const [order, setOrder] = useState(initialData);
  const [boyut, setBoyut] = useState("");
  const [isError, setIsError] = useState(true);
  const [isShown, setIsShown] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  const history = useHistory();

  const handleChange = (e) => {
    const { value, name, checked, type, id } = e.target;
    if (id === "materialList") {
      order.positionAbsolute[name] = checked;
      setOrder({ ...order });
    } else {
      setOrder({
        ...order,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const selectedCount = Object.values(order.positionAbsolute).filter(
    (isChecked) => isChecked
  ).length;
  console.log("Seçilen ek malzeme sayısı:", selectedCount);

  const validationSchema = Yup.object().shape({
    positionAbsolute: Yup.object()
      .test("min4", "En az 4 tane malzeme seçiniz", (obje) => {
        const len = Object.values(obje).filter((isTrue) => isTrue).length;
        return len >= 4;
      })
      .test("max10", "En fazla 10 tane malzeme seçebilirsiniz", (obje) => {
        const len = Object.values(obje).filter((isTrue) => isTrue).length;
        return len <= 10;
      }),
    boyut: Yup.string().required("Lütfen hamur tipini seçiniz"),
    kalinlik: Yup.string().required("Lütfen pizza boyutunu seçin"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsShown(true);
    const summary = { ...order };

    if (!isError) {
      axios
        .post("https://reqres.in/api/users", summary)
        .then(function (response) {
          history.push("/success-page");
          console.log("post request is succesful", response.data);
        })
        .catch(function (error) {
          history.push("/");
          alert(
            "Siparişiniz alınamadı. Anasayfaya yönlendiriliyorsunuz.",
            error
          );
        });
    }
  };

  useEffect(() => {
    validationSchema
      .validate(order, { abortEarly: false })
      .then((response) => {
        setIsError(false);
        console.log("hata yok ", response);
        setValidationErrors({});
      })
      .catch((error) => {
        setIsError(true);
        const object = {};
        error.inner.forEach((element) => {
          object[element.path] = element.message;
        });
        setValidationErrors(object);
      });
  }, [order]);

  useEffect(() => {
    console.log("validation errors:", validationErrors, isError, boyut);
  }, [validationErrors]);

  return (
    <>
      <header className="orderpage-header">
        <h1>Teknolojik Yemekler</h1>
      </header>

      <section className="orderpage-banner">
        <div className="orderpage-banner-img">
          <img src={png} alt="png1" />
        </div>
        <nav>
          <Link to="/">Ana Sayfa -&nbsp;</Link>
          <p> Seçenekler -&nbsp;</p>
          <Link to="/order-page"> Sipariş Oluştur</Link>
        </nav>

        <p>Position Absolute Acı Pizza</p>
        <div className="orderpage-banner-price">
          <h2>85.50</h2>
          <div className="orderpage-banner-p">
            <p>4.9</p>
            <p>(200)</p>
          </div>
        </div>
        <p>
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
        </p>
      </section>
      <form>
        <div className="orderpage-section1">
          <div className="orderpage-size">
            <p>Boyut Seç *</p>
            {isShown && validationErrors.boyut && (
              <p className="errorMessage">{validationErrors.boyut}</p>
            )}

            <label>
              <input
                className="inp"
                type="radio"
                name="size"
                value="küçük"
                data-cy="küçük"
                onChange={(e) => setOrder({ ...order, boyut: e.target.value })}
              />
              Küçük
            </label>
            <label>
              <input
                type="radio"
                name="size"
                value="orta"
                data-cy="orta"
                onChange={(e) => setOrder({ ...order, boyut: e.target.value })}
              />
              Orta
            </label>
            <label>
              <input
                type="radio"
                name="size"
                value="büyük"
                data-cy="büyük"
                onChange={(e) => setOrder({ ...order, boyut: e.target.value })}
              />
              Büyük
            </label>
          </div>
          <div className="orderpage-thickness">
            <p>Hamur Seç *</p>
            {isShown && validationErrors.kalinlik && (
              <span className="errorMessage">{validationErrors.kalinlik}</span>
            )}

            <select
              onChange={(e) => setOrder({ ...order, kalinlik: e.target.value })}
              defaultValue={"default"}
              data-cy="select-dough"
            >
              <option disabled value={"default"}>
                -Hamur Kalınlığı Seç-
              </option>
              <option value={"ince"}>İnce</option>
              <option value={"orta"}>Orta</option>
              <option value={"kalin"}>Kalın</option>
            </select>
          </div>
        </div>

        <div className="orderpage-section2">
          <p>Ek Malzemeler</p>
          {isShown && validationErrors.positionAbsolute && (
            <span className="errorMessage">
              {validationErrors.positionAbsolute}
            </span>
          )}
          <span>En fazla 10 malzeme seçebilirsiniz. 5₺</span>

          <div className="ekMalzemeler">
            {Object.keys(initialData.positionAbsolute).map(
              (material, index) => (
                <Material
                  key={index}
                  list={material}
                  handleChange={handleChange}
                />
              )
            )}
          </div>
        </div>

        <div className="orderpage-note">
          <p>Sipariş Notu</p>
          <input
            className="note"
            name="orderNote"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
          />
        </div>
        <div className="orderpage-summary">
          <PriceCalculation order={order} />
          <div className="orderpage-submitbutton">
            <button
              data-cy="submit-button"
              className="orderpage-submitbutton"
              type="submit"
              onClick={handleSubmit}
            >
              SİPARİŞ VER
            </button>
          </div>
        </div>
      </form>

      <div className="orderpage-footer">
        <div className="orderpage-footer1">
          <div>
            <div className="orderpage-footer1-h1">
              <h1>Teknolojik</h1>
              <h1>Yemekler</h1>
            </div>
            <div className="homepage-icon">
              <img
                src={require("../Assets/adv-aseets/icons/icon-1.png")}
                alt="icon1"
              />
              <p>341 Londonderry Road, Istanbul Türkiye</p>
            </div>
            <div className="homepage-icon">
              <img
                src={require("../Assets/adv-aseets/icons/icon-2.png")}
                alt="icon2"
              />
              <p>aciktim@teknolojikyemekler.com</p>
            </div>
            <div className="homepage-icon">
              <img
                src={require("../Assets/adv-aseets/icons/icon-3.png")}
                alt="icon3"
              />
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
        <div className="orderpage-footer2">
          <div className="orderpage-ins">
            <h3>Instagram</h3>
          </div>
          <div className="homepage-footer-img">
            <img
              src={require("../Assets/adv-aseets/insta/li-0.png")}
              alt="ins1"
            />
            <img
              src={require("../Assets/adv-aseets/insta/li-1.png")}
              alt="ins2"
            />
            <img
              src={require("../Assets/adv-aseets/insta/li-2.png")}
              alt="ins3"
            />
            <img
              src={require("../Assets/adv-aseets/insta/li-3.png")}
              alt="ins4"
            />
            <img
              src={require("../Assets/adv-aseets/insta/li-4.png")}
              alt="ins5"
            />
            <img
              src={require("../Assets/adv-aseets/insta/li-5.png")}
              alt="ins6"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderPage;
