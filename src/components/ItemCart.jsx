import React, { useState } from "react";

function ItemCart(props) {
  const [count, setCount] = useState(1);

  const addCount = () => {
    setCount(count + 1);
  };

  const removeCount = () => {
    if (count === 1) {
      console.log("apakah yakin?");
    } else {
      setCount(count - 1);
    }
  };

  function thousandFormat(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

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
          <small className="text-defocus">{`Rp ${thousandFormat(
            props.price
          )}`}</small>

          <div className="cart-counter flex">
            <div
              className="rounded-full bg-white h-6 w-6 shadow-lg text-center font-bold cursor-pointer"
              style={{ userSelect: "none" }}
              onClick={removeCount}
            >
              -
            </div>
            <p className="text-sm font-bold mx-4">{count}</p>
            <div
              className="rounded-full bg-white h-6 w-6 shadow-lg text-center font-bold cursor-pointer"
              style={{ userSelect: "none" }}
              onClick={addCount}
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
