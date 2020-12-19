import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import { ReactComponent as Back } from "../../assets/back.svg";
import product from "../../assets/product.png";
import ItemOrder from "../ItemOrder";
import Total from "../Total";

function Order(props) {
  useEffect(() => {
    props.setNav(false);
  }, []);

  let history = useHistory();

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

      <form action="">
        <label htmlFor="name" className="block text-defocus text-sm mt-4 mb-2">
          Nama
        </label>
        <input
          type="text"
          className="block w-full rounded-xl px-3 py-2 shadow-lg focus:ring-2 focus:ring-gray-500"
        />

        <label htmlFor="addr" className="block text-defocus text-sm mt-4 mb-2">
          Alamat
        </label>
        <textarea
          name="address"
          id="addr"
          rows="3"
          className="w-full rounded-xl px-3 py-2 shadow-lg"
        ></textarea>

        <label htmlFor="phone" className="block text-defocus text-sm mt-4 mb-2">
          Nomor Whatsapp
        </label>
        <input
          type="tel"
          className="block w-full rounded-xl px-3 py-2 shadow-lg"
        />

        <div className="flex items-center mt-6">
          <input
            type="checkbox"
            name="save"
            id="save"
            className="w-4 h-4 rounded-xl"
          />
          <label htmlFor="save" className="block ml-4">
            Simpan data diri
          </label>
        </div>
      </form>

      <div className="section-divider flex items-center mt-10 mb-6">
        <small className="text-defocus">Pesanan</small>
        <div
          className="flex-grow ml-4 rounded-sm"
          style={{ height: 2, backgroundColor: "#646464" }}
        ></div>
      </div>

      <ItemOrder
        img={product}
        title="Original Red Velvet"
        sum={2}
        price="Rp 30.000"
      />

      <Total />
    </div>
  );
}

Order.propTypes = {};

export default Order;
