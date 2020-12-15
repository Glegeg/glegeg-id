import React from "react";
import PropTypes from "prop-types";
import product from "../assets/product.png";

function ItemReg(props) {
  return (
    <div className="w-full p-4 bg-white rounded-xl shadow-xl">
      <div className="h-20 w-20 flex items-center justify-center rounded-xl item-img">
        <img src={product} alt="" className="max-h-full max-w-full p-3" />
      </div>
    </div>
  );
}

ItemReg.propTypes = {};

export default ItemReg;
