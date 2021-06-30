/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from "react";

import axios from "axios";

export default ({ onChange, handleSubmit }) => {
  return (
    <div>
      <div>
        <h2>Create your account</h2>
      </div>
      <form onSubmit={handleSubmit}>
        First Name:{" "}
        <input
          type="text"
          name="firstName"
          required
          placeholder="nombre"
          onChange={onChange}
        />
        <br />
        <br />
        Last Name:{" "}
        <input
          type="text"
          name="lastName"
          required
          placeholder="apellido"
          onChange={onChange}
        />
        <br />
        <br />
        Email:{" "}
        <input
          type="email"
          name="email"
          required
          placeholder="email"
          onChange={onChange}
        />
        <br />
        <br />
        Password:{" "}
        <input
          type="password"
          name="password"
          required
          placeholder="contraseña"
          onChange={onChange}
        />
        <br />
        <br />
        Contact Number:{" "}
        <input
          type="text"
          name="phone"
          required
          pattern="\d{8}|\d{10}"
          title="Tiene que tener 8 o 10 digitos"
          placeholder="8 o 10 digitos"
          onChange={onChange}
        />
        <br />
        <br />
        Calle:{" "}
        <input
          type="text"
          name="calle"
          required
          placeholder="calle"
          onChange={onChange}
        />
        <br />
        <br />
        Altura:{" "}
        <input
          type="number"
          name="altura"
          required
          placeholder="altura"
          onChange={onChange}
        />
        <br />
        <br />
        Localidad:{" "}
        <input
          type="text"
          name="localidad"
          required
          placeholder="localidad"
          onChange={onChange}
        />
        <br />
        <br />
        Codigo Postal:{" "}
        <input
          type="text"
          name="codigoPostal"
          required
          pattern="\d{4}"
          title="Tiene que tener 4 digitos"
          placeholder="CP"
          onChange={onChange}
        />
        <br />
        <br />
        Observaciones:{" "}
        <textarea
          type="text"
          name="observaciones"
          placeholder="Observaciones"
          onChange={onChange}
        />
        <br />
        <br />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};
