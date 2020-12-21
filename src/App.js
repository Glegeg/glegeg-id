import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import Cart from "./components/pages/Cart";
import Home from "./components/pages/Home";
import Faq from "./components/pages/Faq";
import Order from "./components/pages/Order";
import Nav from "./components/Nav";
import Product from "./components/pages/Product";

function App() {
  const [nav, setNav] = useState(true);

  return (
    <Router>
      <div className="App relative">
        <div className="home">
          <Nav toggle={nav} />
          <Route path="/" exact>
            <Home setNav={setNav} />
          </Route>

          <Route path="/cart" exact>
            <Cart setNav={setNav} />
          </Route>

          <Route path="/faq" exact>
            <Faq setNav={setNav} />
          </Route>
        </div>

        <Route path="/order" exact>
          <Order setNav={setNav} />
        </Route>

        <Route path="/product" exact>
          <Product setNav={setNav} />
        </Route>
      </div>
    </Router>
  );
}

// function WithoutNav() {
//   return (
//     <div className="container">
//       <Route path="/order" exact>
//         <Order />
//       </Route>

//       <Route path="/product" exact>
//         <Product />
//       </Route>
//     </div>
//   );
// }

// function WithNav() {
//   return (
//     <div className="home">
//       <Nav toggle={nav} />
//       <Route path="/" exact>
//         <Home />
//       </Route>

//       <Route path="/cart" exact>
//         <Cart />
//       </Route>

//       <Route path="/faq" exact>
//         <Faq />
//       </Route>
//     </div>
//   );
// }

export default App;
