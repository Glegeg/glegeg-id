import React from "react";
import ItemCartPreview from "./ItemCartPreview";

function CartAddNotif(props) {
  return (
    <div
      className={`cart-preview-bg fixed bottom-0 left-0 right-0 top-0 ${
        props.showCartPreview ? "block" : "hidden"
      }`}
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div
        className={`cart-preview fixed w-full bg-white rounded-tl-xl rounded-tr-xl shadow-xl p-6 transition ${
          props.showCartPreview ? "bottom-0" : "bottom-64"
        }}`}
        style={{ left: "50%", transform: "translateX(-50%)" }}
      >
        <h2 className="text-heading font-bold text-lg">
          Berhasil ditambahkan!
        </h2>
        <ItemCartPreview index={props.index} />

        <div className="mt-6">
          <div
            className="py-2 rounded-md flex-grow ring-green-400 ring-2 text-sm text-center cursor-pointer"
            style={{ userSelect: "none" }}
            onClick={() => props.setRedirect("/cart")}
          >
            <p className="text-gray-500">Lihat keranjang</p>
          </div>
        </div>
      </div>
    </div>
  );
}

CartAddNotif.propTypes = {};

export default CartAddNotif;
