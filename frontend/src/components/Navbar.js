import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../features/products/productsSlice";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { logout, selectUser } from "../features/user/userSlice";

const Navbar = () => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className="navbar">
      <Link to="/">
        <img
          src="https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png"
          alt=""
          className="navbar__logo"
        />
      </Link>
      <div className="navbar__input">
        <input type="text" />
        <input type="submit" value="S" />
      </div>
      <Link to={!user ? "/login" : "/orders"}>
        <p style={{ paddingLeft: 14 }}>{user?.email || "No User"}</p>
      </Link>
      <button onClick={() => dispatch(logout())}>Logout</button>
      <div className="navbar__cart" style={{ padding: "0 20px" }}>
        <Link to="/cart">Cart: {cart.length}</Link>
      </div>
    </div>
  );
};

export default Navbar;
