import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import Cart from "./components/pages/Cart";
import Home from "./components/pages/Home";
import Faq from "./components/pages/Faq";
import Order from "./components/pages/Order";
import Nav from "./components/Nav";
import Product from "./components/pages/Product";
import RedVelvet from "./components/products/RedVelvet";
import products from "./products";

import { CartProvider } from "./CartContext";

function App() {
  const [nav, setNav] = useState(true);
  const [cart, setCart] = useState({
    items: [
      {
        id: "g01",
        index: 1,
        amount: 1,
      },
    ],
  });

  function addAmount(index) {
    let cartCopy = { ...cart };
    cartCopy.items[index].amount += 1;

    setCart(cartCopy);
  }

  function subtractAmount(index) {
    let cartCopy = { ...cart };

    if (cartCopy.items[index].amount > 1) {
      cartCopy.items[index].amount -= 1;
    } else {
      console.log("Apakah yakin");
    }

    setCart(cartCopy);
  }

  return (
    <CartProvider value={cart}>
      <Router>
        <div className="App relative">
          <div className="home">
            <Nav toggle={nav} />
            <Route path="/" exact>
              <Home setNav={setNav} />
            </Route>

            <Route path="/cart" exact>
              <Cart
                setNav={setNav}
                addAmount={addAmount}
                subtractAmount={subtractAmount}
              />
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

          <Route path="/red-velvet" exact>
            <RedVelvet setNav={setNav} product={products[0]} />
          </Route>

          <Route path="/matcha-plain" exact>
            <RedVelvet setNav={setNav} product={products[1]} />
          </Route>

          <Route path="/choco-delfi" exact>
            <RedVelvet setNav={setNav} product={products[2]} />
          </Route>
        </div>
      </Router>
    </CartProvider>
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
