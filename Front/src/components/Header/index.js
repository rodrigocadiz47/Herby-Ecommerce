import react from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import s from "./style.module.css";

const Header = function () {
  const user = useSelector((store) => store.users.currentUser);

  return (
    <header>
      <nav className={s.navbar}>
        <ul>
          <Link to="/">
            <li> Herby </li>
          </Link>
          <Link to="/products/fruits">
            <li> Frutas </li>
          </Link>
          <Link to="/products">
            <li> Verduras </li>
          </Link>
          {user.id ? (
            <button>SALIR</button>
          ) : (
            <>
              <Link to="/login">
                <li> Login </li>
              </Link>
              <Link to="/register">
                <li> Register </li>
              </Link>
            </>
          )}
          <li> Contacto </li>
          <Link to="/cart">
            <li>Carrito</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
