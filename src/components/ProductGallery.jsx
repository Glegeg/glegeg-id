import React from "react";
import PropTypes from "prop-types";
import product from "../assets/product.png";
import { ReactComponent as Back } from "../assets/back.svg";
import { useHistory } from "react-router-dom";

function ProductGallery(props) {
  let history = useHistory();

  return (
    <div>
      <div className="product-bg w-full h-56 mb-16 relative p-6">
        <Back
          style={{ fill: "white", cursor: "pointer" }}
          onClick={() => history.goBack()}
        />
        <img
          src={product}
          alt=""
          className="png-shadow absolute h-56 left-16 -bottom-12"
        />
      </div>
    </div>
  );
}

ProductGallery.propTypes = {};

export default ProductGallery;
