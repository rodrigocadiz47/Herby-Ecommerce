import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../../components/Header";
import ProductsContainer from "../ProductsContainer";
import Register from "../../components/RegisterForm";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/users/register" component={Register} />
      </Switch>
      <ProductsContainer />
    </div>
  );
}

export default App;
