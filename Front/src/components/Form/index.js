/* eslint-disable import/no-anonymous-default-export */
import { useLocation } from "react-router";

import s from "./style.module.css";

export default ({ handleSubmit, onChange }) => {
  const { pathname } = useLocation();
  return (
    <div className="container mx-auto flex flex-col h-screen px-64 py-20">
      <div>
        {pathname === "/register" ? (
          <h2 className="text-center text-2xl">Crea tu cuenta</h2>
        ) : (
          <h2 className="text-center text-2xl">Ingresa</h2>
        )}
      </div>
      <div className="flex flex-col h-screen">
        <form onSubmit={handleSubmit}>
          {pathname === "/register" && (
            <>
              <label for="firstName">Nombre: </label>
              <input
                className="w-full border border-gray-400 rounded-sm px-3 py-1 shadow-sm focus:outline-none focus:border-gray-800"
                type="text"
                name="firstName"
                required
                placeholder="ej. Sandra"
                onChange={onChange}
              />
              <br />
              <br />
              <label for="lastName">Apellido: </label>
              <input
                className="w-full border border-gray-400 rounded-sm px-3 py-1 shadow-sm focus:outline-none focus:border-gray-800"
                type="text"
                name="lastName"
                required
                placeholder="ej. Fernandez"
                onChange={onChange}
              />
            </>
          )}
          <br />
          <br />
          <label for="email">Email: </label>
          <input
            className="w-full border border-gray-400 rounded-sm px-3 py-1 shadow-sm focus:outline-none focus:border-gray-800"
            type="email"
            name="email"
            required
            placeholder="ej. sandrafernandez@email.com"
            onChange={onChange}
          />
          <br />
          <br />
          <label for="password">Contraseña: </label>
          <input
            className="w-full border border-gray-400 rounded-sm px-3 py-1 shadow-sm focus:outline-none focus:border-gray-800"
            type="password"
            name="password"
            required
            placeholder="************"
            onChange={onChange}
          />
          <br />
          <br />
          {pathname === "/register" && (
            <>
              <label for="phone">Telefono: </label>
              <input
                className="w-full border border-gray-400 rounded-sm px-3 py-1 shadow-sm focus:outline-none focus:border-gray-800"
                type="text"
                name="phone"
                required
                pattern="\d{8}|\d{10}"
                title="Tiene que tener 8 o 10 digitos"
                placeholder="ej. 1183771799"
                onChange={onChange}
              />
              <br />
              <br />
              <label for="street">Calle: </label>
              <input
                className="w-full border border-gray-400 rounded-sm px-3 py-1 shadow-sm focus:outline-none focus:border-gray-800"
                type="text"
                name="street"
                required
                placeholder="ej. Wallaby"
                onChange={onChange}
              />
              <br />
              <br />
              <label for="streetNumber">Altura: </label>
              <input
                className="w-full border border-gray-400 rounded-sm px-3 py-1 shadow-sm focus:outline-none focus:border-gray-800"
                type="number"
                name="streetNumber"
                required
                placeholder="ej. 42"
                onChange={onChange}
              />
              <br />
              <br />
              <label for="region">Localidad: </label>
              <input
                className="w-full border border-gray-400 rounded-sm px-3 py-1 shadow-sm focus:outline-none focus:border-gray-800"
                type="text"
                name="region"
                required
                placeholder="ej. Sidney"
                onChange={onChange}
              />
              <br />
              <br />
              <label for="zipCode">Codigo Postal: </label>
              <input
                className="w-full border border-gray-400 rounded-sm px-3 py-1 shadow-sm focus:outline-none focus:border-gray-800"
                type="text"
                name="zipCode"
                required
                pattern="\d{4}"
                title="Tiene que tener 4 digitos"
                placeholder="ej. 1800"
                onChange={onChange}
              />
              <br />
              <br />
              <label for="extraDetails">Observaciones: </label>
              <textarea
                className="w-full border border-gray-400 rounded-sm px-3 py-1 shadow-sm focus:outline-none focus:border-gray-800"
                type="text"
                name="extraDetails"
                placeholder="casa, dpto, etc"
                onChange={onChange}
              />
              <br />
              <br />
            </>
          )}
          <button
            type="submit"
            className="w-full rounded-sm bg-blue-400 px-3 py-1 text-white"
          >
            {pathname === "/register" ? "Registrate" : "Ingresa"}
          </button>
        </form>
      </div>
    </div>
  );
};
