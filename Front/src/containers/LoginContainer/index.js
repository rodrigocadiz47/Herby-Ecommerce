import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Form from "../../components/Form";
import { SET_USER } from "../../store/usersReducer";
import { GET_LOG_CART } from "../../store/cartReducer";

export default () => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const cart = useSelector((store) => store.cart);
  const history = useHistory();

  const onChange = (event) => {
    //dispatch de funcion para sacar alerta de incorrecto
    const fieldName = event.target.name;
    const value = event.target.value;
    setLoginData({ ...loginData, [fieldName]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(SET_USER(loginData)).then((user) => {
      if (cart.length) {
        cart.forEach((order) => {
          axios.post(
            `http://localhost:3001/api/orders/${user.payload.id}`,
            order
          );
        });
      }

      dispatch(GET_LOG_CART(user.payload.id))
      

      if (user.payload) {
        history.push("/home");

      }
    });
  };

  return (
    <div>
      <Form handleSubmit={handleSubmit} onChange={onChange} />
    </div>
  );
};
