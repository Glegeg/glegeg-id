import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import ProductGallery from "../ProductGallery";
import Info from "../Info";
import ProductCheckout from "../ProductCheckout";

import productImg from "../../assets/choco-delfi.png";

function ChocoDelfi({ product, setNav, cartPush, preOrderStatus }) {
  useEffect(() => {
    setNav(false);
  }, [setNav]);

  function addToCart() {
    const item = {
      id: "g02",
      index: 2,
      amount: 1,
    };

    cartPush(item);
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
        productClassName="product-choco-delfi"
      />

      <div className="p-6">
        <h2 className="text-heading text-2xl font-bold">{product.name}</h2>
        {product.desc.map((item, idx) => (
          <p key={idx} className="text-gray-600 text-sm mt-4">
            {item}
          </p>
        ))}

        <Info preorder={preOrderStatus.periodePreOrder} />

        <ProductCheckout
          isActive={preOrderStatus.preOrderAktif}
          price={product.price}
          addToCart={addToCart}
        />
      </div>
    </div>
  );
}

export default ChocoDelfi;
