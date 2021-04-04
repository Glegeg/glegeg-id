import React, { useEffect, useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { CartContext } from "../../CartContext";

import { ReactComponent as Back } from "../../assets/back.svg";
import { ReactComponent as EmptyCart } from "../../assets/cart-empty.svg";
import ItemOrder from "../ItemOrder";
import Total from "../Total";
import products from "../../products";
import SavedData from "../SavedData";

const randomstring = require("randomstring");

function Order(props) {
  useEffect(() => {
    props.setNav(false);

    const localData = localStorage.getItem("form");
    if (localData) {
      console.log(JSON.parse(localData));
      setForm(JSON.parse(localData));
      setShowForm(false);
    } else {
      setShowForm(true);
    }
  }, [props]);

  const cart = useContext(CartContext);

  let totalPrice = 0;

  cart.items.forEach((item) => {
    totalPrice += item.amount * products[item.index].price;
  });

  let history = useHistory();

  const [form, setForm] = useState({
    name: "",
    address: "",
    whatsapp: "",
    dom: "",
    saveData: true,
  });

  const [showForm, setShowForm] = useState();

  function onFormChange(item, value) {
    let formCopy = { ...form };
    formCopy[item] = value;

    setForm(formCopy);
  }

  function savePersonalData() {
    if (form.saveData) {
      localStorage.setItem("form", JSON.stringify(form));
    }
  }

  function saveHistory(transactionNum) {
    let history = JSON.parse(localStorage.getItem("history"));

    let historySum = 0;
    cart.items.forEach((historyItem) => {
      historySum += products[historyItem.index].price * historyItem.amount;
    });

    let historyPush = cart;
    historyPush["time"] = new Date();
    historyPush["total"] = historySum;
    historyPush["transactionNum"] = transactionNum;

    console.log(historyPush);

    if (history) {
      history.unshift(historyPush);
    } else {
      history = [historyPush];
    }

    console.log(history);
    localStorage.setItem("history", JSON.stringify(history));
  }

  function submitHandler() {
    const transactionNum = randomstring.generate(7).toUpperCase();

    savePersonalData();
    saveHistory(transactionNum);
    props.setCart({ items: [] });

    if (
      form.name === "" ||
      form.address === "" ||
      form.whatsapp === "" ||
      form.dom === ""
    ) {
      // TODO: Bikin warning kalo ada yang kosong (toastify?)
      console.log("Aaaaa");
      return;
    }

    const orderMessage = `*Pre-order Glegleg*\nNo. pesanan: ${transactionNum}\n\nPesanan:${cart.items.map(
      (item) => `\n*- ${products[item.index].name} (${item.amount}x)*`
    )}\n\n*Nama:* ${form.name}\n*Alamat:* ${form.address}\n*No. Wa:* ${
      form.whatsapp
    }\n*Domisili:* ${form.dom === 0 ? "Surakarta" : "Karanganyar"}`;
    console.log(orderMessage.replace(/ /g, "%20").replace(/\n/g, "%0a"));

    return (window.location = `https://api.whatsapp.com/send?phone=${
      form.dom === 0 ? "6285869362633" : "6281233637974"
    }&text=${orderMessage.replace(/ /g, "%20").replace(/\n/g, "%0a")}`);
  }

  function deleteData() {
    localStorage.removeItem("form");
    setForm({
      name: "",
      address: "",
      whatsapp: "",
      dom: "",
      saveData: true,
    });
    setShowForm(true);
  }

  return (
    <div className="p-6">
      <div className="page-nav flex items-center">
        <Back
          style={{ fill: "#6C553D", cursor: "pointer" }}
          onClick={() => history.goBack()}
        />
        <h3 className="text-heading ml-6 font-bold">Pemesanan</h3>
      </div>

      <div className="section-divider flex items-center mt-8 mb-6">
        <small className="text-defocus">Data diri</small>
        <div
          className="flex-grow ml-4 rounded-sm"
          style={{ height: 2, backgroundColor: "#646464" }}
        ></div>
      </div>

      {showForm ? (
        <form action="">
          <label htmlFor="name" className="block text-black text-sm mt-4 mb-2">
            Nama
          </label>
          <input
            value={form.name}
            onChange={(e) => onFormChange("name", e.target.value)}
            type="text"
            className="block w-full rounded-xl px-3 py-2 shadow-lg focus:ring-2 focus:ring-gray-500"
          />

          <label htmlFor="addr" className="block text-black text-sm mt-4 mb-2">
            Alamat
          </label>
          <textarea
            value={form.address}
            onChange={(e) => onFormChange("address", e.target.value)}
            name="address"
            id="addr"
            rows="3"
            className="w-full rounded-xl px-3 py-2 shadow-lg focus:ring-2 focus:ring-gray-500"
          ></textarea>

          <label htmlFor="phone" className="block text-black text-sm mt-4 mb-2">
            Nomor Whatsapp
          </label>
          <input
            value={form.whatsapp}
            onChange={(e) => onFormChange("whatsapp", e.target.value)}
            type="tel"
            className="block w-full rounded-xl px-3 py-2 shadow-lg focus:ring-2 focus:ring-gray-500"
          />

          <label
            htmlFor="phone"
            className="block text-black text-sm mt-4 mb-2 mx-auto"
          >
            Domisili
          </label>
          <div className="flex gap-4">
            <div
              className={`flex-1 text-center font-semibold bg-white rounded-xl shadow-lg py-8 px-4 cursor-pointer ${
                form.dom === 0
                  ? "ring-2 ring-gray-500 text-heading"
                  : "text-gray-400"
              }`}
              onClick={() => onFormChange("dom", 0)}
              style={{ userSelect: "none" }}
            >
              Surakarta
            </div>

            <div
              className={`flex-1 text-center font-semibold bg-white rounded-xl shadow-lg py-8 px-4 cursor-pointer ${
                form.dom === 1
                  ? "ring-2 ring-gray-500 text-heading"
                  : "text-gray-400"
              }`}
              onClick={() => onFormChange("dom", 1)}
              style={{ userSelect: "none" }}
            >
              Karanganyar
            </div>
          </div>

          <div className="flex items-center mt-6">
            <input
              checked={form.saveData}
              onChange={(e) => onFormChange("saveData", !form.saveData)}
              type="checkbox"
              name="save"
              id="save"
              className="w-4 h-4 rounded-xl bg-white"
            />
            <label htmlFor="save" className="block ml-4">
              Simpan data diri
            </label>
          </div>
        </form>
      ) : (
        <SavedData
          name={form.name}
          whatsapp={form.whatsapp}
          dom={form.dom}
          address={form.address}
          setShowForm={setShowForm}
          deleteData={deleteData}
        />
      )}

      <div className="section-divider flex items-center mt-10 mb-6">
        <small className="text-defocus">Pesanan</small>
        <div
          className="flex-grow ml-4 rounded-sm"
          style={{ height: 2, backgroundColor: "#646464" }}
        ></div>
      </div>

      {cart.items.map((item, idx) => (
        <ItemOrder
          key={idx}
          img={products[item.index].img}
          title={products[item.index].name}
          sum={item.amount}
          price={products[item.index].price}
        />
      ))}

      {cart.items.length === 0 ? (
        <div className="text-center mt-12 pb-16">
          <EmptyCart className="inline" />
          <h4 className="mb-4 mt-4 font-semibold text-xl">
            Keranjang masih kosong!
          </h4>
          <Link to="/">
            <p className="text-defocus underline">Explore gleGleg</p>
          </Link>
        </div>
      ) : (
        <Total mode="order" total={totalPrice} submitHandler={submitHandler} />
      )}
    </div>
  );
}

export default Order;
