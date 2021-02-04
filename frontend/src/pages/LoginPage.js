import "./LoginPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { googleLogin, selectUser } from "../features/user/userSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className="loginPage">
      {user?.uid ? (
        <h1>{user?.displayName}</h1>
      ) : (
        <div className="loginPage__form">
          <h2>Accedi</h2>
          <p className="loginPage__formLabel">Indirizzo e-mail</p>
          <input type="text" />
          <p className="loginPage__formLabel">Password</p>
          <input type="text" />
          <button onClick={() => dispatch(googleLogin())}>Google</button>
          <p className="loginPage__formPrivacy">
            Accedendo al tuo account dichiari di aver letto e accetti le nostre
            Condizioni generali di uso e vendita. Prendi visione della nostra
            Informativa sulla privacy, della nostra Informativa sui Cookie e
            della nostra Informativa sulla Pubblicità definita in base agli
            interessi.
          </p>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
