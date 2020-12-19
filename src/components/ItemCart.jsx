import React from "react";
import PropTypes from "prop-types";

function ItemCart(props) {
  return (
    <div className="w-full flex p-4 pr-6 mb-4 bg-white rounded-xl shadow-xl">
      <div className="h-20 w-20 flex items-center justify-center rounded-xl item-img">
        <img
          src={props.img}
          alt=""
          className="png-shadow max-h-full max-w-full p-3"
        />
      </div>

      <div className="item-title text-left ml-4 flex-grow">
        <h3 className="font-bold text-lg text-black">{props.title}</h3>

        <div className="counter-container flex justify-between mt-3">
          <small className="text-defocus">{props.price}</small>

          <div className="cart-counter flex">
            <div className="rounded-full bg-white h-6 w-6 shadow-lg text-center font-bold">
              -
            </div>
            <p className="text-sm font-bold mx-4">1</p>
            <div className="rounded-full bg-white h-6 w-6 shadow-lg text-center font-bold">
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ItemCart.propTypes = {};

export default ItemCart;
