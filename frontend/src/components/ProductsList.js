import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  selectProducts,
} from "../features/products/productsSlice";
import { Product } from "./Product";
import "./ProductsList.scss";

const ProductsList = () => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="productsList">
      <div className="container">
        {products?.map(
          ({ _id, name, stars, price, discountedPrice, image, options }) => (
            <Product
              key={_id}
              id={_id}
              name={name}
              stars={stars}
              price={options[0]?.price}
              discountedPrice={options[0]?.discountedPrice}
              image={options[0]?.images[0]?.preview}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ProductsList;
