import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/products/productsSlice";
import "./Product.scss";
import { Link } from "react-router-dom";
import Stars from "./Stars";

export const Product = ({ id, name, stars, price, discountedPrice, image }) => {
  const dispatch = useDispatch();

  return (
    <Link to={`/product/${id}`} className="product">
      <div
        className="product__image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h2 style={{ marginBottom: 4 }} className="product__name">
        {name}
      </h2>
      <Stars value={stars} />
      <p className="product__price">
        {discountedPrice / 100}€<span>{price / 100}€</span>
      </p>
    </Link>
  );
};
