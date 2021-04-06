import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import ProductGallery from "../ProductGallery";
import Info from "../Info";
import ProductCheckout from "../ProductCheckout";

import productImg from "../../assets/red-velvet.png";

function RedVelvet(props) {
  useEffect(() => {
    props.setNav(false);
  }, [props.setNav]);

  function addToCart() {
    const item = {
      id: "g00",
      index: 0,
      amount: 1,
    };

    props.cartPush(item);
    setRedirect("/cart");
  }

  const [redirect, setRedirect] = useState();

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <div>
      <ProductGallery
        productImg={productImg}
        productClassName="product-red-velvet"
      />

      <div className="p-6">
        <h2 className="text-heading text-2xl font-bold">
          {props.product.name}
        </h2>
        {props.product.desc.map((item, idx) => (
          <p key={idx} className="text-gray-600 text-sm mt-4">
            {item}
          </p>
        ))}

        <Info preorder={props.preOrderStatus.periodePreOrder} />

        <ProductCheckout
          isActive={props.preOrderStatus.preOrderAktif}
          price={props.product.price}
          addToCart={addToCart}
        />
      </div>
    </div>
  );
}

export default RedVelvet;
