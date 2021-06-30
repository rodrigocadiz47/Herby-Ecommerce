/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from "react";

import axios from "axios";

export default () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [direccion, setDireccion] = useState("");
  const [altura, setAltura] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [observaciones, setObservaciones] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/users/register", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phone: phone,
        address: address,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    setAddress(
      `${direccion} ${altura}, ${localidad} - ${codigoPostal}`.toUpperCase() +
        ` (${observaciones})`
    );
  }, [direccion, altura, localidad, codigoPostal, observaciones]);

  return (
    <div>
      <div>
        <h2>Create your account</h2>
      </div>
      <form>
        First Name:{" "}
        <input
          type="text"
          required
          placeholder="nombre"
          onChange={(event) => setFirstName(event.target.value)}
        />
        <br />
        <br />
        Last Name:{" "}
        <input
          type="text"
          required
          placeholder="apellido"
          onChange={(event) => setLastName(event.target.value)}
        />
        <br />
        <br />
        Email:{" "}
        <input
          type="email"
          required
          placeholder="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <br />
        Password:{" "}
        <input
          type="password"
          required
          placeholder="contraseña"
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <br />
        Contact Number:{" "}
        <input
          type="text"
          required
          pattern="\d{8}|\d{10}"
          title="Tiene que tener 8 o 10 digitos"
          placeholder="8 o 10 digitos"
          onChange={(event) => setPhone(event.target.value)}
        />
        <br />
        <br />
        Direccion:{" "}
        <input
          type="text"
          required
          placeholder="calle"
          onChange={(event) => setDireccion(event.target.value)}
        />
        <br />
        <br />
        Altura:{" "}
        <input
          type="number"
          required
          placeholder="altura"
          onChange={(event) => setAltura(event.target.value)}
        />
        <br />
        <br />
        Localidad:{" "}
        <input
          type="text"
          required
          placeholder="localidad"
          onChange={(event) => setLocalidad(event.target.value)}
        />
        <br />
        <br />
        Codigo Postal:{" "}
        <input
          type="text"
          required
          pattern="\d{4}"
          title="Tiene que tener 4 digitos"
          placeholder="CP"
          onChange={(event) => setCodigoPostal(event.target.value)}
        />
        <br />
        <br />
        Observaciones:{" "}
        <textarea
          type="text"
          placeholder="Observaciones"
          onChange={(event) => setObservaciones(event.target.value)}
        />
        <br />
        <br />
        <button type="submit" onSubmit={handleSubmit}>
          Sign up
        </button>
      </form>
    </div>
  );
};
