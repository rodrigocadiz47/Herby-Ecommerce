import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";

import Header from "../../components/Header";
import ProductDetail from "../../components/ProductDetail";
import ProductsContainer from "../ProductsContainer";
import Register from "../../containers/RegisterContainer";
import LandingPage from "../../components/LandingPage";
import Login from "../../containers/LoginContainer";
import CardContainer from "../CardContainer";
import { useDispatch } from "react-redux";
import { SET_USER_ME } from "../../store/usersReducer"

function App() {
  // const dispatch = useDispatch()

  // useEffect(()=>{
  //   dispatch(SET_USER_ME())
  // }, [dispatch])

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/card" component={CardContainer}/>
        <Route path="/products/fruits" component={ProductsContainer}/>
        <Route path="/products/:id" component={ProductDetail} />
        <Route exact path="/products" component={ProductsContainer} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={LandingPage}/>
        <Redirect from="/" to="/home"/>
      </Switch>
    </div>
  );
}

export default App;