import { useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";
import Navbar from "../components/Navbar";
import { Payment } from "../components/Payment";
import { selectCart } from "../features/products/productsSlice";
import "./CartPage.scss";

const CartPage = () => {
  const cart = useSelector(selectCart);
  console.log(cart);

  return (
    <div className="cartPage">
      <Navbar />
      <div className="container">
        <div className="cartPage__main">
          <h1 style={{ paddingBottom: 20 }}>Shopping Cart</h1>
          {cart.map((product, i) => (
            <CartProduct
              key={product._id}
              index={i}
              id={product._id}
              name={product.name}
              price={product.options[0].discountedPrice}
              image={product.options[0].images[0].image}
            />
          ))}
        </div>
        <div className="cartPage__sidebar">
          <Payment />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
