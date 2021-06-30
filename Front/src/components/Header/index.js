import react from "react";

import s from "./style.module.css";

const Header = function () {
  return (
    <header>
      <nav className={s.navbar}>
        <ul>
          <a href="#">
            <li> Herby </li>
          </a>
          <a href="#">
            <li> Frutas </li>
          </a>
          <a href="#">
            <li> Verduras </li>
          </a>
          <a href="#">
            <li> Contacto </li>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
