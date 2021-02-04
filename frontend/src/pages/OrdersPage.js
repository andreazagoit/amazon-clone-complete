import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";
import Navbar from "../components/Navbar";
import { selectUser } from "../features/user/userSlice";

const OrdersPage = () => {
  const user = useSelector(selectUser);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      Axios.post("http://localhost:5000/orders", {
        uid: user.uid,
      }).then((response) => {
        setOrders(response.data.reverse());
      });
    }
  }, [user, orders]);

  return (
    <div>
      <Navbar />
      <h1>Orders</h1>
      {orders?.map(({ _id, time, content }) => (
        <div
          key={_id}
          style={{ backgroundColor: "#eee", marginBottom: 20, padding: 20 }}
        >
          <h2>ID: {_id}</h2>
          <h2>TIME: {time}</h2>
          {content.map((product, i) => (
            <CartProduct
              key={i}
              index={i}
              id={product._id}
              name={product.name}
              price={product.options[0].discountedPrice}
              image={product.options[0].images[0].image}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default OrdersPage;
