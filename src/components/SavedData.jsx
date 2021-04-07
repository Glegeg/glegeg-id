import React from "react";

function SavedData(props) {
  return (
    <div className="">
      <div className="bg-white rounded-xl shadow-lg px-4 py-5">
        <h4 className="text-black font-semibold">{props.name}</h4>
        <small className="text-gray-500">{`${props.whatsapp} • ${
          (props.dom === 0 && "Surakarta") || (props.dom === 1 && "Karanganyar")
        }`}</small>

        <p className="text-black text-sm mt-3">{props.address}</p>
      </div>

      <div className="flex mt-6">
        <div
          className="py-2 mr-1.5 rounded-md flex-grow ring-gray-500 ring-2 text-sm text-center cursor-pointer"
          style={{ userSelect: "none" }}
          onClick={() => props.setShowForm(true)}
        >
          <p className="text-gray-500">Ganti Alamat</p>
        </div>
        <div
          className="py-2 ml-1.5 rounded-md flex-grow ring-red-600 ring-2 text-sm text-center cursor-pointer"
          style={{ userSelect: "none" }}
          onClick={props.deleteData}
        >
          <p className="text-red-600">Hapus</p>
        </div>
      </div>
    </div>
  );
}

export default SavedData;
