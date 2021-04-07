import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import ProductGallery from "../ProductGallery";
import Info from "../Info";
import ProductCheckout from "../ProductCheckout";

import productImg from "../../assets/choco-delfi.png";
import CartAddNotif from "../CartAddNotif";

function ChocoDelfi({ product, setNav, cartPush, preOrderStatus }) {
  useEffect(() => {
    setNav(false);
  }, [setNav]);

  const [showCartPreview, setShowCartPreview] = useState(false);

  function addToCart() {
    const item = {
      id: "g02",
      index: 2,
      amount: 1,
    };

    cartPush(item);
    setShowCartPreview(true);
    setTimeout(() => {
      setShowCartPreview(false);
    }, 3000);
  }

  const [redirect, setRedirect] = useState();

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <div className="relative">
      <ProductGallery
        productImg={productImg}
        productClassName="product-choco-delfi"
      />

      <div className="p-6 mb-24">
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

      <CartAddNotif
        index={2}
        showCartPreview={showCartPreview}
        setShowCartPreview={setShowCartPreview}
        setRedirect={setRedirect}
      />
    </div>
  );
}

export default ChocoDelfi;
