/* eslint-disable import/no-anonymous-default-export */
import { useLocation } from "react-router";
import { useSelector } from "react-redux";

import s from "./style.module.css";

export default ({ handleSubmit, onChange, oneEmail }) => {
  const { pathname } = useLocation();
  const userRejected = useSelector((store) => store.users.error);

  return (
    <section className={s.stripped}>
      <div className="px-0 py-20 mx-auto max-w-7xl sm:px-4">
        <div className="w-full px-4 pt-5 pb-6 mx-auto mt-8 mb-6 bg-white rounded-none shadow-xl sm:rounded-lg sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 sm:px-6">
          <div>
            {pathname === "/register" ? (
              <h1 className="font-lora mb-4 text-2xl text-left text-gray-600">
                Crea tu cuenta
              </h1>
            ) : (
              <h2 className="font-lora mb-4 text-2xl text-left text-gray-600">Ingresa</h2>
            )}
          </div>

          {oneEmail && (
            <small>Este email ya esta en uso, por favor, intenta con uno distinto</small>
          )}
          {userRejected && pathname === "/login" && (
            <small>Email o Contraseña incorrecta, intente nuevamente</small>
          )}

          <form onSubmit={handleSubmit} className="mb-8 space-y-4">
            {pathname === "/register" && (
              <div className="grid grid-cols-2">
                <div className={s["input-container"]}>
                  <label htmlFor="firstName" className={s.label}>
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
                  <label htmlFor="lastName" className={s.label}>
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
              <label htmlFor="email" className={s.label}>
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
              <label htmlFor="password" className={s.label}>
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
                  <label htmlFor="phone" className={s.label}>
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
                    <label htmlFor="street" className={s.label}>
                      Calle:{" "}
                    </label>
                    <input
                      className={s.input}
                      type="text"
                      name="calle"
                      required
                      placeholder="ej. Av. Cabildo"
                      onChange={onChange}
                    />
                  </div>
                  <div className={s["input-container"]}>
                    <label htmlFor="streetNumber" className={s.label}>
                      Altura:{" "}
                    </label>
                    <input
                      className={s.input}
                      name="altura"
                      required
                      placeholder="ej. 1242"
                      onChange={onChange}
                    />
                  </div>
                  <div className={s["input-container"]}>
                    <label htmlFor="region" className={s.label}>
                      Localidad:{" "}
                    </label>
                    <input
                      className={s.input}
                      type="text"
                      name="localidad"
                      required
                      placeholder="ej. Buenos Aires"
                      onChange={onChange}
                    />
                  </div>
                  <div className={s["input-container"]}>
                    <label htmlFor="zipCode" className={s.label}>
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
                  <label htmlFor="extraDetails" className={s.label}>
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
              className="text-white bg-green-500 border-0 py-2 px-6 m-1.5 focus:outline-none hover:bg-green-600 rounded text-lg"
              onSubmit={handleSubmit}
            >
              {pathname === "/register" ? "Registrate" : "Ingresa"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
