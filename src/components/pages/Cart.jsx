import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ItemCart from "../ItemCart";
import product from "../../assets/product.png";
import Total from "../Total";
import { ReactComponent as History } from "../../assets/history.svg";

function Cart(props) {
  useEffect(() => {
    props.setNav(true);
  }, [props]);

  return (
    <div className="p-6">
      <div className="page-title flex justify-between items-center mt-4 mb-8">
        <h2 className="text-heading font-bold text-2xl">Keranjang</h2>

        <div className="history-btn p-2 rounded-lg">
          <History />
        </div>
      </div>

      <ItemCart img={product} title="Original Red Velvet" price={"Rp 15.000"} />
      <ItemCart img={product} title="Matcha Latte" price={"Rp 18.000"} />

      <Total />
    </div>
  );
}

Cart.propTypes = {};

export default Cart;
