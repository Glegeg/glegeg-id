import React from "react";
import { NavLink } from "react-router-dom";
// import { useRouteMatch } from "react-router-dom";

import { ReactComponent as Home } from "../assets/home-solid.svg";
import { ReactComponent as Cart } from "../assets/shopping-cart-solid.svg";
import { ReactComponent as Info } from "../assets/info-circle-solid.svg";

function Nav(props) {
  // console.log(window.location.pathname);
  // let match = useRouteMatch("/faq");
  // console.log(match);

  return (
    <nav
      className={`px-3 py-4 bg-white rounded-xl shadow-xl flex items-center justify-around fixed bottom-4 left-6 right-6 z-10 ${
        props.toggle ? "show-nav" : "hide-nav"
      }`}
    >
      <NavLink
        exact
        to="/"
        style={{ fill: "#9e9e9e" }}
        activeStyle={{ fill: "#6c553d" }}
        activeClassName="nav-active"
        className="w-full text-center"
      >
        <Home className="nav-btn inline" />
      </NavLink>

      <NavLink
        exact
        to="/cart"
        style={{ fill: "#9e9e9e" }}
        activeStyle={{ fill: "#6c553d" }}
        activeClassName="nav-active"
        className="w-full text-center"
      >
        <Cart className="nav-btn inline" />
      </NavLink>

      <NavLink
        // exact
        to="/faq"
        style={{ fill: "#9e9e9e" }}
        activeStyle={{ fill: "#6c553d" }}
        activeClassName="nav-active"
        className="w-full text-center"
      >
        <Info className="nav-btn inline" />
      </NavLink>
    </nav>
  );
}

export default Nav;
