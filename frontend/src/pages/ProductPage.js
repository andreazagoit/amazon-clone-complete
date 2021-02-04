import Axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.scss";
import Navbar from "../components/Navbar";
import Stars from "../components/Stars";
import { addToCart } from "../features/products/productsSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export const ProductPage = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();
  const [optionIndex, setOptionIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const dispatch = useDispatch();
  let history = useHistory();

  const prepareCheckoutItem = () => {
    let checkoutProduct = { ...product };
    checkoutProduct.options = [product.options[optionIndex]];
    console.log(checkoutProduct);
    return checkoutProduct;
  };

  const weekday = [
    "Domenica",
    "Lunedi",
    "Martedi",
    "Mercoledi",
    "Giovedi",
    "Venerdi",
    "Sabato",
  ];

  useEffect(() => {
    Axios.post("http://localhost:5000/product", {
      id: id,
    }).then((response) => {
      setProduct(response.data);
      console.log("PRODUCT", response.data);
    });
  }, [id]);

  return (
    <div className="productPage">
      <Navbar />
      <div className="container">
        {product._id ? (
          <>
            <div className="productPage__image">
              <div className="productPage__imagePreview">
                {product?.options[0]?.images?.map((image, i) => (
                  <div
                    className="preview__item"
                    onMouseEnter={() => setImageIndex(i)}
                    style={{
                      background: `url(${product?.options[optionIndex]?.images[i]?.image})`,
                    }}
                  ></div>
                ))}
              </div>
              <div
                className="productPage__imageImage"
                style={{
                  background: `url(${product?.options[optionIndex]?.images[imageIndex]?.image})`,
                }}
              ></div>
            </div>
            <div className="productPage__content">
              <h2 className="productPage__contentTitle">{product?.name}</h2>
              <p className="productPage__contentBrand">
                Visita lo store di {product?.brand}
              </p>
              <Stars value={product?.stars} />
              <div
                className="line"
                style={{
                  borderBottom: "1px solid lightgrey",
                  marginTop: 6,
                  marginBottom: 10,
                }}
              ></div>
              <div className="productPage__contentPrice">
                <div className="text">
                  <p>Prezzo consigliato:</p>
                  <p>Prezzo:</p>
                  <p>Risparmi:</p>
                </div>
                <div className="price">
                  <p>{product?.options[optionIndex]?.price / 100}€</p>
                  <p>{product?.options[optionIndex]?.discountedPrice / 100}€</p>
                  <p>{`${
                    (product?.options[optionIndex]?.price -
                      product?.options[optionIndex]?.discountedPrice) /
                    100
                  }€ (${Math.round(
                    ((product?.options[optionIndex]?.price -
                      product?.options[optionIndex]?.discountedPrice) /
                      ((product?.options[optionIndex]?.price +
                        product?.options[optionIndex]?.discountedPrice) /
                        2)) *
                      100
                  )}%)`}</p>
                  <p>Tutti i prezzi includono l'IVA.</p>
                </div>
              </div>
              <p>
                Tipo:{" "}
                <span className="bold">
                  {product?.options[optionIndex]?.name}
                </span>
              </p>
              <div className="productPage__options">
                {product?.options?.map((option, i) => (
                  <div
                    className="productPage__optionsOption"
                    onClick={() => {
                      setOptionIndex(i);
                      console.log(product);
                    }}
                    style={{
                      background: `url(${product?.options[i]?.images[0]?.preview})`,
                    }}
                  ></div>
                ))}
              </div>
              <div
                className="line"
                style={{
                  borderBottom: "1px solid lightgrey",
                  marginTop: 6,
                  marginBottom: 10,
                }}
              ></div>
              <div style={{ marginBottom: 30 }}>
                <p className="bold" style={{ marginBottom: 6 }}>
                  Informazioni su questo articolo
                </p>
                {product?.description}
              </div>
            </div>
            <div className="productPage__checkout">
              <h2 className="productPage__checkoutPrice">
                {`${product?.options[optionIndex]?.discountedPrice / 100} €`}
              </h2>
              <p className="productPage__checkoutDeliver">
                {`Consegna senza costi aggiuntivi domani ${
                  weekday[new Date().getDay() + 1]
                }: ${new Date()
                  .toJSON()
                  .slice(0, 10)
                  .split("-")
                  .reverse()
                  .join("/")}`}
              </p>
              <div>
                {product?.options[optionIndex]?.disponibility > 0 ? (
                  <div>
                    <h2
                      style={{
                        color: "#007600",
                        fontWeight: 400,
                        fontSize: 20,
                        marginTop: 20,
                      }}
                    >
                      Disponibilità immediata
                    </h2>
                    <p
                      style={{ marginTop: 4 }}
                    >{`${product?.options[optionIndex]?.disponibility} ancora disponibili`}</p>
                    <div
                      className="actions"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "10px",
                        gap: "8px",
                      }}
                    >
                      <button
                        onClick={() =>
                          dispatch(addToCart(prepareCheckoutItem()))
                        }
                      >
                        Aggiungi al carrello
                      </button>
                      <button
                        onClick={() => {
                          dispatch(addToCart(prepareCheckoutItem()));
                          history.push("/cart");
                        }}
                      >
                        Acquista ora
                      </button>
                    </div>
                  </div>
                ) : (
                  <h2>Non disponibile</h2>
                )}
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ProductPage;
