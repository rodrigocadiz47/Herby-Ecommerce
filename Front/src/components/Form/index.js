/* eslint-disable import/no-anonymous-default-export */
import { useLocation } from "react-router";
import { useSelector } from "react-redux"

import s from "./style.module.css";

export default ({ handleSubmit, onChange, oneEmail }) => {
  const { pathname } = useLocation();
  const userRejected = useSelector(store => store.users.error)

  return (
    <div className="container mx-auto flex flex-col h-screen max-w-md p-8">
      <div>
        {pathname === "/register" ? (
          <h2 className="text-center text-2xl">Crea tu cuenta</h2>
        ) : (
          <h2 className="text-center text-2xl">Ingresa</h2>
        )}
      </div>

      {oneEmail && <small>Este email ya esta en uso, por favor, intenta con uno distinto</small>}
      {(userRejected && pathname==="/login") && <small>Email o Contraseña incorrecta, intente nuevamente</small>}
      <form onSubmit={handleSubmit}>
        {pathname === "/register" && (
          <div className="grid grid-cols-2">
            <div className={s["input-container"]}>
              <label for="firstName" className={s.label}>
                Nombre:{" "}
              </label>
              <input
                type="text"
                className={s.input}
                name="firstName"
                required
                placeholder="ej. Sandra"
                onChange={onChange}
              />
            </div>
            <div className={s["input-container"]}>
              <label for="lastName" className={s.label}>
                Apellido:{" "}
              </label>
              <input
                className={s.input}
                type="text"
                name="lastName"
                required
                placeholder="ej. Fernandez"
                onChange={onChange}
              />
            </div>
          </div>
        )}
        <div className={s["input-container"]}>
          <label for="email" className={s.label}>
            Email:{" "}
          </label>
          <input
            className={s.input}
            type="email"
            name="email"
            required
            placeholder="ej. sandrafernandez@email.com"
            onChange={onChange}
          />
        </div>
        <div className={s["input-container"]}>
          <label for="password" className={s.label}>
            Contraseña:{" "}
          </label>
          <input
            className={s.input}
            type="password"
            name="password"
            required
            placeholder="************"
            onChange={onChange}
          />
        </div>
        {pathname === "/register" && (
          <div className="">
            <div className={s["input-container"]}>
              <label for="phone" className={s.label}>
                Telefono:{" "}
              </label>
              <input
                className={s.input}
                type="text"
                name="phone"
                required
                pattern="\d{8}|\d{10}"
                title="Tiene que tener 8 o 10 digitos"
                placeholder="ej. 1183771799"
                onChange={onChange}
              />
            </div>
            <div className="grid grid-cols-2">
              <div className={s["input-container"]}>
                <label for="street" className={s.label}>
                  Calle:{" "}
                </label>
                <input
                  className={s.input}
                  type="text"
                  name="calle"
                  required
                  placeholder="ej. Wallaby"
                  onChange={onChange}
                />
              </div>
              <div className={s["input-container"]}>
                <label for="streetNumber" className={s.label}>
                  Altura:{" "}
                </label>
                <input
                  className={s.input}
                  name="altura"
                  required
                  placeholder="ej. 42"
                  onChange={onChange}
                />
              </div>
              <div className={s["input-container"]}>
                <label for="region" className={s.label}>
                  Localidad:{" "}
                </label>
                <input
                  className={s.input}
                  type="text"
                  name="localidad"
                  required
                  placeholder="ej. Sidney"
                  onChange={onChange}
                />
              </div>
              <div className={s["input-container"]}>
                <label for="zipCode" className={s.label}>
                  Codigo Postal:{" "}
                </label>
                <input
                  className={s.input}
                  type="text"
                  name="codigoPostal"
                  required
                  pattern="\d{4}"
                  title="Tiene que tener 4 digitos"
                  placeholder="ej. 1800"
                  onChange={onChange}
                />
              </div>
            </div>
            <div className={s["input-container"]}>
              <label for="extraDetails" className={s.label}>
                Observaciones:{" "}
              </label>
              <textarea
                className={s.input}
                type="text"
                name="observaciones"
                placeholder="casa, dpto, etc"
                onChange={onChange}
              />
            </div>
          </div>
        )}
        <button
          type="submit"
          className="inline-block w-full rounded-sm bg-green-600 px-3 py-2 my-4 text-white hover:bg-green-500"
          onSubmit={handleSubmit}
        >
          {pathname === "/register" ? "Registrate" : "Ingresa"}
        </button>
      </form>
    </div>
  );
};
