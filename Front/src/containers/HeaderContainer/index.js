import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { SET_CART_LOCAL } from "../../store/cartReducer";
import { SET_USER_LOCAL } from "../../store/usersReducer";

import Header from "../../components/Header";

const HeaderContainer = function () {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.users.currentUser);

  const logOut = () => {
    axios
      .post("http://localhost:3001/api/users/logout")
      .then(() => {
        return dispatch(SET_USER_LOCAL());
      })
      .then(() => {
        dispatch(SET_CART_LOCAL());
      });
  };

  return <Header logOut={logOut} user={user} />;
};

export default HeaderContainer;
