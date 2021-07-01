import react from "react";
import { Link } from "react-router-dom";

import s from "./style.module.css";

const Header = function () {
  return (
    <header>
      <nav className={s.navbar}>
        <ul>
          <Link to="/">
            <li> Herby </li>
          </Link>
          <Link to="/products">
            <li> Frutas </li>
          </Link>
          <Link to="/products">
            <li> Verduras </li>
          </Link>
          <Link to="/login">
            <li> Login </li>
          </Link>
          <Link to="/register">
            <li> Register </li>
          </Link>
          <li> Contacto </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
