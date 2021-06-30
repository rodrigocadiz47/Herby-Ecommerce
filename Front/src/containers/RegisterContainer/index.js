import React, { useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import Form from "../../components/Form";

const UsersContainer = function () {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    calle: "",
    altura: "",
    localidad: "",
    codigoPostal: "",
    observaciones: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const address =
      `${user.calle} ${user.altura}, ${user.localidad} - ${user.codigoPostal}`.toUpperCase() +
      ` (${user.observaciones})`;
    console.log("user", { ...user, address });

    axios
      .post("/api/users/register", { ...user, address })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const onChange = (event) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    setUser({ ...user, [fieldName]: value });
  };

  return (
    <div>
      <Form handleSubmit={handleSubmit} onChange={onChange}/>
    </div>
  );
};

export default UsersContainer;
