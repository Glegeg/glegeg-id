import React from "react";
import PropTypes from "prop-types";

function ItemOrder(props) {
  return (
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
        <small className="text-defocus block text-xs">{`${props.sum} item`}</small>
        <h3 className="font-bold mt-3 text-sm">{props.price}</h3>
      </div>
    </div>
  );
}

ItemOrder.propTypes = {};

export default ItemOrder;
