import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cart from "./components/pages/Cart";
import Home from "./components/pages/Home";

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
      </div>
    </Router>
  );
}

export default App;
