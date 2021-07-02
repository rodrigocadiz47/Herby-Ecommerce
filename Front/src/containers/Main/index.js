import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";

import Header from "../../components/Header";
import ProductDetail from "../../components/ProductDetail";
import ProductsContainer from "../ProductsContainer";
import Register from "../../containers/RegisterContainer";
import LandingPage from "../../components/LandingPage";
import Login from "../../containers/LoginContainer";
import CartContainer from "../CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { SET_USER_ME } from "../../store/usersReducer";
import axios from "axios";
import { SET_CART } from "../../store/cartReducer";

import { SET_USER_LOCAL } from "../../store/usersReducer"

function App() {
  const dispatch = useDispatch()
  const logOut = ()=>{
    axios.post("http://localhost:3001/api/users/logout")
    .then(()=>{
      dispatch(SET_USER_LOCAL())
    })
  }
  return (
    <div>
      <Header logOut={logOut}/>
      <Switch>
        <Route path="/cart" component={CartContainer} />
        {/* <Route path="/products/fruits" component={ProductsContainer} />
        <Route path="/products/:id" component={ProductDetail} /> */}
        <Route exact path="/products" component={ProductsContainer} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={LandingPage} />
        <Redirect from="/" to="/home" />
      </Switch>
    </div>
  );
}

export default App;
