import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ProductGallery from "../ProductGallery";
import Info from "../Info";
import ProductCheckout from "../ProductCheckout";

function Product(props) {
  useEffect(() => {
    props.setNav(false);
  }, [props]);

  return (
    <div>
      <ProductGallery />

      <div className="p-6">
        <h2 className="text-heading text-2xl font-bold">Original Red Velvet</h2>
        <p className="text-gray-600 text-sm mt-4">
          Lagi pusing nugas, skripsi, atau nungguin kepastian dari dia? Tenang,
          cobain nih Matcha Plain yang siap nemenin kamu berpusing pusing ria
        </p>
        <p className="text-gray-600 text-sm mt-4">So? don't miss it!!!</p>

        <Info />

        <ProductCheckout />
      </div>
    </div>
  );
}

Product.propTypes = {};

export default Product;
