import React from "react";
import { Link } from "react-router-dom";

function ItemReg(props) {
  function thousandFormat(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <Link to={props.path}>
      <div className="w-full flex p-4 mb-4 bg-white rounded-xl shadow-xl">
        <div className="h-20 w-20 p-3 flex items-center justify-center rounded-xl item-img">
          <img src={props.img} alt="" className="png-shadow h-full" />
        </div>

        <div className="item-title text-left ml-4">
          <h3 className="font-bold text-lg text-black">{props.title}</h3>
          <small className="text-defocus">{`Rp ${thousandFormat(
            props.price
          )}`}</small>
        </div>
      </div>
    </Link>
  );
}

export default ItemReg;
