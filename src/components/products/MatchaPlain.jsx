import React, { useEffect } from "react";
import ProductGallery from "../ProductGallery";
import Info from "../Info";
import ProductCheckout from "../ProductCheckout";

function MatchaPlain({ product, setNav, cartPush }) {
  useEffect(() => {
    setNav(false);
  }, [setNav]);

  function addToCart() {
    const item = {
      id: "g01",
      index: 1,
      amount: 1,
    };

    cartPush(item);
  }

  return (
    <div>
      <ProductGallery />

      <div className="p-6">
        <h2 className="text-heading text-2xl font-bold">{product.name}</h2>
        {product.desc.map((item, idx) => (
          <p key={idx} className="text-gray-600 text-sm mt-4">
            {item}
          </p>
        ))}

        <Info preorder="15 - 32 Desember 2020" />

        <ProductCheckout price={product.price} addToCart={addToCart} />
      </div>
    </div>
  );
}

export default MatchaPlain;
