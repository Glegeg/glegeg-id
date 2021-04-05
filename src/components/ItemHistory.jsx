import React from "react";

function ItemHistory(props) {
  return (
    <div className="w-full flex mb-4">
      <div className="h-16 w-16 p-2 flex items-center justify-center rounded-xl item-img">
        <img src={props.img} alt="" className="png-shadow max-h-full" />
      </div>

      <div className="item-title text-left ml-4">
        <h3 className="font-bold text-lg text-black">{props.title}</h3>
        <small className="text-defocus">{`${props.amount} item`}</small>
      </div>
    </div>
  );
}

export default ItemHistory;
