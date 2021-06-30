import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../../components/Header";
import ProductsContainer from "../ProductsContainer";
import Register from "../../components/RegisterForm";
import Login from "../../components/LoginForm";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/users/register" component={Register} />
        <Route path="/users/login" component={Login} />
      </Switch>
      <ProductsContainer />
    </div>
  );
}

export default App;
