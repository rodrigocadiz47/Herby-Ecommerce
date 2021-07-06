import React from "react";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";

import HeaderContainer from "../HeaderContainer";
import ProductDetail from "../../components/ProductDetail";
import ProductsContainer from "../ProductsContainer";
import Register from "../../containers/RegisterContainer";
import LandingPage from "../../components/LandingPage";
import Login from "../../containers/LoginContainer";
import CartContainer from "../CartContainer";
import OrdersHistory from "../../components/OrdersHistory";
import Congratulation from "../../components/Congratulation";

function App() {
  return (
    <div>
      <HeaderContainer />
      <Switch>
        <Route path="/cart" component={CartContainer} />
        <Route path="/products/veg" component={ProductsContainer} />
        <Route path="/products/fruit" component={ProductsContainer} />
        <Route
          path="/products/:id"
          render={({ match }) => <ProductDetail productId={match.params.id} />}
        />
        <Route exact path="/products" component={ProductsContainer} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/history" component={OrdersHistory} />
        <Route path="/home" component={LandingPage} />
        <Route path="/congratulation" component={Congratulation}/>
        <Redirect from="/" to="/home" />
      </Switch>
    </div>
  );
}

export default App;
