import { useState } from "react";
import { Link } from "react-router-dom";

import s from "./style.module.css";

const Header = function ({ emptyCart, logOut, user }) {
  // const [openMenu, setOpenMenu] = useState(false);

  // const toggleMenu = () => {
  //   if (openMenu) setOpenMenu(false);
  //   else setOpenMenu(true);
  // };

  return (
    <header className="sticky top-0 z-20 bg-gray-100">
      <nav className="flex items-center h-20 px-6 justify-around text-gray-700 shadow-md relative">
        <div className="space-x-5">
          <Link to="/">
            <span> HERBY </span>
          </Link>

          <Link to="/products/fruit">
            <span> FRUTAS </span>
          </Link>
          <Link to="/products/veg">
            <span> VERDURAS </span>
          </Link>
          {/* <Link to="/products">PRODUCTOS</Link> */}
        </div>
        <div className="flex flex-row items-center space-x-5">
          {user.id ? (
            <button onClick={logOut}>SALIR</button>
          ) : (
            <>
              <Link to="/login">
                <span> LOGIN </span>
              </Link>
              <Link to="/register">
                <span> REGISTER </span>
              </Link>
            </>
          )}
          <Link to="/cart">
            <span className="flex">
              <p className="mr-2">CARRITO</p>
              {/* esto es para mostrar el carrito lleno o vacio */}
              {emptyCart && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              )}
              {!emptyCart && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    // stroke-linecap="round"
                    // stroke-linejoin="round"
                    // strokeWidth="1"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              )}
            </span>
          </Link>
          {user.id && (
            <div className={s.menu}>
              <span className="flex relative">
                <p className="mr-2">{user.firstName.toUpperCase()}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6d"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <div className="absolute opacity-0 hover:opacity-100 mt-2 w-56 flex flex-col justify-start rounded-md border shadow-lg bg-gray-100">
                <a
                  className="w-full text-gray-700 block px-4 py-2 rounded hover:bg-gray-200"
                  href="http://"
                >
                  Mis Datos
                </a>
                <Link to="/history">
                  <a
                    className="w-full text-gray-700 block px-4 py-2 rounded hover:bg-gray-200"
                    href="http://"
                  >
                    Mis Ordenes
                  </a>
                </Link>
              </div>
            </div>
          )}

          {user.isAdmin ? (
            <Link to="/admin">
              <span> ADMIN </span>
            </Link>
          ) : null}
        </div>
      </nav>
    </header>
  );
};

export default Header;
