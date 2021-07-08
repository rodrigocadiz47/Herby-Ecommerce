import React, { useState } from "react";
import { useHistory } from "react-router";

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

  const [oneEmail, setOneEmail] = useState(false);

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const address =
      `${user.calle} ${user.altura}, ${user.localidad} - ${user.codigoPostal}`.toUpperCase() +
      ` (${user.observaciones})`;

    axios
      .post("http://localhost:3001/api/users/register", { ...user, address })
      .then(() => {
        setOneEmail(false);
        history.push("/login");
      })
      .catch(() => {
        setOneEmail(true);
      });
  };

  const onChange = (event) => {
    setOneEmail(false);
    const fieldName = event.target.name;
    const value = event.target.value;
    setUser({ ...user, [fieldName]: value });
  };

  return (
    <div>
      <Form handleSubmit={handleSubmit} onChange={onChange} oneEmail={oneEmail} />
    </div>
  );
};

export default UsersContainer;
