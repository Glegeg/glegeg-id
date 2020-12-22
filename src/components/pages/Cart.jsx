import React, { useEffect, useContext } from "react";
import { CartContext } from "../../CartContext";

import ItemCart from "../ItemCart";
import Total from "../Total";
import products from "../../products";
import { ReactComponent as History } from "../../assets/history.svg";

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

        <div className="history-btn p-2 rounded-lg">
          <History />
        </div>
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

      <Total total={totalPrice} />
    </div>
  );
}

export default Cart;
