import "./CartProduct.scss";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../features/products/productsSlice";
import { Link } from "react-router-dom";

const CartProduct = ({ id, name, price, image, index }) => {
  const dispatch = useDispatch();

  return (
    <div className="cartProduct">
      <div
        className="cartProduct__image"
        style={{ backgroundImage: `url(${image})`, marginRight: 20 }}
      ></div>
      <div className="cartProduct__info">
        <h1>{name}</h1>
        <p style={{ color: "green", fontWeight: "bold" }}>In Stock</p>
      </div>
      <h2>${price / 100}</h2>
      <button onClick={() => dispatch(removeFromCart(index))}>X</button>
    </div>
  );
};

export default CartProduct;
