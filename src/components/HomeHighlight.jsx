import React from "react";
import product from "../assets/product.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function HomeHighlight(props) {
  return (
    <Link to="/product">
      <div className="home-highlight relative w-full flex px-4 py-6 mt-14 mb-4 text-white rounded-xl shadow-xl">
        <div className="highlight-title w-1/2">
          <h4 className="font-semibold text-sm mb-2">Best Seller</h4>
          <p className="text-xl">Original Red Velvet</p>
        </div>

        <div className="highlight-img">
          <img
            src={product}
            alt=""
            className="png-shadow h-40 absolute right-8 -top-12"
          />
        </div>
      </div>
    </Link>
  );
}

HomeHighlight.propTypes = {};

export default HomeHighlight;
