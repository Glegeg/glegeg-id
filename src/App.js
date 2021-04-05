import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import useLocalStorage from "./useLocalStorage";
import { CSSTransition } from "react-transition-group";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Cart from "./components/pages/Cart";
import Home from "./components/pages/Home";
import Faq from "./components/pages/Faq";
import Order from "./components/pages/Order";
import History from "./components/pages/History";
import Nav from "./components/Nav";
import Product from "./components/pages/Product";
import RedVelvet from "./components/products/RedVelvet";
import products from "./products";

import { CartProvider } from "./CartContext";
import MatchaPlain from "./components/products/MatchaPlain";
import ChocoDelfi from "./components/products/ChocoDelfi";

function App() {
  const [nav, setNav] = useState(true);

  const [cart, setCart] = useLocalStorage("cart", {
    items: [],
  });

  // const [cart, setCart] = useState({
  //   items: [],
  // });

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
      cartCopy.items.splice(index, 1);
    }

    setCart(cartCopy);
  }

  function deleteCartItem(index) {
    let cartCopy = { ...cart };

    cartCopy.items.splice(index, 1);
  }

  function cartPush(item) {
    let cartCopy = { ...cart };

    const cartFilter = cartCopy.items.filter(
      (current) => current.index === item.index
    );

    if (cartFilter.length >= 1) {
      console.log("Already exist");
    } else {
      cartCopy.items.push(item);

      setCart(cartCopy);
      console.log(cartCopy.items);
    }
  }

  return (
    <CartProvider value={cart}>
      <Router>
        <div className="App relative">
          <div className="home">
            <Nav toggle={nav} />
            <Route path="/" exact>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={500}
                  unmountOnExit
                  classNames="page"
                >
                  <Home setNav={setNav} />
                </CSSTransition>
              )}
            </Route>

            <Route path="/cart" exact>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={500}
                  unmountOnExit
                  classNames="page"
                >
                  <Cart
                    setNav={setNav}
                    addAmount={addAmount}
                    subtractAmount={subtractAmount}
                  />
                </CSSTransition>
              )}
            </Route>

            <Route path="/faq" exact>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={500}
                  unmountOnExit
                  classNames="page"
                >
                  <Faq setNav={setNav} />
                </CSSTransition>
              )}
            </Route>
          </div>

          <Route path="/order" exact>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={500}
                unmountOnExit
                classNames="page"
              >
                <Order setNav={setNav} setCart={setCart} />
              </CSSTransition>
            )}
          </Route>

          <Route path="/product" exact>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={500}
                unmountOnExit
                classNames="page"
              >
                <Product setNav={setNav} />
              </CSSTransition>
            )}
          </Route>

          <Route path="/history" exact>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={500}
                unmountOnExit
                classNames="page"
              >
                <History setNav={setNav} />
              </CSSTransition>
            )}
          </Route>

          <Route path="/red-velvet" exact>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={500}
                unmountOnExit
                classNames="page"
              >
                <RedVelvet
                  setNav={setNav}
                  product={products[0]}
                  cartPush={cartPush}
                />
              </CSSTransition>
            )}
          </Route>

          <Route path="/matcha-plain" exact>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={500}
                unmountOnExit
                classNames="page"
              >
                <MatchaPlain
                  setNav={setNav}
                  product={products[1]}
                  cartPush={cartPush}
                />
              </CSSTransition>
            )}
          </Route>

          <Route path="/choco-delfi" exact>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={500}
                unmountOnExit
                classNames="page"
              >
                <ChocoDelfi
                  setNav={setNav}
                  product={products[2]}
                  cartPush={cartPush}
                />
              </CSSTransition>
            )}
          </Route>
        </div>
      </Router>
      <ToastContainer />
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
