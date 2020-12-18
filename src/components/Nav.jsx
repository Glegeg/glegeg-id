import React from "react";
import PropTypes from "prop-types";
import { NavLink, useRouteMatch } from "react-router-dom";

import { ReactComponent as Home } from "../assets/home-solid.svg";
import { ReactComponent as Cart } from "../assets/shopping-cart-solid.svg";
import { ReactComponent as Info } from "../assets/info-circle-solid.svg";

function Nav(props) {
  console.log(window.location.pathname);
  // let match = useRouteMatch("/faq");
  // console.log(match);

  return (
    <nav
      className={`px-3 py-4 bg-white rounded-xl shadow-lg flex items-center justify-around fixed bottom-4 left-6 right-6 ${
        window.location.pathname == "/" || "/cart" || "/faq" ? "true" : "false"
      }`}
    >
      <NavLink
        exact
        to="/"
        style={{ fill: "#9e9e9e" }}
        activeStyle={{ fill: "#6c553d" }}
        activeClassName="nav-active"
      >
        <Home className="nav-btn" />
      </NavLink>

      <NavLink
        exact
        to="/cart"
        style={{ fill: "#9e9e9e" }}
        activeStyle={{ fill: "#6c553d" }}
        activeClassName="nav-active"
      >
        <Cart className="nav-btn" />
      </NavLink>

      <NavLink
        // exact
        to="/faq"
        style={{ fill: "#9e9e9e" }}
        activeStyle={{ fill: "#6c553d" }}
        activeClassName="nav-active"
      >
        <Info className="nav-btn" />
      </NavLink>
    </nav>
  );
}

Nav.propTypes = {};

export default Nav;
