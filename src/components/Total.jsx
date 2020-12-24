import React from "react";
import { Link } from "react-router-dom";

function Total(props) {
  function thousandFormat(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <div className="p-4 mt-16 bg-white rounded-xl shadow-xl flex">
      <div className="total-text w-1/2">
        <small>Total</small>
        <h4 className="font-bold">Rp {thousandFormat(props.total)}</h4>
      </div>

      {props.mode === "cart" ? (
        <Link to="/order" className="total-cta w-1/2 rounded-xl">
          <div className="h-full flex items-center justify-center">
            <p className="font-semibold text-white">Lanjut</p>
          </div>
        </Link>
      ) : (
        <div
          className="total-cta w-1/2 rounded-xl cursor-pointer"
          style={{ userSelect: "none" }}
          onClick={props.submitHandler}
        >
          <div className="h-full flex items-center justify-center">
            <p className="font-semibold text-white">Pesan</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Total;
