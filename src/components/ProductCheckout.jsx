import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as CartAdd } from "../assets/cart-add.svg";

function ProductCheckout(props) {
  return (
    <div className="checkout-container py-3 flex items-center justify-between fixed bottom-4 left-6 right-6">
      <h4 className="text-black text-lg font-bold">Rp 15.000</h4>

      <div className="checkout-btn flex items-center px-4 py-3 rounded-xl shadow-lg">
        <CartAdd />
        <p className="ml-4 text-white font-semibold text-sm">+ Keranjang</p>
      </div>
    </div>
  );
}

ProductCheckout.propTypes = {};

export default ProductCheckout;
