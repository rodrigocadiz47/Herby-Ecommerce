import React from "react";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";

import Header from "../../components/Header";
import ProductDetail from "../../components/ProductDetail";
import ProductsContainer from "../ProductsContainer";
import Register from "../../containers/RegisterContainer";
import LandingPage from "../../components/LandingPage";
import Login from "../../containers/LoginContainer";
import CartContainer from "../CartContainer";
import { useDispatch } from "react-redux";
import axios from "axios";
import { SET_CART_LOCAL } from "../../store/cartReducer";
import { SET_USER_LOCAL } from "../../store/usersReducer"

function App() {
  const dispatch = useDispatch()
  const logOut = ()=>{
    axios.post("http://localhost:3001/api/users/logout")
    .then(()=>{
      return dispatch(SET_USER_LOCAL())
    })
    .then(()=>{
      dispatch(SET_CART_LOCAL())
    })
  }
  return (
    <div>
      <Header logOut={logOut}/>
      <Switch>
        <Route path="/cart" component={CartContainer} />
        <Route path="/products/fruits" component={ProductsContainer} />
        <Route path="/products/:id" render={({match})=><ProductDetail productId={match.params.id}/>} />
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
