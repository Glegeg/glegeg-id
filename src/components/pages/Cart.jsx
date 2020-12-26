import React, { useEffect, useContext } from "react";
import { CartContext } from "../../CartContext";

import ItemCart from "../ItemCart";
import Total from "../Total";
import products from "../../products";
import { ReactComponent as EmptyCart } from "../../assets/cart-empty.svg";
import { ReactComponent as History } from "../../assets/history.svg";
import { Link } from "react-router-dom";

function Cart(props) {
  useEffect(() => {
    props.setNav(true);
  }, [props]);

  const cart = useContext(CartContext);

  let totalPrice = 0;

  cart.items.forEach((item) => {
    totalPrice += item.amount * products[item.index].price;
  });

  return (
    <div className="p-6">
      <div className="page-title flex justify-between items-center mt-4 mb-8">
        <h2 className="text-heading font-bold text-2xl">Keranjang</h2>

        <Link to="/history">
          <div className="history-btn p-2 rounded-lg">
            <History />
          </div>
        </Link>
      </div>

      {cart.items.map((item, idx) => (
        <ItemCart
          img={products[item.index].img}
          title={products[item.index].name}
          price={products[item.index].price}
          key={idx}
          amount={item.amount}
          index={idx}
          addAmount={props.addAmount}
          subtractAmount={props.subtractAmount}
        />
      ))}

      {cart.items.length === 0 ? (
        <div className="text-center mt-16">
          <EmptyCart className="inline" />
          <h4 className="mb-4 mt-6 font-semibold text-xl">
            Keranjang masih kosong!
          </h4>
          <Link to="/">
            <p className="text-defocus underline">Explore gleGleg</p>
          </Link>
        </div>
      ) : (
        <Total mode="cart" total={totalPrice} />
      )}
    </div>
  );
}

export default Cart;
