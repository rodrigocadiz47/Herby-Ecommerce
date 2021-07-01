import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Form from "../../components/Form"
import { SET_USER } from "../../store/usersReducer";

export default () => {
  const dispatch= useDispatch()
  const [loginData, setLoginData] = useState({ email: "", password:""})
  const history =  useHistory()
  const onChange= (event)=> {
    const fieldName = event.target.name;
    const value = event.target.value;
    setLoginData({ ...loginData, [fieldName]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(SET_USER(loginData))
    history.push("/card")
  };

  return (
    <div>
        <Form handleSubmit={handleSubmit} onChange={onChange}/>
    </div>
  );
};