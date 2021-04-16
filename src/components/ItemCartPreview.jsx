import React from "react";
import products from "../settings/products.js";

function ItemCartPreview({ index }) {
  function thousandFormat(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <div className="w-full flex p-4 pr-6 mb-4 bg-white rounded-xl shadow-xl">
      <div className="h-20 w-20 p-3 flex items-center justify-center rounded-xl item-img">
        <img
          src={products[index].img}
          alt=""
          className="png-shadow max-h-full"
        />
      </div>

      <div className="item-title text-left ml-4 flex-grow">
        <h3 className="font-bold text-lg text-black">{products[index].name}</h3>

        <div className="counter-container flex justify-between mt-3">
          <small className="text-defocus">{`Rp ${thousandFormat(
            products[index].price
          )}`}</small>
        </div>
      </div>
    </div>
  );
}

export default ItemCartPreview;
