import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cart from "./components/pages/Cart";
import Home from "./components/pages/Home";
import Faq from "./components/pages/Faq";
import Order from "./components/pages/Order";

function App() {
  return (
    <Router>
      <div className="App p-6">
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/cart" exact>
          <Cart />
        </Route>

        <Route path="/faq" exact>
          <Faq />
        </Route>

        <Route path="/order" exact>
          <Order />
        </Route>
      </div>
    </Router>
  );
}

export default App;
