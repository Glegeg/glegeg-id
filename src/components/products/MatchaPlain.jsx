import React from "react";

function MatchaPlain(props) {
  useEffect(() => {
    setNav(false);
  }, [setNav]);

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

        <ProductCheckout price={product.price} />
      </div>
    </div>
  );
}

export default MatchaPlain;
