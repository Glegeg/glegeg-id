import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ItemReg(props) {
  function thousandFormat(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <Link to="/product">
      <div className="w-full flex p-4 mb-4 bg-white rounded-xl shadow-xl">
        <div className="h-20 w-20 flex items-center justify-center rounded-xl item-img">
          <img
            src={props.img}
            alt=""
            className="png-shadow max-h-full max-w-full p-3"
          />
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

ItemReg.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
};

export default ItemReg;
