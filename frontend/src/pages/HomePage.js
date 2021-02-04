import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import ProductsList from "../components/ProductsList";
import { googleLogin, selectUser, setUser } from "../features/user/userSlice";

const HomePage = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className="homePage">
      <Navbar />
      <ProductsList />
    </div>
  );
};

export default HomePage;
