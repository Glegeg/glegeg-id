import React from "react";

function ItemCart(props) {
  function thousandFormat(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <div className="w-full flex p-4 pr-6 mb-4 bg-white rounded-xl shadow-xl">
      <div className="h-20 w-20 p-3 flex items-center justify-center rounded-xl item-img">
        <img src={props.img} alt="" className="png-shadow max-h-full" />
      </div>

      <div className="item-title text-left ml-4 flex-grow">
        <h3 className="font-bold text-lg text-black">{props.title}</h3>

        <div className="counter-container flex justify-between mt-3">
          <small className="text-defocus">{`Rp ${thousandFormat(
            props.price
          )}`}</small>

          <div className="cart-counter flex">
            <div
              className="rounded-full bg-white ring-2 ring-red-500 h-6 w-6 shadow-lg text-center font-bold cursor-pointer"
              style={{ userSelect: "none" }}
              onClick={() => props.subtractAmount(props.index)}
            >
              -
            </div>
            <p className="text-sm font-bold mx-4">{props.amount}</p>
            <div
              className="rounded-full bg-white ring-2 ring-green-400 h-6 w-6 shadow-lg text-center font-bold cursor-pointer"
              style={{ userSelect: "none" }}
              onClick={() => props.addAmount(props.index)}
            >
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCart;
