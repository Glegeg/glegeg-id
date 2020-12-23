import React from "react";

function TotalHistory(props) {
  function thousandFormat(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <div className="flex justify-between">
      <div className="">
        <small className="text-defocus">No. Transaksi</small>
        <p className="text-black font-semibold">{props.transactionNum}</p>
      </div>

      <div className="text-right">
        <small className="text-defocus">Total:</small>
        <p className="text-black font-semibold">{`Rp ${thousandFormat(
          props.total
        )}`}</p>
      </div>
    </div>
  );
}

export default TotalHistory;
