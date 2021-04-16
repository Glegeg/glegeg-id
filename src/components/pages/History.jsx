import React, { useEffect } from "react";
import { ReactComponent as Back } from "../../assets/back.svg";
import { useHistory } from "react-router-dom";

import products from "../../settings/products";
import ItemHistory from "../ItemHistory";
import TotalHistory from "../TotalHistory";
import { ReactComponent as HistoryEmpty } from "../../assets/history-empty.svg";

function History({ setNav, ...props }) {
  useEffect(() => {
    setNav(false);
  }, [setNav]);

  let history = useHistory();

  const purchaseHistory = JSON.parse(localStorage.getItem("history"));

  const historyDate = purchaseHistory?.map((date) => new Date(date.time));

  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  return (
    <div className="p-6 pb-16">
      <div className="page-nav flex items-center">
        <Back
          style={{ fill: "#6C553D", cursor: "pointer" }}
          onClick={() => history.goBack()}
        />
        <h3 className="text-heading ml-6 font-bold">Riwayat</h3>
      </div>

      {purchaseHistory ? (
        purchaseHistory.map((historyItem, itemIndex) => (
          <div
            className="bg-white rounded-xl shadow-xl py-5 px-4 mt-8"
            key={`${itemIndex}-hst`}
          >
            <h4 className="font-bold">Pre-order</h4>
            <small className="text-defocus">{`${historyDate[
              itemIndex
            ].getDate()} ${
              months[historyDate[itemIndex].getMonth()]
            } ${historyDate[itemIndex].getFullYear()} • ${historyDate[
              itemIndex
            ].getHours()}:${
              historyDate[itemIndex].getMinutes() < 10
                ? "0" + historyDate[itemIndex].getMinutes()
                : historyDate[itemIndex].getMinutes()
            }`}</small>

            <hr
              style={{
                backgroundColor: "e9e9e9",
                marginTop: "0.75rem",
                marginBottom: "1rem",
              }}
            />

            {historyItem.items.map((item, idx) => (
              <ItemHistory
                img={products[item.index].img}
                title={products[item.index].name}
                amount={item.amount}
                key={`${idx}-item`}
              />
            ))}

            <hr
              style={{
                backgroundColor: "e9e9e9",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            />

            <TotalHistory
              transactionNum={historyItem.transactionNum}
              total={historyItem.total}
            />
          </div>
        ))
      ) : (
        <div className="text-center mt-12 pb-16">
          <HistoryEmpty className="inline" />
          <h4 className="mb-4 mt-4 font-semibold text-xl">Belum ada riwayat</h4>
        </div>
      )}
    </div>
  );
}

export default History;
