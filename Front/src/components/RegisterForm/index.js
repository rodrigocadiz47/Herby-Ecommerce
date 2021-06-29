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
    setAddress(`${direccion} ${altura}, ${localidad} - ${codigoPostal}`);
  }, [direccion, altura, localidad, codigoPostal]);

  return (
    <div>
      <div>
        <h2>Create your account</h2>
      </div>
      <form>
        <input
          type="text"
          required
          placeholder="First name"
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          type="text"
          required
          placeholder="Last name"
          onChange={(event) => setLastName(event.target.value)}
        />
        <input
          type="email"
          required
          placeholder="Email address"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          required
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          type="number"
          required
          placeholder="Phone number"
          onChange={(event) => setPhone(event.target.value)}
        />
        <input
          type="text"
          required
          placeholder="Direccion"
          onChange={(event) => setDireccion(event.target.value)}
        />
        <input
          type="number"
          required
          placeholder="Altura"
          onChange={(event) => setAltura(event.target.value)}
        />
        <input
          type="text"
          required
          placeholder="Localidad"
          onChange={(event) => setLocalidad(event.target.value)}
        />
        <input
          type="number"
          required
          placeholder="Codigo postal"
          onChange={(event) => setCodigoPostal(event.target.value)}
        />
        <button type="submit" onSubmit={handleSubmit}>
          Sign up
        </button>
      </form>
    </div>
  );
};
