import React, { useState } from "react";
import Form from "../../components/Form"
import axios from "axios";

export default () => {
  const [loginData, setLoginData] = useState({ email: "", password:""})

  const onChange= (event)=> {
    const fieldName = event.target.name;
    const value = event.target.value;
    setLoginData({ ...loginData, [fieldName]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // axios
    //   .post("/api/users/login", loginData)
    //   .then((response) => setUser(response.data))
    //   .catch((error) => console.log(error));
    console.log(loginData)
  };

  return (
    <div>
        <Form handleSubmit={handleSubmit} onChange={onChange}/>
    </div>
  );
};