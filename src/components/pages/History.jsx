import React, { useEffect } from "react";
import { ReactComponent as Back } from "../../assets/back.svg";
import { useHistory } from "react-router-dom";

import products from "../../products";
import ItemHistory from "../ItemHistory";
import TotalHistory from "../TotalHistory";
import { ReactComponent as HistoryEmpty } from "../../assets/history-empty.svg";

function History(props) {
  useEffect(() => {
    props.setNav(false);
  }, [props]);

  let history = useHistory();

  const purchaseHistory = JSON.parse(localStorage.getItem("history"));

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
            <small className="text-defocus">22 Desember 2020 • 17:54</small>

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
                amount={2}
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

            <TotalHistory transactionNum="F6BU8E" total={60000} />
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
