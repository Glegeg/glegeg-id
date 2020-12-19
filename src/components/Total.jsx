import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Total(props) {
  return (
    <div className="p-4 mt-16 bg-white rounded-xl shadow-xl flex">
      <div className="total-text w-1/2">
        <small>Total</small>
        <h4 className="font-bold">Rp 30.000</h4>
      </div>

      {/* {props.mode == "cart" ? } */}
      <Link to="/order" className="total-cta w-1/2 rounded-xl ">
        <div className="h-full flex items-center justify-center">
          <p className="font-semibold text-white">Pesan</p>
        </div>
      </Link>
    </div>
  );
}

Total.propTypes = {};

export default Total;
