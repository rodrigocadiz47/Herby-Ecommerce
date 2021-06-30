import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../../components/Header";
import ProductDetail from "../../components/ProductDetail";
import ProductsContainer from "../ProductsContainer";
import Register from "../../components/RegisterForm";
import LandingPage from "../../components/LandingPage";
import Login from "../../components/LoginForm";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/products/:id" component={ProductDetail} />
        <Route path="/products" component={ProductsContainer} />
        <Route path="/users/register" component={Register} />
        <Route path="/" component={LandingPage} />
        <Route path="/users/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
