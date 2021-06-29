/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";

import axios from "axios";

export default () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/user/register", {
        name: name,
        lastName: lastName,
        email: email,
        password: password,
        phone: phone,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div>
        <h2>Create your account</h2>
      </div>
      <form>
        <input
          type="text"
          required
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
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
        <button type="submit" onSubmit={handleSubmit}>
          Sign up
        </button>
      </form>
    </div>
  );
};
