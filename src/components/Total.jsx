import React from "react";
import PropTypes from "prop-types";

function Total(props) {
  return (
    <div className="p-4 mt-16 bg-white rounded-xl shadow-xl flex">
      <div className="total-text w-1/2">
        <small>Total</small>
        <h4 className="font-bold">Rp 30.000</h4>
      </div>

      <div className="total-cta w-1/2 rounded-xl flex items-center justify-center">
        <p className="font-semibold text-white">Pesan</p>
      </div>
    </div>
  );
}

Total.propTypes = {};

export default Total;
