import React from "react";

function ItemOrder(props) {
  function thousandFormat(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <div className="w-full flex p-4 mb-4 bg-white rounded-xl shadow-xl">
      <div className="h-20 w-20 flex items-center justify-center rounded-xl item-img">
        <img src={props.img} alt="" className="png-shadow max-h-full p-3" />
      </div>

      <div className="item-title text-left ml-4">
        <h3 className="font-bold text-lg text-black">{props.title}</h3>
        <small className="text-defocus block text-xs">{`${props.sum} item`}</small>
        <h3 className="font-bold mt-3 text-sm">{`Rp ${thousandFormat(
          props.price
        )}`}</h3>
      </div>
    </div>
  );
}

export default ItemOrder;
