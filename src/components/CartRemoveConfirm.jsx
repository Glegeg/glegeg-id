import React from "react";

export default function CartRemoveConfirm(props) {
  return (
    <div
      className="absolute z-50 top-0 left-0 right-0 bottom-0 w-full h-screen flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="w-4/5 py-8 px-4 bg-white text-center rounded-xl">
        <h2 className="font-bold mb-8 text-lg">Hapus barang?</h2>
        <div
          className="bg-gray-300 py-3 my-4 rounded-xl cursor-pointer"
          onClick={props.setShowDeleteModal(false)}
        >
          Batalkan
        </div>
        <div
          className="bg-red-400 py-3 my-4 rounded-xl text-white cursor-pointer"
          onClick={() => {
            props.deleteCartItem(props.deleteIndex);
            props.setShowDeleteModal(false);
          }}
        >
          Hapus
        </div>
      </div>
    </div>
  );
}
