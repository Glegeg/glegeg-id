import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";
import Cart from "./components/pages/Cart";
import Home from "./components/pages/Home";
import Faq from "./components/pages/Faq";
import Order from "./components/pages/Order";
import Nav from "./components/Nav";
import Product from "./components/pages/Product";

// function usePage() {
//   let loc = useLocation();

//   useEffect(() => {
//     console.log(loc.pathname);
//   }, [loc]);
// }

function App() {
  // usePage();

  return (
    <Router>
      <div className="App relative">
        <Route component={WithNav} />
        <Route component={WithoutNav} />
      </div>
    </Router>
  );
}

function WithoutNav() {
  return (
    <div className="container">
      <Route path="/order" exact>
        <Order />
      </Route>

      <Route path="/product" exact>
        <Product />
      </Route>
    </div>
  );
}

function WithNav() {
  return (
    <div className="home">
      <Nav />
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/cart" exact>
        <Cart />
      </Route>

      <Route path="/faq" exact>
        <Faq />
      </Route>
    </div>
  );
}

export default App;
