
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Customer/Main Pages/Home";
// import Payment from "../components/Customer/Checkout/Payment";
import login from "../components/Authentications/Login";
import SignUp from "../components/Authentications/SignUp";
import Menu from "../components/Customer/Menu";
import Cart from "../components/Customer/Main Pages/Cart";
import Checkout from "../components/Customer/Main Pages/Checkout";
import Payment from "../components/Customer/Main Pages/Payment"
import Search from "../components/Customer/Main Pages/Search";
function UserRoutes() {
  return (
    <>
      <Route path="/home" component={Home} />

      <Route path="/menu" component={Menu} />
        
      <Route path="/cart" component={Cart} />
        
      {/*<Route path="/payment" component={Payment} />*/}
        
      <Route path="/login" component={login} />
        
      <Route path="/signUp" component={SignUp} />

      <Route path="/checkout" component={Checkout} />

      <Route path="/payment" component={Payment} />

      <Route path="/search/:keyword" component={Search} />
    </>
  );
}

export default UserRoutes;
